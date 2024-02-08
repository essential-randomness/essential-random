const HOUR_MS = 60 * 60 * 1000;

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
    console.log(stream);
    console.log(isCurrentStream(stream));
    if (
      isCurrentStream(stream) ||
      (streamDate > new Date(Date.now()) &&
        (nextStream === null ||
          new Date(
            "data" in nextStream
              ? nextStream.data.scheduled_at
              : nextStream.scheduled_at
          ) > streamDate))
    ) {
      nextStream = stream;
    }
  }
  return nextStream;
};

export const isCurrentStream = (
  stream:
    | { data: { scheduled_at: Date | number } }
    | { scheduled_at: Date | number }
) => {
  const streamDate = new Date(
    "data" in stream ? stream.data.scheduled_at : stream.scheduled_at
  );
  console.log(new Date(Date.now() + 3 * HOUR_MS));
  return (
    new Date(Date.now()) > streamDate &&
    new Date(Date.now()) < new Date(streamDate.getTime() + 3 * HOUR_MS)
  );
};
