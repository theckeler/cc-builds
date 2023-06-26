import Button from "@/c/Button";

const CTABlock = ({ block }) => {
	return (
		<div className={block.className}>
			<h2
				dangerouslySetInnerHTML={{ __html: block.title.copy }}
				className={block.title.className}
			/>
			{block.copy && (
				<p dangerouslySetInnerHTML={{ __html: block.copy }} className="" />
			)}
			<Button
				url={block.button.url}
				copy={block.button.copy}
				className={`mt-2 mx-auto ${
					block.button.className ? block.button.className : ""
				}`}
			/>
		</div>
	);
};

export default CTABlock;
