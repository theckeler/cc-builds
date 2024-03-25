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
    <div className="p-2 bg-gray-50 col-12" id="sdb-container">
      <p className="mb-2">Make it a bundle (Super Size Me):</p>

      <button>add bundle</button>
    </div>
  );
}
