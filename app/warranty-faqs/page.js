"use client";

import Faqs from "@/components/Faqs";
import ResponsiveImage from "@/components/ResponsiveImage";

const WarrantyFaqs = () => {
	return (
		<div className="mtd-page">
			{/* HERO */}
			{/* <section
				className="position-relative container px-0"
				style={{ minHeight: "200px" }}>
				<ResponsiveImage
					id="hero"
					src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AM5HVSB56_2X26_Inteli_env02.jpg"
					alt=""
					className="h-100 w-100 position-absolute"
					style={{ objectFit: "cover", top: 0 }}
					hero
				/>
			</section> */}

			<section class="" style={{ backgroundColor: "#ffc20f" }}>
				<div class="container text-center">
					<ul
						className="list-unstyled flex align-items-center"
						style={{ overflow: "hidden" }}>
						<li className="col-4 position-relative flex justify-content-end">
							<div
								className="bg-white"
								style={{
									clipPath: "circle(56% at 50% 50%)",
									height: "200px",
									width: "300px",
								}}>
								<svg
									viewBox="0 0 800 800"
									className="w-100 h-100 p-4"
									style={{ zIndex: 11 }}
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M400 100C234.585 100 100 234.585 100 400C100 450.154 112.8 499.692 137.077 543.938L100.892 670.585C98.5846 678.646 100.831 687.323 106.769 693.231C111.169 697.631 117.046 700 123.077 700C125.2 700 127.323 699.723 129.415 699.108L256.062 662.923C300.308 687.231 349.846 700 400 700C565.415 700 700 565.415 700 400C700 234.585 565.415 100 400 100ZM400 653.846C354.769 653.846 310.123 641.538 270.831 618.215C267.231 616.092 263.138 614.985 259.046 614.985C256.923 614.985 254.8 615.292 252.708 615.877L156.646 643.323L184.092 547.262C185.846 541.169 184.985 534.615 181.754 529.138C158.462 489.877 146.123 445.2 146.123 399.969C146.154 260.031 260.031 146.154 400 146.154C539.969 146.154 653.846 260.031 653.846 400C653.846 539.969 539.969 653.846 400 653.846ZM424.308 498.769C425.538 501.538 426.154 504.615 426.154 507.692C426.154 513.846 423.692 519.692 419.385 524C415.077 528.308 408.923 530.769 403.077 530.769C400 530.769 396.923 530.154 394.154 528.923C391.385 527.692 388.923 526.154 386.769 524C384.615 521.846 382.769 519.385 381.538 516.615C380.615 513.846 380 510.769 380 507.692C380 504.615 380.615 501.538 381.538 498.769C382.769 496 384.615 493.538 386.769 491.385C388.923 489.231 391.385 487.692 394.154 486.462C399.692 484 406.154 484 411.692 486.462C414.769 487.692 417.231 489.231 419.385 491.385C421.538 493.538 423.077 496 424.308 498.769ZM480.646 319.477C488.615 342.646 484.4 368.185 469.385 387.785C468.585 388.831 467.692 389.785 466.769 390.677L430.677 424.092C427.662 428.554 426.092 433.569 426.092 438.769C426.092 451.508 415.754 461.846 403.015 461.846C390.277 461.846 379.938 451.508 379.938 438.769C379.938 422.831 385.138 407.569 395.015 394.677C395.815 393.631 396.708 392.677 397.662 391.785L433.754 358.369C438.615 351.231 439.785 342.615 437.015 334.492C434 325.785 426.892 319.354 417.508 316.923C408.215 314.462 400.892 315.015 395.108 318.462C385.631 324.154 380.677 337.292 379.6 341.877C376.615 354.185 364.277 362.031 351.938 359.077C339.6 356.246 331.846 344.092 334.585 331.723C335.385 328.123 343.138 296.154 370.892 279.2C382.431 272.154 401.969 265.2 429.2 272.277C453.477 278.615 472.708 296.246 480.708 319.508L480.646 319.477Z"
										fill="black"
									/>
								</svg>
							</div>
						</li>
						<li className="col-8">
							<h1>Warranty FAQs</h1>
							<p className="px-xl-9">
								Got a question about warranties? From registration to coverage
								details, Cub Cadet® has compiled answers to the most frequently
								asked questions.
							</p>
						</li>
					</ul>
				</div>
			</section>

			{/* copyBlock */}
			{/* <section className="mt-0 mb-0 text-white bg-primary">
				<div className="container p-3 text-center">
					<h1 className="h1 d-block text-white">Warranty FAQs</h1>
				</div>
			</section> */}

			<section className="container">
				<section className="container">
					<Faqs
						faqs={[
							{
								question:
									"How can I find out if I registered my equipment and how long I have left on the warranty? When does the warranty start?",
								className: "font-bold",
								answer:
									"Warranty period begins on the date of purchase or date of receiving product delivery. Please refer to the warranty statement provided with your products. The warranty period and exclusions are provided.",
							},
							{
								question: "Is registration required for warranty?",
								className: "font-bold",
								answer:
									"Registration is not a requirement for warranty. We encourage product registration as there will be a record of the date of purchase, original owner, and product information.",
							},
							{
								question:
									"How long do I have to register the warranty after I purchase?",
								className: "font-bold",
								answer:
									"The recommendation for product registration is as soon as you purchase your product, but the product can be registered at any time.",
							},
							{
								question: "Am I automatically registered for the warranty?",
								className: "font-bold",
								answer:
									"There is no automatic registration for products purchased in store or from online retailers. Products purchased factory direct are the only products automatically registered.",
							},
							{
								question: "Do I need my purchase receipt?",
								className: "font-bold",
								answer:
									"Yes, the purchase receipt indicates date of purchase which is the start date of the warranty period. Delivered products the date of delivery is the start date of the warranty period.",
							},
							{
								question:
									"I want to see what kind of warranty my lawn mower has, where can I find this?",
								className: "font-bold",
								answer:
									"The warranty statement is with the owner’s manual packet.",
							},
							{
								question:
									"What is the warranty on parts? Is it three years like equipment?",
								className: "font-bold",
								answer:
									'A limited-service part coverage may be applied for the remainder of the warranty period if the part or parts is purchased and installed through an authorized service provider. Please <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">contact</a> your local dealer for details.',
							},
							{
								question:
									"What does the zero-turn lawn mower warranty include?",
								className: "font-bold",
								answer:
									"Coverage period and exception details are included in the warranty statement located with the product owner’s manuals.",
							},
							{
								question: "Where is a copy of the warranty located?",
								className: "font-bold",
								answer:
									"The warranty statements are located within the owner’s manual packet provided with the product.",
							},
							{
								question:
									"How do I know if the problem with my equipment meets warranty coverage?",
								className: "font-bold",
								answer:
									'Product issues and or problems are determined and evaluated by a local authorized service dealer. The service dealer will evaluate the problem and determine if the problem meets a warrantable failure. Please <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">contact</a> your local delaer.',
							},
							{
								question: "Do you offer an extended warranty?",
								className: "font-bold",
								answer: `Yes, learn more about our extended warranty <a href="https://www.cubcadet.com/en_US/ew-info-page.html">here</a>.`,
							},
							{
								question: "How do I locate an authorized service dealer?",
								className: "font-bold",
								answer:
									'Locate an authorized dealer <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">here</a>.',
							},
							{
								question: "Is a warranty transferrable?",
								className: "font-bold",
								answer: "Factory warranties are not transferrable.",
							},
							{
								question: "What circumstances would void the warranty?",
								className: "font-bold",
								answer:
									"Depending on the product and circumstances, there are a number of scenarios that can void a warranty. These circumstances include, but are not limited to, the following:<ul><li>Lack of maintenance and/or improper maintenance as described in the operator’s manual;</li><li>Normal wear and tear resulting from use of the product</li><li>Use of the product that is not consistent with the intended use as described in the operating instructions, including, but not limited to, abuse, misuse, and/or neglect of the product, or any use inconsistent with and/or non-compliant with the instructions contained in the Operator’s Manual. This included operation in sandy and/or corrosive environments; or</li><li>Any product that has been altered or modified in a manner not approved.</li></ul>",
							},
							{
								question: "Is pick up and delivery covered by the warranty?",
								className: "font-bold",
								answer: "Pick up and delivery are not covered by the warranty.",
							},
							{
								question:
									"Are there any charges for warranty repairs and services?",
								className: "font-bold",
								answer:
									"There are no charges for any warranty service provided. Payment or fees associated with the warranty service are to be refunded by the service dealer provider.",
							},
							{
								question: "Does my equipment have separate warranties?",
								className: "font-bold",
								answer:
									"Products such as attachments and engines carry separate warranties. Refer to the owner’s manuals for warranty statement and or separate warranty information.",
							},
							{
								question: "Are fuel related failures covered by warranty?",
								className: "font-bold",
								answer:
									"Fuel related failures are not covered by the warranty.",
							},
							{
								question: "Is the engine covered by the product warranty?",
								className: "font-bold",
								answer:
									"Engines are covered by the warranty provided by the engine manufacturer.",
							},
							{
								question: "What are normal wear parts?",
								className: "font-bold",
								answer:
									"Normal wear parts include, but are not limited to, the following: belts, blades, blade adapters, grass bags, rider deck wheels, seats, shave plates, skid shoes, tines, filter, nozzles, hoses, O-rings, spray guns, wands, tires, spart plugs, fuses, bump knobs, outer spools, cutting line, inner belts, start pulley, starter rope, drive belts, saw chains, guide bars, batteries, and other consumable items.",
							},
							{
								question:
									"Is the warranty a guarantee that all failures be free of charge?",
								className: "font-bold",
								answer:
									"Warranty period and coverage are not guarantees that all failures or issues that occur during the warranty period be free of charge.",
							},
							{
								question:
									"Are adjustments, normal maintenance, and set up covered by the warranty?",
								className: "font-bold",
								answer:
									"No, please refer to the owner’s manual for specific maintenance, set up, and adjustment(s) details.",
							},
							{
								question: "Are retailers responsible for the warranty?",
								className: "font-bold",
								answer:
									"No, retailers are not responsible for the factory warranty provided with your product.",
							},
							{
								question: "Can I return equipment to the factory or retailer?",
								className: "font-bold",
								answer:
									'The recommendation is to not return equipment to the factory or retailer. <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">Contact</a> a local authorized dealer for product evaluation, service, and repairs.',
							},
							{
								question:
									"Are product failures warrantable when equipment is stored and maintained improperly?",
								className: "font-bold",
								answer:
									"No, product failure is not warrantable if equipment is stored or maintained improperly.",
							},
							{
								question:
									"By calling and speaking with a representative about equipment issues, is there a guarantee that a failure or failures meet warranty coverage?",
								className: "font-bold",
								answer:
									"There is no guarantee that speaking with a representative will result in warranty coverage. Warranty coverage can only be determined by a local authorized service provider evaluating the failure and cause. Representatives can provide information and options; however representatives cannot determine if a failure or similar meet warranty coverage.",
							},
							{
								question:
									"What do I do? An authorized service dealer is refusing to evaluate my equipment.",
								className: "font-bold",
								answer:
									"During the busier or seasonal times of year often it may take longer for an evaluation of the product. Another option may be to check with other authorized service providers in your area.",
							},
							{
								question:
									"I purchased a returned product, is there a warranty?",
								className: "font-bold",
								answer:
									"No.  Warranty extends to the initial purchaser only and the applicable warranty period will begin on the original date of purchase of the product or product delivery date.",
							},
							{
								question: "Are tires covered under the warranty?",
								className: "font-bold",
								answer:
									"The coverage period is 30 days from date of purchase. Please refer to the warranty statement provided with the product for further details.",
							},
							{
								question: "Is this battery covered under warranty?",
								className: "font-bold",
								answer:
									"Battery warranty coverage periods vary by product and brand. Please refer to the owner’s manual provided with the product for details.",
							},
						]}
						id="warranty-faqs"
						className="p-2 p-lg-4"
					/>
				</section>
			</section>
		</div>
	);
};

export default WarrantyFaqs;
