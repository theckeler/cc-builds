import Close from "./components/Close";
import LogoSearch from "./components/LogoSearch";
import NavMain from "./components/NavMain";
import PromoBanner from "./components/PromoBanner";
import UtilityNav from "./components/UtilityNav";
import UtilityNavMobile from "./components/UtilityNavMobile";

async function getData() {
	const res = await fetch("https://api.npoint.io/c0eb2c63b40959555d42", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function Header({}) {
	const navMain = await getData();

	return (
		<>
			<PromoBanner />
			<header>
				<nav role="navigation">
					<UtilityNav />
					<LogoSearch />
					<div
						className="main-menu navbar-toggleable-md menu-toggleable-left multilevel-dropdown"
						id="sg-navbar-collapse">
						<div className="container-fluid">
							<div className="row">
								<nav
									id="collapsible-mobile-menu"
									className="navbar navbar-expand-lg bg-inverse col-12">
									<div className="close-menu clearfix d-lg-none">
										<div className="back pull-left">
											<a href="#" role="button">
												Back
											</a>
										</div>
										<div className="close-button pull-right">
											<Close />
										</div>
									</div>
									<div
										className="menu-group"
										aria-label="Main menu"
										role="navigation">
										<NavMain navMain={navMain} />
										<UtilityNavMobile />
									</div>
								</nav>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
