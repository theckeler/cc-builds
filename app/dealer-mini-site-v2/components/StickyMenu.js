"use client";

import Stars from "@/components/Stars";

import ContactsIcon from "@/components/icons/Contacts";
import DirectionsIcon from "@/components/icons/Directions";
import PhoneIcon from "@/components/icons/Phone";

import Phone from "@/components/Phone";
import Hours from "./Hours";
import IconBlock from "./IconBlock";

export default function StickyMenu({ className, dealer }) {
  const icon = {
    class: "p-1 bg-neutral-100",
  };

  const icons = [
    {
      icon: <DirectionsIcon className={icon.class} />,
      title: "Directions",
      id: "directions",
      onClick: () => {
        window.open("https://www.google.com/maps");
      },
    },
    {
      icon: <ContactsIcon className={icon.class} />,
      title: "Contact",
      id: "directions",
      onClick: () => {
        document
          .querySelector(`#contact-form-top`)
          .scrollIntoView({ behavior: "smooth" });
      },
      className: "xl:hidden",
    },
    {
      icon: <PhoneIcon className={icon.class} />,
      title: "Phone",
      id: "directions",
      onClick: () => {
        window.open("tel:216-555-5555");
      },
      className: "xl:hidden",
    },
  ];

  const navButtons = [
    {
      title: "Contact",
      id: "contact-form",
      className: "bg-[#ffc20f] hidden xl:block",
      icon: <PhoneIcon className="w-6 h-full mr-1" />,
    },
    {
      title: "Contact",
      id: "contact-form-top",
      className: "bg-[#ffc20f] xl:hidden",
      icon: <PhoneIcon className="w-6 h-full mr-1" />,
    },
    { title: "Products", id: "products" },
    { title: "Promotions", id: "promotions" },
    { title: "Financing", id: "financing" },
    { title: "Faqs", id: "faqs" },
  ];

  return (
    <ul
      className={`align-self-start px-0 list-unstyled bg-white sticky bottom-0 top-4 z-50 grid grid-cols-[1fr_160px] items-center gap-2 xl:grid-cols-1 border-t xl:border-0 ${className}`}
    >
      <li className="p-1 pt-0 grid gap-1 grid-cols-[1fr_150px] md:grid-cols-[1fr_200px] xl:grid-cols-1 items-center">
        <h1 className="xl:text-center overflow-hidden text-nowrap truncate mb-0 text-sm md:text-xl lg:text-2xl">
          {dealer.name}
        </h1>

        <Stars
          className="justify-center hidden xl:flex"
          stars={dealer.stars}
        />

        <ul className="flex">
          <li className="mt-1 hidden xl:block">
            <div className="">{dealer.address.street}</div>
            <div className="">
              {dealer.address.city}, {dealer.address.state} {dealer.address.zip}
            </div>
            <Phone />
          </li>
          <li className="ml-auto">
            <ul className="grid grid-flow-col auto-cols-min gap-1">
              {icons.map(({ icon, title, onClick, className }, i) => (
                <li
                  key={i}
                  className={"w-12 md:w-auto " + className}
                >
                  <IconBlock
                    block={{
                      icon: icon,
                      title: title,
                    }}
                    onClick={onClick}
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <hr className="border-t border-neutral-200 w-full hidden xl:block my-0 mt-1" />
      </li>
      <li className="h-full py-1">
        <ul
          id="sticky-menu"
          className="mb-0 gap-2 grid hidden absolute xl:relative bottom-full xl:bottom-auto bg-white p-1 lg:p-0 min-w-[326px] xl:min-w-min right-0 xl:grid"
        >
          {navButtons.map((block, i) => (
            <li key={i}>
              <button
                className={`text-left p-2 font-weight-bold outline-0 cursor-pointer w-full ${block.className}`}
                onClick={() => {
                  document
                    .querySelector(`#${block.id}`)
                    .scrollIntoView({ behavior: "smooth" });

                  document
                    .querySelector("#sticky-menu")
                    .classList.add("hidden");
                }}
              >
                {block.icon}
                {block.title}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="w-full h-full font-weight-bold text-center cursor-pointer xl:hidden"
          onClick={() => {
            document.querySelector("#sticky-menu").classList.toggle("hidden");
          }}
        >
          Dealer Menu
        </button>
      </li>
      <li className="hidden xl:block px-2 pt-1">
        <hr className="border-t border-neutral-200 w-full mt-0 mb-2" />
        <Hours className="text-sm" />
      </li>
    </ul>
  );
}
