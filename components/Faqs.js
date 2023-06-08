import { Fragment } from "react";

const Faqs = ({ faqs, className, id }) => {
	return (
		<div className={`faqs ${className}`} id={id}>
			{faqs.map((block, i) => {
				return (
					<Fragment key={i}>
						<button
							onClick={(e) => {
								const el = e.currentTarget.querySelector(".rotate-45");
								e.currentTarget.nextElementSibling.classList.toggle("hidden");
								el.classList.toggle("active");

								el.style.transform = el.classList.contains("active")
									? "rotate(0)"
									: "rotate(45deg)";

								// if (el.classList.contains("active")) {
								// 	el.style.transform = "rotate(0)";
								// } else {
								// 	el.style.transform = "rotate(45deg)";
								// }
							}}
							className="question cursor-pointer w-100 p-1 border-0 bg-transparent"
							style={{ cursor: "pointer", fontSize: "1.1em" }}>
							<ul className="list-unstyled d-flex items-center w-100 mb-1 mb-0">
								<li
									dangerouslySetInnerHTML={{
										__html: block.question,
									}}
									className="text-left"></li>
								<li className="ml-auto">
									<div
										className="rotate-45"
										style={{ transform: "rotate(45deg)" }}>
										✖
									</div>
								</li>
							</ul>
						</button>

						<div
							dangerouslySetInnerHTML={{
								__html: block.answer,
							}}
							className="hidden text-xs px-3 pb-2"
						/>

						<div className="border-bottom"></div>
					</Fragment>
				);
			})}
		</div>
	);
};

export default Faqs;
