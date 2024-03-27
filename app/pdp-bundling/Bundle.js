"use client";

export default function Dealer({}) {
  const bundles = [
    {
      title: "Riding Mower 42-inch Deck Belt",
      src:
        "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwac825531/products/954-04060C_1.jpg?sw=200&sh=200&sm=fit",
      price: 43.99,
    },
    {
      title: "3-in-1 Blade for 42-inch Cutting Decks",
      src:
        "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8a601d6a/products/942-0616A.jpg?sw=200&sh=200&sm=fit",
      price: 30.25,
    },
    {
      title: "Blade Removal Tool",
      src:
        "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2832daea/products/490-850-0005.jpg?sw=200&sh=200&sm=fit",
      price: 14.99,
    },
  ];

  return (
    <div className="col-12" id="sdb-container">
      <div className="p-2  bg-gray-50">
        <p className="mb-1 text-lg font-bold text-center">
          Make it a bundle (Super Size Me):
        </p>

        <ul className="grid grid-cols-4 gap-2 items-center">
          {bundles.map((bundle, i) => (
            <li className="text-center flex flex-col bg-white h-full" key={i}>
              <img src={bundle.src} alt="" className="w-full border-1 p-1" />

              <div className="mt-1 text-xs px-1">{bundle.title}</div>
              <div className="pt-1 mt-auto font-bold px-1">${bundle.price}</div>
            </li>
          ))}

          <li className="text-center p-1">
            <div>Total of Bundle:</div>
            <div className="font-bold text-xl">$327.28</div>
            <div className="mb-1">Lorem ipsum dolor sit amet.</div>
            <button className="px-2 py-1 font-bold bg-black text-white">
              Add Bundle
            </button>
          </li>
        </ul>
        <div className="px-1 pt-2 text-xs">
          * Legal mumbo jumbo, donec augue ante, viverra eu erat sit amet,
          accumsan congue libero.{" "}
        </div>
      </div>
    </div>
  );
}
