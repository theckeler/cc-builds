import ImgSwappin from "../elements/ImgSwappin";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function IconTextBlock({ imgType, block }) {
	return (
		<ul className="grid gap-4 grid-cols-[12rem_1fr] lg:grid-cols-[10rem_1fr] items-center">
			<li className="p-2">
				<ResponsiveImage src={block.icon} alt="" />
			</li>
			<li className="">
				<strong className="text-lg">{block.title}</strong>
				<p>{block.copy}</p>
			</li>
		</ul>
	);
}
