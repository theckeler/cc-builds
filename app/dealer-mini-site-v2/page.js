"use client";
import { useState } from "react";

import mainJSON from "./data/main.json";

import ToggleTab from "@/components/ToggleTab";
import StickyMenu from "./components/StickyMenu";
import Phone from "@/components/Phone";
import Website from "@/components/Website";
import Address from "@/components/Address";
import Social from "@/components/Social";
import DealerInfo from "./components/DealerInfo";
import Menu from "./components/Menu";
import Faqs from "@/components/Faqs";
import ProductCard from "@/components/Product/Card";
import FinancingCard from "./components/FinancingCard";

import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import BookService from "./components/BookService";
import IconCubDays from "@/images/IconCubDays.js";

export default function DealerMiniSite() {
	let dealer = mainJSON.dealers;
	const [currentDealer, setCurrentDealer] = useState(0);

	const tabSpacing = "mt-0 mt-xl-2";

	return (
		<>
			<Menu
				setCurrentDealer={setCurrentDealer}
				button={{
					style: { outline: 0, minWidth: "48px", minHeight: "48px" },
					className: "bg-secondary border-0 mr-1 mb-1 w-100",
				}}
			/>

			<div className="list-unstyled mtd-page py-2 mx-0 mx-lg-auto py-xl-5 container px-0 d-flex flex-column flex-column-reverse flex-xl-row">
				<StickyMenu dealer={dealer[currentDealer]} />

				<div className="col-12 col-xl-8 px-0 px-xl-2 align-self-start">
					<DealerInfo dealer={dealer[currentDealer]} />

					<ToggleTab
						className={`border p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						id="book-service"
						title="Book Service"
						Component={BookService}
					/>

					<div
						className="mt-0 mt-xl-2 border p-2 mt-0 mt-xl-2"
						id="cub-days"
						style={{ scrollMarginTop: 16 }}>
						<h3 className="position-relative flex mb-0 mb-xl-1">Cub Days</h3>
						<div className="">
							<div>
								<a href="#top">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x={0}
										y={0}
										version="1.1"
										viewBox="0 0 1134 218.7">
										<path
											d="M0 0v164.9l565.2 53.8 568.8-53.9V0z"
											fill="#FFC20F"
										/>
										<path d="m541 46.7 3.5-8h-5l-7.8 17.4h-3.2c-.6 0-.8-.6-.5-1.2.4-.9 3.9-8.5 3.9-8.5h-5.3s-4.3 9.6-4.4 9.8h-1.9c-.6 0-1-.5-.7-1.2.4-.9 3.9-8.5 3.9-8.5H518l-4.1 9.2s-.1.2-.2.6h-15.1c-2.3 0-3.9-2-2.9-3.9 3-6.2 10.8-9.2 13.5-9 1.2.1 1 1.1.1 2.2-.2.3 0 .6.2.6h5.1c2.1-3.1 1.9-8.3-4.7-7.8-10.9 1-20.1 9.7-20 16.5 0 3.2 3.4 6.4 7.3 6.4h16.3l.7-1.7c.5.7 1.5 1.7 3 1.7h4.6s.6-1.3.8-1.7c.4.6 1.4 1.7 3 1.7h8.8l.5-1c3.1 2.5 9.2 1.8 12-5 2.1-4.7-.6-9.7-5.9-8.6zm-3.9 9.7c-.2-.1-.2-.4-.1-.6.2-.5 1.9-4.4 2.2-4.9.1 0 .2-.1.2-.1 1.3-.6 3.7-.1 3.6 2.2-.2 1.4-2.4 5.2-5.9 3.4zm112.4 2.2c0-.5-.3-.7-.8-.7h-.9v2.4h.4v-1h.4l.6 1h.4l-.7-1.1c.3 0 .6-.1.6-.6zm-1 .4h-.4v-.8h.5c.3 0 .5 0 .5.4s-.3.4-.6.4z" />
										<path d="M648.5 57.1c-1.1 0-2.1.9-2.1 2 0 1.2.9 2.1 2.1 2.1 1.1 0 2-.9 2-2.1 0-1.1-.9-2-2-2zm0 3.8c-1 0-1.7-.8-1.7-1.8s.7-1.7 1.7-1.7c.9 0 1.7.8 1.7 1.7 0 1-.8 1.8-1.7 1.8zm-13-6.3c.3-.8 4-8.9 4-8.9h7.9c.2 0 .4-.1.5-.3 0-.1 1.7-3.8 1.7-3.8H641l1.2-2.9H637l-1.1 2.5c-.1.1-.2.4-.7.4h-2.7l-1.8 4.1h3.5l-4.5 10.4h-10.1c-.2 0-2.1.1-2.2-1.5h9.3c.4 0 .8-.3 1-.6 1.2-2.5.9-6.3-2.7-7.5-2.9-.9-7.1 0-9.7 2.7-1.6 1.6-3.2 4.4-3.2 7h-2.5c-1 0-1.3-.8-.9-1.5.4-.8 7-15.9 7-15.9h-5.2l-4 8.6c-3-2.3-12.7.1-12.8 8.8h-2.8c-1 0-1.2-.7-.9-1.5.3-.8 3.7-8.2 3.7-8.2h-5.3l-.5 1c-4.1-2.7-12.9.9-13.1 8.7h-14.2c-2.3 0-3.8-2-2.9-3.9 3-6.2 10.8-9.2 13.5-9 1.2.1 1 1.1.1 2.2-.2.3 0 .6.2.6h5.1c2.1-3.1 1.9-8.3-4.7-7.8-10.9 1-20.1 9.7-20 16.5 0 3.2 3.3 6.3 7.3 6.4h16.4l.7-1.5c3.1 3.1 7 1.4 8.2-.4.5 1.2 2.2 1.9 3.1 1.9h6.2l.9-2.1c2.7 3.5 6.8 2.5 8.4.2.8 1.3 2.2 1.9 2.8 1.9h6.8l.8-1.9c1.4 1.8 3.1 1.9 3.5 1.9h12.3l.7-1.6c.3.6 1.8 1.6 3.4 1.6h9.4l2.1-5h-8.8c-.7 0-.9-.7-.6-1.6zm-17.2-3c1.1-1.9 4.8-2.8 5.7-.7.1.1.1.5.1.7 0 .1 0 .2-.2.2h-5.5s-.2 0-.1-.2zm-31.5-.2c-.5 1.2-1.8 4-2.2 5-1.2.8-4 .4-3.8-2.1.1-1.5 2.4-5.3 5.9-3.5.2.1.2.4.1.6zm18.5 0c-.5 1.2-1.8 4-2.2 5-1.2.8-4 .4-3.8-2.1.1-1.5 2.4-5.3 5.9-3.5.2.1.1.4.1.6zM496.1 81.6h-37.4V154h37.4c6.6 0 12-5.3 12-12V93.6c-.1-6.6-5.4-12-12-12zm-3.8 57c0 .7-.4 1.1-1.1 1.1h-16.7V96h16.7c.7 0 1.1.4 1.1 1.1v41.5zm47.7-57L516.3 154h16.1l4.3-14.3H559l4.6 14.3h16.1l-23.8-72.4H540zm1.4 44.2 6.5-24.1 6.5 24.1h-13zm62.3-13.8-12.2-30.4h-16.6l20.8 48.1V154h15.9v-24.3l20.9-48.1h-16.7zm75.4 1.9c-14.3-4-20.5-5.8-21.6-6.1-.7-.2-1.2-.5-1.2-1.4v-9.3c0-.7.4-1.1 1.1-1.1H672c.7 0 1.1.4 1.1 1.1v6.7l15.4-2.6v-7.6c0-6.6-5.3-12-12-12h-23.9c-6.6 0-12 5.3-12 12v16.2c0 6.6 3.7 9.5 10.1 11.3 13.5 3.8 19.2 5.4 21.1 6 .9.2 1.4.7 1.4 1.4v10.1c0 .7-.4 1.1-1.1 1.1h-15.2c-.7 0-1.1-.4-1.1-1.1v-7.3l-15.4 2.6v8.2c0 6.6 5.3 12 12 12H677c6.6 0 12-5.3 12-12v-16.8c-.1-6.7-3.7-9.7-9.9-11.4zM267 120.7c-3.6-1-5.2-1.5-5.5-1.5-.2-.1-.3-.1-.3-.4v-2.4c0-.2.1-.3.3-.3h3.7c.2 0 .3.1.3.3v1.7l3.9-.7v-1.9c0-1.7-1.4-3-3-3h-6.1c-1.7 0-3 1.4-3 3v4.1c0 1.7.9 2.4 2.6 2.9 3.4 1 4.9 1.4 5.4 1.5.2.1.4.2.4.4v2.6c0 .2-.1.3-.3.3h-3.9c-.2 0-.3-.1-.3-.3v-1.9l-3.9.7v2.1c0 1.7 1.4 3 3 3h6.2c1.7 0 3-1.4 3-3v-4.3c0-1.7-1-2.4-2.5-2.9zm10.4-8.2-6 18.4h4.1l1.1-3.6h5.7l1.2 3.6h4.1l-6.1-18.4h-4.1zm.3 11.2 1.7-6.1 1.7 6.1h-3.4zm16.2-11.2h-4v18.4h11.3v-3.6h-7.3zm14.1 10.8h6.8v-3.6H308v-3.5h7.4v-3.7H304v18.4h11.4v-3.6H308zm20.4-2.6c-3.6-1-5.2-1.5-5.5-1.5-.2-.1-.3-.1-.3-.4v-2.4c0-.2.1-.3.3-.3h3.7c.2 0 .3.1.3.3v1.7l3.9-.7v-1.9c0-1.7-1.4-3-3-3h-6.1c-1.7 0-3 1.4-3 3v4.1c0 1.7.9 2.4 2.6 2.9 3.4 1 4.9 1.4 5.4 1.5.2.1.4.2.4.4v2.6c0 .2-.1.3-.3.3h-3.9c-.2 0-.3-.1-.3-.3v-1.9l-3.9.7v2.1c0 1.7 1.4 3 3 3h6.2c1.7 0 3-1.4 3-3v-4.3c0-1.7-.9-2.4-2.5-2.9zm492.3 2.6h6.8v-3.6h-6.8v-3.5h7.4v-3.7h-11.4v18.4h11.4v-3.6h-7.4zm16.6 1.7-3.5-12.5h-4l5.6 18.4h3.9l5.6-18.4h-4zm13.8-1.7h6.8v-3.6h-6.8v-3.5h7.4v-3.7h-11.4v18.4h11.5v-3.6h-7.5zm20.8 0-6.2-10.8h-3.8v18.4h3.8v-10.7l6.2 10.7h3.8v-18.4h-3.8zm6.5-10.8v3.7h4.7v14.7h4v-14.7h4.8v-3.7z" />
										<path
											d="M348.3 146.6c17.8 8.1 35.6 3.7 53.4 3.3v-49.5c-17.8.4-35.6 4.8-53.4-3.3 3.8 10.5 7.6 20.5 11.4 30-3.8 7-7.6 13.5-11.4 19.5z"
											fill="#fff"
										/>
										<path
											d="M376 113.8s-9.7 1-22.3-3.9m40.4 31.9c-15.2-4.5-24.8 1.3-39.7-5.2"
											fill="#FFC20F"
										/>
										<path d="M401.7 97.5c-4.3.1-8.7.4-13 .8-13.6 1-26.3 2-39.2-3.8l-6.2-2.8 2.3 6.4c3.5 9.6 7 19.1 10.9 28.8-3.8 6.8-7.2 12.8-10.6 18.1l-1.8 2.8 3 1.4c8.8 4 17.7 5.1 26.3 5.1 5.3 0 10.5-.4 15.7-.8 4.2-.3 8.5-.7 12.6-.8l2.8-.1V97.4l-2.8.1zm-12.5 6.6c3.2-.2 6.4-.5 9.7-.7v31.8c-6.4 0-15.1-.6-20 .2-1.2.2-1.6.9-1.8 1.7h-1.5c-5.6.1-10.9.2-17.1-1.9 1.2-2.1 2.4-4.2 3.6-6.5.2 0 .4.1.6.1 4.9.7 8.5 1.2 15.5 1.2v-5.8c-6.7 0-9.9-.4-14.8-1.1-.8-.1-1.6-.2-2.5-.3l-3.3-8.4c7.1 2.1 12.8 2.4 16 2.4 1.5 0 2.4-.1 2.5-.1l-.6-5.8c-.1 0-9 .8-20.6-3.6-.7-1.8-1.3-3.5-2-5.3 12.5 3.9 24.6 3 36.3 2.1zm-.5 43.7c-12.5 1-24.3 1.9-36.2-2.5 1-1.6 2-3.3 3-5 7.6 2.8 14 2.7 20.2 2.6 2.9 0 5.7-.1 8.7.1 3.6 1.4 7.4 2.8 11.1 4.3-2.2.1-4.5.3-6.8.5z" />
										<path
											d="M377.5 136.5c17.8-.6 35.6-4.8 53.4 4V91c-17.8-8.7-35.6-4.6-53.4-4v49.5z"
											fill="#fff"
										/>
										<path d="m433.9 145.1-4.2-2c-13.3-6.5-26.5-5.5-40.5-4.4-3.8.3-7.7.6-11.6.7l-3 .1V84.3l2.8-.1c3.8-.1 7.6-.4 11.3-.7 14.1-1.1 28.8-2.2 43.5 5l1.6.8v55.8zm-29.4-13c7.8 0 15.7.9 23.6 4V92.9c-12.7-5.7-25.5-4.7-38.9-3.7-2.9.2-5.8.5-8.8.6v43.7c2.8-.2 5.6-.4 8.3-.6 5.2-.4 10.5-.8 15.8-.8z" />
										<path d="M421.4 104.2c-.1-.2-.3-.4-.5-.4h-12l-3.7-11.4c-.1-.5-.9-.5-1.1 0l-3.7 11.4h-12c-.2 0-.5.2-.5.4-.1.2 0 .5.2.6l9.7 7.1-3.7 11.4c-.1.2 0 .5.2.6.1.1.2.1.3.1s.2 0 .3-.1l9.7-7.1 9.7 7.1c.2.1.5.1.7 0s.3-.4.2-.6l-3.7-11.4 9.7-7.1c.2-.1.3-.4.2-.6z" />
										<path
											d="M799.2 146.6c-17.8 8.1-35.6 3.7-53.4 3.3v-49.5c17.8.4 35.6 4.8 53.4-3.3-3.8 10.5-7.6 20.5-11.4 30 3.8 7 7.6 13.5 11.4 19.5z"
											fill="#fff"
										/>
										<path
											d="M771.5 113.8s9.7 1 22.3-3.9m-40.3 31.9c15.2-4.5 24.8 1.3 39.7-5.2"
											fill="#FFC20F"
										/>
										<path d="M742.9 97.4v55.3l2.8.1c4.2.1 8.5.4 12.6.8 5.2.4 10.4.8 15.7.8 8.7 0 17.5-1.1 26.3-5.1l3-1.4-1.8-2.8c-3.4-5.4-6.9-11.3-10.6-18.1 3.9-9.8 7.4-19.2 10.9-28.8l2.3-6.4-6.2 2.8c-12.9 5.8-25.7 4.9-39.2 3.8-4.2-.3-8.6-.7-13-.8l-2.8-.2zm51.4 4.7c-.6 1.8-1.3 3.5-2 5.3-11.5 4.3-20.5 3.6-20.6 3.6l-.6 5.8c.1 0 1 .1 2.5.1 3.1 0 8.9-.4 16-2.4-1.1 2.8-2.1 5.6-3.3 8.4-.9.1-1.7.2-2.5.3-4.9.7-8.1 1.1-14.8 1.1v5.8c7.1 0 10.6-.5 15.5-1.2.2 0 .4-.1.6-.1 1.2 2.3 2.4 4.4 3.6 6.5-6.2 2.1-11.5 2-17.1 1.9h-1.5c-.2-.8-.6-1.5-1.8-1.7-4.9-.8-13.6-.2-20-.2v-31.8c3.2.2 6.5.4 9.7.7 12.1.8 24.2 1.7 36.3-2.1zM752 147.3c3.7-1.5 7.5-2.9 11.1-4.3 3-.2 5.8-.2 8.7-.1 6.2.1 12.6.2 20.2-2.6 1 1.7 2 3.4 3 5-11.8 4.4-23.7 3.5-36.2 2.5-2.2-.2-4.5-.4-6.8-.5z" />
										<path
											d="M770 136.5c-17.8-.6-35.6-4.8-53.4 4V91c17.8-8.7 35.6-4.6 53.4-4v49.5z"
											fill="#fff"
										/>
										<path d="m713.7 89.2 1.6-.8c14.7-7.2 29.3-6.1 43.5-5 3.7.3 7.6.6 11.3.7l2.8.1v55.3l-3-.1c-3.9-.1-7.8-.4-11.6-.7-14-1.1-27.2-2.1-40.5 4.4l-4.2 2V89.2zm45.1 43.7c2.7.2 5.5.4 8.3.6V89.8c-3-.2-5.9-.4-8.8-.6-13.4-1-26.1-2-38.9 3.7v43.2c7.9-3.1 15.8-4 23.6-4 5.4 0 10.6.4 15.8.8z" />
										<path d="M726.1 104.2c.1-.2.3-.4.5-.4h12l3.7-11.4c.1-.5.9-.5 1.1 0l3.7 11.4h12c.2 0 .5.2.5.4.1.2 0 .5-.2.6l-9.7 7.1 3.7 11.4c.1.2 0 .5-.2.6-.1.1-.2.1-.3.1s-.2 0-.3-.1l-9.7-7.1-9.7 7.1c-.2.1-.5.1-.7 0-.2-.1-.3-.4-.2-.6l3.7-11.4-9.7-7.1c-.2-.1-.2-.4-.2-.6z" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<TitleFlexGridViews
						id="lineup"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.lineup}
						//title={`${dealer[currentDealer].name}'s Product Lineup`}
						title={`Product Lineup`}
						Component={ProductCard}
					/>
					<TitleFlexGridViews
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						id="parts-accessories"
						jsonData={mainJSON.accessories}
						title="Parts & Accessories"
						Component={ProductCard}
					/>
					<TitleFlexGridViews
						id="promotions"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.promotions}
						//title={`${dealer[currentDealer].name}'s Promotions`}
						title={`Promotions`}
						Component={ProductCard}
					/>
					<TitleFlexGridViews
						id="financing"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.financing}
						title="Financing"
						Component={FinancingCard}
					/>
					<ToggleTab
						className={`border p-2 ${tabSpacing}`}
						Component={
							<div>
								<p className="mt-1">
									Worcester's is a family owned operation in business since
									1926. We started as a poultry hatchery, expanded into pet
									feeds and animal supplies, then added lawn and landscape power
									equipment in 1950. We specialize in top quality products and
									back them with parts and service. We are a patriotic company
									and believe America is the best place to live, work and run a
									business.
								</p>
								<Phone />
								<Website
									className="mb-2"
									style={{
										fontSize: "22px",
										fontWeight: "bold",
										display: "block",
									}}
								/>
								<Address address={dealer[currentDealer].address} />
								<Social className="mt-2" />
							</div>
						}
						id="contact"
						title={dealer[currentDealer].name}
					/>
					<ToggleTab
						className={`border p-2 ${tabSpacing}`}
						Component={
							<div className="mt-2">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
									sit amet mauris feugiat, pellentesque mi id, iaculis diam.
									Donec fermentum suscipit turpis ac luctus. Nam ut nisl
									egestas, fringilla turpis non, tristique odio. Proin vehicula
									ac orci nec porta. Donec sed dui eu ligula porttitor semper.
									Praesent imperdiet est vel auctor vulputate. Proin dignissim
									quam sed ante gravida, a elementum tellus viverra. Donec risus
									nisi, accumsan id ultrices id, aliquam at nunc. Sed interdum
									vestibulum magna, sit amet viverra lacus ultricies malesuada.
								</p>
								<p>
									Donec ut gravida ex, ac laoreet orci. Integer blandit ligula
									at justo fermentum, eu egestas dolor pulvinar. Vestibulum non
									metus massa. Cras tellus nunc, posuere in nisi sit amet,
									eleifend euismod ante. Fusce tincidunt lorem a lacus
									pellentesque, quis vehicula ex efficitur. Sed nec elit eget
									ipsum facilisis fermentum. Maecenas nibh libero, condimentum
									ac placerat at, consectetur at turpis. Pellentesque habitant
									morbi tristique senectus et netus et malesuada fames ac turpis
									egestas. Cras consectetur nisi arcu, quis hendrerit risus
									molestie a. Aliquam facilisis orci sed nunc euismod, eu
									elementum odio rhoncus. Curabitur pellentesque porttitor urna
									sit amet venenatis. Proin imperdiet sagittis erat non
									accumsan. Ut pellentesque mi in porta consequat. Aliquam nibh
									lorem, pulvinar id ultricies nec, lobortis vitae purus.
									Pellentesque rhoncus congue arcu ut lacinia.
								</p>
							</div>
						}
						id="why"
						title="Why buy from a dealer?"
					/>
					<ToggleTab
						className={`border p-2 ${tabSpacing}`}
						Component={<Faqs faqs={mainJSON.faqs} />}
						id="faqs"
						title="FAQs"
					/>
				</div>
			</div>
		</>
	);
}
