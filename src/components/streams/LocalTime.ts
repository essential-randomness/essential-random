class LocalTime extends HTMLElement {
  static observedAttributes = ["timezone"];
  constructor() {
    super();
  }

  connectedCallback() {
    this.updateTimes(this.getAttribute("timezone") || "global");
  }

  isHTMLElement(tag: Element): tag is HTMLElement {
    return true;
  }

  updateTimes(value: string) {
    const tags = this.querySelectorAll("time, date");
    tags.forEach((tag) => {
      if (!this.isHTMLElement(tag)) {
        return;
      }
      const time = tag.getAttribute("datetime");
      if (!time) {
        console.info("Skipping tag with no datetime attribute");
        return;
      }
      const options =
        "datetimeOptions" in (tag as HTMLElement).dataset
          ? JSON.parse(tag.dataset.datetimeOptions || "{}")
          : {};
      if (tag.tagName == "DATE") {
        tag.innerHTML = new Date(time).toLocaleString("en-US", {
          timeZone: value == "local" ? undefined : "US/Pacific",
          ...options,
        });
      }
      if (tag.tagName == "TIME") {
        tag.innerHTML = new Date(time).toLocaleString("en-US", {
          timeZone: value == "local" ? undefined : "US/Pacific",
          ...options,
        });
      }
    });
  }

  attributeChangedCallback(_: string, __: string, newValue: string) {
    this.updateTimes(newValue);
  }
}
customElements.define("local-time", LocalTime);
