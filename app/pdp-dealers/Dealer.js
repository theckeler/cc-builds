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

  // useEffect(() => {
  // 	// Update the document title using the browser API
  // 	console.log("useEffect:", dealers);
  // });

  const changeDealer = (e) => {
    setDealerInfo(
      dealers.map((block, i) => ({
        ...block,
        checked: Number(e.currentTarget.dataset.id) === i ? true : false,
      }))
    );
  };

  //   const editDealer = (e, whichID) => {
  //     document.querySelectorAll(".dealer-button").forEach(function (e) {
  //       e.classList.remove("bg-secondary");
  //     });
  //     e.currentTarget.classList.toggle("bg-secondary");
  //
  //     document.querySelectorAll(".dealer-edit").forEach(function (e) {
  //       e.classList.add("d-none");
  //     });
  //     document.querySelector(`#${whichID}`).classList.remove("d-none");
  //   };

  return (
    <div>
      <h6 className="mb-2">You're shopping available inventory from</h6>
      <ul className="list-unstyled">
        {dealers.map((block, i) => {
          return (
            <li key={i} className="position-relative mb-0">
              <ul
                className="list-unstyled d-flex dealer p-2 border-2 border-[#efefef] mb-1"
                style={{
                  backgroundColor: block.checked ? "#efefef" : "",
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
                    className="p-1"
                    style={{
                      appearance: "none",
                      backgroundColor: block.checked ? "#ffc20f" : "",
                      border: "1px solid #efefef",
                    }}
                    onClick={(e) => {
                      changeDealer(e);
                    }}
                  />
                </li>
                <li className="flex-fill">
                  <ul className="flex">
                    <li className="font-bold text-base">{block.name}</li>
                    <li
                      className="ml-auto flex-shrink-1 text-nowrap"
                      //style={{ fontSize: "0.8em" }}
                    >
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
                    <button
                      className="p-2 bg-white mt-1 relative z-10 flex gap-1 items-center font-bold"
                      onClick={() => {
                        document
                          .querySelector(".dealer-selector-modal")
                          .classList.add("d-block");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="w-6"
                      >
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                      </svg>
                      Contact Dealer
                    </button>
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
                  //backgroundColor: "#efefef",
                  zIndex: 0,
                }}
              />
            </li>
          );
        })}
      </ul>

      {/* <div
        className="d-none dealer-edit mb-1"
        id="change-dealer"
        style={{ backgroundColor: "#ebebeb" }}
      >
        <ul className="list-unstyled d-flex align-items-center p-2 mb-0">
          <li className="flex-shrink-1 mr-1 font-bold">Find a Dealer: </li>
          <li className="flex-fill">
            <div className="input-group w-100">
              <input
                type="text"
                value="44133"
                id="zip"
                className="form-control"
                placeholder="Zipcode"
                aria-label="Enter your Zipcode"
                style={{ fontSize: "13px" }}
              />
              <span className="input-group-append">
                <button
                  className="btn position-relative text-white bg-primary"
                  style={{
                    paddingTop: ".5em",
                    paddingBottom: ".5em",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    zIndex: 0,
                    borderColor: "#d1d3d4",
                  }}
                  type="button"
                  id="button-addon2"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Change
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div> */}

      {/* <button
        className="w-100 btn p-2 dealer-button mb-2 bg-[#efefef] min-h-[48px] flex items-center justify-center"
        onClick={() => {
          document
            .querySelector(".dealer-selector-modal")
            .classList.add("d-block");
        }}
      >
        Change Dealer
      </button> */}

      <div className="dealer-edit mb-2 bg-[#efefef]" id="change-delivery">
        <ul className="list-unstyled d-flex align-items-center p-2 mb-0">
          <li className="flex-fill">
            <div className="input-group w-100">
              <input
                type="text"
                value="44113"
                id="zip"
                className="form-control"
                placeholder="Zipcode"
                aria-label="Enter your Zipcode"
                style={{ fontSize: "13px" }}
              />
              <span className="input-group-append">
                <button
                  className="btn position-relative text-white bg-primary p-2"
                  type="button"
                  id="button-addon2"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Change Dealer
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="dealer-edit mb-2 bg-[#efefef]" id="change-delivery">
        <ul className="list-unstyled d-flex align-items-center p-2 mb-0">
          <li className="flex-shrink-1 mr-1 font-bold">Delivering to: </li>
          <li className="flex-fill">
            <div className="input-group w-100">
              <input
                type="text"
                value="44113"
                id="zip"
                className="form-control"
                placeholder="Zipcode"
                aria-label="Enter your Zipcode"
                style={{ fontSize: "13px" }}
              />
              <span className="input-group-append">
                <button
                  className="btn position-relative text-white bg-primary p-2"
                  type="button"
                  id="button-addon2"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Change
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* <button
        className="w-100 btn p-1 dealer-button"
        style={{
          backgroundColor: "#e1e1e1",
          fontSize: "0.8em",
          //fontWeight: "normal",
        }}
        onClick={(e) => {
          editDealer(e, "change-delivery");
        }}
      >
        Change Delivery
      </button> */}
    </div>
  );
}
