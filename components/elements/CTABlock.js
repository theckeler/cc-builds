import Button from "@/components/Button";

const CTABlock = ({ block, className, addCSS }) => {
	return (
		<>
			<h2
				dangerouslySetInnerHTML={{ __html: block.h1 }}
				className="text-center"
			/>
			<p
				dangerouslySetInnerHTML={{ __html: block.copy }}
				className="text-center"
			/>
			<Button
				url={block.button.url}
				copy={block.button.copy}
				className="bg-white mt-2 my-auto"
			/>
		</>
	);
};

export default CTABlock;
