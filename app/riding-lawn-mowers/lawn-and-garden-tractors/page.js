"use client";
import { useEffect } from "react";

import Lineup from "@/app/snow-v2/elements/Lineup";
import Faqs from "@/components/Faqs";
import FooterBlocks from "@/components/FooterBlocks";
import ImgTitleCopy from "@/components/ImgTitleCopy";
import QuoteBlock from "@/components/QuoteBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";

const imgURLBase =
  "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/lawn-and-garden-tractors/";

const lineup = [
  {
    url: "https://www.cubcadet.com/en_US/cc30-small-riding-lawn-mowers",
    img: {
      src: imgURLBase + "CC30H_740x740.jpg",
      id: "CC30H_740x740",
      alt: "",
    },
    title: "CC30H & CC30E",
    copy: "Cub Cadet small riding lawn mowers are designed to deliver a premium cut, but in a compact size to fit through and be stored in small spaces.",
    noEngineeredFor: true,
    engFor: [
      {
        title: "TERRAIN",
        img: imgURLBase + "icon-sm-bump.svg",
        copy: "Mostly flat",
      },
      {
        title: "SEAT TYPE",
        img: imgURLBase + "icon-seat-2.svg",
        copy: `15" high-back seat`,
      },
      {
        title: "SPEED",
        img: imgURLBase + "icon-fast.svg",
        copy: "Up to 4 mph",
      },
    ],
    button: {
      copy: "EXPLORE SMALL RIDING MOWERS",
    },
  },
  {
    url: "https://www.cubcadet.com/en_US/xt1-enduro-series-lawn-and-garden-tractors",
    img: {
      src: imgURLBase + "Cub-Cadet_XT1LT46_New_2000x2000_8.jpg",
      id: "Cub-Cadet_XT1LT46_New_2000x2000_8",
      alt: "",
    },
    title: {
      copy: "Two-Stage Snow Blowers",
      src: imgURLBase + "logo-XT1.svg",
    },
    copy: "The base model of the Enduro Series, the XT1 tractors are loaded from the start-equipped for mowing, hauling and using a variety of attachments.",
    noEngineeredFor: true,
    engFor: [
      {
        title: "TERRAIN",
        img: imgURLBase + "icon-md-bump.svg",
        copy: "Mostly flat",
      },
      {
        title: "SEAT TYPE",
        img: imgURLBase + "icon-seat-2.svg",
        copy: `15" high-back seat`,
      },
      {
        title: "SPEED",
        img: imgURLBase + "icon-fast.svg",
        copy: "Up to 5.5 mph",
      },
    ],
    button: {
      copy: "EXPLORE XT1 ENDURO",
    },
  },
  {
    url: "https://www.cubcadet.com/en_US/xt2-enduro-series-lawn-and-garden-tractors",
    img: {
      src: imgURLBase + "Cub-Cadet_XT2_LX46_2000x2000_1.jpg",
      id: "Cub-Cadet_XT2_LX46_2000x2000_1",
      alt: "",
    },
    title: {
      copy: "Two-Stage Snow Blowers",
      src: imgURLBase + "logo-XT2.svg",
    },
    copy: "These powerful machines are designed to help tackle drifts and icy conditions with a center-mounted steel accelerator and powerful engines to take on winter conditions.",
    noEngineeredFor: true,
    engFor: [
      {
        title: "TERRAIN",
        img: imgURLBase + "icon-lg-bump.svg",
        copy: `Slight hills, mostly flat`,
      },
      {
        title: "SEAT TYPE",
        img: imgURLBase + "icon-seat-2.svg",
        copy: `15" high-back seat with armrests`,
      },
      {
        title: "SPEED",
        img: imgURLBase + "icon-fast.svg",
        copy: "Up to 5.5 mph",
      },
    ],
    button: {
      copy: "EXPLORE XT2 ENDURO",
    },
  },
];

