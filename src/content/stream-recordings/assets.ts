// Unfortunately we cannot export assets to public/ automatically through the
// collection: the loader runs outside the build, so Vite never emits files it
// imports—at least until I release a plugin for it. So we put these here to
// import separately at runtime.
const folderFiles = import.meta.glob<string>(
  "./*/{chapters.vtt,captions.en.vtt,poster.jpg,screenshots/*.webp}",
  // no-inline avoids Vite inlining the files, which lets us use the URLs in the browser
  // instead of the file contents.
  { query: "?url&no-inline", import: "default", eager: true },
);

export const recordingAssets = (id: string) => ({
  chaptersSrc: folderFiles[`./${id}/chapters.vtt`],
  captionsSrc: folderFiles[`./${id}/captions.en.vtt`],
  posterSrc: folderFiles[`./${id}/poster.jpg`],
  // A screenshot's file name is the second of the video it was taken at.
  screenshots: Object.entries(folderFiles)
    .flatMap(([file, src]) => {
      const match = file.match(/\/screenshots\/(\d+)\.webp$/);
      return file.startsWith(`./${id}/`) && match
        ? [{ time: Number(match[1]), src }]
        : [];
    })
    .toSorted((left, right) => left.time - right.time),
});
