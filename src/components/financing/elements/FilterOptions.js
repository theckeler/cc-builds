import React from "react";

const FilterOptions = ({ option, keysPos, handleChange }) => {
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
			id={`${option.type}-parent`}>
			<li
				className="border-bottom pb-1 mb-2 mt-2 font-weight-bold"
				id={`${option.type}-child`}>
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
					}}>
					<span style={{ pointerEvents: "none" }}>{option.title}</span>
					<span
						style={{ pointerEvents: "none" }}
						id="openIcon"
						className={`open-close-icon ml-auto ${showHideOpen}`}>
						+
					</span>
					<span
						style={{ pointerEvents: "none" }}
						id="closeIcon"
						className={`open-close-icon ml-auto ${showHideClose}`}>
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
								data-keys-pos={keysPos}
								data-which={option.type}
								data-label={block.label}
								checked={block.isChecked}
							/>
							<label
								htmlFor={block.val}
								role="button"
								className="d-flex align-items-center btn mr-1 p-0 w-100 text-left"
								style={{
									backgroundColor: `${
										block.isChecked ? "transparent" : "transparent"
									}`,
									opacity: `${block.isChecked ? "1" : "0.5"}`,
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									style={{ enableBackground: "new 0 0 20 20", width: "20px" }}
									viewBox="0 0 20 20">
									<path
										d="M10 14.6c1.3 0 2.4-.4 3.2-1.3.9-.9 1.3-2 1.3-3.2 0-1.3-.4-2.4-1.3-3.2-.9-.9-2-1.3-3.2-1.3-1.3 0-2.4.4-3.2 1.3-.9.9-1.3 2-1.3 3.2 0 1.3.4 2.4 1.3 3.2.9.8 1.9 1.3 3.2 1.3z"
										style={{
											fill: `${block.isChecked ? "#000" : "transparent"}`,
										}}
									/>
									<path d="M18 6.6c-.4-1.1-1.1-2-1.9-2.8-.8-.8-1.7-1.4-2.8-1.9s-2.1-.6-3.3-.6c-1.2 0-2.3.3-3.4.7-1 .4-2 1.1-2.8 1.9-.7.7-1.3 1.7-1.8 2.7-.5 1-.7 2.2-.7 3.4 0 1.2.2 2.3.7 3.4.5 1 1.1 2 1.9 2.8s1.7 1.4 2.8 1.9c1 .5 2.2.7 3.4.7s2.3-.2 3.4-.7c1.1-.5 2-1.1 2.8-1.9.8-.8 1.4-1.7 1.9-2.8s.7-2.2.7-3.4-.5-2.3-.9-3.4zm-3.3 8.1c-1.3 1.3-2.9 1.9-4.7 1.9s-3.4-.6-4.7-1.9-1.9-2.9-1.9-4.7.6-3.4 1.9-4.7S8.2 3.4 10 3.4s3.4.6 4.7 1.9 1.9 2.9 1.9 4.7-.6 3.4-1.9 4.7z" />
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