export default function LawnAndGardenTractors({}) {
  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `<script>
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
      "//embed.cartfulsolutions.com/cub-cadet-riding-finder/recommendation.min.js",
      "cfl681"
    );
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
            className="w-full h-full object-cover absolute"
            fill={true}
            priority
          />
        </section>

        <section className="bg-black text-white text-center">
          <ul className="grid xl:grid-cols-[1fr_minmax(768px,1400px)_1fr]">
            <li className="bg-[#ffc20f] justify-end hidden xl:flex max-h-[500px]">
              <svg
                className="h-full w-auto -mr-1"
                viewBox="0 0 167.9 352"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-1.8-.8h169.4v355.6H-1.8z"></path>
                <path
                  d="M144.1 0 142 27.6c-.7 8.8-1.3 17.6-2 26.4-.3 4.1-.5 8.3-1 12.4s-2.4 7.3-6.2 9.3c-9.6 5.2-19.4 10.3-29.2 15.5-5.9 3.1-11.7 6.2-17.6 9.3-4.1 2.2-5.7 5.6-4.9 10.3l5.7 36c1.8 11.2 3.6 22.5 5.4 33.7 1.9 11.8 3.7 23.6 5.6 35.3 1.6 9.9 3.2 19.9 4.7 29.8 1.5 9.6 3.1 19.2 4.7 28.8 1.5 9.2 2.9 18.5 4.3 27.7.2 1.6.5 3.1.8 4.7.7 4 3.6 6.3 7.7 6.3h30.6c4.6 0 7.4 2.2 8.5 6.7 2.4 9.6 4.8 19.2 7.1 28.8.3 1.2.5 2.3.7 3.5H-1C-.8 234.6-.8 117.3-.8 0h144.9z"
                  fill="#ffc20f"
                ></path>
              </svg>
            </li>
            <li className="py-24 px-1">
              <div className="container mx-auto h-full flex justify-center flex-col">
                <h2 className="text-5xl">
                  The Lawn & Garden Tractors to Get It Done
                </h2>
                <p className="mt2 mb-0 mx-auto lg:max-w-3xl">
                  Get the most out of your lawn and garden tractors, including
                  the XT Enduro Series™. Designed with comfort and command in
                  mind, you can tackle your diverse lawn from season to season
                  while enjoying a premium experience.
                </p>
              </div>
            </li>
            <li className="bg-[#ffc20f] hidden xl:flex max-h-[500px]">
              <svg
                className="h-full w-auto -ml-1"
                viewBox="0 0 167.9 352"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M90.3,352H-4.3V0l94.7,0V352z" />
                <path
                  d="M22.5,0l144.9,0c0,117.3,0,234.6,0.2,352.1H-0.3c0.2-1.2,0.4-2.3,0.7-3.5c2.3-9.6,4.7-19.2,7.1-28.8
	c1.1-4.5,3.9-6.7,8.5-6.7h30.6c4.1,0,7-2.3,7.7-6.3c0.3-1.6,0.6-3.1,0.8-4.7c1.4-9.2,2.8-18.5,4.3-27.7c1.6-9.6,3.2-19.2,4.7-28.8
	c1.5-9.9,3.1-19.9,4.7-29.8c1.9-11.7,3.7-23.5,5.6-35.3c1.8-11.2,3.6-22.5,5.4-33.7l5.7-36c0.8-4.7-0.8-8.1-4.9-10.3
	c-5.9-3.1-11.7-6.2-17.6-9.3C53.2,86,43.4,80.9,33.8,75.7c-3.8-2-5.7-5.2-6.2-9.3s-0.7-8.3-1-12.4c-0.7-8.8-1.3-17.6-2-26.4L22.5,0
	L22.5,0z"
                  fill="#ffc20f"
                />
              </svg>
            </li>
          </ul>
        </section>

        <section className="">
          <div className="wrapper">
            <div className="container py-4 lg:py-10">
              <h2 className="mt-4 display-3 text-center">
                Cub Cadet® Lawn & Garden Tractors
              </h2>

              <ul className="grid gap-4 grid-cols-2 lg:grid-cols-3 list-unstyled">
                {lineup.map((block, i) => (
                  <li
                    className="flex flex-col"
                    key={i}
                  >
                    <Lineup block={block} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container mb-4">
          <ul className="grid lg:grid-cols-2 gap-4">
            <li className="bg-[#efefef] px-4 py-2 grid grid-cols-[5em_1fr] items-center gap-4">
              <img
                alt=""
                className="w-auto h=full max-h-24"
                src={imgURLBase + "icon-battery.svg"}
              />
              <div>
                <strong className="text-uppercase">Electric</strong>
                <p className="mb-1">
                  Our lithium-ion battery technology provides long runtime,
                  quiet operation, minimal power fade, less maintenance than gas
                  and a fast charge.
                </p>
              </div>
            </li>
            <li className="bg-[#efefef] px-4 py-2 grid grid-cols-[5em_1fr] gap-4 items-center">
              <img
                alt=""
                className="w-auto h=full max-h-24"
                src={imgURLBase + "icon-gas.svg"}
                style={{ maxHeight: "6em" }}
              />

              <div className="col-12 col-md-9 p-2">
                <strong className="text-uppercase">Gas Engine</strong>
                <p className="mb-1">
                  Engine options offer smooth operation, quick acceleration with
                  simple recovery; also available with electronic fuel injection
                  technology (EFI) for easy startup.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="relative flex flex-col-reverse lg:block max-h-[600px] overflow-hidden">
          <div className="container w-100 relative top-0 left-0 z-20 bg-neutral-100 lg:bg-transparent">
            <QuoteBlock
              className="text-black lg:absolute p-4 mt-10 md:max-w-xl lg:bg-white/70"
              quote={{
                stars: 5,
                title: "TRACTOR MAN",
                copy: `“Have had this tractor for a year now. Love it! Can't wait to get more attachments for it...”`,
                name: "Simply the best from Detroit, MI",
                unit: "XT1 LT46",
              }}
              addCSS={{ maxWidth: "700px" }}
              stackStars={true}
              starFill="#000"
              fillBase="#fff"
            />
          </div>

          <ResponsiveImage
            src={imgURLBase + "hero-2-1024w.jpg"}
            alt=""
            id="quoteimg"
            className="w-100 h-100 relative z-0 object-cover"
            fill={true}
            priority
          />
        </section>

        <section className="py-5 px-1 container">
          <h2 className="text-center">Year-Round Versatility</h2>
          <p className="text-center mb-3">
            Designed to get more done season after season with a selection of
            attachments and accessories designed for a variety of jobs.
          </p>

          <ImgTitleCopy
            jsonData={[
              {
                title: "Bagger System",
                img: { src: imgURLBase + "versatility-1.jpg", id: "" },
                copy: "Designed for excellent bagging performance with twin baggers available to fit every lawn and garden tractor. And for even bigger jobs, triple baggers are available on lawn and garden tractors 42 inches and larger.",
              },
              {
                title: "Hauler",
                img: { src: imgURLBase + "versatility-2.jpg", id: "" },
                copy: "Designed for up to 800 pounds and built with fold-out side panels for easy loading and unloading, the hauler allows you to easily move mulch, logs and more.",
              },
              {
                title: "All-Season Plow",
                img: { src: imgURLBase + "versatility-3.jpg", id: "" },
                copy: "With the convenience of the FastAttach® Connection System, this 46-inch heavy-duty all-season plow can move snow, dirt, gravel, mulch and more.",
              },
            ]}
          />

          <div className="mt-4 text-center">
            <a
              className="button text-uppercase font-weight-bold text-decoration-none d-inline-block bg-secondary text-center"
              href="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
              style={{ padding: "0.625rem 2.5rem" }}
            >
              VIEW ALL ATTACHMENTS
            </a>
          </div>
        </section>

        <section className="py-5 px-1 container">
          <div id="product-finder-riding-mowers"></div>
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
        style={{ backgroundColor: "#cfcfcf", minHeight: "800px" }}
      >
        For PLP
      </div>

      <div
        className="bottom container"
        id="sdb-container"
      >
        <FooterBlocks
          articles={{
            schema: { active: true, type: "NewsArticle" },
            title: {
              h2: "Lawn & Garden Tractor Articles",
              href: "https://www.cubcadet.com/en_US/help-center/",
            },
            blocks: [
              {
                title: {
                  copy: "The Difference Between Mulching Blades and High-Lift Blades",
                },
                copy: `Mower blade terminology can be a little confusing.  Local colloquialisms and engineering terminology (such as "3-in-1" or "high-lift") have also contributed to this confusion.`,
                url: "https://www.cubcadet.com/en_US/popular-faqs/knowledge-the-difference-between-mulching-blades-and-high-lift-blades.html",
                img: {
                  src: imgURLBase + "best-in-class-cut_1100x572.jpg",
                  id: "best-in-class-cut",
                },
              },
              {
                title: { copy: "5 Must-Have Riding Mower Attachments" },
                copy: "The Cub Cadet® XT Enduro Series™ was built to be versatile. Attachments and accessories will unlock the full potential of your riding mower, making it work for you year-round...",
                url: "https://www.cubcadet.com/en_US/popular-faqs/knowledge-must-have-riding-mower-attachments.html",
                img: {
                  src:
                    imgURLBase +
                    "must-have-riding-mower-attachments_1100x572.jpg",
                  id: "must-have-riding-mower-attachments",
                },
              },
              {
                title: { copy: "Benefits of a Battery-Powered Lawn Mower" },
                copy: "A battery-powered lawn mower can enhance your overall mowing experience. After taking into account yard size and terrain-battery powered mowers are a better fit for smaller yards...",
                url: "https://www.cubcadet.com/en_US/popular-faqs/knowledge-benefits-of-battery-lawn-mower.html",
                img: {
                  src:
                    imgURLBase + "benefits-of-battery-lawn-mower_1100x572.jpg",
                  id: "benefits-of-battery-lawn-mower",
                },
              },
              {
                title: { copy: "Benefits of a Battery-Powered Lawn Mower" },
                copy: "A battery-powered lawn mower can enhance your overall mowing experience. After taking into account yard size and terrain-battery powered mowers are a better fit for smaller yards...",
                url: "https://www.cubcadet.com/en_US/popular-faqs/knowledge-benefits-of-battery-lawn-mower.html",
                img: {
                  src:
                    imgURLBase + "benefits-of-battery-lawn-mower_1100x572.jpg",
                  id: "benefits-of-battery-lawn-mower",
                },
              },
            ],
          }}
        />

        <FooterBlocks
          className="mt-6"
          articles={{
            schema: { active: true, type: "NewsArticle" },
            title: {
              h2: "How To's & Maintenance",
              href: "https://www.cubcadet.com/en_US/help-center/",
            },
            blocks: [
              {
                title: {
                  copy: "How to Change the Air Filter on a Riding Mower",
                },
                copy: "It is recommended that your engine air filter be cleaned or replaced every 50 operating hours. In dry, dusty conditions, this should be done more frequently. The video instructions below...",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-air-filter-on-a-cub-cadet-rider.html",
                img: {
                  src: imgURLBase + "how-to-1.webp",
                  alt: "",
                },
              },
              {
                title: {
                  copy: "How to Change the Oil in your Riding Mower",
                },
                copy: "Regular oil changes are critical to keeping your riding lawn mower's engine in top shape and prolonging the life of your mower. Watch this video to learn how to change the oil...",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-oil-in-a-cub-cadet-riding-lawn-mower.html",
                img: {
                  src:
                    imgURLBase +
                    "how-to-change-the-oil-in-a-cub-cadet-riding-lawn-mower_1100x572.jpg",
                  alt: "",
                },
              },
              {
                title: {
                  copy: "How to Assemble Tire Chains on your Riding Mower",
                },
                copy: "Just because it's winter, doesn't mean you won't be using your riding lawn mower. Whether hauling wood or clearing the drive with the snow thrower attachment, your machine can be a vital asset...",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-assemble-tire-chains-on-your-cub-cadet-riding-mower.html",
                img: {
                  src: imgURLBase + "how-to-3.webp",
                  alt: "",
                },
              },
              {
                title: {
                  copy: "How to Assemble Tire Chains on your Riding Mower",
                },
                copy: "Just because it's winter, doesn't mean you won't be using your riding lawn mower. Whether hauling wood or clearing the drive with the snow thrower attachment, your machine can be a vital asset...",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-assemble-tire-chains-on-your-cub-cadet-riding-mower.html",
                img: {
                  src: imgURLBase + "how-to-3.webp",
                  alt: "",
                },
              },
            ],
          }}
        />

        <FooterBlocks
          className="mt-6"
          articles={{
            schema: { active: false, type: "" },
            title: {
              h2: "Riding Lawn Mower Attachments & Accessories",
              href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories",
            },
            blocks: [
              {
                title: {
                  copy: "Riding Mower Baggers",
                  className: "text-center",
                },
                img: {
                  src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A30018100.jpg",
                  id: "riding-19A30018100",
                },
                button: {
                  copy: "View More",
                  href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories?prefn1=universal-part-category&prefv1=Baggers%20and%20Grass%20Collectors",
                },
              },
              {
                title: { copy: "Mulching Kits", className: "text-center" },
                img: {
                  src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A70041100.jpg",
                  id: "riding-19A70041100",
                },
                button: {
                  copy: "View More",
                  href: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories?prefn1=universal-part-category&prefv1=Mulching%20Kit",
                },
              },
              {
                title: { copy: "Hauler", className: "text-center" },
                img: {
                  src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19B40026100_1.jpg",
                  id: "riding-19A30018100",
                },
                button: {
                  copy: "View More",
                  href: "https://www.cubcadet.com/en_US/riding-mower-accessories/cub-cadet-hauler/19B40026100.html#q=hauler&lang=en_US&start=5",
                },
              },
              {
                title: {
                  copy: "All-Season Plow Blade",
                  className: "text-center",
                },
                img: {
                  src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/19A30037100.jpg?resize=768x768",
                  id: "riding-19A30018100",
                },
                button: {
                  copy: "View More",
                  href: "https://www.cubcadet.com/en_US/riding-mower-accessories/fastattach-all-season-plow-blade/19A30037100.html?fitsOnModel=false#start=3",
                },
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
