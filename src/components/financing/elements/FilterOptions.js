import React from "react";

const FilterOptions = ({ option, handleChange }) => {
  let showHideOptions, showHideOpen, showHideClose;
  if (option.show) {
    showHideOptions = "d-none d-block";
    showHideOpen = "d-none";
    showHideClose = "d-none d-block";
  } else {
    showHideOptions = "d-none";
    showHideOpen = "d-none d-block";
    showHideClose = "d-none";
  }

  return (
    <ul
      className="d-flex flex-column list-unstyled"
      id={`${option.type}-parent`}
    >
      <li
        className="border-bottom pb-1 mb-2 mt-2 font-weight-bold"
        id={`${option.type}-child`}
      >
        <button
          className="border-0 w-100 d-flex"
          onClick={(e) => {
            e.stopPropagation();
            e.target.parentElement.nextSibling.classList.toggle("d-block");

            document
              .querySelectorAll(
                `#${option.type}-parent #${option.type}-child .open-close-icon`
              )
              .forEach((e) => {
                e.classList.toggle("d-block");
              });
          }}
        >
          <span style={{ pointerEvents: "none" }}>{option.title}</span>
          <span
            style={{ pointerEvents: "none" }}
            id="openIcon"
            className={`open-close-icon ml-auto ${showHideOpen}`}
          >
            +
          </span>
          <span
            style={{ pointerEvents: "none" }}
            id="closeIcon"
            className={`open-close-icon ml-auto ${showHideClose}`}
          >
            -
          </span>
        </button>
      </li>
      <li className={`align-items-center mb-2 ${showHideOptions}`}>
        {option.inputs.map((block, i) => {
          return (
            <React.Fragment key={i}>
              <input
                type="checkbox"
                id={block.val}
                value={block.val}
                onChange={handleChange}
                className={`${option.type} financing-input d-none`}
                data-pos={i}
                data-which={option.type}
                data-label={block.label}
                checked={block.isChecked}
              />
              <label
                htmlFor={block.val}
                role="button"
                // className={`d-flex align-items-center btn mr-1 p-0 w-100 text-left border mb-1 ${
                //   !!block.isChecked
                //     ? "border-secondary"
                //     : "border font-weight-light"
                // }`}
                className="d-flex align-items-center btn mr-1 p-0 w-100 text-left"
                style={{
                  backgroundColor: `${
                    block.isChecked ? "transparent" : "transparent"
                  }`,
                  opacity: `${block.isChecked ? "1" : "0.5"}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 24"
                  style={{ maxWidth: "48px" }}
                >
                  <path
                    d="M40.5 3.5C38.2 1.2 35.3 0 32 0H12C8.7 0 5.8 1.2 3.5 3.5S0 8.7 0 12s1.2 6.2 3.5 8.5S8.7 24 12 24h20c3.3 0 6.2-1.2 8.5-3.5S44 15.3 44 12s-1.2-6.2-3.5-8.5z"
                    style={{
                      fill: `${block.isChecked ? "#ffc20f" : "#000"}`,
                    }}
                  />
                  <path
                    d="M38.4 18.4C36.6 20.1 34.5 21 32 21H12c-2.5 0-4.6-.9-6.4-2.6S3 14.5 3 12s.9-4.6 2.6-6.4S9.5 3 12 3h20c2.5 0 4.6.9 6.4 2.6S41 9.5 41 12s-.9 4.6-2.6 6.4z"
                    style={{ fill: "#efefef" }}
                  />
                  <path
                    d="M32 17c1.4 0 2.6-.5 3.6-1.5s1.5-2.2 1.5-3.6-.5-2.6-1.5-3.6S33.5 6.9 32 7c-1.4 0-2.6.5-3.6 1.5S27 10.6 27 12s.5 2.6 1.5 3.6 2.1 1.5 3.5 1.4z"
                    style={{
                      fill: `${block.isChecked ? "#ffc20f" : "#000"}`,
                      transform: `${
                        block.isChecked ? "translateX(0)" : "translateX(-20px)"
                      }`,
                    }}
                  />
                </svg>

                <span className="ml-1">{block.label}</span>
              </label>
            </React.Fragment>
          );
        })}
      </li>
    </ul>
  );
};

export default FilterOptions;
