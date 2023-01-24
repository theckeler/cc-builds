//import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import "./scss/financing.scss";
import jsonData from "./data/financing.json";
import MainBlock from "./elements/MainBlock";
import FilterOptions from "./elements/FilterOptions";
import MenuButton from "./elements/MenuButton";
import Faqs from "../elements/Faqs";
import ImgCopyBlock from "../elements/ImgCopyBlock";
import CTABlock from "../elements/CTABlock";

const Financing = () => {
  const [offersData, setOffersData] = useState({
    blocks: [...jsonData.blocks],
    keys: { ...jsonData.keys },
    checkedInputs: [],
    uncheckedInputs: [],
  });

  // useEffect(() => {
  //   console.log("cssUpdate", cssUpdate);
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
          //let offerCount = 0;
          e.offers.forEach(function (offer) {
            const result = offer.keywords.filter((keyword) =>
              uncheckedInputs.includes(keyword)
            );
            if (result.length > 0) {
              offer.display = false;
            } else {
              offer.display = true;
              //  offerCount++;
            }
          });
        // e.offerCount = offerCount;
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
          className="w-100 mb-4"
          style={{ maxWidth: "400px" }}
        />
        <h1>Shop Online Financing Plans</h1>
        <p className="mb-0">
          The offers below are available online. Additional financing offers may
          be available at your local dealer.
        </p>
      </section>

      <section className="container p-0 m-0 m-lg-auto w-100">
        <ul className="list-unstyled mx-auto no-gutters d-flex flex-column flex-lg-row p-0 p-lg-1">
          <li
            className="col-lg-3 position-sticky h-100"
            style={{ top: "8px", zIndex: "101" }}
          >
            <ul className="d-flex flex-column list-unstyled p-lg-1" style={{}}>
              <li
                className="financing-filters-button d-lg-none"
                id="financing-filters-button"
                style={{
                  zIndex: "100",
                }}
              >
                <MenuButton />
              </li>
              <li
                className="financing-filters position-fixed position-lg-relative w-100"
                id="financing-filters"
                style={{
                  top: 0,
                  zIndex: "101",
                  backgroundColor: "#efefef",
                }}
              >
                <ul className="list-unstyled h-100 p-lg-1">
                  <li className="p-1 text-uppercase h4 border-bottom d-flex align-items-center">
                    <span>Filter:</span>
                    <span className="ml-auto d-lg-none">
                      <MenuButton addClass="p-2" />
                    </span>
                  </li>
                  <li
                    className="mb-2 overflow-auto no-scrollbar px-3 px-lg-0 pb-8"
                    style={{
                      height: "calc(100vh - 60px)",
                      maxHeight: "100vh",
                    }}
                  >
                    <FilterOptions
                      option={offersData.keys.terms}
                      {...{ handleChange }}
                    />
                    <FilterOptions
                      option={offersData.keys.minPurchase}
                      {...{ handleChange }}
                    />
                    <FilterOptions
                      option={offersData.keys.interestRate}
                      {...{ handleChange }}
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="col-lg-9 mt-n5 mt-lg-0">
            <ul className="d-flex flex-wrap list-unstyled no-gutters">
              {offersData.blocks.map((block, i) => {
                let keywords = "";
                if (block.keywords) {
                  for (const keyword of block.keywords) {
                    keywords += `${keyword} `;
                  }
                }

                let multiBlockLength = 0;
                block.offers.map((block) => {
                  if (block.display) {
                    multiBlockLength++;
                  }
                });

                // const multiBlockLength = block.offers
                //   ? block.offers.length
                //   : "";

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
        className="d-flex justify-content-center align-items-center p-3"
        // style={{ backgroundColor: "#e7e7e7" }}
      >
        <div className="container px-5 py-2">
          <ul className="list-unstyled d-flex flex-column flex-lg-row">
            <li className="col-lg-6 p-2" style={{ backgroundColor: "#e7e7e7" }}>
              <ImgCopyBlock
                block={jsonData.inStore}
                linkable={false}
                flushImg={true}
                addClass="h-auto"
              />
            </li>
            <li className="col-lg-6 px-2 py-5 p-lg-6">
              <h2>FAQs</h2>
              <Faqs faqs={jsonData.faqs} addID="faqs-financing" />
            </li>
          </ul>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center p-8 bg-secondary">
        <div className="container d-flex flex-column align-items-center">
          <CTABlock block={jsonData.cta} />
        </div>
      </section>
    </>
  );
};

export default Financing;
