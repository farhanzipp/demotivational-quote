class LoaderSpin extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="loader"></div>
      `;
  }
}
customElements.define('loader-spin', LoaderSpin);
