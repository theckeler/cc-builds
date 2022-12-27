import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import getOrder from "./utilities/getOrder";
import Button from "../elements/Button";

const ContactDealer = () => {
  const navigate = useNavigate();
  let { orderID } = useParams();
  const order = getOrder(orderID);

  const [submitted, setSubmitted] = useState(0);

  return (
    <div className="wrapper p-3">
      <h1 className="border-bottom pb-2 mb-2">
        Contact Dealer for Order #{orderID}
      </h1>
      <ul className="list-unstyled d-flex align-items-center mb-2">
        <li className="col col-sm-12 col-lg-6">
          <Button
            copy="Customer Support"
            addClass="w-100 text-uppercase border bg-white font-weight-normal"
          />
        </li>
        <li className="col col-sm-12 col-lg-6">
          <Button
            copy="View All Orders"
            addClass="w-100 text-uppercase border bg-white font-weight-normal"
            addClick={() => {
              navigate("/wei/purchase-history");
            }}
          />
        </li>
      </ul>

      <ul className="d-flex list-unstyled p-1 mb-2">
        <li className="col col-sm-12 col-lg-9 d-flex flex-column">
          {submitted ? (
            <div className="h2">Thanks</div>
          ) : (
            <>
              <textarea
                className="border p-2"
                style={{ width: "100%", height: "100%", minHeight: "300px" }}
                placeholder="Add Comments"
              />
              <Button
                copy="Contact Dealer"
                addClass="w-100 text-uppercase border mt-2 bg-yellow"
                addClick={() => {
                  setSubmitted(1);
                }}
              />
            </>
          )}
        </li>
        <li className="col col-sm-12 col-lg-3 d-flex flex-column">
          <ul className="d-flex flex-column list-unstyled p-3 border">
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
