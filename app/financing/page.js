"use client";
import Faqs from "@/components/Faqs";
import FinancingCard from "@/components/FinancingCard";
import PreQualify from "@/components/PreQualify";
import ResponsiveImage from "@/components/ResponsiveImage";

import faqsData from "./data/faqs.json";

const plansData = [
  {
    term: 6,
    title: "No interest if paid in full within 6 months <sup>1</sup>",
    text: "Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period.",
    minPurchase: "Minimum purchase $199",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 12,
    title: "No interest if paid in full within 12 months <sup>2</sup>",
    text: "Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period.",
    fee: "There is a promotional fee of $50 for this transaction.",
    minPurchase: "Minimum purchase $500",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 18,
    title: "No interest if paid in full within 18 months <sup>14</sup>",
    text: "Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period.",
    fee: "There is a promotional fee of $50 for this transaction.",
    minPurchase: "Minimum purchase $750",
    validFrom: "November 1, 2023",
    validTo: "February 29, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 24,
    title: "0% APR for 24 months with equal payments<sup>3</sup>",
    //text: "<strong>There is a promotional fee of $125 for this transaction.</strong>",
    fee: "There is a promotional fee of $150 for this transaction.",
    minPurchase: "Minimum purchase $2,000",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 36,
    title: "0% APR for 36 months with equal payments<sup>5</sup>",
    //text: "<strong>There is a promotional fee of $125 for this transaction.</strong>",
    fee: "There is a promotional fee of $150 for this transaction.",
    minPurchase: "Minimum purchase $3,000. Excludes Utility Vehicles.",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 48,
    title: "2.99% APR with 48 Monthly Payments<sup>7</sup>",
    //text: "<strong>There is a promotional fee of $125 for this transaction.</strong>",
    fee: "There is a promotional fee of $150 for this transaction.",
    minPurchase: "Minimum purchase $2,500",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
  {
    term: 60,
    title: "3.99% APR with 60 monthly payments<sup>8</sup>",
    //text: "<strong>There is a promotional fee of $125 for this transaction.</strong>",
    fee: "There is a promotional fee of $150 for this transaction.",
    minPurchase: "Minimum purchase $1,500",
    validFrom: "November 1, 2023",
    validTo: "January 31, 2024",
    detailText: "Click for details",
    buttonTitle: "Apply Now",
    buttonHref: "https://finance.consumercreditapp.com/cc/landing/cub_cadet",
  },
];

export default function Financing({}) {
  return (
    <div
      id="sdb-container"
      className="mt-4"
    >
      {/* <link
        href="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd006db48162baba2af567f7c8619194f2376165f/Financing/financing-2020.css?version=1,684,337,597,000"
        rel="stylesheet"
      /> */}
      <div className="container">
        <div className="container text-center">
          <h1>Shop Online Financing Plans</h1>
          <p>
            The offers below are available online. Additional financing offers
            may be available at your local dealer.
          </p>
          <p>
            <a
              className="font-bold"
              href="$url('Page-Show','cid','financing-view-all')$"
              title="View all online and in-store financing plans"
            >
              View All online and in-store financing plans
            </a>
          </p>
        </div>

        <div className="relative">
          <button className="rounded-full h-14 w-14 absolute top-1/2 -mt-[28px] -ml-6 z-10 xl:block hidden bg-black fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-full h-full"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </button>

          <div
            className="overflow-y-auto pb-4 mb-6 relative z-0"
            id="plans-container"
          >
            <ul className="grid gap-4 lg:gap-2 grid-flow-col auto-cols-[320px] ">
              {plansData.map((block, i) => {
                return (
                  <li
                    className=""
                    key={i}
                  >
                    <FinancingCard
                      block={block}
                      i={i}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <button className="rounded-full h-14 w-14 absolute right-0 top-1/2 -mt-[28px] -mr-6 z-10 bg-black fill-white xl:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-full h-full"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button>
        </div>

        <PreQualify />

        <ul className="grid lg:grid-cols-[1fr_minmax(24em,_30em)] mb-6">
          <li
            className="flex items-center justify-center"
            //style={{ backgroundColor: "lightgray" }}
          >
            {/* FOR FINDER */}
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  ".content-page-image h1.page-title {\n\t\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t\t}\n",
              }}
            />
            <div id="product-finder-financing">
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `(function (c, a, r, t, f, u, l) {
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
								)
										`,
                }}
              />
            </div>
          </li>
          <li className="">
            <div className="bg-secondary">
              <div className="relative">
                <ResponsiveImage
                  alt=""
                  id="become_a_dealer_desktop"
                  className="w-full h-full object-cover"
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/financing/become_a_dealer_desktop_1015x765.jpg"
                  title=""
                />
              </div>
              <div className="p-3">
                <h3>Finance In-Store</h3>
                <p>
                  We have multiple financing offers to fit your needs. Financing
                  is available at participating independent dealers.
                </p>

                <a
                  className="btn btn-primary w-full block mb-1"
                  href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers"
                  title="Find a local dealer"
                >
                  Find a local dealer
                </a>

                <a
                  className="w-full text-center block"
                  href="/financing/all-plans"
                  title="View all online and in-store financing plans"
                >
                  View all online and in-store financing plans
                </a>
              </div>
            </div>
          </li>
        </ul>

        <section className="container">
          <div className="text-center text-4xl font-bold mb-2 border-b border-neutral-500 ">
            FAQs
          </div>
          <Faqs
            faqs={faqsData}
            questions={{
              className: "font-bold text-4xl",
              style: {
                //fontSize: "1.375rem",
                //lineHeight: "1.4",
              },
            }}
            answers={{
              className: "",
              style: {
                fontSize: "0.875rem",
                lineHeight: "1.4",
              },
            }}
          />
        </section>
      </div>

      <div className="bg-secondary py-10 mt-8">
        <div className="container">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              Still have financing questions?
            </div>
            <div className="text-xl mb-2">
              We&apos;re happy to help! Call a customer service specialist{" "}
              <a
                href="tel:(877) 428-2349"
                className="text-xl font-bold"
              >
                (877) 428-2349
              </a>{" "}
              <span>8am-5pm EST</span>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="modal fade"
        id="financing-modal"
        style={{ display: "none" }}
      >
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
                    Commercial Cards please contact your Dealer.
                  </strong>
                </p>
              </div>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
              >
                <span aria-hidden="true" />
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h4 className="modal-title">&nbsp;</h4>
                  <p>
                    <strong>
                      Cub Cadet Revolving Plan Disclosures Available
                      11/1/2023-1/31/2024
                      <br />
                      Commercial Cards also available. For offer details about
                      Commercial Cards please contact your Dealer.
                    </strong>
                  </p>
                </div>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>
                    <sup>1</sup> No Interest if Paid in Full within 6 Months:
                  </strong>
                  Minimum purchase $199. To avoid interest, you must pay the
                  full promotional balance before the promotional period ends.
                  If you do not, you will be charged interest from the purchase
                  date at the standard Purchase APR. After the promotional
                  period ends, the standard Purchase APR also applies to the
                  remaining balance and the charged interest.
                  <strong>
                    Minimum monthly payments required, but they will not pay off
                    the balance in time. You must make larger payments to avoid
                    the interest.
                  </strong>
                  Advertised monthly payment, if any, is greater than your
                  required minimum payment and may exclude taxes, delivery or
                  other charges. Prior purchases excluded. Account must be in
                  good standing. Offer valid 11/1/2023-1/31/2024. Other finance
                  plans may be available. Standard account terms apply to
                  purchases that do not qualify. New accounts: standard Purchase
                  APR 29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>2</sup> No Interest if Paid in Full within 12 Months:
                  </strong>
                  Minimum purchase $500.
                  <strong>
                    There is a promotional fee of $50 for this transaction.
                  </strong>
                  To avoid interest, you must pay the full promotional balance
                  before the promotional period ends. If you do not, you will be
                  charged interest from the purchase date at the standard
                  Purchase APR. After the promotional period ends, the standard
                  Purchase APR also applies to the remaining balance and the
                  charged interest.
                  <strong>
                    Minimum monthly payments required, but they will not pay off
                    the balance in time. You must make larger payments to avoid
                    the interest.
                  </strong>
                  Advertised monthly payment, if any, is greater than your
                  required minimum payment and may exclude taxes, delivery or
                  other charges. Prior purchases excluded. Account must be in
                  good standing. Offer valid 11/1/2023-1/31/2024. Other finance
                  plans may be available. Standard account terms apply to
                  purchases that do not qualify. New accounts: standard Purchase
                  APR 29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>14</sup> No Interest if Paid in Full within 18 Months:
                  </strong>
                  Offer valid on 2X and 3X snow blowers. Minimum purchase $750.
                  <strong>
                    There is a promotional fee of $50 for this transaction.
                  </strong>
                  To avoid interest, you must pay the full promotional balance
                  before the promotional period ends. If you do not, you will be
                  charged interest from the purchase date at the standard
                  Purchase APR. After the promotional period ends, the standard
                  Purchase APR also applies to the remaining balance and the
                  charged interest.
                  <strong>
                    Minimum monthly payments required, but they will not pay off
                    the balance in time. You must make larger payments to avoid
                    the interest.
                  </strong>
                  Advertised monthly payment, if any, is greater than your
                  required minimum payment and may exclude taxes, delivery or
                  other charges. Prior purchases excluded. Account must be in
                  good standing. Offer valid 11/1/2023-2/29/2024. Other finance
                  plans may be available. Standard account terms apply to
                  purchases that do not qualify. New accounts: standard Purchase
                  APR 29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>3</sup> 0% APR for 24 Months with Equal Payments:
                  </strong>
                  Minimum purchase $2,000.
                  <strong>
                    There is a promotional fee of $150 for this transaction.
                  </strong>
                  0% APR from date of eligible purchase until paid in full.
                  Monthly payment is the purchase amount divided by the number
                  of months in the offer. Last payment may vary due to rounding.
                  On-time payments will pay off the promotional balance.
                  Advertised monthly payment, if any, may exclude taxes,
                  delivery, or other charges. Other transactions and charges
                  affect total monthly payment amount. Prior purchases excluded.
                  Account must be in good standing. Offer valid
                  11/1/2023-1/31/2024. Standard account terms apply to purchases
                  that do not qualify. New accounts: standard Purchase APR
                  29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>4</sup> Standard Purchase APR and Payments
                  </strong>
                  Standard financing terms apply. Interest will be charged on
                  the unpaid purchase balance at the APR for standard Purchases.
                  New accounts: standard Purchase APR 29.99%. Minimum interest
                  charge $1. Existing accounts, see your Cardholder Agreement
                  for applicable terms. Subject to credit approval. Cub Cadet
                  financing account issued by TD Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>5</sup> 0% APR for 36 Months with Equal Payments:
                  </strong>
                  Minimum purchase $3,000. Excludes Utility Vehicles.
                  <strong>
                    There is a promotional fee of $150 for this transaction.
                  </strong>
                  0% APR from date of eligible purchase until paid in full.
                  Monthly payment is the purchase amount divided by the number
                  of months in the offer. Last payment may vary due to rounding.
                  On-time payments will pay off the promotional balance.
                  Advertised monthly payment, if any, may exclude taxes,
                  delivery, or other charges. Other transactions and charges
                  affect total monthly payment amount. Prior purchases excluded.
                  Account must be in good standing. Offer valid
                  11/1/2023-1/31/2024. Standard account terms apply to purchases
                  that do not qualify. New accounts: standard Purchase APR
                  29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>7</sup> 2.99% APR with 48 Monthly Payments:
                  </strong>
                  Minimum purchase $1,500.
                  <strong>
                    There is a promotional fee of $150 for this transaction.
                  </strong>
                  2.99% APR from date of eligible purchase until paid in full.
                  Monthly payment amount equals the purchase amount and
                  estimated interest for the length of the offer divided by the
                  number of months in the offer. Last payment may vary due to
                  rounding. On-time payments will pay the offer balance in full.
                  Advertised monthly payment, if any, may exclude taxes,
                  delivery, or other charges. Other transactions and charges
                  affect the total monthly payment amount. Prior purchases
                  excluded. Account must be in good standing. Offer valid
                  11/1/2023-1/31/2024. Standard account terms apply to purchases
                  that do not qualify. New accounts: standard Purchase APR
                  29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
                <p>
                  <strong>
                    <sup>8</sup> 3.99% APR with 60 Monthly Payments:
                  </strong>
                  Minimum purchase $1,500.
                  <strong>
                    There is a promotional fee of $150 for this transaction.
                  </strong>
                  3.99% APR from date of eligible purchase until paid in full.
                  Monthly payment amount equals the purchase amount and
                  estimated interest for the length of the offer divided by the
                  number of months in the offer. Last payment may vary due to
                  rounding. On-time payments will pay the offer balance in full.
                  Advertised monthly payment, if any, may exclude taxes,
                  delivery, or other charges. Other transactions and charges
                  affect the total monthly payment amount. Prior purchases
                  excluded. Account must be in good standing. Offer valid
                  11/1/2023-1/31/2024. Standard account terms apply to purchases
                  that do not qualify. New accounts: standard Purchase APR
                  29.99%. Minimum interest charge $1. Existing accounts, see
                  your Cardholder Agreement for applicable terms. Subject to
                  credit approval. Cub Cadet financing account issued by TD
                  Bank, N.A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
