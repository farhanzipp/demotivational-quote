import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, footer,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._footer = footer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // generate actual year for copyright
    const currentYear = new Date().getFullYear();
    this._footer.innerHTML = currentYear;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = `
        <div class="flex flex-col items-center justify-center mt-6">
          <div class="text-6xl font-bold text-gray-800">404</div>
          <div class="text-2xl font-medium text-gray-600">Page Not Found</div>
          <p class="mt-4 text-gray-500">The page you are looking for might have been removed or is temporarily unavailable.</p>
          <a href="#" class="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Go Back Home</a>
        </div>
      `;
    }
  }
}
export default App;
