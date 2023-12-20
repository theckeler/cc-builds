"use client";
import { useState } from "react";

import mainJSON from "./data/main.json";

import Faqs from "@/components/Faqs";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import ProductCard from "@/components/Product/Card";
import CubDays from "./components/CubDays";
import DealerDesc from "./components/DealerDesc";
import DealerInfo from "./components/DealerInfo";
import FinancingCard from "./components/FinancingCard";
import Menu from "./components/Menu";
import Promotions from "./components/Promotions";
import StickyMenu from "./components/StickyMenu";

export default function DealerMiniSite() {
  let dealer = mainJSON.dealers;
  const [currentDealer, setCurrentDealer] = useState(0);

  const tabSpacing = "";

  return (
    <div id="sdb-container">
      <Menu
        setCurrentDealer={setCurrentDealer}
        button={{
          style: { outline: 0, minWidth: "48px", minHeight: "48px" },
          className: "bg-secondary mr-1 mb-1 w-100",
        }}
      />

      <div className="py-2 mx-0 mx-lg-auto container px-0 grid grid-cols-1 xl:grid-cols-[400px_880px] gap-3">
        <StickyMenu
          className="order-2 xl:order-1"
          dealer={dealer[currentDealer]}
        />

        <div className="align-self-start grid grid-cols-1 order-1 xl:order-2">
          <DealerInfo
            dealer={dealer[currentDealer]}
            formID="contact-form-top"
          />

          <CubDays />

          <hr className="border-t border-neutral-200 w-full" />

          <TitleFlexGridViews
            id="products"
            className={`p-2 ${tabSpacing}`}
            jsonData={[
              {
                title: "Zero Turn Mowers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT.jpg?version=1,639,577,706,000",
                },
                button: {
                  title: "Shop Zero-Turns",
                  href: "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers",
                },
              },
              {
                title: "Lawn & Garden Tractors",
                img: {
                  src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8f055b11/products/Equipment/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg?sw=1000&sh=1000&sm=fit",
                },
                button: {
                  title: "Shop Ultima Series™ Zero-Turns",
                  href: "#top",
                },
              },
              {
                title: "Snow Blowers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png",
                },
                button: {
                  title: "Shop Snow Blowers",
                  href: "#top",
                },
              },
              {
                title: "Walk-Behind Mowers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png",
                },
                button: {
                  title: "Shop Walk-Behind Mowers",
                  href: "#top",
                },
              },
              {
                title: "Yard Equipment",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png",
                },
                button: {
                  title: "Shop Yard Equipment",
                  href: "#top",
                },
              },
              {
                title: "Leaf Blowers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png",
                },
                button: {
                  title: "Shop Leaf Blowers",
                  href: "#top",
                },
              },
              {
                title: "Chipper Shredders & Vacs",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png",
                },
                button: {
                  title: "Shop Chipper Shredders & Vacs",
                  href: "#top",
                },
              },
              {
                title: "Edgers & Trenchers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png",
                },
                button: {
                  title: "Shop Edgers & Trenchers",
                  href: "#top",
                },
              },
              {
                title: "Log Splitters",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png",
                },
                button: {
                  title: "Shop Log Splitters",
                  href: "#top",
                },
              },
              {
                title: "Trimmers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png",
                },
                button: {
                  title: "Shop Trimmers",
                  href: "#top",
                },
              },
              {
                title: "Pressure Washers",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png",
                },
                button: {
                  title: "Shop Pressure Washers",
                  href: "#top",
                },
              },
              {
                title: "Commercial Equipment",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png",
                },
                button: {
                  title: "Shop Commercial Equipment",
                  href: "#top",
                },
              },
              {
                title: "UTV",
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png",
                },
                button: {
                  title: "Shop UTV",
                  href: "#top",
                },
              },
            ]}
            title={`Product Lineup`}
            Component={ProductCard}
          />

          <hr className="border-t border-neutral-200 w-full" />

          <TitleFlexGridViews
            id="promotions"
            className={`p-2 ${tabSpacing}`}
            jsonData={[
              {
                span: true,
                title: "Equip Expo Show Product Giveaway 2023",
                subTitle: "Offer Valid at Show Only",
                valid:
                  "Valid 10/18/2023, 9:00 a.m. to 5:00 p.m. – 10/19/2023, 9:00 a.m. to 4:00 p.m. EST",
                offerDetails: [
                  "NO PURCHASE NECESSARY TO ENTER OR WIN.",
                  "Enter between October 18, 2023, 9:00 a.m. to 5:00 p.m. and October 19, 2023, 9:00 a.m. to 4:00 p.m. Eastern Time.",
                  `For Official Rules go <a href="https://www.cubcadet.com/s/cubcadet/en_US/cub-cadet-equipment-expo-2023-official-rules.html">here</a>`,
                ],
                link: "TERMS & CONDITIONS",
                button: {
                  title: "Shop Now",
                  href: "/shop/",
                },
              },
              {
                title: "Military Member Rebate",
                subTitle:
                  "Current and former military members are eligible for a rebate up to $500 on the purchase of select PRO products.",
                valid: "Valid 11/01/2022 - 10/31/2023",
                offerDetails: [
                  "A one-time $300 Military Appreciation Rebate may be applied to (1) PRO Z™ 100 Series, (1) PRO Z™ HW 300 Series or (1) ZTX™ purchase.",
                  "A one-time $500 Military Appreciation Rebate may be applied to (1) PRO Z™ 500, 700 or 900 Series or (1) PRO X™ Series purchase.",
                  `Upon verification, approved Military Appreciation Rebates will be mailed, as an American Express® gift card, to the address submitted by the consumer.`,
                  `Cannot be combined with any other offer, demo or promotion.`,
                ],
                link: "TERMS & CONDITIONS",
              },
              {
                title: "Fleet Discount Program",
                subTitle:
                  "Professional landscape contractors are eligible for fleet discounts up to 27%.",
                valid: "Valid 11/01/2022 - 10/31/2023",
                offerDetails: [
                  "Fleet pricing (25% off) is earned when a 20-point minimum value of product is purchased.",
                  "Super Fleet pricing (27% off) is provided when a 50-point minimum value of product is purchased.",
                  `PRO Z 972 SD Zero-Turn = 5 points; PRO Z 500 / 700 / 900 Zero-Turn = 10 points, PRO X Stand-On = 10 points, Hydro Walk-Behind Mower = 10 Points, PRO Z 100 = 5 points, ZTX6 = 5 points.`,
                  `Cannot be combined with any other offer or promotion.`,
                ],
                link: "TERMS & CONDITIONS",
              },
            ]}
            title="Promotions"
            Component={Promotions}
          />

          <hr className="border-t border-neutral-200 w-full" />

          <TitleFlexGridViews
            id="financing"
            className={`p-2 ${tabSpacing}`}
            jsonData={mainJSON.financing}
            title="Financing"
            Component={FinancingCard}
          />

          <hr className="border-t border-neutral-200 w-full hidden xl:block" />

          <DealerDesc
            dealer={dealer[currentDealer]}
            formID="contact-form"
            className="hidden xl:block"
          />

          <hr className="border-t border-neutral-200 w-full mt-4" />

          <div className={` p-2 ${tabSpacing}`}>
            <h3>Why buy from a dealer?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet mauris feugiat, pellentesque mi id, iaculis diam. Donec
              fermentum suscipit turpis ac luctus. Nam ut nisl egestas,
              fringilla turpis non, tristique odio. Proin vehicula ac orci nec
              porta. Donec sed dui eu ligula porttitor semper. Praesent
              imperdiet est vel auctor vulputate. Proin dignissim quam sed ante
              gravida, a elementum tellus viverra. Donec risus nisi, accumsan id
              ultrices id, aliquam at nunc. Sed interdum vestibulum magna, sit
              amet viverra lacus ultricies malesuada.
            </p>
            <p>
              Donec ut gravida ex, ac laoreet orci. Integer blandit ligula at
              justo fermentum, eu egestas dolor pulvinar. Vestibulum non metus
              massa. Cras tellus nunc, posuere in nisi sit amet, eleifend
              euismod ante. Fusce tincidunt lorem a lacus pellentesque, quis
              vehicula ex efficitur. Sed nec elit eget ipsum facilisis
              fermentum. Maecenas nibh libero, condimentum ac placerat at,
              consectetur at turpis. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              consectetur nisi arcu, quis hendrerit risus molestie a. Aliquam
              facilisis orci sed nunc euismod, eu elementum odio rhoncus.
              Curabitur pellentesque porttitor urna sit amet venenatis. Proin
              imperdiet sagittis erat non accumsan. Ut pellentesque mi in porta
              consequat. Aliquam nibh lorem, pulvinar id ultricies nec, lobortis
              vitae purus. Pellentesque rhoncus congue arcu ut lacinia.
            </p>
          </div>

          <hr className="border-t border-neutral-200 w-full mt-4" />

          <div
            className={`p-2 ${tabSpacing}`}
            id="faqs"
          >
            <h3>FAQs</h3>
            <Faqs faqs={mainJSON.faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
