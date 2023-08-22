import jsonData from "../data/howtos-articles.json";

import HowToMaintence from "@/c/HowToMaintence";
import Articles from "@/c/Articles";
import AttchmentsAccessories from "@/c/AttchmentsAccessories";

const Footer = () => {
	return (
		<>
			<HowToMaintence {...{ jsonData }} />

			<Articles {...{ jsonData }} />

			<AttchmentsAccessories {...{ jsonData }} />
		</>
	);
};

export default Footer;
