//import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import jsonData from "./data/financing.json";
import MainBlock from "./elements/MainBlock";
import FilterOptions from "./elements/FilterOptions";

const Financing = () => {
  const [offersData, setOffersData] = useState({
    blocks: [...jsonData.blocks],
    keys: { ...jsonData.keys },
    checkedInputs: [],
    uncheckedInputs: [],
  });

  // useEffect(() => {
  //   console.log("offersData", offersData);
  // });

  const handleChange = (e) => {
    // SETUP:
    const changeWhich = e.target.getAttribute("data-which");
    const eValue = e.target.value;
    const eChecked = e.target.checked;
    const ePos = e.target.getAttribute("data-pos");

    let checkedInputs = [];
    let uncheckedInputs = [];
    document.querySelectorAll(".financing-input").forEach(function (e) {
      if (e.checked) {
        checkedInputs.push(e.id);
      } else {
        uncheckedInputs.push(e.id);
      }
    });

    // CHANGE CHECKBOXES:
    const updateCheckbox = [...offersData.keys[changeWhich].inputs];
    updateCheckbox[ePos] = {
      label: e.target.getAttribute("data-label"),
      val: e.target.id,
      isChecked: eChecked,
    };

    // UPDATE TERMS & OFFERS:
    let updateOffers = [];
    updateOffers = [...offersData.blocks];
    jsonData.blocks.forEach(function (e) {
      switch (changeWhich) {
        case "terms":
          if (e.keywords.includes(eValue)) {
            updateOffers[ePos] = { ...e, display: eChecked };
          }
          break;
        default:
          let offerCount = 0;
          e.offers.forEach(function (offer) {
            const result = offer.keywords.filter((keyword) =>
              uncheckedInputs.includes(keyword)
            );
            if (result.length > 0) {
              offer.display = false;
            } else {
              offer.display = true;
              offerCount++;
            }
          });
          e.offerCount = offerCount;
      }
    });

    // UPDATE IT ALL:
    setOffersData({
      checkedInputs: checkedInputs,
      uncheckedInputs: uncheckedInputs,
      keys: {
        ...offersData.keys,
        [changeWhich]: {
          ...offersData.keys[changeWhich],
          inputs: updateCheckbox,
        },
      },
      blocks: [...updateOffers],
    });
  };

  return (
    <>
      <section className="pt-8 text-center mb-3 pb-6 border-bottom container">
        <img
          src="https://d1dy019watpwba.cloudfront.net/images/financing/cub-cadet-credit-card.png"
          alt=""
          className="w-25 mb-4"
        />
        <h1>Shop Online Financing Plans</h1>
        <p className="mb-0">
          The offers below are available online. Additional financing offers may
          be available at your local dealer.
        </p>
      </section>

      <section>
        <ul className="row list-unstyled container mx-auto">
          <li
            className="position-sticky col-lg-3 h-100 p-1 no-gutters"
            style={{ top: 0, zIndex: 1001, maxHeight: "100vh", overflow: "scroll" }}
          >
            <ul
              className="list-unstyled p-2 w-100 h-100"
              style={{ backgroundColor: "#efefef" }}
            >
              {/* <li className="mb-1 text-uppercase h4">Rows:</li>
              <li>
                <input
                  type="range"
                  id="numRows"
                  name="numRows"
                  min="1"
                  max="6"
                  step="1"
                  value="2"
                  className="w-100"
                />
              </li> */}
              <li className="mb-1 text-uppercase h4">Filter:</li>
              <li className="mb-2">
                <FilterOptions
                  option={offersData.keys.terms}
                  {...{ handleChange }}
                />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={offersData.keys.minPurchase}
                  {...{ handleChange }}
                />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={offersData.keys.interestRate}
                  {...{ handleChange }}
                />
              </li>
            </ul>
          </li>
          <li className="col-lg-9 no-gutters">
            <ul className="d-flex flex-wrap list-unstyled no-gutters">
              {offersData.blocks.map((block, i) => {
                let keywords = "";
                if (block.keywords) {
                  for (const keyword of block.keywords) {
                    keywords += `${keyword} `;
                  }
                }

                const multiBlockLength = block.offers
                  ? block.offers.length
                  : "";

                return (
                  <React.Fragment key={i}>
                    {block.display === true && (
                      <MainBlock
                        {...{ block, i, keywords, multiBlockLength }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </li>
        </ul>
      </section>

      <section
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "lightgray" }}
      >
        <div className="bg-secondary p-8"> TESTING STICKY GOES AWAY</div>
      </section>
    </>
  );
};

export default Financing;
