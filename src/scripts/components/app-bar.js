class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="bg-gray-800">
            <div class="container flex mx-auto justify-between p-4" >
                <h1 class="text-2xl font-bold text-slate-50">
                    <a href="#">Aniquote</a>
                </h1>
                <nav class="flex h-8">
                    <ul id="nav-drawer" class="fixed w-60 mt-12 p-1 right-0 translate-x-64 shadow-sm text-center text-lg text-white bg-sky-800 sm:relative sm:flex sm:justify-between sm:right-0 sm:text-slate-50 sm:translate-x-0 sm:m-0 sm:bg-transparent sm:shadow-none ">
                        <li class="sm:hover:text-orange-400"><a href="#/">Home</a></li>
                        <li class="sm:hover:text-orange-400"><a href="#/favorite">Favorites</a></li>
                        <li class="sm:hover:text-orange-400"><a href="#/contact">Contact</a></li>
                    </ul>
                    <button id="hamburger-btn" class="text-white text-xl sm:hidden">
                        <i class="fa fa-bars"></i>
                    </button>
                </nav>
            </div>
        </header>
        `;
  }
}
customElements.define('app-bar', AppBar);
