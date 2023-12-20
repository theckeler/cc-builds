"use client";
import Address from "@/components/Address";
import Phone from "@/components/Phone";
import Website from "@/components/Website";
import Directions from "@/components/icons/Directions";
import ContactForm from "./ContactForm";
import Hours from "./Hours";

export default function DealerDesc({ dealer, formID, className }) {
  return (
    <div className={className}>
      <div className="p-2 text-center">
        <h3>{dealer.name}</h3>

        <p className="mt-1">
          Worcester's is a family owned operation in business since 1926. We
          started as a poultry hatchery, expanded into pet feeds and animal
          supplies, then added lawn and landscape power equipment in 1950. We
          specialize in top quality products and back them with parts and
          service. We are a patriotic company and believe America is the best
          place to live, work and run a business.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 md:divide-x">
          <li className="">
            <div
              className="h-full flex justify-center flex-col"
              id="phone-web"
            >
              <Phone />
              <Website
                className="mb-2"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  display: "block",
                }}
              />
            </div>
          </li>
          <li>
            <div className="h-full flex justify-center flex-col">
              <Address address={dealer.address} />
              <a
                href="#"
                className="font-bold mt-2 block text-lg"
              >
                <Directions className="w-12 h-12 mr-1" />
                Get Directions
              </a>
            </div>
          </li>
          <li>
            <Hours />
          </li>
        </ul>
      </div>

      <div
        className="mt-3 p-2"
        id={formID}
      >
        <h2 className="text-2xl mb-2 text-center">Contact:</h2>
        <ContactForm id="contact-form" />
      </div>
    </div>
  );
}
