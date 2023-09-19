import PromoBanner from "./PromoBanner";
import UtilityNav from "./UtilityNav";

export default function Logo({}) {
	return (
		<div className="navbar-header brand">
			<a href="/" title="Cub Cadet Home">
				<img
					className="icon logo"
					src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwd02ab7a2/images/svg-icons/logo.svg"
					alt="Cub Cadet"
				/>
			</a>
		</div>
	);
}
