import React from "react";

import Button from "../../elements/Button";
import FinancingBlock from "./FinancingBlock";

const MainBlock = ({ block, i, keywords, multiBlockLength }) => {
  return (
    <li
      className={`financing-filter col-12 col-lg-6 mb-1 p-1 ${keywords.trim()}`}
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
        {!!block.offerCount > 0 ? (
          block.offers.map((block, i) => {
            const borderRun = i < multiBlockLength - 1 ? `border-bottom` : "";

            return (
              <React.Fragment key={i}>
                {block.display === true && (
                  <FinancingBlock
                    {...{
                      block,
                      addClass: borderRun,
                    }}
                  />
                )}
              </React.Fragment>
            );
          })
        ) : (
          <div className="px-3 pt-3">
            <p className="nb-0" style={{ minHeight: "100px" }}>
              Sorry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a condimentum ex. Quisque fringilla libero ac arcu
              tincidunt vulputate vitae sed eros.
            </p>
          </div>
        )}
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
};

export default MainBlock;
