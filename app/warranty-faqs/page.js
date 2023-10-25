"use client";

import Faqs from "@/components/Faqs";
import ResponsiveImage from "@/components/ResponsiveImage";

const WarrantyFaqs = () => {
	return (
		<div className="mtd-page">
			{/* HERO */}
			<section
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
			</section>

			{/* copyBlock */}
			<section className="mt-0 mb-0 text-white bg-primary">
				<div className="container p-3 text-center">
					<h1 className="h1 d-block text-white">Warranty FAQs</h1>
				</div>
			</section>

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
									'A limited-service part coverage may be applied for the remainder of the warranty period if the part or parts is purchased and installed through an authorized dealer. Please <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">contact</a> your local dealer for details.',
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
								// question:
								// 	"What circumstances would void the warranty? Depending on the product and circumstances, there are a number of scenarios that can void a warranty. These circumstances include, but are not limited to, the following:",
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
									'The recommendation is to not return equipment to the factory or retailer. <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">Contact</a> a local authorized service provider for product evaluation, service, and repairs.',
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
