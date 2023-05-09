import jsonData from "./data.json";

import Faqs from "@/c/Faqs";
import CTABlock from "@/c/CTABlock";

const Financing = () => {
	return (
		<div className="mtd-page">
			<section className="pt-8 mb-3 pb-6 border-bottom container">
				<h1>XT1 ST54</h1>
				<ul className="pdp-list">
					<li className="attribute-values">
						The Cub Cadet XT1 ST54 FAB is powered by a 24 hp KOHLER 7000 Series
						twin cylinder engine.
					</li>

					<li className="attribute-values">
						54-inch fabricated, 11-gauge, triple-blade deck with AeroForce(TM)
						deck design that optimizes airflow and maximizes suction to reduce
						clumping during discharge and improves bagging performance while
						delivering the pristine Cub Cadet Signature Cut™.
					</li>

					<li className="attribute-values">
						Optimized steering system for responsive handling gives a 16-inch
						turn radius a zero-turn feel.
					</li>

					<li className="attribute-values">
						3-year/no hour limit warranty (includes powertrain) and 5-year
						chassis and front axle unlimited hours/limited lifetime fabricated
						deck shell.
					</li>

					<li className="attribute-values">
						Ideal for mowing up 2-4 acres of mostly flat terrain and a few
						obstacles.
					</li>
				</ul>
			</section>

			<section className="d-flex justify-content-center align-items-center my-6">
				<div className="container px-1">
					<h2>FAQs</h2>
					<Faqs faqs={jsonData.faqs} addID="faqs-financing" />
				</div>
			</section>

			<section className="d-flex justify-content-center align-items-center p-8 bg-secondary">
				<div className="container d-flex flex-column align-items-center">
					<CTABlock block={jsonData.cta} />
				</div>
			</section>
		</div>
	);
};

export default Financing;
