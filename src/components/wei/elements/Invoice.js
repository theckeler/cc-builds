import React from "react";

import currencyConverter from "../../../utilities/currencyConverter";

const TrackBlock = ({ order }) => {
  const orderTotal = order.total + order.ship;

  return (
    <ul className="list-unstyled d-flex flex-column border p-3">
      <li className="border-bottom">
        <p className="mb-1">
          <strong>Order Date:</strong> {order.date}
        </p>
        <p className="mb-1">
          <strong>Total:</strong> {currencyConverter(orderTotal)}
        </p>
        <p className="mb-3">
          <strong>Order:</strong> #{order.orderNum}
        </p>
      </li>
      <li className="border-bottom px-0 py-3">
        <ul className="list-unstyled d-flex flex-wrap">
          <li className="col-sm-12 col-lg-10 pb-1 border-bottom h4">Items</li>
          <li className="col-sm-12 col-lg-2 pb-1 text-right border-bottom h4">
            Price
          </li>
          {order.products.map((product, i) => {
            return (
              <React.Fragment key={i}>
                <li className="col-sm-12 col-lg-10 font-weight-bold pt-2">
                  Delivered: {product.delivered}
                </li>
                <li className="col-sm-12 col-lg-10">{product.product}</li>
                <li className="col-sm-12 col-lg-2 text-right">
                  {currencyConverter(product.price)}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </li>
      <li className="border-bottom px-0 py-3">
        <p className="h4">
          <strong>Payment</strong>
        </p>
        <ul className="list-unstyled d-flex flex-wrap">
          <li className="col-sm-12 col-lg-10 pb-1">
            <strong>Payment Method</strong>
          </li>
          <li className="col-sm-12 col-lg-10 pb-1">{order.paymentMethod}</li>
          <li className="col-sm-12 col-lg-2 pb-1 text-right">
            <ul className="list-unstyled d-flex flex-column">
              <li className="">{currencyConverter(order.total)}</li>
              <li className="">{currencyConverter(order.ship)}</li>
              <li className="">{currencyConverter(orderTotal)}</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="text-center mt-3">
        <a href="#top" className="">
          Print this invoice for your records.
        </a>
      </li>
    </ul>
  );
};

export default TrackBlock;
