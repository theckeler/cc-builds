import Stars from "./Stars";

const QuoteBlock = ({
	quote,
	className,
	style,
	stackStars = false,
	starFill = "#FFC10F",
}) => {
	const stackEmUp = stackStars ? "flex-column" : "";
	const starCSS = stackStars ? 12 : 8;

	return (
		<div className={`quote-block  ${className}`} style={style}>
			<ul className="grid grid-cols-1 md:grid-cols-2">
				<li className="text-lg font-bold">{quote.title}</li>
				<li className="">
					<Stars fill={starFill} />
				</li>
			</ul>
			<p className="mt-2">{quote.copy}</p>
			<ul className="flex">
				<li className="font-bold pr-2">{quote.name}</li>
				<li
					className="font-weight-normal pl-lg-2"
					dangerouslySetInnerHTML={{
						__html: quote.unit,
					}}></li>
			</ul>
		</div>
	);
};

export default QuoteBlock;
