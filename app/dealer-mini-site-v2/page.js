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

          <Promotions
            jsonData={[
              {
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw10c40a58/special-offers/NALP-logo_690x384.jpg",
                },
                title: "NALP Member Discount",
                subTitle: `Members of the National Association of Landscape Professionals are eligible for a 15% discount.`,
                valid: "10/01/2023 - 9/30/2024",
                offerDetails: [
                  "Members of the NALP are eligible for 15% off discounted pricing.",
                  "15% off regular price on PRO Z™ Series and PRO Z™ Series Attachments.",
                  "Cannot be combined with any other offer, demo or promotion.",
                ],
                link: "Offer Details",
                button: {
                  title: "Find a dealer",
                  href: "https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers",
                },
              },
              {
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwc805e60b/special-offers/so-fleet-discount-program.jpg",
                },
                title: "Fleet Discount Program",
                subTitle: `Professional landscape contractors are eligible for fleet discounts up to 27%.`,
                valid: "10/01/2023 - 9/30/2024",
                offerDetails: [
                  "Fleet pricing (25% off) is earned when a minimum 2 units is purchased.",
                  "Super Fleet pricing (27% off) is provided when 4 units or more of product is purchased.",
                  "All DEWALT handhelds sold through IR dealers are eligible. Every $5,000 worth of DEWALT equals 1 unit (20% off)",
                  "Cannot be combined with any other offer or promotion.",
                ],
                link: "Offer Details",
                button: {
                  title: "Find a dealer",
                  href: "https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers",
                },
              },
              {
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw443bb471/special-offers/Non-Profit_690x386.jpg",
                },
                title: "Bid Program",
                subTitle: `PRO Products are available at 27% off retail and Cub Cadet Residential*, DeWALT Battery Handhelds and Walk Behinds are available at 15% off retail to non-profit and tax-supported agencies.`,
                valid: "10/01/2023 - 9/30/2024",
                offerDetails: [
                  "PRO Products are available at 27% off retail to non-profit and tax-supported agencies.",
                  "Cub Cadet Residential*, DeWALT Residential* are available at 15% off retail to non-profit and tax-supported agencies.",
                  "Attachment & accessory discounts are also available at time of purchase.",
                  "Cannot be combined with any other offer or promotion.",
                  "*Bid Assistance Program Rebates are not available for the following products: Cub Cadet electric, CC30, Enduro Series XT1, Challenger 500, 700 & UVs.",
                ],
                link: "Offer Details",
                button: {
                  title: "Find a dealer",
                  href: "https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers",
                },
              },
              {
                img: {
                  src: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw34883fbb/special-offers/Co-op__690x386.jpg",
                },
                title: "Cooperative Purchasing Program",
                subTitle: `Programs available through nationwide government-to-government procurement contracts.`,
                valid: "10/01/2023 - 9/30/2024",
                offerDetails: [
                  "This program provides options for the following organizations interested in purchasing product without the full bid process or in states where there is no purchasing contract please see the list on full document.",
                  "MTD Products Company, as the contract holder, quotes and invoices for HGAC and BuyBoard. Purchases made under NPPGov are direct through a dealer.",
                  "Cannot be combined with any other offer or promotion.",
                ],
                link: "Offer Details",
                button: {
                  title: "Find a Dealer",
                  href: "https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers",
                },
              },
            ]}
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
