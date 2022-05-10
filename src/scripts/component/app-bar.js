class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar" id="app-bar">
          <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
          </div>
          <div class="app-bar__brand">
            <h1>Hay Resto!</h1>
          </div>
          <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
              <li><a href="#/explore-resto">Home</a></li>
              <li><a href="#/like">Favorite</a></li>
              <li><a href="https://www.linkedin.com/in/waldika-irawan-5a1587225/" target="_blank">About Us</a></li>
              <li><label id="dark-change"></label></li>
            </ul>
          </nav>
    </div>
        `;
  }
}

customElements.define('app-bar', AppBar);
