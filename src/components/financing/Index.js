import React, { useState, useEffect } from "react";

import jsonData from "./data/financing.json";
import FinancingBlock from "./elements/FinancingBlock";
import FilterOptions from "./elements/FilterOptions";
import Button from "../elements/Button";

const Financing = () => {
  // const [checked, setChecked] = useState({
  //   terms: jsonData.keys.terms,
  //   minPurchase: jsonData.keys.minPurchase,
  //   interestRate: jsonData.keys.interestRate,
  // });
  // useEffect(() => {
  //   //setChecked({"terms":jsonData.keys.terms.inputs})
  //   console.log(checked);
  // }, [checked]);

  const [checkedTerms, setCheckedTerms] = useState({
    ...jsonData.keys.terms,
  });
  useEffect(() => {
    console.log("d:              ", checkedTerms);
    // console.log(checkedTerms);
  }, [checkedTerms]);

  const [checkedMinPurchase, setCheckedMinPurchase] = useState({
    ...jsonData.keys.minPurchase,
  });
  // useEffect(() => {
  //   console.log(checkedMinPurchase);
  // }, [checkedMinPurchase]);

  const [checkedInterestRate, setCheckedInterestRate] = useState({
    ...jsonData.keys.interestRate,
  });
  // useEffect(() => {
  //   console.log(checkedInterestRate);
  // }, [checkedInterestRate]);

  const handleQuery = (e, r = "d-none", a = "d-block") => {
    document
      .querySelectorAll(`.financing-filter-terms.${e.value}`)
      .forEach(function (e) {
        e.classList.remove(r);
        e.classList.add(a);
      });
  };

  const handleChange = (e) => {
    let updateCheckbox = { ...checkedTerms };
    const checkboxType = e.target.getAttribute("data-which");
    const checkboxChecked = e.target.checked;
    const checkboxLabel = e.target.checked;
    const checkboxID = e.target.id;

    console.log("updateCheckbox: ", updateCheckbox);
    console.log("e:              ", e);
    console.log("checkboxChecked:", checkboxChecked);
    console.log("checkboxType:   ", checkboxType);
    console.log("checkboxID:     ", checkboxID);

    updateCheckbox["inputs"] = { ...checkedTerms.inputs };
    console.log("updateCheckbox: ", updateCheckbox);

    //updateCheckbox[checkboxType]["inputs"] = checkboxChecked;

    //setChecked();
    //
    // document.querySelector(`#${e.target.id}`).checked = false;
    // console.log("e:", document.querySelector(`#${e.target.id}`));
    // document.querySelectorAll(`.financing-input`).forEach(function (e) {
    //   switch (e.getAttribute("data-which")) {
    //     case "terms":
    //       if (e.checked) {
    //         handleQuery(e, "d-none", "d-block");
    //       } else {
    //         handleQuery(e, "d-block", "d-none");
    //       }
    //       break;
    //     case "min-purchase":
    //     case "interest-rate":
    //       // console.log("min-purchase & interest-rate");
    //       break;
    //     default:
    //       console.log(`Nothing`);
    //   }
    // });
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
                <FilterOptions option={checkedTerms} {...{ handleChange }} />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={checkedMinPurchase}
                  {...{ handleChange }}
                />
              </li>
              <li className="mb-2">
                <FilterOptions
                  option={checkedInterestRate}
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
                    className={`financing-filter-terms col-12 col-lg-6 col-lg-6 mb-1 p-1 ${keywords.trim()}`}
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
