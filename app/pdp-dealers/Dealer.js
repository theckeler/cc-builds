"use client";
import { useState } from "react";
import Stars from "./Stars";

export default function Dealer({}) {
  const [dealers, setDealerInfo] = useState([
    {
      id: "lorem",
      name: "Wellington Implement Company, Inc",
      address: "34200 Duis leo",
      city: "Duis",
      state: "OH",
      zip: "23434",
      miles: "22",
      checked: true,
      elite: true,
    },
    {
      id: "aenean",
      name: "Worcester Sales and Service, Inc.",
      address: "23 pellentesque nunc pellentesque eu",
      city: "Pharetra",
      state: "OH",
      zip: "34234",
      miles: "10",
      checked: false,
      elite: false,
    },
    {
      id: "nam",
      name: "State Sharpening Mower & Tractor Repair, Inc.",
      address: "3 Donec nec purus",
      city: "Aliquam",
      state: "OH",
      zip: "23231",
      miles: "35",
      checked: false,
      elite: false,
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
                      {block.elite && (
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 171 171"
                            className="w-12"
                          >
                            <path
                              fill="#fff"
                              d="M85.5 1.4c-21.6 14-43.1 22-64.6 26.7-16.4 53.2 1.8 118.5 64.6 141.5 62.8-23 81-88.3 64.6-141.5-21.5-4.7-43-12.6-64.6-26.7"
                            />
                            <path d="m85.5 171-1.6-.6c-29.1-10.7-50.5-31.2-61.7-59.4-9.9-24.8-10.9-54.5-2.6-81.4l.8-2.6 2.7-.6c22.2-4.9 41.8-13 59.9-24.8L85.5 0l2.6 1.7c18.1 11.8 37.7 19.9 59.9 24.8l2.7.6.8 2.6c8.3 26.9 7.3 56.5-2.6 81.4-11.2 28.1-32.6 48.7-61.7 59.4l-1.7.5z" />
                            <path
                              fill="#fff"
                              d="m84.3 169.3 1.2.4 1.2-.4c28.8-10.6 49.9-30.9 61-58.7 9.8-24.6 10.8-54 2.6-80.6l-.6-2-2-.4c-22.4-4.9-42.1-13-60.3-24.9l-1.9-1.3-1.9 1.3c-18.2 11.9-38 20.1-60.3 24.9l-2 .4-.6 2c-8.2 26.6-7.2 56 2.6 80.6 11.1 27.8 32.2 48.1 61 58.7"
                            />
                            <path d="M85.5 5.6C65 19 44.5 26.5 24 31 8.4 81.8 25.8 144.1 85.5 166c59.7-21.9 77.1-84.3 61.5-135-20.5-4.5-41-12-61.5-25.4" />
                            <path
                              fill="#fff"
                              d="M30.1 80.5v-21h22v5.6H38.3v1.8h12v5.6h-12V75h13.8v5.5zm25.6 0v-21h8.2V75h12.2v5.5zm23.4-21h8.3v21h-8.3zm27.6 5.6v15.4h-8.2V65.1h-8v-5.6h24.3v5.6zm11.1 15.4v-21h22v5.6H126v1.8h12v5.6h-12V75h13.8v5.5zm-80.1 5.9h-1.8v7h1.8c2.8 0 3.6-.2 3.6-3.4 0-3.3-.7-3.6-3.6-3.6m9.2 6.5c-1 4.2-5 4.5-8.5 4.5h-8.3V82.5h8.3c3.5 0 7.5.3 8.5 4.5.2 1 .2 2 .2 2.9 0 1 0 2-.2 3m2.6 4.5V82.5h15.6v3.9h-9.8v1.3h8.5v3.9h-8.5v1.8h9.8v4zM76.2 88l-1.5 3.4h2.9L76.2 88zm4.2 9.4-1.2-2.6h-6L72 97.4h-6.1l7.7-14.9h5.1l7.8 14.9h-6.1zm7.4 0V82.5h5.8v10.9h8.7v4zm16.6 0V82.5H120v3.9h-9.8v1.3h8.5v3.9h-8.5v1.8h9.8v4zm27.2-11.2h-3.1v2.1h3.1c.8 0 1.7-.1 1.7-1 0-1-1-1.1-1.7-1.1m2.5 11.2-3.2-4.4c-.6-.8-1.1-1.2-2.3-1.2v5.6h-5.8V82.5h9.1c4 0 7.3.9 7.3 4.8 0 2-1.8 3.2-3.5 3.9 1.8 2 3.6 4.1 5.3 6.2h-6.9zm-10.6-49.9h-.2v-.3h.2c.1 0 .2 0 .2.2 0 .1-.1.1-.2.1m.4-.2c0-.2-.1-.3-.4-.3h-.4v1.1h.2v-.5h.2l.3.5h.2l-.3-.5c.1 0 .2-.1.2-.3m-52.5-2.9c-.1.8-1.2 2.6-2.9 1.7-.1-.1-.1-.2 0-.3.1-.2.9-2.1 1.1-2.4 0 0 .1 0 .1-.1.5-.2 1.8 0 1.7 1.1m-1-3 1.7-3.9h-2.5L65.8 46h-1.6c-.3 0-.4-.3-.3-.6.2-.5 1.9-4.2 1.9-4.2h-2.6S61.1 45.9 61 46h-1c-.3 0-.5-.3-.3-.6.2-.4 1.9-4.2 1.9-4.2H59l-2 4.5s-.1.1-.1.3h-7.5c-1.1 0-1.9-1-1.4-1.9 1.5-3 5.3-4.5 6.7-4.4.6 0 .5.6 0 1.1-.1.1 0 .3.1.3h2.5c1-1.5.9-4.1-2.3-3.8-5.4.5-9.9 4.8-9.9 8.1 0 1.5 1.7 3.1 3.6 3.1h8.1l.4-.8c.2.4.8.8 1.5.8H61s.3-.6.4-.9c.2.3.7.9 1.5.9h4.3l.2-.5c1.5 1.2 4.6.9 5.9-2.5 1-2.2-.3-4.7-2.9-4.1"
                            />
                            <path
                              fill="#fff"
                              d="M123.5 48.4c-.5 0-.8-.4-.8-.9s.4-.9.8-.9c.5 0 .8.4.8.9s-.4.9-.8.9m0-1.9c-.6 0-1 .4-1 1s.5 1 1 1 1-.4 1-1-.5-1-1-1m-21.4-2.8c-.3.6-.9 2-1.1 2.4-.6.4-2 .2-1.9-1 .1-.8 1.2-2.6 2.9-1.7.2 0 .2.2.1.3m-9.1 0c-.3.6-.9 2-1.1 2.4-.6.4-2 .2-1.9-1 .1-.8 1.2-2.6 2.9-1.7.2 0 .1.2.1.3m15.6.1c.6-.9 2.4-1.4 2.8-.3 0 .1.1.2 0 .4 0 0 0 .1-.1.1l-2.7-.2c0 .1-.1.1 0 0m8.5 1.5c.2-.4 2-4.4 2-4.4h3.9c.1 0 .2 0 .3-.2l.9-1.8H120l.6-1.4H118s-.5 1.2-.6 1.3c0 .1-.1.2-.3.2h-1.3l-.9 2h1.7l-2.2 5.1h-5c-.1 0-1 .1-1.1-.7h4.6c.2 0 .4-.1.5-.3.6-1.2.4-3.1-1.3-3.7-1.4-.4-3.5 0-4.8 1.3-.8.8-1.6 2.2-1.6 3.4h-1.2c-.5 0-.6-.4-.5-.7.2-.4 3.5-7.8 3.5-7.8H105l-2 4.2c-1.5-1.1-6.3.1-6.3 4.3h-1.4c-.5 0-.6-.4-.4-.8.2-.4 1.8-4 1.8-4h-2.6l-.2.5c-2-1.3-6.4.4-6.4 4.3h-7c-1.1 0-1.9-1-1.4-1.9 1.5-3 5.3-4.5 6.7-4.4.6 0 .5.6 0 1.1-.1.1 0 .3.1.3h2.5c1-1.5.9-4.1-2.3-3.8-5.4.5-9.9 4.8-9.9 8.1 0 1.5 1.6 3.1 3.6 3.1h8.1l.3-.7c1.5 1.5 3.4.7 4-.2.3.6 1.1 1 1.5 1h3.1l.4-1c1.3 1.7 3.4 1.2 4.2.1.4.6 1.1.9 1.4.9h3.4l.4-.9c.7.9 1.6.9 1.7.9h6.1l.3-.8c.2.3.9.8 1.7.8h4.6l1.1-2.5h-4.3c-.8-.2-.9-.5-.7-.9"
                            />
                            <path
                              fill="#ffc325"
                              d="M55.4 117.1s12.6-16.8 60.2-7.1c0-.1-32.4-6-60.2 7.1"
                            />
                            <path
                              fill="#fff"
                              d="m48.6 123-1 2.3h2l-1-2.3zm2.3 5.2-.8-1.9h-2.8l-.8 1.9h-1.2l2.9-6.8h1l2.9 6.8h-1.2zm12.6-4.9c-.5-.5-.9-.9-1.7-.9-1.6 0-1.9 1.3-1.9 2.5s.3 2.5 1.9 2.5c.8 0 1.2-.4 1.7-.9l.9.6c-.7.8-1.3 1.3-2.5 1.3-2.2 0-3-1.7-3-3.5s.8-3.5 3-3.5c1.2 0 1.8.5 2.5 1.3l-.9.6zm6.4 5c-2 0-2.7-1.2-2.7-3v-3.9h1.1v3.9c0 1.1.2 1.9 1.6 1.9s1.6-.9 1.6-2v-3.9h1.1v3.9c0 1.8-.7 3.1-2.7 3.1m8.5-5.9v5.8h-1.1v-5.8h-2.2v-1h5.5v1zm12.2.6-1 2.3h2l-1-2.3zm2.2 5.2-.8-1.9h-2.8l-.8 1.9h-1.2l2.9-6.8h1l2.9 6.8h-1.2zm6.5-2.9h-1.7v1.9h1.7c.8 0 1.4-.1 1.4-1 0-.8-.7-.9-1.4-.9m-.2-2.9h-1.5v1.8h1.5c.7 0 1.3-.1 1.3-.9s-.6-.9-1.3-.9m.2 5.8h-2.8v-6.8h2.6c1.3 0 2.4.5 2.4 1.9 0 .5-.2 1-.5 1.3.5.4.8 1 .8 1.6 0 1.5-1.1 2-2.5 2m8.1-5.8c-1.6 0-1.9 1.3-1.9 2.5s.3 2.5 1.9 2.5 1.9-1.3 1.9-2.5c0-1.3-.3-2.5-1.9-2.5m0 5.9c-2.2 0-3-1.7-3-3.5s.8-3.5 3-3.5 3 1.7 3 3.5-.7 3.5-3 3.5m8.5-.1h-.9l-2.5-6.8h1.2l1.7 5.1 1.8-5.1h1.1zm5 0v-6.8h4.9v1H122v1.9h3.3v.9H122v2h3.8v1z"
                            />
                          </svg>
                        </li>
                      )}
                      <li
                        className={block.checked ? "font-bold text-base" : ""}
                      >
                        {block.name}
                        <Stars />
                      </li>
                      <li className="ml-auto flex-shrink-1 text-nowrap">
                        {block.miles} Miles
                      </li>
                    </ul>
                    [star rating]
                    <div
                      className={`pr-1 flex-grow-1 ${
                        block.checked ? "" : "hidden"
                      }`}
                    >
                      {/* <div style={{ fontSize: "0.8em" }}>{block.address}</div> */}
                      <div style={{ fontSize: "0.8em" }}>
                        {block.city}, {block.state} {block.zip}
                      </div>
                      {/* <a
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
                      </a> */}
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
          {/* <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-6"
            >
              <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" />
            </svg>
          </li> */}
          {/* <li className="font-bold">Dealers: </li> */}
          <li className=" ml-auto">
            {/* <input
              type="text"
              value="44113"
              id="zip"
              className="form-control h-12 max-w-[100px] text-center"
              placeholder="Zipcode"
              aria-label="Enter your Zipcode"
              style={{ fontSize: "16px" }}
            /> */}
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
              View Map
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
