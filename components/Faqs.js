import { Fragment } from "react";

const Faqs = ({ faqs, className, id }) => {
	return (
		<ul className={`faqs list-unstyled ${className}`} id={id}>
			{faqs.map((block, i) => {
				return (
					<Fragment key={i}>
						<li
							className="question p-2"
							style={{ cursor: "pointer", fontSize: "1.2em" }}
							onClick={(e) => {
								e.currentTarget.classList.toggle("active");
								e.currentTarget.nextElementSibling.classList.toggle("d-none");
							}}>
							<ul className="list-unstyled d-flex align-items-center w-100">
								<li
									dangerouslySetInnerHTML={{
										__html: block.question,
									}}
									className="col-11"></li>
								<li className="col-1 ml-auto position-relative">
									<div
										className="position-absolute"
										style={{
											transform: "rotate(45deg) translateY(-50%)",
											right: 0,
											top: "50%",
										}}>
										✖
									</div>
								</li>
							</ul>
						</li>
						<li className="answer d-none p-2">
							<div
								dangerouslySetInnerHTML={{
									__html: block.answer,
								}}
								className="col-12"
							/>
						</li>
						<li className="p-1 border-bottom"></li>
					</Fragment>
				);
			})}
		</ul>
	);
};

export default Faqs;
