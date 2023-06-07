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

// import { Fragment } from "react";

// const Faqs = ({ faqs, className, id }) => {
// 	return (
// 		<ul className={`faqs list-unstyled ${className}`} id={id}>
// 			{faqs.map((block, i) => {
// 				return (
// 					<Fragment key={i}>
// 						<li
// 							className="question p-2"
// 							style={{ cursor: "pointer", fontSize: "1.2em" }}
// 							onClick={(e) => {
// 								e.currentTarget.classList.toggle("active");
// 								e.currentTarget.nextElementSibling.classList.toggle("d-none");
// 							}}>
// 							<ul className="list-unstyled d-flex align-items-center w-100">
// 								<li
// 									dangerouslySetInnerHTML={{
// 										__html: block.question,
// 									}}
// 									className="col-11"></li>
// 								<li className="col-1 ml-auto position-relative">
// 									<div
// 										className="position-absolute"
// 										style={{
// 											transform: "rotate(45deg) translateY(-50%)",
// 											right: 0,
// 											top: "50%",
// 										}}>
// 										✖
// 									</div>
// 								</li>
// 							</ul>
// 						</li>
// 						<li className="answer d-none p-2">
// 							<div
// 								dangerouslySetInnerHTML={{
// 									__html: block.answer,
// 								}}
// 								className="col-12"
// 							/>
// 						</li>
// 						<li className="p-1 border-bottom"></li>
// 					</Fragment>
// 				);
// 			})}
// 		</ul>
// 	);
// };

// export default Faqs;
