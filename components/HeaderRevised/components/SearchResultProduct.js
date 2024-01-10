export default function SearchResultProduct({}) {
  return (
    <ul className="flex items-center border-b">
      <li className="">
        <a href="/en_US/all-products/zt1-42-zero-turn-lawn-mower/17AREACSA10.html">
          <img
            className="product-image"
            alt=""
            src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwcce5917f/products/Equipment/Cub-Cadet-ZT1-42.jpg?sw=125&sh=125&sm=fit"
          />
        </a>
      </li>
      <li className="product-info">
        <div className="name">
          <a
            href="/en_US/all-products/zt1-42-zero-turn-lawn-mower/17AREACSA10.html"
            className="font-bold no-underline text-lg"
          >
            ZT1 42 Zero-Turn Lawn Mower
          </a>
        </div>
        <div className="extended-name">Ultima Series™ ZT</div>
        <div className="price">
          <span>
            <span className="sales">
              <span
                className="value"
                content={3499.0}
              />
              <span className="msrp-text d-none">From</span>
              <span className="formatted-price">$3,499.00</span>
            </span>
            <span className="msrp-text d-none">MSRP</span>
            <span className="info-icon msrp-info">
              <span
                className="icon"
                data-toggle="tooltip"
                title="Manufacturer’s buy online price. Taxes are additional and vary by location. Freight, setup, delivery, PDI, and other dealer specific charges are not included in the pricing and vary by dealer. Prices shown are in U.S dollars and valid only in the United States."
              ></span>
            </span>
          </span>
        </div>
      </li>
    </ul>
  );
}
