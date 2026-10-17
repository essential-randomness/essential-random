export class TimeEvent extends Event {
  static readonly type = "recording:time";
  readonly time: number;
  constructor(time: number) {
    super(TimeEvent.type);
    this.time = time;
  }
}

export class SeekEvent extends Event {
  static readonly type = "recording:seek";
  readonly time: number;
  constructor(time: number) {
    super(SeekEvent.type);
    this.time = time;
  }
}

export class ChapterEvent extends Event {
  static readonly type = "recording:chapter";
  readonly index: number;
  constructor(index: number) {
    super(ChapterEvent.type);
    this.index = index;
  }
}

export class ReadingModeEvent extends Event {
  static readonly type = "recording:reading-mode";
  readonly enabled: boolean;
  constructor(enabled: boolean) {
    super(ReadingModeEvent.type);
    this.enabled = enabled;
  }
}

export abstract class RecordingElement extends HTMLElement {
  #connection = new AbortController();

  connectedCallback() {
    this.#connection = new AbortController();
    this.connect(this.#connection.signal);
  }

  disconnectedCallback() {
    this.#connection.abort();
  }

  protected abstract connect(signal: AbortSignal): void;

  protected send(event: Event) {
    this.closest("stream-recording")?.dispatchEvent(event);
  }

  protected listen<Received extends Event>({
    event: EventType,
    handler,
  }: {
    event: { type: string; new (...args: never[]): Received };
    handler: (event: Received) => void;
  }) {
    this.closest("stream-recording")?.addEventListener(
      EventType.type,
      (event) => {
        if (event instanceof EventType) {
          handler(event);
        }
      },
      { signal: this.#connection.signal },
    );
  }
}
