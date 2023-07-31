const FavoritePage = {
  async render() {
    return `
        <div class="mt-20">
        <h1 class="text-center">My Recent Lovely Quotes</h1>
        <ul>
            <li>
                <div class="w-2/3 mx-auto my-2 p-4 rounded-lg text-slate-100 bg-slate-500 md:w-1/2">
                    <p>Live is Love tapi boong</p>
                </div>
            </li>
            <li>
                <div class="w-2/3 mx-auto my-2 p-4 rounded-lg text-slate-100 bg-slate-500 md:w-1/2">
                    <p>Live is Love tapi boong</p>
                </div>
            </li>
            <li>
                <div class="w-2/3 mx-auto my-2 p-4 rounded-lg text-slate-100 bg-slate-500 md:w-1/2">
                    <p>Live is Love tapi boong</p>
                </div>
            </li>
            <li>
                <div class="w-2/3 mx-auto my-2 p-4 rounded-lg text-slate-100 bg-slate-500 md:w-1/2">
                    <p>Live is Love tapi boong</p>
                </div>
            </li>
        </ul>
    </div>
          `;
  },

  async afterRender() {
    // after render
  },
};

export default FavoritePage;
