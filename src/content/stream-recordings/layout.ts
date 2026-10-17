import { z } from "astro/zod";

const WordSchema = z.object({
  start: z.number(),
  end: z.number(),
  text: z.string(),
  code: z.boolean().optional(),
});

export const TranscriptSchema = z.object({
  words: z.array(WordSchema),
  paragraphs: z.array(z.object({ start: z.number(), end: z.number() })),
});

const ChapterSchema = z.object({ start: z.number(), title: z.string() });

const ParagraphSchema = z.object({
  start: z.number(),
  end: z.number(),
  sentences: z.array(
    z.object({ index: z.number(), words: z.array(WordSchema) }),
  ),
});

export const TranscriptLayoutSchema = z.object({
  chapters: z.array(ChapterSchema),
  groups: z.array(
    z.object({
      title: z.string().optional(),
      paragraphs: z.array(ParagraphSchema),
    }),
  ),
});

export type Transcript = z.infer<typeof TranscriptSchema>;
export type Chapter = z.infer<typeof ChapterSchema>;
type LayoutParagraph = z.infer<typeof ParagraphSchema>;
export type TranscriptLayout = z.infer<typeof TranscriptLayoutSchema>;

const parseVttTime = (value: string) =>
  value
    .split(":")
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);

export const parseChapters = (vtt: string): Chapter[] => {
  const chapters = vtt.split(/\r?\n\r?\n/).flatMap((block) => {
    const lines = block.split(/\r?\n/);
    const timing = lines.findIndex((line) => line.includes("-->"));
    if (timing === -1) {
      return [];
    }
    return [
      {
        start: parseVttTime(lines[timing].split("-->")[0].trim()),
        title: lines
          .slice(timing + 1)
          .join(" ")
          .trim(),
      },
    ];
  });

  chapters.forEach((chapter, index) => {
    if (!Number.isFinite(chapter.start)) {
      throw new Error(
        `Chapter "${chapter.title}" has an unreadable start time.`,
      );
    }
    const previous = chapters[index - 1];
    if (previous && chapter.start <= previous.start) {
      throw new Error(
        `Chapter "${chapter.title}" at ${chapter.start}s does not start after "${previous.title}" at ${previous.start}s.`,
      );
    }
  });
  return chapters;
};

const SENTENCE_END = /[.?!]["')\]]*$/;

const splitRuns = <Item>({
  items,
  startsRun,
}: {
  items: Item[];
  startsRun: (pair: { item: Item; previous: Item }) => boolean;
}) => {
  const runs: Item[][] = [];
  items.forEach((item, index) => {
    const run = runs.at(-1);
    if (run && !startsRun({ item, previous: items[index - 1] })) {
      run.push(item);
    } else {
      runs.push([item]);
    }
  });
  return runs;
};

const groupByChapter = ({
  paragraphs,
  chapters,
}: {
  paragraphs: LayoutParagraph[];
  chapters: Chapter[];
}): TranscriptLayout["groups"] => {
  const titleAt = new Map<LayoutParagraph, string>();
  for (const chapter of chapters) {
    const paragraph = paragraphs.find(
      ({ start, sentences }) =>
        sentences.length > 0 && Math.abs(start - chapter.start) < 0.01,
    );
    if (!paragraph) {
      throw new Error(
        `Chapter "${chapter.title}" at ${chapter.start}s does not start on a transcript paragraph.`,
      );
    }
    const existing = titleAt.get(paragraph);
    if (existing !== undefined) {
      throw new Error(
        `Chapters "${existing}" and "${chapter.title}" start on the same transcript paragraph.`,
      );
    }
    titleAt.set(paragraph, chapter.title);
  }

  return splitRuns({
    items: paragraphs.filter(({ sentences }) => sentences.length > 0),
    startsRun: ({ item }) => titleAt.has(item),
  }).map((run) => ({ title: titleAt.get(run[0]), paragraphs: run }));
};

export const layoutTranscript = ({
  transcript,
  chaptersVtt,
}: {
  transcript: Transcript;
  chaptersVtt?: string;
}): TranscriptLayout => {
  const paragraphs: LayoutParagraph[] = transcript.paragraphs.map(
    ({ start, end }) => ({ start, end, sentences: [] }),
  );

  const firstStart = paragraphs.at(0)?.start ?? Infinity;
  const lastEnd = paragraphs.at(-1)?.end ?? -Infinity;
  const unassignedWords = transcript.words.filter(
    (word) => word.start < firstStart || word.start > lastEnd,
  );
  if (unassignedWords.length > 0) {
    throw new Error(
      `Stream transcript contains ${unassignedWords.length} word(s) outside paragraph ranges.`,
    );
  }

  const placedWords = transcript.words
    .toSorted((left, right) => left.start - right.start)
    .map((word) => ({
      word,
      paragraph: paragraphs.findLastIndex(({ start }) => start <= word.start),
    }));

  const sentences = splitRuns({
    items: placedWords,
    startsRun: ({ previous }) => SENTENCE_END.test(previous.word.text),
  });
  sentences.forEach((sentence, index) => {
    const runs = splitRuns({
      items: sentence,
      startsRun: ({ item, previous }) => item.paragraph !== previous.paragraph,
    });
    for (const run of runs) {
      paragraphs[run[0].paragraph].sentences.push({
        index,
        words: run.map(({ word }) => word),
      });
    }
  });

  const chapters = parseChapters(chaptersVtt ?? "");
  return { chapters, groups: groupByChapter({ paragraphs, chapters }) };
};
