import SearchResultProduct from "./SearchResultProduct";

export default function SearchResults({}) {
  return (
    <div className="top-0 md:top-full md:absolute bg-white w-full left-0 top-100 max-h-[calc(100vh-80px)] md:max-h-[70vh] overflow-x-scroll">
      <div className="md:px-2 pb-16">
        <hr className="border-t" />

        <div className="font-bold text-lg">Did You Mean?</div>
        <a
          href="/en_US/search?q=mower"
          className="no-underline"
        >
          mower
        </a>

        <hr className="border-t" />

        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <div className="mt-2">
          <div className="font-bold text-xl">Related Articles</div>
          <ul>
            <li>
              <a href="/en_US/knowledge-center/knowledge-how-to-store-your-cub-cadet-walk-behind-mower-in-the-off-season.html">
                How to Store Your Walk-Behind Lawn Mower in the Winter
              </a>
            </li>
            <li>
              <a href="/en_US/knowledge-center/knowledge-how-to-change-the-oil-on-a-cub-cadet-walk-behind-mower.html">
                How to Change the Oil on a Walk-Behind Lawn Mower
              </a>
            </li>
            <li>
              <a href="/en_US/how-to/knowledge-changing-lawn-mower-blade.html">
                How to Remove and Change a Walk-Behind Lawn Mower Blade
              </a>
            </li>
          </ul>

          <hr className="border-t" />

          <div className="font-bold text-lg">Popular searches</div>
          <ul>
            <li>
              <a href="/en_US/search?q=13aoa9tsa10">13aoa9tsa10</a>
            </li>
            <li>
              <a href="/en_US/search?q=12abp2m5710">12abp2m5710</a>
            </li>
            <li>
              <a href="/en_US/search?q=13wx90as010">13wx90as010</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
