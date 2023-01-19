const FilterOptions = ({ option, handleChange }) => {
  return (
    <ul className="d-flex flex-column list-unstyled">
      <li className="border-bottom pb-1 mb-2 font-weight-bold">
        {option.title}
      </li>
      {option.inputs.map((block, i) => {
        return (
          <li className="d-flex align-items-center mb-1" key={i}>
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
              className={`btn ml-1 py-1 px-2 w-100 text-center border ${
                !!block.isChecked
                  ? "border-secondary"
                  : "border font-weight-light"
              }`}
              style={{
                backgroundColor: `${block.isChecked ? "#fff" : "transparent"}`,
                opacity: `${block.isChecked ? "1" : "0.5"}`,
              }}
            >
              {block.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterOptions;
