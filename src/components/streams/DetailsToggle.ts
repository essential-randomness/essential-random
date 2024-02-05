class DetailsToggle extends HTMLElement {
  static observedAttributes = ["open"];
  constructor() {
    super();
  }

  connectedCallback() {
    this.showAll(!!this.hasAttribute("open"));
  }

  isHTMLElement(tag: Element): tag is HTMLElement {
    return true;
  }

  showAll(value: boolean) {
    const details = this.querySelectorAll("details");
    details.forEach((detail) => {
      if (!this.isHTMLElement(detail)) {
        return;
      }
      detail.toggleAttribute("open", value);
    });
  }

  attributeChangedCallback(_: string, __: boolean, newValue: boolean) {
    this.showAll(newValue !== null);
  }
}
customElements.define("details-toggle", DetailsToggle);
