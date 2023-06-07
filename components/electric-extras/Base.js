import jsonData from "./data/home.json";
import Faqs from "@/c/Faqs";
import ImgCopyBlock from "@/c/ImgCopyBlock";
import HowToMaintence from "@/c/HowToMaintence";

const Base = () => {
	return (
		<>
			{/* Learn More */}
			<section className="section-7 pt-9 pb-9">
				<div className="wrapper">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{
							__html: jsonData.explore.h2,
						}}></h2>
					<ul className="row list-unstyled">
						{jsonData.explore.blocks.map((block, i) => {
							return (
								<li
									className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
									key={i}>
									<ImgCopyBlock
										{...{ block }}
										linkable={false}
										addStyle={{ background: "#efefef" }}
										flushImg={true}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<HowToMaintence {...{ jsonData }} />

			<section className="d-flex justify-content-center align-items-center my-6">
				<div className="container px-1">
					<ul className="list-unstyled d-flex flex-column flex-lg-row">
						<li className="px-2 py-5 p-lg-6">
							<h2>FAQs</h2>
							<Faqs faqs={jsonData.online} addID="faqs-online" />
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Base;
