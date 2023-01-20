import React from "react";

const FilterOptions = ({ option, handleChange }) => {
  let showHideOptions, showHideOpen, showHideClose;
  if (option.show) {
    showHideOptions = "d-none d-lg-none d-lg-block";

    showHideOpen = "d-none d-block d-lg-none";
    showHideClose = "d-none d-lg-block";
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
        className="border-bottom pb-1 mb-2 font-weight-bold"
        id={`${option.type}-child`}
      >
        <button
          className="border-0 w-100 d-flex"
          onClick={(e) => {
            e.stopPropagation();
            e.target.parentElement.nextSibling.classList.toggle("d-block");
            e.target.parentElement.nextSibling.classList.toggle("d-lg-block");
            //  e.target.parentElement.nextSibling.classList.toggle("d-lg-none");

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
      <li className={`align-items-center mb-1 ${showHideOptions}`}>
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
                className={`btn mr-1 py-1 px-2 w-100 text-center border mb-1 ${
                  !!block.isChecked
                    ? "border-secondary"
                    : "border font-weight-light"
                }`}
                style={{
                  backgroundColor: `${
                    block.isChecked ? "#fff" : "transparent"
                  }`,
                  opacity: `${block.isChecked ? "1" : "0.5"}`,
                }}
              >
                {block.label}
              </label>
            </React.Fragment>
          );
        })}
      </li>
    </ul>
  );
};

export default FilterOptions;
