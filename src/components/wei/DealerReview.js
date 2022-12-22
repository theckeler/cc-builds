import React, { useState } from "react";
import { useParams } from "react-router-dom";

import getOrder from "./utilities/getOrder";
import Button from "../elements/Button";
import Stars from "../elements/Stars";

const ContactDealer = () => {
  let { orderID } = useParams();
  const order = getOrder(orderID);

  const [submitted, setSubmitted] = useState(0);

  return (
    <div className="wrapper p-3">
      <h1 className="border-bottom pb-2 mb-2">Dealer Review</h1>

      <ul className="flex list-unstyled p-1 mb-2">
        <li className="col col-sm-12 col-lg-9 flex flex-column">
          {submitted ? (
            <div className="h2">Thanks</div>
          ) : (
            <>
              <Stars addClass="flex w-50 mb-3" fill="#ffc20f" />
              <textarea
                className="border p-2 mb-2"
                style={{ width: "100%", height: "100%", minHeight: "200px" }}
                placeholder="Add Comments"
              />
              <Button
                copy="Submit Review"
                addClass="w-100 text-uppercase border mt-2 bg-yellow"
                addClick={() => {
                  setSubmitted(1);
                }}
              />
            </>
          )}
        </li>
        <li className="col col-sm-12 col-lg-3 flex flex-column">
          <ul className="flex flex-column list-unstyled p-3 border">
            <li className="border-bottom pb-1 mb-1">Dealer Info:</li>
            <li className="display-3 mb-1">{order.dealer.name}</li>
            <li>{order.dealer.address}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactDealer;
