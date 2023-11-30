"use client";
import { useEffect } from "react";

import Articles from "@/components/Articles";
import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import QuoteBlock from "@/components/QuoteBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function ZeroTurn({}) {
  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `<script>
  (function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
  </script>`;
    const scriptEl = document.createRange().createContextualFragment(html);
    document.body.appendChild(scriptEl);
  });

  return (
    <>
      <div
        className="top"
        id="sdb-container"
      >
        <section
          className="d-flex p-0 position-relative"
          style={{ minHeight: "500px" }}
        >
          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/hero-1024w.jpg"
            alt=""
            id="hero"
            className="w-100 h-100 object-cover absolute"
            fill={true}
            priority
          />
        </section>

        <section className="py-5 px-1">
          <div className="container">
            <h1 className="text-lg-center">Cub Cadet Riding Lawn Mowers</h1>
            <p
              className="text-lg-center mt2 mb-0 mx-auto"
              style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
              A complete lineup of zero-turn mowers, lawn and garden tractors,
              and electric mowers, all featuring the strength and durability
              that bring your lawn to life.
            </p>
          </div>
        </section>

        <Explore
          explore={{
            h2: "Explore Zero-Turn Mowers",
            blocks: [
              {
                img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd121df42/products/Equipment/Cub-Cadet_XT2_LX46_2000x2000_1.jpg?sw=740&sh=740&sm=fit",
                title: "Lawn & Garden Tractors",
                copy: "Built in America since ‘61 and backed by the industry’s strongest warranty, Cub Cadet® lawn and garden tractors all come standard with the strongest cutting systems for mowing performance, refined ergonomics designed around you and an array of attachments and accessories for year-round versatility and utility.",
                button: {
                  url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/lawn-and-garden-tractors",
                  copy: "Shop for Lawn & Garden Tractors",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
              },
              {
                img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZTS.jpg",
                title: "Zero-Turn Mowers",
                copy: "Designed with strength, comfort and the ability to get the job done 50% faster than riding tractors, each Cub Cadet zero-turn riding mower is engineered to handle a range of terrain and cover up to 5 acres, with steering wheel options that increase ease.",
                button: {
                  url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mowers",
                  copy: "Shop for Zero-Turn Mowers",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
              },
              {
                img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT-el.jpg",
                title: "Electric Riding Mowers",
                copy: "We took the proven strength and performance of our gas-powered machines and combined them with a powerful and convenient lithium-ion battery to create electric lawn mowers with no power fade and reduced noise for a more enjoyable ride.",
                button: {
                  url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers",
                  copy: "Shop for Electric Riding Mowers",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
              },
            ],
          }}
          addButton={false}
        />

        <section className="relative flex flex-col-reverse lg:block">
          <div className="container w-100 relative top-0 left-0 z-20 bg-neutral-100 lg:bg-transparent">
            <QuoteBlock
              className="text-black lg:absolute p-4 mt-10 md:max-w-xl lg:bg-white/70"
              quote={{
                stars: 5,
                imgMobile:
                  "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/quote-mobile.jpg",
                imgDesktop:
                  "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/quote-desktop.jpg",
                title: "LOOK NO MORE FOR A GREAT MOWER.",
                copy: "This Cub Cadet mower is a beast. I absolutely love it and all of its features. Honestly, I haven’t found one negative thing to say about it since I’ve bene using it. Needless to say, I love this mower!”",
                name: "Twwagoner from Lexington, NC",
                unit: "Ultima ZT1",
              }}
              addCSS={{ maxWidth: "700px" }}
              stackStars={true}
              starFill="#000"
              fillBase="#fff"
            />
          </div>

          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/hero.jpg"
            alt=""
            id="quoteimg"
            className="w-100 h-100 relative z-0 object-cover"
            fill={true}
            priority
          />
        </section>

        <section className="py-5 px-1">
          <div id="product-finder-zero-turns"></div>
        </section>

        <section>
          <div className="container-fluid">
            <h2 className="mt-4 display-3 text-center">
              Shop & Compare Riding Lawn Mowers
            </h2>
          </div>
        </section>
      </div>

      <div
        className="middle my-6 d-flex justify-content-center align-items-center h2"
        style={{ backgroundColor: "#cfcfcf", minHeight: "600px" }}
      >
        For PLP
      </div>

      <div
        className="bottom container"
        id="sdb-container"
      >
        <Articles
          viewAllLink="https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Snow%20Blowers"
          articles={{
            h2: "Snow Blower Articles & How To’s",
            blocks: [
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg",
                title: "Cub Cadet Snow Blower Buyers Guide",
                copy: "If you live in areas where snowfall is frequent or heavy, shoveling becomes part of your daily routine. Ditching your shovel, along with the heavy lifting and repetitive strain that comes with shoveling snow, in favor of a snow blower can save you time and energy. A couple of reasons to justify a snow blower…",
                url: "https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg"
                    id="Hero_LineUp_01"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg",
                title: "Recommended Snow Blower Back-Up Parts",
                copy: "Always prepare your snow blower for maintenance before starting any repairs. Move your snow blower to a flat surface.  Turn the engine off and let it cool. Disconnect the spark plug ignition wire and remove the safety ignition key to prevent accidental starting of the engine…",
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-recommended-snow-thrower-back-up-parts.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg"
                    id="recommended-snow-thrower-back-up-parts"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg",
                title: "How to Prepare Your Snow Thrower for Winter Use",
                copy: "Whether you're prepping your trusty 2X two-stage snow thrower for yet another winter, or getting your new 3X three-stage snow thrower ready to face its first blizzard, these snow thrower maintenance tips can help ensure you're prepared for cold and stormy weather this…",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-prepare-your-snow-thrower-for-winter-use.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg"
                    id="snow-thrower-operation-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg",
                title: "Snow Blower Safety Tips",
                copy: "Snow blowers, often referred to as snow blowers are an easy way to keep the snow off your driveway during the winter months. Like any piece of power equipment, snow blower safety should be a top priority…",
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-snow-thrower-safety-tips.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg"
                    id="snow-thrower-safety-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
            ],
          }}
          numRows={4}
          className="container mt-8"
        />

        <AttchmentsAccessories
          viewAllLink="https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories"
          className="container mt-8"
          attAcc={{
            h2: "Snow Blower Attachments & Accessories",
            blocks: [
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg",
                title: "Universal Cab",
                item: "490-241-0032",
                price: "$132.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html#q=490-241-0032&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html?fitsOnModel=false"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-290-0010_1.jpg",
                title: "Snow Blower Cover",
                item: "490-290-0010",
                price: "$38.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2a0b010e/products/Attachments_Accessories/490-290-0010_1.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg",
                title: "Drift Cutter Kit",
                item: "OEM-390-679",
                price: "$41.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/drift-cutter-kit/OEM-390-679.html#q=OEM-390-679&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw32dc42ff/products/Attachments_Accessories/OEM-390-679.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg",
                title: "LED Light Bar Kit",
                item: "753-08629A",
                price: "$135.89",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/led-light-bar-kit/753-08629A.html#q=753-08629A&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw301fe215/products/753-08629.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
            ],
          }}
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Categories",
            list: [
              {
                title: "Single-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/single-stage-snow-blowers",
              },
              {
                title: "Two-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/two-stage-snow-blowers",
              },
              {
                title: "Three-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/three-stage-snow-blowers",
              },
              {
                title: "Snow Blower Accessories",
                href: "https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories",
              },
            ],
          }}
          className="container mt-8"
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Searches",
            list: [
              {
                title: "Financing",
                href: "https://www.cubcadet.com/en_US/financing",
              },
              {
                title: "Extended Warranty",
                href: "https://www.cubcadet.com/en_US/ew-info-page.html",
              },
              {
                title: "Register My Product",
                href: "https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html",
              },
              {
                title: "Operator’s Manual",
                href: "https://www.cubcadet.com/en_US/operatorsmanuals",
              },
              {
                title: "Snow Plow Blade Attachment",
                href: "https://www.cubcadet.com/en_US/riding-mower-accessories/46-inch-snow-plow-blade-attachment/19A30017OEM.html?fitsOnModel=false#q=snow%2Bplow%2Bblade&lang=en_US&start=0",
              },
            ],
          }}
          className="container mt-8"
        />

        <RelatedLinks
          relatedCats={{
            h3: "Snow Blower Maintenance",
            p: "When customers buy Snow Blowers they often buy or consider:",
            list: [
              {
                title: "Shear Pins",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shear-pins",
              },
              {
                title: "Belts",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-belts",
              },
              {
                title: "Shave Plates",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shave-plates",
              },
              {
                title: "Slide Shoes",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-slide-shoes",
              },
              {
                title: "Tires and Wheels",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-tires-and-wheels",
              },
              {
                title: "All Snow Blower Parts",
                href: "https://www.cubcadet.com/en_US/shop-by-machine-type/snow-blower-parts",
              },
            ],
          }}
          className="container mt-8"
        />

        <div className="container mt-8">
          <h3 className="mt-6">Questions & Answers</h3>
          <Faqs
            className="border-t"
            faqs={[
              {
                question: "What does a snow blower do?",
                answer:
                  "Cub Cadet® snow blowers are engineered to quickly remove snow from unwanted areas. A single stage snow blower is the most basic kind, where the auger paddle pulls snow into the machine and throws it out of the chute. More advanced stages are designed to handle more snow.",
              },
              {
                question:
                  "What is the best type of snow blower for a driveway?",
                answer:
                  'There’s no one size fits all snow blower. Cub Cadet has models ideal for up to 6-in, 12-in, and 18-in. of snowfall, so take stock of how much snow is expected in your area to zero in on a category. From there, determine what kind of features you’d benefit from, like electric start, heated hand grips, IntelliPower™ engines, or LED headlights, among others. This <a href="https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html">snow blower buyers guide</a> goes into more detail.',
              },
              {
                question: "Do I need a 1, 2 or 3 stage snow blower?",
                answer: `
								Once you determine how much snowfall your area is expected to get, you can <a href="https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-choose-the-right-snow-blower.html">choose the right model</a> for your needs. Cub Cadet® single-stage snow blowers are generally ideal for up to 6-in. of snowfall, 2-stage models can handle up to 12-in. of snowfall and 3-stage units typically can handle up to 18-in. of snowfall. Cub Cadet® MAX units — available in 2-stage and 3-stage models — can tackle up to 23-in. of snowfall.
								`,
              },
              {
                question: "How do I finance a Cub Cadet snow blower?",
                answer: `
								Cub Cadet® offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.cubcadet.com/en_US/financing">Click here</a> for more details.
								`,
              },
              {
                question: "How do I store my snow blower in the off season?",
                answer: `
								Always refer to your <a href="https://www.cubcadet.com/en_US/operatorsmanuals">operator’s manual</a> for comprehensive instructions on maintenance and storage. Instructions will differ between single-, 2-, and 3-stage snow blowers. <a href="https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-prepare-your-snow-thrower-for-storage-in-the-off-season.html">This guide</a> can help walk you through some of the most common steps.
								`,
              },
              {
                question: "How do I register my Cub Cadet snow blower?",
                answer: `
								Once you’ve purchased a Cub Cadet® snow blower, you can register your machine <a href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">here</a>.
								`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
