import SearchResultProduct from "./SearchResultProduct";

export default function SearchResults({}) {
  return (
    <div className="top-0 md:top-full md:absolute bg-white w-full left-0 top-100 md:max-h-[70vh] overflow-x-scroll">
      <div className="p-2">
        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <SearchResultProduct />
        <div className="mt-2">
          <div className="font-bold text-xl">Related Articles</div>
          <div className="row justify-content-end items">
            <div className="col-12 item">
              <div className="row">
                <div className="col-12">
                  <a href="/en_US/knowledge-center/knowledge-how-to-store-your-cub-cadet-walk-behind-mower-in-the-off-season.html">
                    How to Store Your Walk-Behind Lawn Mower in the Winter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="row">
                <div className="col-12">
                  <a href="/en_US/knowledge-center/knowledge-how-to-change-the-oil-on-a-cub-cadet-walk-behind-mower.html">
                    How to Change the Oil on a Walk-Behind Lawn Mower
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="row">
                <div className="col-12">
                  <a href="/en_US/how-to/knowledge-changing-lawn-mower-blade.html">
                    How to Remove and Change a Walk-Behind Lawn Mower Blade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
