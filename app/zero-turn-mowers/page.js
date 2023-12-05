"use client";
import { useEffect } from "react";

import Articles from "@/components/Articles";
import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import QuoteBlock from "@/components/QuoteBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function ZeroTurnMowers({}) {
  const imgType = "res";

  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `
    <script>
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
      "//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js",
      "cfl659"
    );
  </script>
  `;
    const scriptEl = document.createRange().createContextualFragment(html);
    document.body.appendChild(scriptEl);
  });

  const addPromo = false;
  const addCubDays2023 = false;

  return (
    <>
      <div
        id="sdb-container"
        className="mt-4"
      >
        <section className="flex flex-col xl:flex-row items-center justify-center">
          <div className="xl:container w-full xl:h-[600px] z-10 xl:py-2">
            {/* <div className="flex flex-col items-end justify-between h-full">
              <div className="w-full xl:max-w-[480px]">
                {addCubDays2023 && <CubDays2023 thru="December 22, 2023" />}
                {addPromo && <FinancingBanner18 className="mt-1" />}
              </div>
            </div> */}
          </div>

          <div className="relative xl:absolute h-[600px] w-full z-0">
            <ResponsiveImage
              id="hero"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/hero.jpg"
              alt=""
              className="h-full w-full absolute object-cover top-0 left-0"
              hero
            />
          </div>
        </section>
      </div>

      <div
        id="sdb-container"
        className=""
      >
        <section className="container text-center p-2 lg:px-52 py-4 lg:py-10">
          <h1 className="">Cub Cadet Zero-Turn Mowers</h1>
          <p className="lg:px-48 mt-1 lg:mt-4">
            Zero-turn lawn mowers answer the call of challenging yards and
            difficult obstacles. It’s time to explore the full Cub Cadet line-up
            of innovative zero-turns, including lap bar and Cub Cadet exclusive
            steering wheel options as part of the Ultima series. With a
            zero-turn mower, the possibilities are at every turn.
          </p>
        </section>

        <section className="py-5 px-1">
          <div className="container ">
            <ul
              className="grid grid-cols-[40em_1fr] items-center bg-secondary"
              style={{
                clipPath:
                  "polygon( 2rem 0px, 100% 0%, 100% 100%, 0px 100%, 0px 2rem )",
              }}
            >
              <li className="relative min-h-[34em]">
                <img
                  alt=""
                  className="h-full absolute w-full object-cover"
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/intro.jpg"
                  style={{}}
                />
              </li>
              <li className="">
                <div className="p-3">
                  <h2 className="mb-2 text-4xl">
                    Introducing the Ultima Series
                    <sup>™</sup>
                    ZTXS
                  </h2>
                  <h3 className="mb-2">
                    The Ultima Series™ Zero-Turn with
                    <br />
                    Commercial-Grade Features
                  </h3>
                  <p className="mb-2">
                    From tight turns to inclined hillsides and stretching
                    valleys, the Ultima ZTXS is built to help tackle your yard’s
                    unique challenges. The Ultima ZTXS brings Cub Cadet’s
                    innovative and proprietary Synchro-Steer
                    <sup>™</sup>
                    technology to the proven Ultima Series
                    <sup>™</sup>
                    platform for reliable precision and confident control.
                  </p>
                  <a
                    className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black text-white"
                    href="https://www.cubcadet.com/en_US/ultima-ztxs-zero-turn-mowers"
                    style={{ padding: "0.625rem 2.5rem" }}
                  >
                    Learn more about the Ultima ztxs
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <Explore
          showH2={true}
          explore={{
            h2: "Explore Zero-Turn Mowers",
            blocks: [
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/product-ZT.jpg",
                title: "Ultima ZT",
                copy: `The award-winning Ultima Series™ features enhanced strength and durability, redefined comfort and uncompromised performance.`,
                button: {
                  url: "https://www.cubcadet.com/en_US/ultima-zt-zero-turn-mowers",
                  copy: "Shop for Ultima ZT",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
                engFor: [
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-area-5.webp",
                    copy: "Up to 5 acres",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-speed.png",
                    copy: "Up to 7.5 mph​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-slope-15.webp",
                    copy: "Up to 15 degree slopes​",
                  },
                ],
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/product-ZT.jpg",
                title: "Ultima Electric ZT",
                copy: `The Ultima Series(TM) ZT1 42E is equipped with the latest lithium-ion battery technology for a quiet operation, run time up to 1.5 hours of run time and limited power fade.`,
                button: {
                  url: "https://www.cubcadet.com/en_US/electric-lawn-mowers/zt1-42e/34CBA2CS710.html",
                  copy: "Shop for Ultima Electric ZT",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
                engFor: [
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-battery.webp",
                    copy: "Electric",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-area-2.webp",
                    copy: "Up to 2 acres on a single charge​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-speed.png",
                    copy: "Up to 7.0 mph​​​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-slope-15.webp",
                    copy: "Up to 15 degree slopes​​​",
                  },
                ],
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/product-ZTS.jpg",
                title: "Ultima ZTS",
                copy: `Equipped with Cub Cadet® Synchro-Steer™ Technology, the Ultima ZTS line delivers precision, control and stability on hills up to 20 degrees.`,
                button: {
                  url: "https://www.cubcadet.com/en_US/ultima-zts-zero-turn-mowers",
                  copy: "Shop for Ultima ZTS",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
                engFor: [
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-steer.webp",
                    copy: "Synchro Steer® Technology",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-area-5.webp",
                    copy: "Up to 5 acres​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-speed.png",
                    copy: "Up to 7.5 mph​​​​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-slope-15.webp",
                    copy: "Up to 20 degree slopes​​​​",
                  },
                ],
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/product-ZTX.jpg",
                title: "Ultima ZTX",
                copy: `The Ultima Series™ ZTX is engineered with commercial-grade features that allow you to tackle tough challenges on your large property.`,
                button: {
                  url: "https://www.cubcadet.com/en_US/ultima-ztx-zero-turn-mowers",
                  copy: "Shop for Ultima ZTS",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
                engFor: [
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-strength.webp",
                    copy: "Commercial grade features​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-area-12.webp",
                    copy: "Up to 12 acres​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-speed.png",
                    copy: "Up to 9 mph​​​​​​​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-slope-15.webp",
                    copy: "Up to 15 degree slopes​​",
                  },
                ],
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/product-ZTS.jpg",
                title: "Ultima ZTXS",
                copy: `The Ultima Series™ ZTXS is engineered with commercial-grade features that allow you to tackle tough challenges on your large property.`,
                button: {
                  url: "https://www.cubcadet.com/en_US/ultima-ztxs-zero-turn-mowers",
                  copy: "Shop for Ultima ZTXS",
                  className: "text-white border-0",
                  style: { backgroundColor: "#000" },
                },
                engFor: [
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-steer.webp",
                    copy: "Synchro Steer® Technology​​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-area-12.webp",
                    copy: "Up to 12 acres​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-strength.webp",
                    copy: "Commercial grade features​​​​​​​​",
                  },
                  {
                    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/icon-slope-15.webp",
                    copy: "Up to 20 degree slopes​​",
                  },
                ],
              },
            ],
            button: {
              url: "https://www.cubcadet.com/en_US/ultima-series-features-benefits.html",
              copy: "Learn more about the Ultima series",
              className: "",
              style: { backgroundColor: "#000" },
            },
          }}
          addButton={true}
        />

        <section className="relative mb-6 flex flex-col-reverse">
          <div className="container relative z-10 pt-2 lg:pt-14 lg:pb-64">
            <QuoteBlock
              quote={{
                stars: 5,
                img: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vde16d024a27b8e0c81e1c6e963f0a6bf041c9496/snow-v2/31AH5EVZ596_3X30HD_Env03.jpg",
                title: "LOOK NO MORE FOR A GREAT MOWER.",
                copy: "“This Cub Cadet mower is a beast. I absolutely love it and all of its features. Honestly, I haven’t found one negative thing to say about it since I’ve bene using it. Needless to say, I love this mower!”",
                name: "Twwagoner from Lexington, NC",
                unit: "Ultima ZT1",
              }}
              className="bg-white lg:p-4 lg:max-w-[40rem]"
            />
          </div>

          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/quote-desktop.jpg"
            alt=""
            id="snowguy"
            className="lg:absolute top-0 left-0 z-0 w-full h-full object-cover"
            hero={false}
          />
        </section>

        <section className="snow-picker">
          <div id="product-finder-zero-turns" />
        </section>

        <section className="text-center">
          <h2>Shop & Compare Zero-Turn Mowers</h2>
        </section>
      </div>

      <div
        id="sdb-container"
        className=""
      >
        <Articles
          imgType="res"
          viewAllLink="https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Snow%20Blowers"
          articles={{
            h2: "Zero-Turn Mower Articles & How To’s",
            blocks: [
              {
                title: "Zero-Turn Mower Maintenance Schedule and Tips",
                copy: `When properly cared for, Cub Cadet's zero-turn lawn mowers can be your go-to lawn care tool for years. So to keep your mower riding smoothly, follow the zero-turn mower maintenance schedule below, then keep reading for a few tips on getting the most from your Cub Cadet riding mower.`,
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-zero-turn-mowers-maintenance-schedule-and-tips.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/zero-turn-mowers-maintenance-schedule-and-tips_1100x572.jpg"
                    id="Hero_LineUp_01"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title: "How To Change a Deck Belt on a Zero-Turn Mower",
                copy: "Lawn mower deck belts can wear with ordinary use over time and they can cause greater damage to your machine if not replaced in a timely manner. This video will show you how to perform a mower deck belt replacement on a Cub Cadet Ultima zero-turn mower.  Depending on your model, the instructions in this video may vary slightly.  Always be sure to check your operator's manual for detailed instructions.",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-deck-belt-on-a-cub-cadet-zero-turn-rider.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/replace-belt.png"
                    id="recommended-snow-thrower-back-up-parts"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title: "How to Replace a Blade on a Zero-Turn Mower",
                copy: "Over time, the blades on your zero-turn riding lawn mower can become worn out, bent or dinged. This gradual damage can reduce the effectiveness of your mower, so be sure to sharpen or replace the blades if you notice these signs of wear. How often you visually check the blades depends on how regularly the mower is used. Check the blades at least twice a year, at the beginning and middle of the mowing season, or more often if you mow year-round. This video will show you how replace the blades on your Cub Cadet Ultima zero-turn mower. Depending on your model, the instructions in this video may vary slightly. Always be sure to check your operator's manual for detailed instructions.",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-blades-on-a-zero-turn.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/change-blades.png"
                    id="snow-thrower-operation-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                title:
                  "How to Install a Bagger Attachment on a Zero-Turn Riding Mower",
                copy: "The following video will show you how to install a double bagger on your Ultima Series ZT Zero Turn mower. The tools needed for installation include two 9/16 in. socket wrenches, two 1/2 in. socket wrenches, and two 7/16 in. socket wrenches. Depending on your model, the instructions in this video may vary slightly. Always be sure to check your operator's manual for detailed instructions.",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-install-a-bagger-on-a-zero-turn.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/how-to-install-a-bagger-on-a-zero-turn_1100x572.jpg"
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
          imgType="res"
          centerTitle
          attAcc={{
            h2: "Zero-Turn Mower Attachments & Accessories",
            blocks: [
              {
                title: "Baggers",
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
              //{
              //   title: "PASTE",
              //   url: "PASTE",
              //   res: (
              //     <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/zero-turn-mowers/" />
              //   ),
              // },
            ],
          }}
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Categories",
            list: [
              {
                title: "Riding Mower Accessories",
                href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories",
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
            h3: "Zero-Turn Mower Maintenance",
            p: "When customers buy Zero-Turn Lawn Mowers they often buy or consider:",
            list: [
              {
                title: "Oil Change Kit",
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
              {
                title: "Oil Change Kit",
                href: "https://www.cubcadet.com/en_US/riding-mower-accessories/oil-change-kit/490-950-C042.html#q=490-950-C042&lang=en_US&start=0",
              },
              {
                title: "Kawasaki Engine Maintenance Kits",
                href: "https://www.cubcadet.com/en_US/small-engine-parts/kawasaki-engine-maintenance-kit/490-950-C063.html#q=490-950-C063&lang=en_US&start=0Blades",
              },
              {
                title: "Belts",
                href: "https://www.cubcadet.com/en_US/zero-turn-mower-parts/zero-turn-mower-belts",
              },
              {
                title: "Blades",
                href: "https://www.cubcadet.com/en_US/zero-turn-mower-parts/zero-turn-mower-blades",
              },
              {
                title: "Tires and Wheels",
                href: "https://www.cubcadet.com/en_US/zero-turn-mower-parts/zero-turn-mower-tires-and-wheels",
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
                  "What should I know before buying a zero-turn lawn mower?",
                answer: `Zero-turn mowers are ideal for large lawns or properties for a variety of reasons. One of the main benefits is the efficiency gained through speed and turning capabilities. Zero-turn mowers are ideal from a maneuverability standpoint, designed to provide control for mowing around obstacles. For additional information to determine whether a zero-turn lawn mower is right for you, check out this <a href="https://www.cubcadet.com/en_US/popular-faqs/knowledge-is-a-zero-turn-mower-right-for-you.html">article</a>. Additionally, <a href="https://www.cubcadet.com/en_US/product-information/knowledge-the-ultimate-lawn-mower-buying-guide.html">our lawn mower buying guide</a> goes into more depth on the differences between Cub Cadet® lawn mower options.`,
              },
              {
                question: "What size zero-turn mower do I need for my yard?",
                answer: `The size of your yard will usually determine what size deck you need for your lawn mower, and zero-turns are no different. The bigger the deck, the more grass you can cut with each pass, allowing you to complete the task efficiently. But you also need to consider maneuverability: Will you be mowing uneven terrain with a lot of obstacles, or is your property mostly flat? Zero-turn lawn mowers are designed to tackle yards with obstacles because of their zero-degree turning radius. Check out the <a href="https://www.cubcadet.com/en_US/product-finder-zero-turn-mowers.html">Cub Cadet zero-turn mower product finder</a> to help determine the ideal product for you based on your requirements.`,
              },
              {
                question:
                  "What zero-turn lawn mower is best suited for my yard?",
                answer: `There’s no one size fits all lawn mower. A zero-turn that works for one operator might not be ideal for another. Cub Cadet designs a variety of models with features that cater to the needs of the operator. Once you’ve considered the needs of your yard and decided on the right size mower, there’s a checklist of features that your zero-turn mower should fulfill. Beware of zero-turn mowers that focus on just one feature and look for a machine that can excel across the board. <a href="https://www.cubcadet.com/en_US/how-to/knowledge-how-to-pick-the-best-zero-turn.html">This article</a> provides more information on this topic or you can check out the <a href="https://www.cubcadet.com/en_US/product-finder-zero-turn-mowers.html">Cub Cadet zero-turn mower product finder</a> to help determine the ideal product for you based on your requirements.`,
              },
              {
                question: "What is an ideal commercial zero-turn lawn mower?",
                answer: `Cub Cadet commercial zero-turn lawn mowers are built different to tackle the needs of professionals. The PRO series has a variety of options available, including units featuring SurePath™, a semi-autonomous technology, and award-winning stand-on mowers. <a href="">The Cub Cadet commercial lineup</a> is built with true innovation to fuel real progress.`,
              },
              {
                question: "How do I finance my Cub Cadet zero-turn mower?",
                answer: `Cub Cadet offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.cubcadet.com/en_US/commercial-equipment/commercial-zero-turn-mowers">Click here</a> for more details.`,
              },
              {
                question: "How do I register my Cub Cadet zero-turn mower?",
                answer: `Once you’ve purchased a Cub Cadet riding lawn mower, you can register your machine <a href="https://www.cubcadet.com/en_US/financing">here</a>.`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
