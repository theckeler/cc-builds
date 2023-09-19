"use client";

export default function NavMain({ navMain }) {
	return (
		<ul className="nav navbar-nav" role="menu">
			{navMain.map(function (nav, i) {
				let mouseOver, mouseOut;

				if (typeof nav.subNav !== "undefined") {
					mouseOver = (e) => {
						const dropMenu = e.currentTarget.querySelector(".dropdown-menu");
						dropMenu.classList.add("show");
						console.log("dropMenu:", dropMenu);
					};

					mouseOut = (e) => {
						const dropMenu = e.currentTarget.querySelector(".dropdown-menu");
						dropMenu.classList.remove("show");
					};
				}

				return (
					<li
						className="nav-item dropdown layout2 top-level-menu-heading"
						role="none"
						key={i}
						onMouseOver={mouseOver}
						onMouseOut={mouseOut}>
						<a
							role="menuitem"
							href="#top"
							id=""
							className="nav-link dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{nav.title}
						</a>
						{typeof nav.subNav !== "undefined" && (
							<ul className="dropdown-menu" role="menu" aria-hidden="true">
								{nav.subNav.map(function (sub, i) {
									return (
										<li
											className="dropdown-item menu-tile second-level-menu-heading-tile"
											role="menuitem"
											key={i}>
											<a
												href="#top"
												id=""
												role="button"
												className="dropdown-link">
												<span className="tile-title">{sub.title}</span>
												<span className="tile-description" />
												<img src={sub.img} className="tile-img" alt="" />
												<div className="card-link">
													<span className="d-none d-lg-block">Shop Now</span>
													<span className="d-block d-lg-none">{sub.title}</span>
												</div>
											</a>
										</li>
									);
								})}
								<li className="category-link">
									<a href="#top" id="" role="button" className="dropdown-link">
										Shop All {nav.title}
									</a>
								</li>
							</ul>
						)}
					</li>
				);
			})}
		</ul>
	);
}
