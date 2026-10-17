import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineCollection, z } from "astro:content";
import {
  layoutTranscript,
  TranscriptLayoutSchema,
  TranscriptSchema,
} from "./layout.ts";

const RECORDINGS_DIR = "src/content/stream-recordings/";

const RecordingIndexSchema = z.object({
  title: z.string(),
  vodAtUri: z.string(),
});

const toSourceUrl = (vodAtUri: string) => {
  const match = vodAtUri.match(
    /^at:\/\/([^/]+)\/place\.stream\.video\/([^/]+)$/,
  );
  if (!match) {
    throw new Error(`Not a Streamplace video at-uri: ${vodAtUri}`);
  }
  return `https://stream.place/${match[1]}/video/${match[2]}`;
};

export const streamRecordings = defineCollection({
  loader: {
    name: "stream-recordings",
    load: async ({ store, parseData, config, watcher, logger }) => {
      const root = fileURLToPath(config.root);
      const recordingsDir = new URL(RECORDINGS_DIR, config.root);

      const loadRecording = async (id: string) => {
        const folder = new URL(`${id}/`, recordingsDir);
        const readText = (file: string) =>
          readFile(new URL(file, folder), "utf8");

        const recording = RecordingIndexSchema.parse(
          JSON.parse(await readText("index.json")),
        );
        const transcript = TranscriptSchema.parse(
          JSON.parse(await readText("transcript.json")),
        );
        const chapters = existsSync(new URL("chapters.vtt", folder))
          ? await readText("chapters.vtt")
          : undefined;

        return parseData({
          id,
          data: {
            ...recording,
            sourceUrl: toSourceUrl(recording.vodAtUri),
            ...layoutTranscript({ transcript, chaptersVtt: chapters }),
          },
        });
      };

      const sync = async () => {
        const folders = (await readdir(recordingsDir, { withFileTypes: true }))
          .filter((item) => item.isDirectory())
          .map((item) => item.name);
        const entries = [];
        for (const id of folders) {
          try {
            entries.push({ id, data: await loadRecording(id) });
          } catch (error) {
            throw new Error(`Stream recording "${id}": ${String(error)}`, {
              cause: error,
            });
          }
        }
        store.clear();
        for (const entry of entries) {
          store.set(entry);
        }
      };

      await sync();

      if (watcher) {
        let previousSync = Promise.resolve();
        const resync = async (previous: Promise<void>) => {
          await previous;
          try {
            await sync();
          } catch (error) {
            logger.error(String(error));
          }
        };
        watcher.add(`${root}${RECORDINGS_DIR}`);
        watcher.on("all", (_event, changed) => {
          if (changed.startsWith(`${root}${RECORDINGS_DIR}`)) {
            previousSync = resync(previousSync);
          }
        });
      }
    },
  },
  schema: TranscriptLayoutSchema.extend({
    title: z.string(),
    vodAtUri: z.string(),
    sourceUrl: z.string().url(),
  }),
});
