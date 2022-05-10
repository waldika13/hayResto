class HeroInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero ">
        <div class="hero__inner">
            <h1 class="hero__title">Temukan cita rasa favoritemu disini</h1>
        </div>
    </div>
      `;
  }
}

customElements.define('hero-inner', HeroInner);
