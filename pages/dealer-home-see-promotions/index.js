import jsonData from "./data.json";
// import FinancingBlock from "./FinancingBlock";

export default function DealerHomePromos() {
	//console.log(jsonData);

	return (
		<div className="container">
			<h4 className="h4 text-center mb-3" style={{ fontSize: "2.2rem" }}>
				Current In-Store Promotions & Financing Offers
			</h4>
			<ul className="list-unstyled d-flex flex-wrap">
				{jsonData.map((block, i) => {
					return (
						<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1" key={i}>
							<div className="border h-100 x d-flex flex-column ">
								<ul className="list-unstyled text-center p-2 bg-secondary">
									<li className="display-1" style={{ fontSize: "68px" }}>
										{block.term}
									</li>
									<li className="display-4">months</li>
								</ul>
								<ul className="list-unstyled px-2 pt-2">
									<li
										className="text-center font-bold mb-1"
										style={{ fontSize: "1.4rem" }}
										dangerouslySetInnerHTML={{
											__html: block.title,
										}}
									/>
									<li className="">
										<ul className="mx-auto" style={{ fontSize: "1.1rem" }}>
											{block.list.map((item, i) => {
												return (
													<li
														key={i}
														dangerouslySetInnerHTML={{
															__html: item,
														}}
													/>
												);
											})}
										</ul>
									</li>
								</ul>
								<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
									<li className="pt-1 text-center">
										<a
											class="td-payment-details btn-text"
											data-title="Details &amp; Disclosures"
											data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
											href="javascript:void(0)"
											tabindex="0">
											Click for Details
										</a>
									</li>
									<li className="text-center mt-3">
										<a
											class="btn btn-primary w-100 w-lg-auto"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											tabindex="0">
											Apply Now
										</a>
									</li>
								</ul>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="p-1">
				<a href="https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mowers">
					<img
						src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v24205ba685df807457254c9298e2f06f10f368cb/cub-days-2023/cub-days-2023-xt.jpg?version=1,684,436,020,000"
						alt=""
						className="w-100"
					/>
				</a>
			</div>
		</div>
	);
}

// <div class="see-promotions-container container">
//     <h4 class="see-promotions-title">
//         Current Promos
//     </h4>
//     <div class="see-promotions-cards-wrapper">
//         <div class="see-promotions-cards">
//             <!-- Promo Card 1 -->
//             <div class="see-promotions-card">
//                 <div class="see-promotions-card-inner">
//                     <div class="see-promotions-card-head">
//                         <img src="Dealer/Promotions/Promo-FPO1.jpg?$staticlink$" />
//                     </div>
//                     <div class="see-promotions-card-body">
//                         <div class="see-promotions-card-msg">
//                             <div class="see-promotions-card-heading">
//                                 FINANCING AVAILABLE!
// <br />Test copy for Scott. What if the copy is really long and it causes something to happen that we don't want? I really don't know...
//                             </div>
//                         </div>
//                         <div class="see-promotions-card-cta">
//                             <a class="btn btn-primary btn-sm" href="/">Apply Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <!-- Promo Card 2 -->
//             <div class="see-promotions-card">
//                 <div class="see-promotions-card-inner">
//                     <div class="see-promotions-card-head">
//                         <img src="Dealer/Promotions/Promo-FPO2.jpg?$staticlink$" />
//                     </div>
//                     <div class="see-promotions-card-body">
//                         <div class="see-promotions-card-msg">
//                             <div class="see-promotions-card-heading">
//                                 $100 OFF ZT1 & ZT2
//                             </div>
//                             <div class="see-promotions-card-subheading">
//                                 THROUGH 5-31-2020
//                             </div>
//                         </div>
//                         <div class="see-promotions-card-cta">
//                             <a class="btn btn-primary btn-sm" href="/">Shop Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <!-- Promo Card 3 -->
//             <div class="see-promotions-card">
//                 <div class="see-promotions-card-inner">
//                     <div class="see-promotions-card-head">
//                         <img src="Dealer/Promotions/Promo-FPO3.jpg?$staticlink$" />
//                     </div>
//                     <div class="see-promotions-card-body">
//                         <div class="see-promotions-card-msg">
//                             <div class="see-promotions-card-heading">
//                                 FPO PROMO HEADLINE
//                             </div>
//                         </div>
//                         <div class="see-promotions-card-cta">
//                             <a class="btn btn-primary btn-sm" href="/">Shop Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <!-- Promo Card 4 -->
//             <div class="see-promotions-card">
//                 <div class="see-promotions-card-inner">
//                     <div class="see-promotions-card-head">
//                         <img src="Dealer/Promotions/Promo-FPO4.jpg?$staticlink$" />
//                     </div>
//                     <div class="see-promotions-card-body">
//                         <div class="see-promotions-card-msg">
//                             <div class="see-promotions-card-heading">
//                                 FPO PROMO HEADLINE
//                             </div>
//                         </div>
//                         <div class="see-promotions-card-cta">
//                             <a class="btn btn-primary btn-sm" href="/">Shop Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <!-- Promo Card 5 -->
//             <div class="see-promotions-card">
//                 <div class="see-promotions-card-inner">
//                     <div class="see-promotions-card-head">
//                         <img src="Dealer/Promotions/Promo-FPO1.jpg?$staticlink$" />
//                     </div>
//                     <div class="see-promotions-card-body">
//                         <div class="see-promotions-card-msg">
//                             <div class="see-promotions-card-heading">
//                                 FPO PROMO HEADLINE
//                             </div>
//                         </div>
//                         <div class="see-promotions-card-cta">
//                             <a class="btn btn-primary btn-sm" href="/">Shop Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <!-- Carousel Dots -->
//         <div class="see-promotions-controls">
//             <div class="slide-dots slide-dots-md"></div>
//         </div>
//     </div>
// </div>
