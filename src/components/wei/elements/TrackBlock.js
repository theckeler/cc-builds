import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";

const TrackBlock = ({ order }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {order.products.map((product, i) => {
        return (
          <ul className="list-unstyled flex border" key={i}>
            <li className="col col-sm-12 col-lg-9 border-right">
              <ul className="list-unstyled flex p-2" key={i}>
                <li className="col col-sm-12 col-lg-2">
                  <img src={product.img} alt="" className="w-100 border p-1" />
                </li>
                <li className="col col-sm-12 col-lg-10">
                  <p className="h3">{product.product}</p>
                  <p className="copy">Delivered: {product.delivered}</p>
                  <p className="copy">Tracking: {product.tracking}</p>
                </li>
              </ul>
            </li>
            <li className="col col-sm-12 col-lg-3 flex flex-column">
              {order.type === "dealer" ? (
                <>
                  <ul className="flex flex-column list-unstyled p-1 mb-2 justify-content-center">
                    <li className="text-center">Dealer Info:</li>
                    <li className="text-center">{order.dealer.name}</li>
                    <li className="text-center">{order.dealer.address}</li>
                  </ul>
                  <Button
                    copy="Contact Dealer"
                    addClass="w-100 text-uppercase border bg-white mt-auto font-weight-normal"
                    addClick={() => {
                      console.log("test");
                      navigate(`/wei/contact-dealer/${order.orderNum}`);
                    }}
                  />
                  <Button
                    copy="Track Order"
                    addClass="w-100 text-uppercase border bg-white mt-1 font-weight-normal"
                  />
                  <Button
                    copy="Write Dealer Review"
                    addClass="w-100 text-uppercase border bg-white mt-1 mb-1 font-weight-normal"
                  />
                </>
              ) : (
                <Button
                  copy="Track USPS Package"
                  addClass="w-100 text-uppercase border bg-white mb-1 mt-2 font-weight-normal"
                />
              )}
            </li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};

export default TrackBlock;
