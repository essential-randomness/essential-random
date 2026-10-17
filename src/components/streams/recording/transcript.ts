const FOLLOW_ANCHOR = 0.3;
const SCROLL_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
];

interface TimedWord {
  start: number;
  end: number;
  sentence: number;
}

export const wordAt = ({
  words,
  time,
}: {
  words: TimedWord[];
  time: number;
}) => {
  let low = 0;
  let high = words.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const { start, end } = words[middle];
    if (time < start) {
      high = middle - 1;
    } else if (time >= end) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return null;
};

export class Transcript {
  #section: HTMLElement;
  #scroller: HTMLElement;
  #resumeButton: HTMLButtonElement;

  #words: HTMLElement[];
  #timedWords: TimedWord[];
  #sentenceParts: Map<number, HTMLElement[]>;
  #activeWord: HTMLElement | null = null;
  #currentSentence: number | undefined;
  #lastSpokenWord: HTMLElement | null = null;

  #following = true;
  #readingMode = false;
  #seeking = false;

  constructor({
    section,
    scroller,
    resumeButton,
    signal,
  }: {
    section: HTMLElement;
    scroller: HTMLElement;
    resumeButton: HTMLButtonElement;
    signal: AbortSignal;
  }) {
    this.#section = section;
    this.#scroller = scroller;
    this.#resumeButton = resumeButton;

    this.#words = Array.from(
      scroller.querySelectorAll<HTMLElement>(".transcript-word"),
    );
    this.#timedWords = this.#words.map((word) => ({
      start: Number(word.dataset.wordStart),
      end: Number(word.dataset.wordEnd),
      sentence: Number(
        word.closest<HTMLElement>(".transcript-sentence")?.dataset.sentence,
      ),
    }));
    this.#sentenceParts = Map.groupBy(
      scroller.querySelectorAll<HTMLElement>(".transcript-sentence"),
      (part) => Number(part.dataset.sentence),
    );

    const stopFollowingOn = (event: Event) => {
      if (
        this.#readingMode ||
        (event.target instanceof Node && scroller.contains(event.target))
      ) {
        this.#stopFollowing();
      }
    };
    window.addEventListener("wheel", stopFollowingOn, {
      passive: true,
      signal,
    });
    window.addEventListener("touchmove", stopFollowingOn, {
      passive: true,
      signal,
    });
    scroller.addEventListener(
      "pointerdown",
      (event) => {
        if (event.target === scroller) {
          this.#stopFollowing();
        }
      },
      { signal },
    );
    window.addEventListener(
      "keydown",
      (event) => {
        const pageTarget =
          event.target === document.body ||
          event.target === document.documentElement;
        if (event.target !== scroller && !(this.#readingMode && pageTarget)) {
          return;
        }
        if (SCROLL_KEYS.includes(event.key)) {
          this.#stopFollowing();
        }
      },
      { signal },
    );

    window.addEventListener(
      "scroll",
      () => {
        if (this.#readingMode) {
          this.#updateResumeButton();
        }
      },
      { passive: true, signal },
    );
    scroller.addEventListener("scroll", () => this.#updateResumeButton(), {
      passive: true,
      signal,
    });
    resumeButton.addEventListener("click", () => this.#setFollowing(true), {
      signal,
    });
  }

  showTime(time: number) {
    const moved = this.#highlight(time);
    if (!moved && !(this.#seeking && this.#activeWord)) {
      return;
    }
    this.#seeking = false;
    if (this.#following) {
      this.#scrollToPlaying();
    }
    this.#updateResumeButton();
  }

  seeked() {
    this.#seeking = true;
    this.#following = true;
    this.#updateResumeButton();
  }

  setReadingMode(enabled: boolean) {
    this.#readingMode = enabled;
    if (enabled && !this.#lastSpokenWord) {
      this.#section.scrollIntoView();
    } else {
      this.#setFollowing(true);
    }
  }

  #highlight(time: number) {
    const index = wordAt({ words: this.#timedWords, time });
    const match = index === null ? null : this.#words[index];
    if (match === this.#activeWord) {
      return false;
    }

    this.#activeWord?.classList.remove("is-active");
    this.#activeWord?.removeAttribute("aria-current");
    this.#activeWord = match;
    if (!match || index === null) {
      return false;
    }

    match.classList.add("is-active");
    match.setAttribute("aria-current", "true");
    this.#lastSpokenWord = match;
    this.#highlightSentence(this.#timedWords[index].sentence);
    return true;
  }

  #highlightSentence(index: number) {
    if (index === this.#currentSentence) {
      return;
    }
    if (this.#currentSentence !== undefined) {
      this.#sentenceParts
        .get(this.#currentSentence)
        ?.forEach((part) => part.classList.remove("is-current"));
    }
    this.#currentSentence = index;
    this.#sentenceParts
      .get(index)
      ?.forEach((part) => part.classList.add("is-current"));
  }

  #setFollowing(follow: boolean) {
    this.#following = follow;
    if (follow) {
      this.#scrollToPlaying();
    }
    this.#updateResumeButton();
  }

  #stopFollowing() {
    if (this.#following) {
      this.#setFollowing(false);
    }
  }

  #visibleArea() {
    if (this.#readingMode) {
      return { top: 0, height: window.innerHeight };
    }
    return {
      top: this.#scroller.getBoundingClientRect().top,
      height: this.#scroller.clientHeight,
    };
  }

  #isInView(word: HTMLElement) {
    const coveredTop =
      this.#scroller.querySelector<HTMLElement>(".transcript-chapter-heading")
        ?.offsetHeight ?? 0;
    const wordRect = word.getBoundingClientRect();
    const area = this.#visibleArea();
    return (
      wordRect.top >= area.top + coveredTop &&
      wordRect.bottom <= area.top + area.height
    );
  }

  #scrollToPlaying() {
    const target = this.#lastSpokenWord;
    if (!target) {
      return;
    }
    const area = this.#visibleArea();
    const offset =
      target.getBoundingClientRect().top -
      area.top -
      area.height * FOLLOW_ANCHOR;
    if (Math.abs(offset) < 2) {
      return;
    }
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    if (this.#readingMode) {
      window.scrollTo({ top: window.scrollY + offset, behavior });
    } else {
      this.#scroller.scrollTo({
        top: this.#scroller.scrollTop + offset,
        behavior,
      });
    }
  }

  #updateResumeButton() {
    const target = this.#lastSpokenWord;
    this.#resumeButton.hidden = this.#following || !target;
    if (this.#resumeButton.hidden || !target) {
      return;
    }
    const label = this.#isInView(target)
      ? "Follow transcript"
      : "Back to current";
    if (this.#resumeButton.textContent !== label) {
      this.#resumeButton.textContent = label;
    }
  }
}
