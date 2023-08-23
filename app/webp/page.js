import jsonData from "./data/webp.json";
import ImageNew from "@/components/Image";

export default function ZeroTurn({}) {
	return <ImageNew img={jsonData.hero.img} alt="" />;
}
