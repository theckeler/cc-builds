import Image from "next/image";
import Faqs from "@/c/Faqs";
import jsonData from "./data.json";

const Financing = () => {
	const containerCSS = "container mb-3 pb-3 border-bottom";
	const buttonCSS =
		"ml-auto btn bg-secondary d-flex align-items-center justify-content-center p-1 ";

	return (
		<div>
			<link
				href="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd006db48162baba2af567f7c8619194f2376165f/Financing/financing-2020.css?version=1,684,337,597,000"
				rel="stylesheet"
			/>
			<div className="of-plans container mx-auto" id="of-plans">
				<div className="container shop-financing container ">
					<div className="row">
						<div className="plb-group-heading col-12 col-lg-8 offset-lg-2 text-center">
							<h1>Shop Online Financing Plans</h1>
							<p>
								The offers below are available online. Additional financing
								offers may be available at your local dealer.
							</p>
							<p>
								<a
									className="link-primary"
									href="$url('Page-Show','cid','financing-view-all')$"
									title="View all online and in-store financing plans">
									View All online and in-store financing plans{" "}
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="card-deckz group">
					<div className="flo">
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											6 <span>months</span>
										</h3>
									</div>
									<div className="back">
										<h4 className="card-title">
											No interest if paid in full within 6 months <sup>1</sup>
										</h4>
										<p className="card-text">
											Interest will be charged from the purchase date if the
											purchase balance is not paid in full by the end of the
											promotional period.
										</p>
										<p className="card-text">Minimum purchase $199.</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											className="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											Click for details{" "}
										</a>{" "}
										<a
											className="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											{" "}
											Apply Now{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											12 <span>months</span>
										</h3>
									</div>
									<div className="back">
										<h4 className="card-title">
											No interest if paid in full within 12 months <sup>2</sup>
										</h4>
										<p className="card-text">
											Interest will be charged from the purchase date if the
											purchase balance is not paid in full by the end of the
											promotional period.
										</p>
										<p className="card-text">Minimum purchase $500</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											className="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											Click for details{" "}
										</a>{" "}
										<a
											className="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											{" "}
											Apply Now{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											24 <span>months</span>
										</h3>
									</div>
									<div className="back">
										<h4 className="card-title">
											0% APR for 24 months with equal payments <sup>3</sup>
										</h4>
										&nbsp;
										<p className="card-text">
											<strong>
												There is a promotional fee of $125 for this transaction.{" "}
											</strong>
										</p>
										&nbsp;
										<p className="card-text">Minimum purchase $2,000</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											className="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											{" "}
											Click for details{" "}
										</a>{" "}
										<a
											className="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											{" "}
											Apply Now{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											36 <span>months</span>
										</h3>
									</div>
									<div className="back">
										<h4 className="card-title">
											0% APR for 36 months with equal payments <sup>5</sup>
										</h4>
										&nbsp;
										<p className="card-text">
											<strong>
												There is a promotional fee of $125 for this transaction.{" "}
											</strong>
										</p>
										<p className="card-text">
											Minimum purchase $3,000. Excludes Utility Vehicles.
										</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											className="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											Click for details{" "}
										</a>{" "}
										<a
											className="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											{" "}
											Apply Now{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											48 <span>months</span>
										</h3>
									</div>

									<div className="back">
										<h4 className="card-title">
											2.99% APR for 48 months with equal payments<sup>8</sup>
										</h4>
										&nbsp;
										<p className="card-text">
											<strong>
												There is a promotional fee of $125 for this transaction.
											</strong>
										</p>
										&nbsp;
										<p className="card-text">Minimum purchase $1,500</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											class="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											Click for details
										</a>{" "}
										<a
											class="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											Apply Now
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											60 <span>months</span>
										</h3>
									</div>

									<div className="back">
										<h4 className="card-title">
											3.99% APR for 60 months with equal payments<sup>9</sup>
										</h4>
										&nbsp;
										<p className="card-text">
											<strong>
												There is a promotional fee of $125 for this transaction.
											</strong>
										</p>
										&nbsp;
										<p className="card-text">Minimum purchase $1,500</p>
										<p className="card-text">
											Valid from: <span>May 1, 2023 - July 31, 2023</span>
										</p>
										<a
											class="btn-text"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											Click for details
										</a>{" "}
										<a
											class="btn btn-primary btn-sm"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											title="Apply Now">
											Apply Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid plan-fis">
				<div className="row">
					<div className="col-md-8">
						<style
							type="text/css"
							dangerouslySetInnerHTML={{
								__html:
									".content-page-image h1.page-title {\n\t\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t\t}\n",
							}}
						/>
						<div id="product-finder-financing">
							{/* <script>
								(function (c, a, r, t, f, u, l) {
								(c[u] =
									c[u] ||
									function () {
										(c[u].q = c[u].q || []).push(arguments);
									}),
									(l = a.createElement(r)),
									(l.async = 1),
									(l.id = u + "scr"),
									(l.src = f),
									a[t].appendChild(l);
								})(
									window,
									document,
									"script",
									"body",
									"//embed.cartfulsolutions.com/cubcadet-finance-finder/recommendation.min.js",
									"cfl672"
								);
							</script> */}
						</div>
						<style
							type="text/css"
							dangerouslySetInnerHTML={{
								__html:
									".container {\n\t\t\t\t\t\tpadding-left: 0px !important;\n\t\t\t\t\t\tpadding-right: 0px !important;\n\t\t\t\t\t}\n\t\t\t\t\t.content-page-image {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n",
							}}
						/>
					</div>
					<div className="col-md-4">
						<div className="fis">
							<div className="wrap">
								<div className="photo">
									<img
										alt="Finance In-Store"
										className="img-fluid"
										data-type="defaultimage"
										src="Financing/become_a_dealer_desktop_1015x765.jpg?$staticlink$"
										title=""
									/>
								</div>
								<div className="copy">
									<h3>Finance In-Store</h3>
									<p>
										We have multiple financing offers to fit your needs.
										Financing is available at participating independent dealers.
									</p>
									<p>
										<a
											className="btn btn-primary"
											href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers"
											title="Find a local dealer">
											Find a local dealer{" "}
										</a>
									</p>
									<p>
										<a
											className="normal"
											href="/financing/all-plans"
											title="View all online and in-store financing plans">
											View all online and in-store financing plans{" "}
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="ffaqs">
				<h3>FAQs</h3>
				<dl>
					<dt className="question">
						How long does the online application take?
					</dt>
					<dd>
						<p>
							The application takes only minutes, and most application decisions
							are returned within seconds.
						</p>
					</dd>
					<dt className="question">
						Is there an annual fee with the Cub Cadet credit card?
					</dt>
					<dd>
						<p>There is no annual fee to carry the Cub Cadet credit card.</p>
					</dd>
					<dt className="question">
						Can I apply for the Cub Cadet credit card by mail?
					</dt>
					<dd>
						<p>
							There is no mail-in application. Applications can be completed
							online or at your local participating dealer.
						</p>
					</dd>
					<dt className="question">
						How do I make payments on my Cub Cadet credit card account?
					</dt>
					<dd>
						<p>
							You can make payments on your Cub Cadet credit card account in 3
							convenient ways:
						</p>
						<ol>
							<li>
								Online with TD's Online Account Management system at{" "}
								<a href="https://www.myonlineaccount.net">
									{" "}
									www.myonlineaccount.net{" "}
								</a>
							</li>
							<li>
								Via phone at{" "}
								<a href="tel:18883826665" title="Call 888-382-6665">
									{" "}
									1-888-382-6665{" "}
								</a>
							</li>
							<li>
								Via mail: Cub Cadet, PO BOX 100114, Columbia SC 29202-3114
							</li>
						</ol>
					</dd>
					<dt className="question">
						How do I contact customer service regarding my Cub Cadet credit card
						account?
					</dt>
					<dd>
						<p>
							The customer service number for your Cub Cadet credit card account
							is{" "}
							<a href="tel:18667024074" title="Call 866-702-4074">
								1-866-702-4074
							</a>{" "}
							.
						</p>
					</dd>
					<dt className="question">
						I am a commercial customer. Can I apply online?
					</dt>
					<dd>
						<p>
							No, commercial customers can only apply at your local
							participating dealer.
						</p>
					</dd>
				</dl>
			</section>
			<div className="container-fluid questions">
				<div className="row">
					<div className="plb-group-heading col-12 col-lg-8 offset-lg-2 text-center">
						<h3>Still have financing questions?</h3>
						<h6>
							We're happy to help! Call a customer service specialist{" "}
							<span>(877) 428-2349</span> <span>8am-5pm EST</span>
						</h6>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="modal fade"
				id="financing-modal"
				style={{ display: "none" }}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<div>
								<h4 className="modal-title">&nbsp;</h4>
								<p>
									<strong>
										Cub Cadet Revolving Plan Disclosures Available
										5/1/2023-7/31/2023
										<br />
										Commercial Cards also available. For offer details about
										Commercial Cards please contact your Dealer.{" "}
									</strong>
								</p>
							</div>
							<button
								aria-label="Close"
								className="close"
								data-dismiss="modal"
								type="button">
								<span aria-hidden="true" />
							</button>
						</div>
						<div className="modal-body">
							<p>
								<strong>
									<sup>1</sup> No Interest if Paid in Full within 6 Months:{" "}
								</strong>{" "}
								Minimum purchase $199. To avoid interest, you must pay the full
								promotional balance before the promotional period ends. If you
								do not, you will be charged interest from the purchase date at
								the standard Purchase APR. After the promotional period ends,
								the standard Purchase APR also applies to the remaining balance
								and the charged interest.{" "}
								<strong>
									{" "}
									Minimum monthly payments required, but they will not pay off
									the balance in time. You must make larger payments to avoid
									the interest.{" "}
								</strong>{" "}
								Advertised monthly payment, if any, is greater than your
								required minimum payment and may exclude taxes, delivery or
								other charges. Prior purchases excluded. Account must be in good
								standing. Offer valid 5/1/2023-7/31/2023. Other finance plans
								may be available. Standard account terms apply to purchases that
								do not qualify. New accounts: standard Purchase APR 29.99%.
								Minimum interest charge $1. Existing accounts, see your
								Cardholder Agreement for applicable terms. Subject to credit
								approval. Cub Cadet financing account issued by TD Bank, N.A.
							</p>
							<p>
								<strong>
									<sup>2</sup> No Interest if Paid in Full within 12 Months:{" "}
								</strong>{" "}
								Minimum purchase $500. To avoid interest, you must pay the full
								promotional balance before the promotional period ends. If you
								do not, you will be charged interest from the purchase date at
								the standard Purchase APR. After the promotional period ends,
								the standard Purchase APR also applies to the remaining balance
								and the charged interest.{" "}
								<strong>
									{" "}
									Minimum monthly payments required, but they will not pay off
									the balance in time. You must make larger payments to avoid
									the interest.{" "}
								</strong>{" "}
								Advertised monthly payment, if any, is greater than your
								required minimum payment and may exclude taxes, delivery or
								other charges. Prior purchases excluded. Account must be in good
								standing. Offer valid 5/1/2023-7/31/2023. Other finance plans
								may be available. Standard account terms apply to purchases that
								do not qualify. New accounts: standard Purchase APR 29.99%.
								Minimum interest charge $1. Existing accounts, see your
								Cardholder Agreement for applicable terms. Subject to credit
								approval. Cub Cadet financing account issued by TD Bank, N.A.
							</p>
							{/*<p><strong><sup>14</sup> No Interest if Paid in Full within 18 Months:</strong> Offer valid on 2X and 3X snowthrowers. Minimum purchase $750. To avoid interest, you must pay the full promotional balance before the promotional period ends. If you do not, you will be charged interest from the purchase date at the standard Purchase APR. After the promotional period ends, the standard Purchase APR also applies to the remaining balance and the charged interest. <strong>Minimum monthly payments required, but they will not pay off the balance in time. You must make larger payments to avoid the interest.</strong> Advertised monthly payment, if any, is greater than your required minimum payment and may exclude taxes, delivery or other charges. Prior purchases excluded. Account must be in good standing. Offer valid 10/1/22-2/28/23. Other finance plans may be available. Standard account terms apply to purchases that do not qualify. New accounts: standard Purchase APR 29.99%. Minimum interest charge $1. Existing accounts, see your Cardholder Agreement for applicable terms. Subject to credit approval. Cub Cadet financing account issued by TD Bank, N.A.</p>*/}
							<p>
								<strong>
									<sup>3</sup> 0% APR for 24 Months with Equal Payments:{" "}
								</strong>{" "}
								Minimum purchase $2,000.{" "}
								<strong>
									{" "}
									There is a promotional fee of $125 for this transaction.{" "}
								</strong>{" "}
								0% APR from date of eligible purchase until paid in full.
								Monthly payment is the purchase amount divided by the number of
								months in the offer. Last payment may vary due to rounding.
								On-time payments will pay off the promotional balance.
								Advertised monthly payment, if any, may exclude taxes, delivery,
								or other charges. Other transactions and charges affect total
								monthly payment amount. Prior purchases excluded. Account must
								be in good standing. Offer valid 5/1/2023-7/31/2023. Standard
								account terms apply to purchases that do not qualify. New
								accounts: standard Purchase APR 29.99%. Minimum interest charge
								$1. Existing accounts, see your Cardholder Agreement for
								applicable terms. Subject to credit approval. Cub Cadet
								financing account issued by TD Bank, N.A.
							</p>
							<p>
								<strong>
									<sup>5</sup> 0% APR for 36 Months with Equal Payments:{" "}
								</strong>{" "}
								Minimum purchase $3,000. Excludes Utility Vehicles.{" "}
								<strong>
									{" "}
									There is a promotional fee of $125 for this transaction.{" "}
								</strong>{" "}
								0% APR from date of eligible purchase until paid in full.
								Monthly payment is the purchase amount divided by the number of
								months in the offer. Last payment may vary due to rounding.
								On-time payments will pay off the promotional balance.
								Advertised monthly payment, if any, may exclude taxes, delivery,
								or other charges. Other transactions and charges affect total
								monthly payment amount. Prior purchases excluded. Account must
								be in good standing. Offer valid 5/1/2023-7/31/2023. Standard
								account terms apply to purchases that do not qualify. New
								accounts: standard Purchase APR 29.99%. Minimum interest charge
								$1. Existing accounts, see your Cardholder Agreement for
								applicable terms. Subject to credit approval. Cub Cadet
								financing account issued by TD Bank, N.A.
							</p>
							<p>
								<strong>
									<sup>7</sup>2.99% APR with 48 Monthly Payments:
								</strong>{" "}
								Minimum purchase $1,500.{" "}
								<strong>
									There is a promotional fee of $125 for this transaction.
								</strong>{" "}
								2.99% APR from date of eligible purchase until paid in full.
								Monthly payment amount equals the purchase amount and estimated
								interest for the length of the offer divided by the number of
								months in the offer. Last payment may vary due to rounding.
								On-time payments will pay the offer balance in full. Advertised
								monthly payment, if any, may exclude taxes, delivery, or other
								charges. Other transactions and charges affect the total monthly
								payment amount. Prior purchases excluded. Account must be in
								good standing. Limited time offer. Standard account terms apply
								to purchases that do not qualify. New accounts: standard
								Purchase APR 29.99%. Minimum interest charge $1. Existing
								accounts, see your Cardholder Agreement for applicable terms.
								Subject to credit approval. Cub Cadet financing account issued
								by TD Bank, N.A.
							</p>
							<p>
								<strong>
									<sup>8</sup>3.99% APR with 60 Monthly Payments:
								</strong>{" "}
								Minimum purchase $1,500.{" "}
								<strong>
									There is a promotional fee of $125 for this transaction.
								</strong>{" "}
								3.99% APR from date of eligible purchase until paid in full.
								Monthly payment amount equals the purchase amount and estimated
								interest for the length of the offer divided by the number of
								months in the offer. Last payment may vary due to rounding.
								On-time payments will pay the offer balance in full. Advertised
								monthly payment, if any, may exclude taxes, delivery, or other
								charges. Other transactions and charges affect the total monthly
								payment amount. Prior purchases excluded. Account must be in
								good standing. Limited time offer. Standard account terms apply
								to purchases that do not qualify. New accounts: standard
								Purchase APR 29.99%. Minimum interest charge $1. Existing
								accounts, see your Cardholder Agreement for applicable terms.
								Subject to credit approval. Cub Cadet financing account issued
								by TD Bank, N.A.
							</p>
							<p>
								<strong>
									<sup>4</sup> Standard Purchase APR and Payments{" "}
								</strong>{" "}
								Standard financing terms apply. Interest will be charged on the
								unpaid purchase balance at the APR for standard Purchases. New
								accounts: standard Purchase APR 29.99%. Minimum interest charge
								$1. Existing accounts, see your Cardholder Agreement for
								applicable terms. Subject to credit approval. Cub Cadet
								financing account issued by TD Bank, N.A.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Financing;
