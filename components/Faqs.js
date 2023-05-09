import { Fragment } from "react";

const Faqs = ({ faqs, addClass, addID }) => {
	return (
		<>
			<ul className={`faqs list-unstyled ${addClass}`} id={addID}>
				{faqs.map((block, i) => {
					return (
						<Fragment key={i}>
							<li
								className="question"
								style={{ cursor: "pointer" }}
								onClick={(e) => {
									e.currentTarget.classList.toggle("active");
									e.currentTarget.nextElementSibling.classList.toggle("active");
								}}>
								{block.question}
								<span>✖</span>
							</li>
							<li className="answer">
								<div
									dangerouslySetInnerHTML={{
										__html: block.answer,
									}}
								/>
							</li>
						</Fragment>
					);
				})}
			</ul>
		</>
	);
};

export default Faqs;
