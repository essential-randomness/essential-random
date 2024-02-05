export const filterStreamsByTime =
  ({ after, before }: { after: Date; before: Date }) =>
  (stream: { data: { scheduled_at: Date } }) =>
    stream.data.scheduled_at > after && stream.data.scheduled_at < before;

export const findNextStream = (
  streams: Array<
    { data: { scheduled_at: Date | number } } | { scheduled_at: Date | number }
  >
) => {
  let nextStream = null;
  for (let stream of streams) {
    const streamDate = new Date(
      "data" in stream ? stream.data.scheduled_at : stream.scheduled_at
    );
    if (
      streamDate > new Date(Date.now()) &&
      (nextStream === null ||
        new Date(
          "data" in nextStream
            ? nextStream.data.scheduled_at
            : nextStream.scheduled_at
        ) > streamDate)
    ) {
      nextStream = stream;
    }
  }
  return nextStream;
};
