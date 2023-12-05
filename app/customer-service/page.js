"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import IconAwards from "@/components/images/IconAwards";
import IconBelt from "@/components/images/IconBelt";
import IconBlades from "@/components/images/IconBlades";
import IconChat from "@/components/images/IconChat";
import IconLevel from "@/components/images/IconLevel";
import IconMagGlassBolt from "@/components/images/IconMagGlassBolt";
import IconManuals from "@/components/images/IconManuals";
import IconPhone from "@/components/images/IconPhone";
import IconScrewdriverWrench from "@/components/images/IconScrewdriverWrench";

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
      icon: <IconMagGlassBolt className="w-full h-[100px]" />,
      copy: "Search parts for your machine or view diagrams",
      button: [
        {
          href: "https://www.cubcadet.com/en_US/service-and-parts",
          copy: "Find parts",
        },
      ],
    },
    {
      icon: <IconManuals className="w-full h-[100px]" />,
      copy: "Use your model number to download your Operator’s Manual",
      button: [
        {
          href: "https://www.cubcadet.com/en_US/operatorsmanuals",
          copy: "Find manuals",
        },
      ],
    },
    {
      icon: <IconScrewdriverWrench className="w-full h-[100px]" />,
      copy: "Find a licensed mechanic at a service center near you ",
      button: [
        {
          href: "https://www.cubcadet.com/en_US/servicelocator",
          copy: "Find service",
        },
      ],
    },
    {
      icon: <IconAwards className="w-full h-[100px]" />,
      copy: "Find warranty information and extended plans",
      button: [
        {
          href: "https://www.cubcadet.com/en_US/warranty-faqs.html",
          copy: "Warranty FAQs",
        },
        {
          href: "https://www.cubcadet.com/en_US/ew-info-page.html",
          copy: "Extended Warranty",
        },
      ],
      // href: "https://www.cubcadet.com/en_US/warranty-faqs.html",
      // button: {
      //   copy: "Warranty FAQs",
      // },
    },
  ],
};

const findSupport = {
  h2: "Find Support by Model",
  blocks: [
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg",
      id: "Cadet_XT1LT46_New_2000x2000_8",
      title: "Lawn Mowers",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Lawn%20%26%20Garden%20Tractors",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/product-ZTS.jpg?version=1,639,577,713,000",
      id: "product-ZTS",
      title: "Zero-Turn",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Zero%20Turn%20Mowers",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/product-ZT-el.jpg?version=1,639,577,700,000",
      id: "product-ZT-el",
      title: "Electric",
      url: "https://www.cubcadet.com/en_US/electric-mowers-and-tools",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/Cub-Cadet_ProZ_972SD_1.jpg?sw=550&sh=550&sm=fit",
      id: "Cadet_ProZ_972SD_1",
      title: "Professional",
      url: "https://www.cubcadet.com/en_US/commercial-equipment",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/Cub-Cadet_3X_30HD_3.jpg?sw=290&sh=290&sm=fit",
      title: "Snow",
      id: "Cadet_3X_30HD_3",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Snow%20Blowers",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/37DZ7CKK710_MX550_H.jpg?sw=290&sh=290&sm=fit",
      id: "MX550",
      title: "UTV",
      url: "https://www.cubcadet.com/en_US/utility-vehicles",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/Cub_Cadet_CS16E_2000x2000_4.jpg?sw=1000&sh=1000&sm=fit",
      id: "Cub_Cadet_CS16E_2000x2000_4",
      title: "Chore & Handheld",
      url: "https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Yard%20Equipment",
    },
    {
      img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/customer-service/19A30018100.jpg",
      id: "CC19A30018100",
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

      <section className="mt-3">
        <div className="container">
          <ul className="grid gap-3 lg:grid-cols-3">
            {howToContent.blocks.map((block, i) => {
              return (
                <li
                  className=""
                  key={i}
                >
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
          <ul className="grid gap-3 lg:grid-cols-2 justify-content-center">
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
                <div
                  className="mt-3 hidden"
                  id="find-model-number"
                >
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

      <section className="py-5 px-3 bg-neutral-800">
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

      <section className="py-4">
        <div className="container px-3 py-6">
          <h2 className="text-center mb-3">Popular Help Links</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {popularHelpLinks.blocks.map(({ href, copy, icon, button }, i) => {
              return (
                <li
                  className="h-full flex flex-col"
                  key={i}
                >
                  {icon}
                  <div className="text-center mt-auto pt-3">{copy}</div>

                  <div className="mt-auto pt-2">
                    {button.map(({ copy, href }, i) => {
                      return (
                        <a
                          href={href}
                          key={i}
                          className="btn w-full font-bold bg-black text-white mt-2"
                        >
                          {copy}
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="">
        <div className="container px-3 py-6">
          <h2 className="text-center">Find Support by Model</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {findSupport.blocks.map(({ img, title, url, id }, i) => {
              return (
                <li
                  className="d-flex flex-col"
                  key={i}
                >
                  <a
                    href={url}
                    className="flex flex-col no-underline items-center p-2 bg-neutral-100"
                  >
                    <h3 className="">{title}</h3>
                    <div className="bg-white p-1">
                      <ResponsiveImage
                        id={id}
                        src={img}
                        alt=""
                        className="w-full"
                      />
                    </div>
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
        <div
          className="container"
          style={{ maxWidth: 700 }}
        >
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
