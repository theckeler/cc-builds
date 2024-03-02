import ResponsiveImage from "@/components/ResponsiveImage";
import HomeArticles2024 from "./components/articles";
import HomeCTA2024 from "./components/cta";
import Home2024H2 from "./components/h2";
import Home2024ScrollContainer from "./components/scrollContainer";

export default function Home2024() {
  const base =
    "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/home-2024/";

  const howTos = [
    {
      container: { className: "bg-gray-100" },
      img: { src: "zero-turn.webp" },
      content: {
        className: "p-2",
        title: "How to Pick the Best Zero-Turn Lawn Mower",
        copy: `There are plenty of options in the marketplace when it comes to choosing the right zero-turn lawn mower. And if you’ve decided that a zero-turn mower is right for you, it’s time…`,
      },
      button: {
        title: "Learn More",
        href:
          "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-pick-the-best-zero-turn.html",
        sr: "about Integer sodales leo risus",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
    {
      container: { className: "bg-gray-100" },
      img: { src: "chnage-blades.webp" },
      content: {
        className: "p-2",
        title: "How to Change a Blade on a Riding Lawn Mower",
        copy: `Over time, the blades on your riding lawn mower can become worn out, bend or dinged. This gradual damage can reduce the effectiveness of your mower, so be sure…`,
      },
      button: {
        title: "Learn More",
        href:
          "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-blade-on-your-cub-cadet-rider.html",
        sr: "about Integer sodales leo risus",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
    {
      container: { className: "bg-gray-100" },
      img: { src: "electric-rider.webp" },
      content: {
        className: "p-2",
        title: "Is an Electric Rider Right for You?",
        copy: `Cub Cadet riding mowers provide a hassle-free, easy to use experience, delivering uncompromising power, minimal maintenance and the cut quality you…`,
      },
      button: {
        title: "Learn More",
        href:
          "https://www.cubcadet.com/en_US/product-information/electric-riding-mower-right+for-me.html",
        sr: "about Integer sodales leo risus",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
  ];

  const products = [
    {
      title: "Zero-turn Lawn Mowers",
      src: "17RIEACZ010_ZT150_hero_rt1_treat_HR_72dpi.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mowers",
    },
    {
      title: "Riding Lawn Mowers",
      src: "13AQA9TTA10_XT1_LT46_RH_rt1_treat_HR_72dpi.webp",
      href: "https://www.cubcadet.com/en_US/lawn-mowers/riding-lawn-mowers",
    },
    {
      title: "Commercial Lawn Mowers",
      src: "47RICHB8010_ZTXS660_H_treat_rt3_72dpi.webp",
      href: "https://www.cubcadet.com/en_US/commercial-equipment",
    },
    {
      title: "Electric Lawn Mowers",
      src: "34ABA2CS710_ZT1_42E_Rt_rt4_treat_HR_72dpi.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers",
    },
    {
      title: "Walk-Behind Lawn Mowers",
      src: "12ABR2MM710_SC900_H_rt1_72dpi.webp",
      href: "https://www.cubcadet.com/en_US/lawn-mowers/walk-behind-mowers",
    },
    {
      title: "Snow Blowers",
      src: "31AH5IVTB10_2X_28_RT_rt3_treat_72dpi.webp",
      href: "https://www.cubcadet.com/en_US/snow-blowers",
    },
    {
      title: "Utility Vehicles",
      src: "37AZ7CPK710_Challenger550_BLK_0033_shd_rt1_72dpi.webp",
      href: "https://www.cubcadet.com/en_US/utility-vehicles",
    },
    // {
    //   title: "Cordless Electric Lawn Tools",
    //   src: "41AE125C810_ST15E_LPFL_rt2_MOCK_72dpi.webp",
    //   href: "https://www.cubcadet.com/en_US/utility-vehicles",
    // },
  ];

  const attachments = [
    {
      title: "Riding Baggers",
      src: "riding-mower-bag.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-mower-accessories/double-bagger-for-42--and-46-inch-decks/19B30031100.html",
    },
    {
      title: "Zero Turn Baggers",
      src: "zero-turn-mower-bag.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-mower-accessories/double-bagger-for-42--and-46-inch-decks/19A70054100.html",
    },
    {
      title: "Sun Shades",
      src: "sun-shade.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-mower-accessories/sun-shade/19B30021100.html",
    },
    {
      title: "Fastattach® Rear Carrier",
      src: "FASTATTACH-rear-carrier.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-mower-accessories/fastattach-rear-cargo-carrier/19B30029100.html",
    },
    {
      title: "Hauler Accessories",
      src: "hauler-accesories.webp",
      href:
        "https://www.cubcadet.com/en_US/universal-parts/hauler-tool-holder-kit/19A40030OEM.html",
    },
    {
      title: "All-Season Plows",
      src: "all-season-plow.webp",
      href:
        "https://www.cubcadet.com/en_US/riding-mower-accessories/fastattach-all-season-plow-blade/19A30037100.html",
    },
    {
      title: "Snow Blower Cab Covering",
      src: "snow-blower-cab-covering.webp",
      href:
        "https://www.cubcadet.com/en_US/snow-blower-accessories/universal-snow-blower-cab/490-241-0032.html",
    },
    {
      title: "Tire Chains",
      src: "tire-chains.webp",
      href:
        "https://www.cubcadet.com/en_US/universal-parts/chains-for-26-x-12-x-12-tires/490-241-0052.html",
    },
    {
      title: "Cutting Decks",
      src: "XT2_LX42_deck_top_F1.webp",
      href: "https://www.cubcadet.com/en_US/shop-by-part-type/mower-decks",
    },
    {
      title: "Mulching Kits",
      src: "mulching-kit.webp",
      href:
        "https://www.cubcadet.com/en_US/zero-turn-mower-blades/xtreme-mulching-kit-for-42-inch-cutting-decks/19A30046100.html",
    },
  ];

  const moreFromCC = [
    {
      content: {
        title: "A Show That’s Made to Mow",
        copy: `From the makers of the ultimate mowing experience comes the ultimate lawn show. Introducing the Ultimas – designed for those who love to lawn.`,
      },
      button: {
        title: "Learn More",
        url: "https://www.cubcadet.com/",
        sr: "about Integer sodales leo risus",
        className:
          "border-2 border-white px-4 py-1 mt-auto text-white uppercase no-underline font-bold text-center",
      },
    },
    {
      content: {
        title: "3X the Caffeine for Clearing 3X the Snow",
        copy: `Inspired by the 3X snow blowers, this roast is made with 3X the caffeine for winter mornings when you need to clear feet of snow – not inches.`,
      },
      button: {
        title: "Learn More",
        url: "https://www.cubcadet.com/",
        sr: "about Integer sodales leo risus",
        className:
          "border-2 border-white px-4 py-1 mt-auto text-white uppercase no-underline font-bold text-center",
      },
    },
  ];

  return (
    <div id="sdb-container">
      <div className="px-2 pt-2 px-md-3 pt-md-3 max-w-[1536px] mx-auto">
        <HomeCTA2024
          className="mb-3"
          base={base}
          content={{
            className:
              "p-4 bg-black text-white w-[30%] flex flex-col items-start",
            title: "Do More This Spring",
            copy: `20% Off Fleet discount. Valid March 1-31, 2024`,
          }}
          button={{
            title: "Learn More",
            href: "https://www.cubcadet.com/",
            sr: "about Integer sodales leo risus",
            className:
              "border-2 border-[#ffc20f] px-4 py-1 mt-auto bg-[#ffc20f] text-black text-[#ffc20f] uppercase no-underline font-bold text-center w-full md:w-auto",
          }}
          img={{ src: "31AM5HVSB56_2X26_Inteli_env02.jpg", hero: true }}
        />

        <section className="mb-3">
          <Home2024H2
            title="Shop Products"
            href="#"
            className="flex mb-2 items-center"
          />

          <Home2024ScrollContainer
            base={base}
            products={products}
            addBlock={true}
          />
        </section>

        <HomeCTA2024
          base={base}
          content={{
            className: "p-4 bg-[#ffc20f] w-[30%] flex flex-col items-start",
            title: "Experience the Ultimate Lineup",
            copy: `Cub Cadet offers a variety of products tough enough to help tackle whatever you throw at it.`,
          }}
          button={{
            title: "Learn More",
            href:
              "https://www.cubcadet.com/en_US/ultima-series-features-benefits.html",
            sr: "Maecenas tristique lacus ante",
            className:
              "border-2 border-black px-4 py-1 mt-auto uppercase no-underline font-bold text-center bg-black text-[#ffc20f] w-full md:w-auto",
          }}
          videoID="x-_qooDWr1c"
          className="mb-3"
        />

        <section className="bg-[#efefef] mb-3">
          <div className="flex justify-center container p-2 ">
            <div id="product-finder-zero-turns">
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              (function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
              `,
                }}
              ></script>
            </div>
          </div>
        </section>

        <HomeCTA2024
          className="mb-3"
          base={base}
          content={{
            className:
              "p-4 bg-black text-white w-[30%] flex flex-col items-start",
            title: "Find a Dealer Today",
            copy: `Maximize your Cub Cadet experience with expert service and browse your local dealers wide product selection online. Schedule a test drive today.`,
          }}
          button={{
            title: "Find a Dealer",
            href:
              "https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find",
            sr: "about Integer sodales leo risus",
            className:
              "border-2 border-white px-4 py-1 mt-auto text-black uppercase no-underline font-bold text-center bg-white w-full md:w-auto",
          }}
          img={{ src: "OutdoorSale-0323_HR_rt3_72dpi.webp" }}
        />
      </div>

      <section className="relative lg:pt-36">
        <div className="bg-[#ececec] relative">
          <div className="lg:hidden absolute top-0 left-0 w-full h-full max-h-28 bg-white" />
          <ul className="grid grid-cols-1 lg:grid-cols-2 max-w-[800px] mx-auto relative z-10 p-5">
            <li className="col-start-1 lg:col-start-2 lg:row-start-1 relative">
              <ResponsiveImage
                id="Inteli_env02"
                src="cub-cadet-credit-card-2.webp"
                base={base}
                alt=""
                className="w-full lg:w-[560px] lg:absolute lg:right-8 lg:bottom-0 z-10"
              />
            </li>
            <li className="col-start-1 lg:col-start-1 lg:row-start-1 relative z-10">
              <h2 className="text-3xl mb-2">
                Exceptional Financing Offers Available*
              </h2>
              <ul className="flex gap-1 mb-2">
                <li>*</li>
                <li>
                  Offers subject to credit approval. <br />
                  Some Restrictions apply.
                </li>
              </ul>
              <a
                href="https://www.cubcadet.com/en_US/financing"
                className="border-2 border-black px-4 py-1 mt-auto uppercase no-underline font-bold text-center inline-block bg-black text-white w-full md:w-auto"
              >
                Learn More
                <span className="sr-only"> Nulla et libero eu nibh</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="px-3 max-w-[1536px] mx-auto">
        {/* <section className="mt-3">
          <h2 className="text-3xl">More From Cub Cadet</h2>

          <ul className="flex gap-6 max-w-[100vw] overflow-y-scroll pb-3">
            {moreFromCC.map((block, i) => (
              <li className="relative min-w-[400px]" key={i}>
                <HomePromo2024
                  base={base}
                  content={block.content}
                  button={{
                    title: "Learn More",
                    href: "https://www.cubcadet.com/",
                    sr: "about Integer sodales leo risus",
                    className:
                      "border-2 border-white px-4 py-1 mt-auto text-white uppercase no-underline font-bold text-center",
                  }}
                />
              </li>
            ))}
          </ul>
        </section> */}

        <section className="mt-3">
          <Home2024H2
            title="How-Tos & Articles"
            href="#"
            className="flex mb-2"
          />

          <ul className="flex xl:grid xl:grid-cols-3 gap-6 max-w-[100vw] overflow-x-scroll no-scrollbar">
            {howTos.map((block, i) => (
              <li className="relative" key={i}>
                <HomeArticles2024
                  container={block.container}
                  base={base}
                  img={block.img}
                  content={block.content}
                  button={block.button}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-3 bg-gray-100 py-10 p-3">
        <div className="max-w-[1536px] mx-auto">
          <Home2024H2
            title="Shop Attachments"
            href="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
            className="flex mb-1"
          />

          <Home2024ScrollContainer
            base={base}
            products={attachments}
            addBlock={false}
          />
        </div>
      </section>
    </div>
  );
}
