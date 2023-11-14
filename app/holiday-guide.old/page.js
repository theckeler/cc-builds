import ResponsiveImage from "@/components/ResponsiveImage";

export default function HolidayGuide({ children }) {
	return (
		<div id="sdb-container">
			<section>
				<div className="relative min-h-[30rem]">
					<ResponsiveImage
						src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/hero.jpg"
						alt=""
						id="hero"
						//className="w-full h-full absolute top-0 left-0 object-cover"
						className="w-full h-auto"
					/>
				</div>
			</section>

			<section className="bg-secondary">
				<h1 className="container text-center mb-0 text-uppercase px-2 py-4">
					Cub Cadet<sup>®</sup> Holiday Gift Guide
				</h1>
			</section>

			<section className="container mt-4">
				<ul className="grid grid-cols-4 gap-2 ">
					{[...Array(8)].map((block, i) => {
						return (
							<li className="bg-[#efefef]" key={i}>
								<a
									href="https://www.troybilt.com/en_US/single-stage-snow-blowers/squall-123r-snow-blower/31P-2M5G723.html"
									className="no-underline hover:no-underline hover:pointer p-2 block">
									<p className="text-center p-2 mb-0 bg-black text-white">
										A Group Gift They’ll Fight Over
									</p>

									<div className="relative bg-white p-2">
										<img
											src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Troy-Bilt_Squall123R_10.jpg"
											alt=""
											id=""
											className="w-full h-auto"
										/>
									</div>

									<p className="text-xl mt-2">
										Squall<sup>™</sup> 123R Snow Blower
									</p>
									<p className="">$499.00</p>
									<p className="">
										A compact snow blower that’s easy to handle, this
										single-stage model can clear snow up to 6" deep and grips
										the ground for minimum pushing effort with maximum clearing.
									</p>
									<button className="btn bg-secondary w-full">
										Shop Squall 123R
									</button>
								</a>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
}
