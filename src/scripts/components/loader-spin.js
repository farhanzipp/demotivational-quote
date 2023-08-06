class LoaderSpin extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="flex justify-center items-center min-h-[20vh]">
        <div id="loader" class="border-top"></div>
      </div>
      `;
  }
}
customElements.define('loader-spin', LoaderSpin);
