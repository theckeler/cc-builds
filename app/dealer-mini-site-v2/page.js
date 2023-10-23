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
import Promotions from "./components/Promotions";

import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import BookService from "./components/BookService";
import IconCubDays from "@/images/IconCubDays.js";
import Button from "@/components/Button";

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
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						id="book-service"
						title="Book Service"
						Component={BookService}
					/>

					<TitleFlexGridViews
						id="lineup"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.lineup}
						//title={`${dealer[currentDealer].name}'s Product Lineup`}
						title={`Product Lineup`}
						Component={ProductCard}
					/>

					<div
						className="mt-0 mt-xl-2 mt-0 mt-xl-2"
						id="cub-days"
						style={{ scrollMarginTop: 16 }}>
						{/* <h3 className="position-relative flex mb-0 mb-xl-1">Cub Days</h3> */}
						<div className="">
							<div>
								<IconCubDays />
								<div className="p-4 text-center">
									<h2>
										Only 2 Days Left To Save $100 on Select Cub Cadet Lawn
										Tractors and Zero Turns through May 16th 2018!
									</h2>
									<p className="mx-lg-8 my-3">
										Do not delay before this promotion ends. All Cub Cadet XT1
										Lawn Tractors, Heavy Duty LX42, LX46EFI FAB, GX54D Lawn &
										Garden Tractors, and RZTLX54, RZTSX50, & RZTSX54 Zero Turn
										mowers are featured under the $100 off promotion. 0%
										financing is available with approved financing and all Cub
										Cadet products and are backed by Central Equipment's
										extensive service department.
									</p>
									<Button
										copy="Find out More"
										className="border-0 bg-secondary"
									/>
								</div>
							</div>
						</div>
					</div>

					<TitleFlexGridViews
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						id="parts-accessories"
						jsonData={mainJSON.accessories}
						title="Parts & Accessories"
						Component={ProductCard}
					/>

					{/* <TitleFlexGridViews
						id="promotions"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.promotions}
						//title={`${dealer[currentDealer].name}'s Promotions`}
						title={`Promotions`}
						Component={ProductCard}
					/> */}

					<ToggleTab
						className={`p-2 ${tabSpacing}`}
						//style={{ backgroundColor: "#ebebeb" }}
						id="promotions"
						title="Promotions"
						Component={Promotions}
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
