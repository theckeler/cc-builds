import React, { useState, useEffect } from "react";

import jsonData from "./data/financing.json";
import FinancingBlock from "./elements/FinancingBlock";
import FilterOptions from "./elements/FilterOptions";
import Button from "../elements/Button";

const Financing = () => {
  const [checkedBoxes, setCheckedBoxes] = useState({ ...jsonData.keys });
  useEffect(() => {
    console.log("checkedBoxes:", checkedBoxes);
  }, [checkedBoxes]);

  const handleQuery = (e, which, r = "d-none", a = "d-block") => {
    document
      .querySelectorAll(`.financing-filter.${e.value}`)
      .forEach(function (e) {
        e.classList.remove(r);
        e.classList.add(a);
      });
  };

  const handleChange = (e) => {
    const updateCheckbox = [
      ...checkedBoxes[e.target.getAttribute("data-which")].inputs,
    ];
    updateCheckbox[e.target.getAttribute("data-pos")] = {
      label: e.target.getAttribute("data-label"),
      val: e.target.id,
      isChecked: e.target.checked,
    };

    setCheckedBoxes({
      ...checkedBoxes,
      [e.target.getAttribute("data-which")]: {
        ...checkedBoxes[e.target.getAttribute("data-which")],
        inputs: updateCheckbox,
      },
    });

    document.querySelectorAll(`.financing-input`).forEach(function (e) {
      if (e.checked) {
        handleQuery(e, e.getAttribute("data-which"), "d-none", "d-block");
      } else {
        handleQuery(e, e.getAttribute("data-which"), "d-block", "d-none");
      }
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

      <section className="">
        <ul className="row list-unstyled container mx-auto">
          <li
            className="position-sticky col-3 h-100 p-1 no-gutters"
            style={{ top: 0, zIndex: 1001 }}
          >
            <ul
              className="list-unstyled p-2 w-100 h-100"
              style={{ backgroundColor: "#efefef" }}
            >
              <li className="mb-1 text-uppercase h4">Filter:</li>
              <li className="mb-2">
                <FilterOptions
                  option={checkedBoxes.terms}
                  {...{ handleChange }}
                />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={checkedBoxes.minPurchase}
                  {...{ handleChange }}
                />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={checkedBoxes.interestRate}
                  {...{ handleChange }}
                />
              </li>
            </ul>
          </li>
          <li className="col-9 no-gutters">
            <ul className="d-flex flex-wrap list-unstyled no-gutters">
              {jsonData.blocks.map((block, i) => {
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
                  <li
                    className={`financing-filter col-12 col-lg-6 col-lg-6 mb-1 p-1 ${keywords.trim()}`}
                    key={i}
                  >
                    <div className="border d-flex flex-column h-100">
                      <div className="bg-secondary text-center py-2 px-2 font-weight-bold">
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "3em",
                            lineHeight: "1",
                          }}
                        >
                          {block.term}
                        </p>
                        <p
                          className="mb-0 font-weight-normal text-uppercase"
                          style={{
                            fontSize: "1.5em",
                          }}
                        >
                          Months
                        </p>
                      </div>
                      {block.offers.map((block, i) => {
                        const borderRun =
                          i < multiBlockLength - 1 ? `border-bottom` : "";

                        return (
                          <React.Fragment key={i}>
                            <FinancingBlock
                              {...{
                                block,
                                addClass: borderRun,
                              }}
                            />
                          </React.Fragment>
                        );
                      })}
                      <div className="p-1 mt-auto">
                        <Button
                          copy={block.button.copy}
                          url={block.button.url}
                          addClass="bg-secondary w-100 text-center"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </section>

      <section
        style={{ minHeight: "200vh", backgroundColor: "lightgray" }}
      ></section>
    </>
  );
};

export default Financing;
