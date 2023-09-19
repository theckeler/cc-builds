import Logo from "./Logo";
import MiniCart from "./MiniCart";
import Search from "./Search";

export default function LogoSearch({}) {
	return (
		<div className="header container-fluid">
			<div className="row">
				<div className="col-12">
					<Logo />
					<div className="navbar-header">
						<div className="pull-left">
							<button
								className="navbar-toggler d-lg-none"
								type="button"
								aria-controls="sg-navbar-collapse"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<img
									className="icon icon-menu"
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw8bc6520f/images/svg-icons/icon-menu.svg"
									alt=""
								/>
							</button>
						</div>
						<div className="pull-right">
							<Search />
							<MiniCart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
