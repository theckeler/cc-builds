"use client";
import { useEffect } from "react";

import Articles from "@/components/Articles";
import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import QuoteBlock from "@/components/QuoteBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function RidingLawnMowers({}) {
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
            <h1 className="text-lg-center">
              Versatile, Durable Riding Lawn Mowers
            </h1>
            <p
              className="text-lg-center mt2 mb-0 mx-auto"
              style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
              Cub Cadet® riding lawn mowers range from zero-tuns, lawn and
              garden tractors, and electric mowers, each designed to deliver the
              strength and durability to tackle more than just cutting grass.
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
                copy: "Cub Cadet® lawn and garden tractors are equipped with cutting systems designed to deliver strong mowing performance and capable of handling an array of attachments and accessories for year-round versatility and utility.",
                url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/lawn-and-garden-tractors",
                button: {
                  copy: "Shop for Lawn & Garden Tractors",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
              },
              {
                img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZTS.jpg",
                title: "Zero-Turn Mowers",
                copy: "Cub Cadet® zero-turn mowers are engineered to handle a range of terrain and cover up to 5 acres, with steering wheel options that increase ease.",
                url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mowers",
                button: {
                  copy: "Shop for Zero-Turn Mowers",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
              },
              {
                img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT-el.jpg",
                title: "Electric Riding Mowers",
                copy: "Cub Cadet® electric riding mowers combined the power of gas with the convenance of lithium-ion battery technology for a quieter mowing experience with less maintenance compared to gas.",
                url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers",
                button: {
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
          viewAllLink="https://www.cubcadet.com/en_US/help-center/"
          articles={{
            h2: "Riding Lawn Mower How-Tos and Maintenance",
            blocks: [
              {
                title:
                  "The Difference Between Mulching Blades and High-Lift Blades",
                copy: `Mower blade terminology can be a little confusing.  Local colloquialisms and engineering terminology (such as "3-in-1" or "high-lift") have also contributed to this confusion.`,
                url: "https://www.cubcadet.com/en_US/popular-faqs/knowledge-the-difference-between-mulching-blades-and-high-lift-blades.html",
                res: (
                  <ResponsiveImage
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/dw6bb1055f/Knowledge_Center/help-center/difference-between-mulching-blades-and-high-lift-blades_1100x572.jpg?sw=950"
                    id="Hero_LineUp_01"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title: "Riding Mower Maintenance Schedule and Tips",
                copy: `Proper riding lawn mower maintenance will help your machine run well for years. It's not enough to perform maintenance on riding mowers at just the start and end of the season. This riding mower maintenance schedule and checklist will help you know when to change the oil, replace lawn mower blades or just clean the different parts and attachments to extend the life of your mower.`,
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-riding-mower-maintenance-schedule-and-tips.html",
                res: (
                  <ResponsiveImage
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/dw7f4f0ec9/Knowledge_Center/help-center/riding-mower-maintenance-schedule-and-tips_1100x572.jpg?sw=950"
                    id="recommended-snow-thrower-back-up-parts"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title: "How To Change the Blades on A Riding Mower",
                copy: `Over time, the blades on your riding lawn mower can become worn out, bent or dinged. This gradual damage can reduce the effectiveness of your mower, so be sure to sharpen or replace the blades if you notice these signs of wear. How often you visually check the blades depends on how regularly the mower is used. Check the blades at least twice a year, at the beginning and middle of the mowing season, or more often if you mow year-round. This video will show you how replace the blades on your Cub Cadet riding mower. Depending on your model, the instructions in this video may vary slightly. Always be sure to check your operator's manual for detailed instructions.`,
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-blade-on-your-cub-cadet-rider.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/chnage-blades.png"
                    id="snow-thrower-operation-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title: "How to Change the Oil in Your Riding Mower",
                copy: `Regular oil changes are critical to keeping your riding lawn mower's engine in top shape and prolonging the life of your mower. Watch this video to learn how to change the oil in a Cub Cadet riding lawn mower. Depending on your mower model, the instructions in this video tutorial may vary slightly from the directions in your operator's manual. Always refer to your operator's manual for comprehensive instructions on changing lawn mower oil before getting started.`,
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-oil-in-a-cub-cadet-riding-lawn-mower.html",
                res: (
                  <ResponsiveImage
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/dw79307f23/Knowledge_Center/help-center/how-to-change-the-oil-in-a-cub-cadet-riding-lawn-mower_1100x572.jpg?sw=950"
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
          centerTitle
          viewAllLink="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
          className="container mt-8"
          attAcc={{
            h2: "Riding Lawn Mower Attachments & Accessories",
            blocks: [
              {
                title: "Riding Mower Baggers",
                //item: "490-241-0032",
                //price: "$132.99",
                url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories?prefn1=universal-part-category&prefv1=Baggers%20and%20Grass%20Collectors",
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A30018100.jpg",
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A70041100.jpg",
                title: "Mulching Kits",
                url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories?prefn1=universal-part-category&prefv1=Mulching%20Kit",
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19B40026100_1.jpg",
                title: "Hauler",
                url: "https://www.cubcadet.com/en_US/riding-mower-accessories/cub-cadet-hauler/19B40026100.html#q=hauler&lang=en_US&start=5",
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A30037100.jpg",
                title: "All-Season Plow Blade",
                url: "https://www.cubcadet.com/en_US/riding-mower-accessories/fastattach-all-season-plow-blade/19A30037100.html?fitsOnModel=false#start=3",
              },
            ],
          }}
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Categories",
            list: [
              {
                title: "Lawn & Garden Tractors",
                href: " https://www.cubcadet.com/en_US/riding-lawn-mowers/lawn-and-garden-tractors",
              },
              {
                title: "Zero-Turn Mowers",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mowers",
              },
              {
                title: "Small Riding Lawn Mowers",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/small-riding-lawn-mowers",
              },
              {
                title: "Electric Lawn Mowers",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers",
              },
              {
                title: "Walk-Behind Mowers",
                href: "https://www.cubcadet.com/en_US/lawn-mowers/walk-behind-mowers",
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
                title: "Warranty",
                href: "https://www.cubcadet.com/en_US/warranty-details.html",
              },
              {
                title: "Extended Warranty",
                href: "https://www.cubcadet.com/en_US/ew-info-page.html",
              },
              {
                title: "Product Registration",
                href: "https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html",
              },
              {
                title: "Operator’s Manual",
                href: "https://www.cubcadet.com/en_US/operatorsmanuals",
              },
            ],
          }}
          className="container mt-8"
        />

        <RelatedLinks
          relatedCats={{
            h3: "Riding Lawn Mower Maintenance",
            p: "When customers buy Riding Lawn Mowers they often buy or consider:",
            list: [
              {
                title: "Blades",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mower-parts/riding-mower-blades",
              },
              {
                title: "Oil Change Kit",
                href: "https://www.cubcadet.com/en_US/riding-mower-accessories/oil-change-kit/490-950-C042.html#q=490-950-C042&lang=en_US&start=0",
              },
              {
                title: "Kawasaki Engine Maintenance Kits",
                href: "https://www.cubcadet.com/en_US/small-engine-parts/kawasaki-engine-maintenance-kit/490-950-C063.html#q=490-950-C063&lang=en_US&start=0",
              },
              {
                title: "Belts",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mower-parts/riding-mower-belts",
              },
              {
                title: "All Riding Mower Parts",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mower-parts",
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
                question:
                  "What should I consider before buying a riding lawn mower?",
                answer: `Cub Cadet® riding lawn mowers are ideal for large properties because their powerful engines and big decks allow you to finish the job faster than a walk-behind mower with a smaller deck size. Matching your lawn mower to the size of your yard is one of the most important considerations. Beyond that, consider the terrain type, obstacles, gates you need to maneuver through, and how much storage space is available. Our <a href="https://www.cubcadet.com/en_US/product-information/knowledge-the-ultimate-lawn-mower-buying-guide.html">lawn mower buying guide</a> goes into more depth on the differences between Cub Cadet lawn mower options.`,
              },
              {
                question:
                  "What is the riding lawn mower best suited for my yard?",
                answer: `Riding lawn mowers are great for larger properties, but because Cub Cadet® lawn tractors can accept a variety of lawn mower attachments, there’s no one-size-fits-all model. The ideal lawn mower is the one that is catered most closely to your yard’s needs. First, consider the size of the area you need to mow, the type of terrain and the features you want. Our <a href="https://www.cubcadet.com/en_US/product-finder-riding-mowers.html">lawn mower product finder</a> guides you step-by-step through all of these considerations to help narrow down your search. Also, the Cub Cadet <a href="https://www.cubcadet.com/en_US/product-information/knowledge-the-ultimate-lawn-mower-buying-guide.html">lawn mower buying guide</a> goes into more depth on the differences between our riding lawn mower options.`,
              },
              {
                question: "When is the best time to buy a riding lawn mower?",
                answer: `The mowing season starts in the spring for most of the country, so it’s best to begin your research well before then. While the timing may vary depending on where you live, allow yourself enough time to compare model and test drive options at your local <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">Cub Cadet® dealer</a> before the mowing season begins.`,
              },
              {
                question: "What riding lawn mower can fit through a gate?",
                answer: `<a href="https://www.cubcadet.com/en_US/riding-lawn-mowers/small-riding-lawn-mowers">Cub Cadet® small riding lawn mowers</a>, with their 30-in. deck size, are ideal for smaller properties because of their compact size. If you’re tight on storage space or have a smaller gate you need to regularly maneuver through, this model might be ideal for your needs as it’s designed to fit through most gates. Cub Cadet® offers two types of small riding lawn mowers: the gas <a href="https://www.cubcadet.com/en_US/small-riding-lawn-mower-cc-30-h/13AC21JDA10.html?fitsOnModel=false#start=0">CC30H</a> and the electric <a href="https://www.cubcadet.com/en_US/electric-riding-mowers/cc30e/33BA27JDB10.html?fitsOnModel=false#prefn1=series&prefv1=XT1%25C2%25AE%2520Enduro%2520Series%25E2%2584%25A2%257CCC30%2520Series&start=3">CC30E</a>.`,
              },
              {
                question: "How do I finance a Cub Cadet riding lawn mower?",
                answer: `Cub Cadet® offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.cubcadet.com/en_US/financing">Click here</a> for more details.`,
              },
              {
                question: "How do I register my Cub Cadet riding lawn mower?",
                answer: `Once you’ve purchased a Cub Cadet® riding lawn mower, you can register your machine <a href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">here</a>.`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
