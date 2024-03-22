"use client";
import { useState } from "react";

export default function Dealer({}) {
  const [dealers, setDealerInfo] = useState([
    {
      id: "lorem",
      name: "Lorem ipsum dolor sit amet, Inc.",
      address: "34200 Duis leo",
      city: "Duis",
      state: "OH",
      zip: "23434",
      miles: "22",
      checked: true,
    },
    {
      id: "aenean",
      name: "Aenean convallis nunc quis quam lobortis feugiat, Inc.",
      address: "23 pellentesque nunc pellentesque eu",
      city: "Pharetra",
      state: "OH",
      zip: "34234",
      miles: "32",
      checked: false,
    },
    {
      id: "nam",
      name: "Nam convallis, Inc.",
      address: "3 Donec nec purus",
      city: "Aliquam",
      state: "OH",
      zip: "23231",
      miles: "23",
      checked: false,
    },
  ]);

  const changeDealer = (e) => {
    setDealerInfo(
      dealers.map((block, i) => ({
        ...block,
        checked: Number(e.currentTarget.dataset.id) === i ? true : false,
      }))
    );
  };

  return (
    <>
      <div className="p-2 bg-gray-50">
        <h6 className="mb-2">You're shopping available inventory from</h6>
        <ul className="list-unstyled flex flex-col gap-1">
          {dealers.map((block, i) => {
            return (
              <li key={i} className="position-relative">
                <ul
                  className={`list-unstyled d-flex dealer p-1 border-2  bg-white ${
                    block.checked ? "border-[#ffc20f]" : "border-white"
                  }`}
                  style={{
                    borderColor: block.checked ? "#ffc20f" : "",
                  }}
                >
                  <li className="mr-2">
                    <input
                      type="radio"
                      id={block.id}
                      name="dealer"
                      data-id={i}
                      value="1"
                      checked={block.checked}
                      className="p-1 rounded-full"
                      onClick={(e) => {
                        changeDealer(e);
                      }}
                    />
                  </li>
                  <li className="flex-fill">
                    <ul className="flex">
                      <li
                        className={block.checked ? "font-bold text-base" : ""}
                      >
                        {block.name}
                      </li>
                      <li className="ml-auto flex-shrink-1 text-nowrap">
                        {block.miles} Miles
                      </li>
                    </ul>

                    <div
                      className={`pr-1 flex-grow-1 ${
                        block.checked ? "" : "hidden"
                      }`}
                    >
                      <div style={{ fontSize: "0.8em" }}>{block.address}</div>
                      <div style={{ fontSize: "0.8em" }}>
                        {block.city}, {block.state} {block.zip}
                      </div>
                      <a
                        className="mt-1 block"
                        onClick={() => {
                          document
                            .querySelector(".dealer-selector-modal")
                            .classList.add("d-block");
                        }}
                      >
                        <span className="underline font-bold">
                          Contact Dealer
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
                <label
                  htmlFor={block.id}
                  className="position-absolute w-100 h-100"
                  style={{
                    left: 0,
                    top: 0,
                    cursor: "pointer",
                    zIndex: 0,
                  }}
                />
              </li>
            );
          })}
        </ul>

        <ul className="list-unstyled d-flex align-items-center gap-1 mt-1">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-6"
            >
              <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" />
            </svg>
          </li>
          <li className="font-bold">Dealer Zipcode: </li>
          <li className=" ml-auto">
            <input
              type="text"
              value="44113"
              id="zip"
              className="form-control h-12 max-w-[100px] text-center"
              placeholder="Zipcode"
              aria-label="Enter your Zipcode"
              style={{ fontSize: "16px" }}
            />
          </li>
          <li>
            <button
              className="btn position-relative bg-[#e4e4e4] hover:bg-[#ffc20f] p-2 h-12"
              type="button"
              id="button-addon2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Change Dealer
            </button>
          </li>
        </ul>
      </div>

      <hr class="border-b border-[#efefef]" />

      <ul className="list-unstyled d-flex align-items-center gap-1">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-6"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </li>
        <li className="mr-1 font-bold">Delivering to: </li>
        <li className="ml-auto">
          <input
            type="text"
            value="44113"
            id="zip"
            className="form-control h-12 max-w-[100px] bg-gray-100 text-center"
            placeholder="Zipcode"
            aria-label="Enter your Zipcode"
            style={{ fontSize: "16px" }}
          />
        </li>
        <li>
          <button
            className="btn position-relative bg-[#e4e4e4] hover:bg-[#ffc20f] p-2 h-12"
            type="button"
            id="button-addon2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Change Delivery
          </button>
        </li>
      </ul>
    </>
  );
}
