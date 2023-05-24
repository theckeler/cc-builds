import currencyConverter from "../../../utilities/currencyConverter";

const FinancingBlock = ({ block, className }) => {
	const startDate = new Date(block.promoStart);
	const endDate = new Date(block.promoEnd);

	let keywords = "";
	let type = "";
	if (block.keywords) {
		for (const keyword of block.keywords) {
			keywords += `${keyword} `;
			if (keyword === "online") {
				type = "Online";
			} else if (keyword === "in-store") {
				type = "In-Store";
			}
		}
	}

	return (
		<>
			<div
				className="px-3 py-2 text-center mb-2 text-uppercase fw-bold text-white"
				style={{ background: type === "Online" ? "#333" : "#555555" }}>
				{type}
			</div>
			<div
				className={`financing-filter px-3 pt-3 ${keywords.trim()} ${className}`}>
				<p
					className="mb-2 pb-2 border-bottom text-center"
					style={{
						fontSize: "1.25em",
						lineHeight: "1.4",
					}}>
					<strong
						dangerouslySetInnerHTML={{
							__html: block.title,
						}}
					/>
				</p>
				<small
					dangerouslySetInnerHTML={{
						__html: block.copy,
					}}
					className="w-100 d-block mb-2 pb-2 border-bottom"
				/>
				<p
					dangerouslySetInnerHTML={{
						__html: `<strong>Minimum purchase:</strong><br /> ${currencyConverter(
							block.minPurchase
						)}`,
					}}
					className="mb-2 text-center"
					style={{
						fontSize: "1.1em",
						lineHeight: "1.4",
					}}
				/>
				<p
					dangerouslySetInnerHTML={{
						__html: `<strong>Valid from:</strong><br /> ${startDate.toLocaleString(
							"en-us",
							{
								month: "short",
								day: "numeric",
								year: "numeric",
							}
						)} to ${endDate.toLocaleString("en-us", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}`,
					}}
					className="mb-2 text-center"
					style={{
						fontSize: "1.1em",
						lineHeight: "1.4",
					}}
				/>

				<button
					className="border-0 button w-100 font-underline mb-2 p-1"
					style={{
						textDecoration: "underline",
						fontSize: "0.7em",
						color: "#000",
						backgroundColor: "#e7e7e7",
					}}
					onClick={(e) => {
						e.target.nextSibling.classList.toggle("d-block");
					}}>
					Click for Details
				</button>

				<div className="d-none small">
					<p
						dangerouslySetInnerHTML={{
							__html: block.terms.title,
						}}
					/>
					<p
						dangerouslySetInnerHTML={{
							__html: block.terms.copy,
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default FinancingBlock;
