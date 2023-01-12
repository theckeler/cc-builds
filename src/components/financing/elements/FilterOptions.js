const FilterOptions = ({ option, handleChange }) => {
  return (
    <ul className="d-flex flex-column list-unstyled">
      <li className="mb-1">{option.title}</li>
      {option.inputs.map((block, i) => {
        return (
          <li className="d-flex align-items-center mb-1" key={i}>
            <input
              type="checkbox"
              id={block.val}
              value={block.val}
              onChange={handleChange}
              className={`${option.type} financing-input`}
              data-which={option.type}
              checked={block.isChecked}
            />
            <label htmlFor={block.val} className="ml-1">
              {block.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterOptions;
