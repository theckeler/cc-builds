import React, { useEffect } from "react";

const Faqs = ({ faqs, className, addID }) => {
	useEffect(() => {
		document.querySelectorAll("#faqs-script").forEach(function (elem) {
			elem.remove();
		});
		const html = `
<script type="text/javascript" id="faqs-script">
  document.querySelectorAll("#${addID} .question").forEach(function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  });
});
</script>`;
		const scriptEl = document.createRange().createContextualFragment(html);
		document.body.appendChild(scriptEl);
	});

	return (
		<>
			<ul className={`faqs list-unstyled ${className}`} id={addID}>
				{faqs.map((block, i) => {
					return (
						<React.Fragment key={i}>
							<li className="question" style={{ cursor: "pointer" }}>
								{block.question}
								<span>✖</span>
							</li>
							<li className="answer">
								<p
									dangerouslySetInnerHTML={{
										__html: block.answer,
									}}
								/>
							</li>
						</React.Fragment>
					);
				})}
			</ul>
		</>
	);
};

export default Faqs;
