import Button from "./Button";
import Video from "@/components/Video";

const ImgCopyBlock = ({
	block,
	className,
	linkable = true,
	ContainerType = "div",
	style,
	//divClass,
	flushImg = false,
}) => {
	if (linkable) {
		ContainerType = "a";
	}

	//	console.log("block: ", block);

	return (
		<div
			href={block.url}
			className={`d-flex flex-column text-decoration-none h-100 ${className}`}
			style={style}>
			{flushImg === true && <ImgBlock img={block.img} />}
			<div className={`d-flex flex-column h-100 ${flushImg ? "p-3" : ""}`}>
				{flushImg !== true && !block.ytVideo && <ImgBlock img={block.img} />}
				{block.ytVideo && (
					<Video img={block.img} ytVideo={block.ytVideo} className="w-100" />
				)}
				<p
					className={`font-weight-bold ${!flushImg && "mt-2"} mb-0 display-4`}
					dangerouslySetInnerHTML={{
						__html: block.title,
					}}
				/>
				<p
					className="copy mt-2"
					style={{ lineHeight: "1.7" }}
					dangerouslySetInnerHTML={{
						__html: block.copy,
					}}
				/>
				{linkable && <span className="read-more mt-auto">Read more</span>}
				{block.button && (
					<Button
						copy={block.button.copy}
						url={block.button.url}
						className="bg-secondary align-self-start mt-auto w-100 text-center"
					/>
				)}
			</div>
		</div>
	);
};

export const ImgBlock = ({ img }) => {
	return <img src={img} alt="" className="w-100" />;
};

export default ImgCopyBlock;
