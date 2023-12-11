"use client";
import { useState } from "react";

import mainJSON from "./data/main.json";

import Address from "@/components/Address";
import Faqs from "@/components/Faqs";
import Phone from "@/components/Phone";
import ProductCard from "@/components/Product/Card";
import Social from "@/components/Social";
import ToggleTab from "@/components/ToggleTab";
import Website from "@/components/Website";
import DealerInfo from "./components/DealerInfo";
import FinancingCard from "./components/FinancingCard";
import Promotions from "./components/Promotions";
import StickyMenu from "./components/StickyMenu";

import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import BookService from "./components/BookService";
import CubDays from "./components/CubDays";

export default function DealerMiniSite() {
  let dealer = mainJSON.dealers;
  const [currentDealer, setCurrentDealer] = useState(0);

  const tabSpacing = "mt-0 mt-xl-2";

  return (
    <div id="sdb-container">
      {/* <Menu
				setCurrentDealer={setCurrentDealer}
				button={{
					style: { outline: 0, minWidth: "48px", minHeight: "48px" },
					className: "bg-secondary border-0 mr-1 mb-1 w-100",
				}}
			/> */}

      <div className="py-2 mx-0 mx-lg-auto py-xl-5 container px-0 grid grid-cols-1 xl:grid-cols-[400px_880px] gap-3">
        <StickyMenu
          className="order-2 lg:order-1"
          dealer={dealer[currentDealer]}
        />

        <div className="align-self-start grid grid-cols-1 order-1 lg:order-2">
          <DealerInfo dealer={dealer[currentDealer]} />

          <CubDays />

          <div
            id="book-service"
            className="p-2 mt-2"
            style={{ backgroundColor: "#ebebeb" }}
          >
            <h2
              className="text-center mb-2 border-bottom pb-1"
              style={{ fontSize: "26px" }}
            >
              Book Service
            </h2>
            <p className="text-center px-4">
              Vestibulum vitae lorem sed nisl aliquam luctus. Integer blandit
              ligula eget tellus dapibus, vitae iaculis felis lobortis. Etiam
              condimentum dui porttitor, tristique quam a, tincidunt nisl. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              suscipit tellus, id malesuada lacus. Integer eu feugiat arcu, in
              lobortis ligula. Maecenas a elementum nunc, non congue odio.
            </p>

            <BookService />
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

          {/* <TitleFlexGridViews
						id="promotions"
						className={`p-2 ${tabSpacing}`}
						style={{ backgroundColor: "#ebebeb" }}
						jsonData={mainJSON.promotions}
						//title={`${dealer[currentDealer].name}'s Promotions`}
						title={`Promotions`}
						Component={ProductCard}
					/> */}

          <Promotions
            className={`p-2 p-xl-0 mt-2 ${tabSpacing}`}
            id="promotions"
            title="Promotions"
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
    </div>
  );
}
