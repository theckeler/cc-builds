"use client";

// import Hours from "@/components/Hours";
// import ToggleTab from "@/components/ToggleTab";

import Stars from "@/components/Stars";

import ContactsIcon from "@/components/icons/Contacts";
import DirectionsIcon from "@/components/icons/Directions";
import PhoneIcon from "@/components/icons/Phone";
import SupportIcon from "@/components/icons/Support";

import Address from "@/components/Address";
import Phone from "@/components/Phone";
import IconBlock from "./IconBlock";

export default function StickyMenu({ className, dealer }) {
  const icon = {
    style: {
      padding: "0.5rem",
      //minWidth: "48px",
      //minHeight: "48px",
      // backgroundColor: "#ffc20f",
    },
    class: "w-full h-full",
  };

  const icons = [
    {
      icon: (
        <SupportIcon
          style={icon.style}
          className={icon.class}
        />
      ),
      title: "Support",
    },
    {
      icon: (
        <DirectionsIcon
          style={icon.style}
          className={icon.class}
        />
      ),
      title: "Directions",
      className: "d-xl-none",
    },
    // {
    // 	icon: <ClockIcon style={icon.style} className={icon.class} />,
    // 	title: "Hours",
    // },
    {
      icon: (
        <ContactsIcon
          style={icon.style}
          className={icon.class}
        />
      ),
      title: "Contact",
    },
    {
      icon: (
        <PhoneIcon
          style={icon.style}
          className={icon.class}
        />
      ),
      title: "Phone",
    },
  ];

  const navButtons = [
    // { title: "Book Service", id: "book-service" },
    { title: "Lineup", id: "lineup" },
    { title: "Parts & Accessories", id: "parts-accessories" },
    { title: "Promotions", id: "promotions" },
    { title: "Financing", id: "financing" },
    { title: "Contact", id: "contact" },
    { title: "Faqs", id: "faqs" },
  ];

  return (
    <ul
      className={`align-self-start px-0 list-unstyled w-100 flex flex-xl-column bg-white sticky bottom-0 top-4 ${className}`}
      style={{
        zIndex: 1001,
      }}
    >
      <li className="col-6 col-xl-12 p-1 pt-0">
        <h1
          className="text-xl-center h-100 mt-0 mb-0 pt-2"
          style={{
            fontSize: "22px",
            lineHeight: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {dealer.name}
        </h1>

        <Stars
          className="d-none d-xl-flex mt-2 justify-center"
          stars={dealer.stars}
        />

        <ul className="mx-auto mb-0 list-unstyled hidden lg:flex  align-items-center px-1 mt-2">
          <li className="mt-1">
            <Address address={dealer.address} />
            <Phone />
          </li>
          <li className="ml-auto">
            <IconBlock
              block={{
                icon: (
                  <DirectionsIcon
                    style={icon.style}
                    className={icon.class}
                  />
                ),
                title: "Directions",
              }}
            />
          </li>
        </ul>
      </li>
      <li
        style={{
          gap: "0.5em",
        }}
      >
        <ul
          id="sticky-menu"
          className="list-unstyled mb-0 gap-2 grid w-100"
          style={{ bottom: "100%", left: 0 }}
        >
          {navButtons.map((block, i) => (
            <li
              className={`${block.className}`}
              key={i}
            >
              <button
                className="w-100 hidden lg:block text-left p-2 font-weight-bold outline-0"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  document
                    .querySelector(`#${block.id}`)
                    .scrollIntoView({ behavior: "smooth" });
                  document
                    .querySelector("#sticky-menu")
                    .classList.add("d-none");

                  if (
                    document
                      .querySelector("#" + block.id + "-block")
                      ?.classList.contains("d-none")
                  ) {
                    document
                      .querySelector("#" + block.id + "-block")
                      .classList.remove("d-none");
                  }
                }}
              >
                {block.title}
              </button>
            </li>
          ))}
        </ul>
      </li>

      <li className="col-6 col-xl-12 ml-auto pr-0">
        <ul
          className="flex justify-content-end list-unstyled h-100 mb-0 p-1"
          style={{
            flex: "1 1 auto",
            gap: "0.25em",
          }}
        >
          <li className="d-xl-none">
            <button
              className="w-100 -0 text-left p-2 font-weight-bold"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                document
                  .querySelector("#sticky-menu")
                  .classList.toggle("d-none");
              }}
            >
              Dealer Menu
            </button>
          </li>
          {icons.map(
            (block, i) =>
              dealer.icons[i] === true && (
                <li
                  className={`flex align-items-center ${block.className}`}
                  key={i}
                >
                  <IconBlock block={block} />
                </li>
              )
          )}
        </ul>
      </li>
    </ul>
  );
}
