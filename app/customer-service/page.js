"use client";

import IconBelt from "@/components/images/IconBelt";
import IconBlades from "@/components/images/IconBlades";
import IconLevel from "@/components/images/IconLevel";
import IconAwards from "@/components/images/IconAwards";
import IconScrewdriverWrench from "@/components/images/IconScrewdriverWrench";
import IconManuals from "@/components/images/IconManuals";
import IconMagGlassBolt from "@/components/images/IconMagGlassBolt";
import IconPhone from "@/components/images/IconPhone";
import IconChat from "@/components/images/IconChat";

const howToContent = {
  blocks: [
    {
      icon: <IconBelt className="w-full max-h-[80px] h-full" />,
      title: "How to Change the Deck Belt on a Riding Mower",
      href: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-pto-belt-on-a-cub-cadet-rider.html",
    },
    {
      icon: <IconBlades className="w-full h-full" />,
      title: "How to Change the Blades on a Riding Mower",
      href: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-change-the-blade-on-your-cub-cadet-rider.html",
    },
    {
      icon: <IconLevel className="w-full max-h-[50px] h-full" />,
      title: "How to Level the Deck on a Riding Mower",
      href: "https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-level-the-deck-on-your-cub-cadet-rider.html",
    },
  ],
  button: {
    copy: "See all how-to content",
    url: "https://www.cubcadet.com/en_US/how-to/",
  },
};

const popularHelpLinks = {
  blocks: [
    {
      icon: <IconMagGlassBolt className="w-full max-h-[100px] h-full" />,
      copy: "Search parts for your machine or view diagrams",
      href: "https://www.cubcadet.com/en_US/service-and-parts",
      button: {
        copy: "Find parts",
      },
    },
    {
      icon: <IconManuals className="w-full max-h-[100px] h-full" />,
      copy: "Use your model number to download your Operator’s Manual",
      href: "https://www.cubcadet.com/en_US/operatorsmanuals",
      button: {
        copy: "Find manuals",
      },
    },
    {
      icon: <IconScrewdriverWrench className="w-full max-h-[100px] h-full" />,
      copy: "Find a licensed mechanic at a service center near you ",
      href: "https://www.cubcadet.com/en_US/servicelocator",
      button: {
        copy: "Find service",
      },
    },
    {
      icon: <IconAwards className="w-full max-h-[100px] h-full" />,
      copy: "Find warranty information and extended plans",
      href: "https://www.cubcadet.com/en_US/ew-info-page.html",
      button: {
        copy: "Find warranty info",
      },
    },
  ],
};

const findSupport = {
  h2: "Find Support by Model",
  blocks: [
    {
      img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8f055b11/products/Equipment/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg?sw=290&sh=290&sm=fit",
      title: "Lawn Mowers",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Lawn%20%26%20Garden%20Tractors",
    },
    {
      img: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZTS.jpg?version=1,639,577,713,000",
      title: "Zero-Turn",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Zero%20Turn%20Mowers",
    },
    {
      img: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT-el.jpg?version=1,639,577,700,000",
      title: "Electric",
      url: "https://www.cubcadet.com/en_US/electric-mowers-and-tools",
    },
    {
      img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw9d00b090/products/Equipment/Cub-Cadet_ProZ_972SD_1.jpg?sw=550&sh=550&sm=fit",
      title: "Professional",
      url: "https://www.cubcadet.com/en_US/commercial-equipment",
    },
    {
      img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5cb54c82/products/Equipment/Cub-Cadet_3X_30HD_3.jpg?sw=290&sh=290&sm=fit",
      title: "Snow",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Snow%20Blowers",
    },
    {
      img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c0e1bd/products/Equipment/37DZ7CKK710_MX550_H.jpg?sw=290&sh=290&sm=fit",
      title: "UTV",
      url: "https://www.cubcadet.com/en_US/utility-vehicles",
    },
    {
      img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw7b269624/products/Equipment/Cub_Cadet_CS16E_2000x2000_4.jpg?sw=1000&sh=1000&sm=fit",
      title: "Chore & Handheld",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Yard%20Equipment",
    },
    {
      img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw63b8d5db/menu-card-images/Cub-Cadet-Riding-Mower-Accessory1_NavCard.png",
      title: "Attachments",
      url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories",
    },
  ],
};

