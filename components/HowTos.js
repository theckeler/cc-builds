const HowTos = () => {
	return (
		<section className="pt-6">
			<div className="wrapper">
				<ul className="list-unstyled d-flex flex-column flex-md-row align-items-center px-3">
					<li className="">
						<h2 className="text-center">How To’s &amp; Maintenance</h2>
					</li>
					<li className="ml-2">
						<a className="d-block text-center">
							<u>View All</u>
						</a>
					</li>
				</ul>
				<div className="slick pl-3 pr-3">
					<ul className="list-unstyled d-flex flex-column flex-md-row">
						<li className="col-sm-12 col-md-4 p-1 flex flex-column">
							<a
								href="https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-air-filter-on-a-cub-cadet-zero-turn-rider.html "
								className="flex flex-column text-decoration-none p-2 h-100"
								style={{ backgroundColor: "rgb(239, 239, 239)" }}>
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/how-to-1.jpg"
									alt=""
								/>
								<div className="content flex flex-column p-3 h-100">
									<strong className="h3" style={{ fontSize: "1.6em" }}>
										How to clean or replace an air filter on an Ultima Zero Turn
									</strong>
									<p className="copy mt-2">
										It is recommended that your engine air filter be cleaned or
										replaced every 50 operating hours. In dry, dusty conditions
										this should be done more frequently. The video and
										instructions…
									</p>
									<span
										className="mt-auto text-uppercase fw-bold"
										style={{ textDecoration: "underline" }}>
										Read more
									</span>
								</div>
							</a>
						</li>
						<li className="col-sm-12 col-md-4 p-1 flex flex-column">
							<a
								href="https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-blades-on-a-zero-turn.html"
								className="flex flex-column text-decoration-none p-2 h-100"
								style={{ backgroundColor: "rgb(239, 239, 239)" }}>
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/how-to-2.jpg"
									alt=""
								/>
								<div className="content flex flex-column p-3 h-100">
									<strong className="h3" style={{ fontSize: "1.6em" }}>
										How to Change the Blades on a Zero-Turn Lawn Mower
									</strong>
									<p className="copy mt-2">
										Over time, the blades on your zero-turn riding lawn mower
										can become worn out, bent or dinged. This gradual damage can
										reduce the effectiveness of your mower, so be sure to…
									</p>
									<span
										className="mt-auto text-uppercase fw-bold"
										style={{ textDecoration: "underline" }}>
										Read more
									</span>
								</div>
							</a>
						</li>
						<li className="col-sm-12 col-md-4 p-1 flex flex-column">
							<a
								href="https://www.cubcadet.com/en_US/how-to/knowledge-how-to-install-a-bagger-on-a-zero-turn.html"
								className="flex flex-column text-decoration-none p-2 h-100"
								style={{ backgroundColor: "rgb(239, 239, 239)" }}>
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/how-to-3.jpg"
									alt=""
								/>
								<div className="content flex flex-column p-3 h-100">
									<strong className="h3" style={{ fontSize: "1.6em" }}>
										How to Install a Bagger Attachment on a Zero-Turn Riding
										Mower
									</strong>
									<p className="copy mt-2">
										The following video will show you how to install a double
										bagger on your Ultima Series ZT Zero Turn mower. The tools
										needed for installation include two 9/16 in. socket
										wrenches…
									</p>
									<span
										className="mt-auto text-uppercase fw-bold"
										style={{ textDecoration: "underline" }}>
										Read more
									</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default HowTos;
