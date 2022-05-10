import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../component/app-bar';
import '../component/hero-inner';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }

  async darkMode() {
    const content = document.getElementsByTagName('body')[0];
    const darkMode = document.getElementById('dark-change');
    const appBar = document.getElementById('app-bar');
    const drawer = document.getElementById('navigationDrawer');

    darkMode.addEventListener('click', () => {
      darkMode.classList.toggle('active');
      content.classList.toggle('night');
      appBar.classList.toggle('night');
      drawer.classList.toggle('night');
    });
  }

  async preloader() {
    const loader = document.getElementById('preloader');

    window.addEventListener('load', () => {
      loader.style.display = 'none';
    });
  }
}

export default App;