export default function CustomerService({}) {
  return (
    <div id="sdb-container">
      <section
        className="section-1"
        style={{ background: "rgb(255, 194, 15)" }}
      >
        <div className="container px-3 py-4">
          <h1 className="text-center mb-0">Cub Cadet Customer Service</h1>
          <p className="mt-2 mb-0 text-center">
            We provide value to our Cub Cadet owners with support content to
            help you feel confident to tackle simple tasks or advice to extend
            the lifetime of your machine.
          </p>
        </div>
      </section>

      <section className="section-2 mt-3">
        <div className="container">
          <ul className="grid gap-3 grid-cols-3">
            {howToContent.blocks.map((block, i) => {
              return (
                <li className="" key={i}>
                  <a
                    href={block.href}
                    className="no-underline flex flex-col p-2 h-full bg-neutral-100"
                  >
                    <div className="h-[100px] w-full flex items-center">
                      {block.icon}
                    </div>
                    <div className="text-center mt-auto font-bold pt-2">
                      {block.title}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-2">
            <a
              href={howToContent.button.url}
              className="text-center w-full block font-bold uppercase"
            >
              {howToContent.button.copy}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <ul className="grid gap-3 grid-cols-2 justify-content-center">
            <li className=" p-6 h-100 bg-neutral-100">
              <form
                action="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Order-Track"
                className="h-full flex flex-col"
                method="GET"
                name="trackorder-form"
              >
                <h2 className="text-center">Track My Order</h2>
                <p className="track-order-header-text text-center">
                  Looking to track your order? Look no further! Simply click
                  below to get started and stay up-to-date on the whereabouts of
                  your purchase.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://www.cubcadet.com/en_US/track-my-order"
                    className="button text-uppercase font-weight-bold text-decoration-none d-inline-block btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0 w-100"
                    style={{ padding: "0.625rem 2.5rem" }}
                  >
                    Track My Order
                  </a>
                </div>
              </form>
            </li>
            <li className="flex flex-col p-6 h-100 bg-neutral-100">
              <form
                action="https://www.cubcadet.com/en_US/service-and-parts#part-finder"
                className="flex flex-col h-100"
                method="get"
                name="simpleSearch"
                role="search"
              >
                <h2 className="text-center">Find Support by Model</h2>
                <p className="text-center">
                  Your model number is essential to finding the right
                  replacement parts, product manuals, or locating parts on your
                  machine.
                </p>
                <label htmlFor="search-by-number">
                  Model #, Part # or Item #
                </label>
                <input
                  autoComplete="off"
                  className="form-control search-field"
                  id="search-by-number"
                  name="q"
                  type="search"
                  aria-describedby="16680858695420"
                />
                <button
                  className="underline my-1 text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#find-model-number")
                      .classList.toggle("hidden");
                  }}
                >
                  HOW DO I FIND MY SERIAL NUMBER?
                </button>
                <div className="mt-3 hidden" id="find-model-number">
                  <img
                    src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw3bde9ca9/Service%20and%20Parts/How%20to%20Find%20Model%20Number/Find_Model_Number_Cub_Cadet.jpg"
                    alt=""
                    className="ml-auto mr-auto"
                  />
                  <p className="my-2">
                    The Model number is eleven characters long and is printed on
                    the left of the product identification label. Characters can
                    include numbers, letters or hyphens.
                  </p>
                </div>
                <button
                  className="btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0"
                  type="submit"
                >
                  Find Support
                </button>
              </form>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-4 py-5 px-3 bg-neutral-800">
        <div className="container mx-auto text-white">
          <h2 className="text-center">Don't have an account?</h2>
          <div className="text-center lg:px-32">
            Find information related to your mower with ease when you{" "}
            <a
              href="https://www.cubcadet.com/en_US/login"
              style={{ color: "#ffc20f" }}
              className="font-bold"
            >
              create an account
            </a>{" "}
            and{" "}
            <a
              href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html"
              style={{ color: "#ffc20f" }}
              className="font-bold"
            >
              register your mower
            </a>
            . Benefits include: Proof of purchase for insurance, find warranty
            information, view safety information and get timely maintenance
            reminders.
          </div>
        </div>
      </section>

      <section className="section-5 py-4">
        <div className="container px-3 py-6">
          <h2 className="text-center mb-3">Popular Help Links</h2>
          <ul className="grid gap-3 grid-cols-4">
            {popularHelpLinks.blocks.map(({ href, copy, icon, button }, i) => {
              return (
                <li className="" key={i}>
                  <a href={href} className="flex flex-col h-full no-underline">
                    {icon}
                    <div className="text-center mt-auto pt-3">{copy}</div>
                    <button
                      className="font-bold bg-black text-white mt-2"
                      style={{ padding: "0.625rem 2.5rem" }}
                    >
                      {button.copy}
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-6">
        <div className="container px-3 py-6">
          <h2 className="text-center">Find Support by Model</h2>
          <ul className="grid gap-3 grid-cols-4">
            {findSupport.blocks.map(({ img, title, url }, i) => {
              return (
                <li className="d-flex flex-col" key={i}>
                  <a
                    href={url}
                    className="flex flex-col no-underline items-center p-2 bg-neutral-100"
                  >
                    <h3 className="">{title}</h3>
                    <img src={img} className="w-full" alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className="section-7 py-5"
        style={{ background: "rgb(255, 194, 15)" }}
      >
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 className="text-center">
            Didn’t Find What You Were Looking For?
          </h2>
          <p className="text-center">
            Our team is available between 8:30AM - 5:00PM ET, Monday-Friday.
          </p>
          <ul className="row list-unstyled mx-auto">
            <li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
              <div className="d-flex flex-column p-0">
                <button
                  className="d-flex justify-content-center align-items-center py-2 px-5 border-0"
                  style={{
                    background: "rgb(0, 0, 0)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <span
                    className="mr-1"
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: 8,
                    }}
                  >
                    <IconPhone className="fill-white" />
                  </span>
                  877-428-2349
                </button>
              </div>
            </li>
            <li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
              <div className="d-flex flex-column p-0">
                <button
                  className="d-flex justify-content-center align-items-center py-2 px-5 border-0"
                  style={{
                    background: "rgb(0, 0, 0)",
                    color: "rgb(255, 255, 255)",
                  }}
                  onclick="startChat()"
                >
                  <span
                    className="mr-1"
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: 8,
                    }}
                  >
                    <IconChat className="fill-white" />
                  </span>
                  Live chat
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
