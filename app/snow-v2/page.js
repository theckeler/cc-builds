"use client";
import { useState, useEffect } from "react";

import snowData from "./data/home.json";

import Articles from "@/components/Articles";
import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import Faqs from "@/components/Faqs";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";
// import ImgSwappin from "./elements/ImgSwappin";
// import Button from "@/components/Button";
import IntellipowerLogo from "../../components/images/IntellipowerLogo";
import Lineup from "./elements/Lineup";
import QuoteBlock from "@/components/QuoteBlock";
import IconTextBlock from "./elements/IconTextBlock";
import CompareRow from "./elements/CompareRow";
import FinancingBanner18 from "@/components/FinancingBanner18";
import CubDays2023 from "./elements/CubDays2023";
import XSeriesLogo from "./elements/XSeriesLogo";

export default function SnowV2({}) {
  const [imgType, setImgType] = useState("res");

  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `
  <script type="text/javascript" id="finder-script">
    (function(c,a,r,t,f,u,l)
              {
                ((c[u] =
                  c[u] ||
                  function () {
                    (c[u].q = c[u].q || []).push(arguments);
                  }),
                (l = a.createElement(r)),
                (l.async = 1),
                (l.id = u + "scr"),
                (l.src = f),
                a[t].appendChild(l))
              }
              )(window,document,"script","body","https://embed.cartfulsolutions.com/cub-cadet-finder/recommendation.min.js","cfl643");
  </script>`;
    const scriptEl = document.createRange().createContextualFragment(html);
    document.body.appendChild(scriptEl);
  });

  const addPromo = true;
  const addCubDays2023 = true;

  return (
    <>
      <div id="sdb-container" className="mt-4">
        <section className="flex flex-col xl:flex-row items-center justify-center">
          <div className="xl:container w-full xl:h-[600px] z-10 xl:py-2">
            <div className="flex flex-col items-end justify-between h-full">
              <div className="w-full xl:max-w-[480px]">
                {addCubDays2023 && <CubDays2023 thru="December 22, 2023" />}
                {addPromo && <FinancingBanner18 className="mt-1" />}
              </div>
            </div>
          </div>

          <div className="relative xl:absolute h-[600px] w-full z-0">
            <div className="relative container w-full h-full z-10 py-2">
              <div className="flex flex-col items-end justify-end h-full">
                <XSeriesLogo />
              </div>
            </div>
            <ResponsiveImage
              id="hero"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AM5HVSB56_2X26_Inteli_env02.jpg"
              alt=""
              className="h-full w-full absolute object-cover top-0 left-0"
              hero
            />
          </div>
        </section>
      </div>

      <div id="sdb-container" className="">
        <section className="bg-black d-flex flex-column">
          <div className="wrapper text-center text-white p-2 lg:px-52 py-4 lg:py-10">
            <h1 className="">
              X Series Snow Blowers by Cub Cadet<sup>®</sup>
            </h1>
            <p className="lg:px-48 mt-1 lg:mt-4">
              The Cub Cadet X Series lineup offers three levels of snow-clearing
              power and a host of model options. Choose from the compact
              performance of the 1X<sup>®</sup>, the impressive power and
              handling of the 2X
              <sup>®</sup> or the three-stage system of the 3X<sup>®</sup>.
            </p>
          </div>
        </section>

        <section className="">
          <div className="wrapper">
            <div className="container py-4 lg:py-10">
              <h2 className="text-center block mb-6">The X Series Lineup</h2>
              <ul className="grid gap-4 lg:grid-cols-3 list-unstyled">
                {snowData.lineup.blocks.map((block, i) => (
                  <li className="flex flex-col" key={i}>
                    <Lineup block={block} imgType={imgType} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="snow-picker">
          <div id="product-finder-snow-blowers" />
        </section>

        <section className="relative mb-6 flex flex-col-reverse">
          <div className="container relative z-10 pt-2 lg:pt-14 lg:pb-64">
            <QuoteBlock
              quote={snowData.quote}
              className="bg-white lg:p-4 lg:max-w-[40rem]"
            />
          </div>

          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.jpg"
            // webp="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.webp"
            alt=""
            id="snowguy"
            className="lg:absolute top-0 left-0 z-0 w-full h-full object-cover"
            hero={false}
          />
        </section>

        <section className="mb-6">
          <div className="container">
            <ul className="grid lg:grid-cols-2 gap-4 ">
              <li className="relative">
                <div
                  className="bg-black text-white h-full p-1"
                  style={{
                    clipPath:
                      "polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem)",
                  }}
                >
                  <div
                    className="logo intellipower p-4 position-relative"
                    style={{ zIndex: 1 }}
                  >
                    <IntellipowerLogo style={{ fill: "#fff" }} />
                  </div>
                  <ul
                    className="d-flex list-unstyled p-2 position-relative"
                    style={{ zIndex: 1 }}
                  >
                    <li className="plus">+</li>
                    <li className="content">
                      <p className="copy title">
                        Discover power that rises to the occasion.
                      </p>
                      <p className="copy">
                        IntelliPower<sup>®</sup> technology provides
                        <strong>up to 13% more available power</strong> for the
                        272cc engine, resulting in less bogging down when
                        clearing heavy, wet and deep snow.<sup>*</sup>
                      </p>
                      <small>
                        <sup>*</sup>When compared to the same engine without
                        IntelliPower<sup>®</sup> technology. Improvements vary
                        depending on engine models and specific operating
                        conditions.
                      </small>
                    </li>
                  </ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1600 559.3"
                    xmlSpace="preserve"
                    className="absolute top-0 left-0 w-full h-full fill-white z-0 opacity-60"
                  >
                    <line
                      x1={0}
                      y1={-467}
                      x2={1600}
                      y2={-467}
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-423.1c5.2,0,314.8,8.4,320,8.4s314.9-8.4,320-8.4 s314.8,8.4,320,8.4s314.8-8.4,320-8.4s314.8,8.4,320,8.4"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-379.4c10.3,0,309.7,16.7,320,16.7s309.7-16.7,320-16.7 s309.7,16.8,320,16.8s309.7-16.7,320-16.7s309.7,16.7,320,16.7"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-335.5c15.5,0,304.5,25.1,320,25.1s304.5-25.1,320-25.1 s304.5,25.1,320,25.1s304.5-25.1,320-25.1s304.5,25.1,320,25.1"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-291.6c20.6,0,299.3,33.5,320,33.5s299.4-33.5,320-33.5 s299.3,33.5,320,33.5s299.4-33.5,320-33.5s299.4,33.5,320,33.5"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-247.8c25.8,0,294.2,41.9,320,41.9s294.2-41.9,320-41.9 s294.2,41.9,320,41.9s294.2-41.9,320-41.9s294.2,41.9,320,41.9"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-203.9c31,0,289,50.2,320,50.2s289.1-50.2,320-50.2 s289,50.2,320,50.2s289-50.2,320-50.2s289,50.2,320,50.2"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-160.1c36.1,0,283.8,58.6,320,58.6s283.9-58.6,320-58.6 s283.9,58.6,320,58.6s283.9-58.6,320-58.6s283.9,58.6,320,58.6"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-116.2c41.3,0,278.7,67,320,67s278.7-67,320-67s278.7,67,320,67 s278.7-67,320-67s278.7,67,320,67"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-72.3C46.5-72.3,273.5,3,320,3s273.6-75.3,320-75.3 S913.5,3,960,3s273.6-75.3,320-75.3S1553.6,3,1600,3"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0-28.5c51.6,0,268.4,83.7,320,83.7s268.4-83.7,320-83.7 s268.4,83.7,320,83.7s268.4-83.7,320-83.7s268.4,83.7,320,83.7"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,15.4c56.8,0,263.2,92.1,320,92.1s263.2-92.1,320-92.1 s263.2,92.1,320,92.1s263.2-92.1,320-92.1s263.2,92.1,320,92.1"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,59.2c61.9,0,258,100.5,320,100.5S578.1,59.1,640,59.1 s258,100.5,320,100.5s258.1-100.5,320-100.5s258.1,100.5,320,100.5"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,103.1c67.1,0,252.9,108.8,320,108.8s252.9-108.8,320-108.8 s252.9,108.8,320,108.8s252.9-108.8,320-108.8s252.9,108.8,320,108.8"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,146.9c72.3,0,247.7,117.2,320,117.2s247.8-117.2,320-117.2 S887.7,264,960,264s247.7-117.2,320-117.2S1527.7,264,1600,264"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,190.8c77.4,0,242.6,125.6,320,125.6s242.6-125.6,320-125.6 s242.6,125.6,320,125.6s242.6-125.6,320-125.6s242.6,125.6,320,125.6"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,234.6c82.6,0,237.4,133.9,320,133.9s237.4-133.9,320-133.9 s237.4,133.9,320,133.9s237.4-133.9,320-133.9s237.4,133.9,320,133.9"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,278.5c87.7,0,232.2,142.3,320,142.3s232.3-142.3,320-142.3 s232.2,142.3,320,142.3s232.3-142.3,320-142.3s232.3,142.3,320,142.3"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,322.2c92.9,0,227.1,150.7,320,150.7s227.1-150.7,320-150.7 S867.1,473,960,473s227.1-150.7,320-150.7S1507.1,473,1600,473"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,366.1c98.1,0,221.9,159,320,159s221.9-159,320-159 s221.9,159.1,320,159.1s221.9-159,320-159s221.9,159,320,159"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,410c103.2,0,216.8,167.4,320,167.4s216.8-167.4,320-167.4 s216.8,167.5,320,167.5S1176.8,410,1280,410s216.8,167.4,320,167.4"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,453.9c108.4,0,211.6,175.8,320,175.8s211.6-175.8,320-175.8 s211.6,175.8,320,175.8s211.6-175.8,320-175.8s211.6,175.8,320,175.8"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,497.6c113.5,0,206.4,184.2,320,184.2s206.5-184.2,320-184.2 s206.4,184.2,320,184.2s206.5-184.2,320-184.2s206.5,184.2,320,184.2"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,541.5c118.7,0,201.3,192.5,320,192.5s201.3-192.5,320-192.5 S841.3,734,960,734s201.3-192.5,320-192.5S1481.3,734,1600,734"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,585.3c123.9,0,196.1,200.9,320,200.9s196.1-200.9,320-200.9 s196.1,200.9,320,200.9s196.1-200.9,320-200.9s196.1,200.9,320,200.9"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,629.2c129,0,191,209.3,320,209.3s191-209.3,320-209.3 s191,209.3,320,209.3s191-209.3,320-209.3s191,209.3,320,209.3"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,673c134.2,0,185.8,217.6,320,217.6s185.8-217.6,320-217.6 s185.8,217.6,320,217.6s185.8-217.6,320-217.6s185.8,217.6,320,217.6"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,717c139.4,0,180.6,226,320,226s180.6-226,320-226 s180.6,226,320,226s180.6-226,320-226s180.6,226,320,226"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,760.8c144.5,0,175.5,234.4,320,234.4s175.5-234.4,320-234.4 s175.5,234.4,320,234.4s175.5-234.4,320-234.4s175.5,234.4,320,234.4"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,804.7c149.7,0,170.3,242.8,320,242.8s170.3-242.8,320-242.8 s170.3,242.8,320,242.8s170.3-242.8,320-242.8s170.3,242.8,320,242.8"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,848.5c154.8,0,165.2,251.1,320,251.1s165.2-251.1,320-251.1 s165.2,251.1,320,251.1s165.2-251.1,320-251.1s165.2,251.1,320,251.1"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M0,892.3c160,0,160,259.5,320,259.5s160-259.5,320-259.5 s160,259.5,320,259.5s160-259.5,320-259.5s160,259.5,320,259.5"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeMiterlimit: 10,
                      }}
                    />
                  </svg>
                </div>
              </li>
              <li className="">
                <div
                  className="bg-black text-white h-full"
                  style={{
                    clipPath:
                      "polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem)",
                  }}
                >
                  <div className="logo efi p-6 w-75 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 393 152.1"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M154.3 90H58.9l6.9-19h88.4l8.9-24.6H74.8l6.9-19H175L185 0H55.4L12.2 118.5H144L154.3 90zM310.3 50.6H227l8-22.1h87.4L332.8 0H209.1L166 118.5h36.3L217 78.1h83.3l10-27.5zM393 0h-36.3l-43.1 118.5h36.3L393 0zM13.4 147.5l.8-2.3H5.9l.7-1.8h8.8l.9-2.6H4.1L0 152h12.4l1-2.7h-9l.7-1.8h8.3zM22 140.8h-3.4L14.5 152h11.1l1-2.9H19l3-8.3zM40.5 147.5l.8-2.3H33l.7-1.8h8.8l.9-2.6H31.2L27.1 152h12.4l1-2.7h-9l.7-1.8h8.3zM54.5 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5H48c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2H54c1 0 1.5.2 1.2 1l-.1.3h3.4c1.1-3.1.9-4.2-4-4.2zM74.4 140.8H61.3l-1 2.8h4.8L62 152h3.4l3.1-8.4h4.8l1.1-2.8zM86.3 140.8H75.9L71.8 152h3.4l1.1-2.9h5.4c1.1 0 1.3.4.8 1.6L82 152h3.4l.7-1.9c.7-1.8 0-2.3-1-2.5 1.4-.2 2.6-1.3 2.9-2.8l.3-.7c.8-2 .6-3.3-2-3.3zm-1.5 4-.1.4c-.2.8-.9 1.3-1.7 1.2h-5.7l1-2.7h5.4c1.1-.1 1.5.1 1.1 1.1zM102.2 140.7h-5.5c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1H98c3.1 0 5.2-.8 6.4-4.1l1.2-3.3c1.2-3.3-.3-4.1-3.4-4.1zm-.5 5.1-.4 1.2c-.6 1.6-1.2 2.2-2.8 2.2h-4.4c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h4c1.8 0 1.8.8 1.3 2.2zM120.9 140.8l-3 8.1-3.5-8.1h-5.3L105 152h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4zM126.9 140.8l-4.1 11.2h3.4l4.1-11.2h-3.4zM141.6 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5H135c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h3.7c1 0 1.5.2 1.2 1l-.1.3h3.4c1.2-3.1.9-4.2-3.9-4.2zM167.6 143.5l1-2.7h-11.7l-4.1 11.2h3.4l1.4-3.8h7.9l.9-2.6h-7.9l.8-2.1h8.3zM181.3 140.8l-2.4 6.5c-.2 1.2-1.4 2.1-2.6 2h-3.4c-1.4 0-1.7-.6-1.2-2l2.4-6.5h-3.4L168 148c-1 2.8-.1 4.1 3.1 4.1h4.9c3.2 0 5.1-1.3 6.1-4.1l2.6-7.2h-3.4zM196.4 147.5l.8-2.3h-8.3l.7-1.8h8.8l.9-2.6H187l-4 11.2h12.4l1-2.7h-9l.7-1.8h8.3zM205 140.8h-3.4l-4.1 11.2h11.1l1-2.9H202l3-8.3zM222 140.8l-4.1 11.2h3.4l4.1-11.2H222zM239.7 140.8l-3 8.1-3.5-8.1h-5.3l-4.1 11.2h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4zM252.7 140.8l-2.7 7.4c-.4 1-1.1 1.2-2.2 1.2h-1.4c-1.1 0-1.4-.3-1.1-1.2l.4-1h-3.3l-.5 1.3c-1 2.6-.1 3.6 3.1 3.6h2.2c3.1 0 5-.6 6.1-3.7l2.8-7.6h-3.4zM267.8 147.5l.8-2.3h-8.3l.7-1.8h8.8l.9-2.6h-12.2l-4.1 11.2h12.4l1-2.7h-9l.7-1.8h8.3zM281.7 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5h-3.7c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h3.7c1 0 1.5.2 1.2 1l-.1.3h3.4c1.1-3.1.9-4.2-4-4.2zM301.6 140.8h-13.1l-1 2.8h4.8l-3.1 8.4h3.4l3.1-8.4h4.8l1.1-2.8zM303.3 140.8l-4.1 11.2h3.4l4.1-11.2h-3.4zM319.5 140.7H314c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.1 0 5.2-.8 6.4-4.1l1.2-3.3c1.1-3.3-.4-4.1-3.5-4.1zm-.5 5.1-.4 1.2c-.6 1.6-1.2 2.2-2.8 2.2h-4.4c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h4c1.8 0 1.8.8 1.3 2.2zM335.3 149l-3.5-8.1h-5.3l-4.1 11.2h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4l-3 8.1z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      />
                    </svg>
                  </div>
                  <ul className="d-flex list-unstyled p-2">
                    <li className="plus">+</li>
                    <li className="content">
                      <p className="copy title">
                        Cub Cadet electronic fuel-injected (EFI) engines set new
                        standards in strength and power. EFI provides reliable
                        starting in most conditions.
                      </p>
                      <p className="copy">
                        Available with IntelliPower<sup>®</sup> engine
                        technology to take on heavy, deep and wet snow
                        conditions.
                      </p>
                      <small />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="text-center mt-4">
              <a
                href="https://www.cubcadet.com/en_US/engine-advantage.html"
                className="bg-black px-10 py-2 text-center text-white inline-block no-underline uppercase font-bold"
                style={{
                  clipPath:
                    "polygon(1rem 0px,100% 0%,100% 100%,0px 100%,0px 1rem)",
                }}
              >
                Learn more about cub cadet engine innovation
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="container">
            <h2 className="text-center">A Machine for the Extreme</h2>
            <p className="text-center">
              All Cub Cadet X Series models come with premium features to get
              your winter done right.
            </p>
            <ul className="grid gap-4 lg:grid-cols-2 mt-6">
              {snowData.machineExtreme.blocks.map((block, i) => (
                <li className="" key={i}>
                  <IconTextBlock block={block} imgType={imgType} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mb-6">
          <div className="wrapper p-1">
            <ResponsiveImage
              className="md:hidden w-full h-full"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Group3564.png"
              alt=""
              id="Group3564-mobile"
            />

            <ResponsiveImage
              className="overflow-hidden w-0 h-0 md:h-full md:w-full"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Group3540.png"
              alt=""
              id="Group3564-desktop"
            />
          </div>
        </section>

        <section className="mb-6">
          <div className="container">
            <h2 className="text-center">
              Shop and Compare X Series Snow Blowers
            </h2>

            <div className="max-w-screen overflow-x-auto">
              <ul className="grid grid-cols-[20rem_10rem_10rem_10rem] lg:grid-cols-[1fr_16rem_16rem_16rem] mt-4">
                {snowData.compare.blocks.map((block, i) => {
                  return (
                    <CompareRow
                      block={block}
                      numRows={snowData.compare.blocks.length}
                      rowNum={i}
                      key={i}
                    />
                  );
                })}
              </ul>
            </div>
            <h3 className="text-center mt-2">
              Explore the full brochure for specific model and trim options
            </h3>
            <div className="text-center">
              <a
                href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Cub_Cadet_Snow_Brochure__USA_2022.pdf"
                className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mx-auto mt-2 p-2 text-white"
                style={{
                  clipPath:
                    "polygon(1rem 0px,100% 0%,100% 100%,0px 100%,0px 1rem)",
                }}
              >
                View brochure
              </a>
            </div>
          </div>
        </section>
      </div>

      <div id="sdb-container" className="">
        <Articles
          imgType={imgType}
          viewAllLink="https://www.cubcadet.com/en_US/how-to/?crefn1=tags&crefv1=Snow%20Blowers"
          articles={{
            h2: "Snow Blower Articles & How To’s",
            blocks: [
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg",
                title: "Cub Cadet Snow Blower Buyers Guide",
                copy: "If you live in areas where snowfall is frequent or heavy, shoveling becomes part of your daily routine. Ditching your shovel, along with the heavy lifting and repetitive strain that comes with shoveling snow, in favor of a snow blower can save you time and energy. A couple of reasons to justify a snow blower…",
                url: "https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg"
                    id="Hero_LineUp_01"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg",
                title: "Recommended Snow Blower Back-Up Parts",
                copy: "Always prepare your snow blower for maintenance before starting any repairs. Move your snow blower to a flat surface.  Turn the engine off and let it cool. Disconnect the spark plug ignition wire and remove the safety ignition key to prevent accidental starting of the engine…",
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-recommended-snow-thrower-back-up-parts.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg"
                    id="recommended-snow-thrower-back-up-parts"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg",
                title: "How to Prepare Your Snow Thrower for Winter Use",
                copy: "Whether you're prepping your trusty 2X two-stage snow thrower for yet another winter, or getting your new 3X three-stage snow thrower ready to face its first blizzard, these snow thrower maintenance tips can help ensure you're prepared for cold and stormy weather this…",
                url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-prepare-your-snow-thrower-for-winter-use.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg"
                    id="snow-thrower-operation-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg",
                title: "Snow Blower Safety Tips",
                copy: "Snow blowers, often referred to as snow blowers are an easy way to keep the snow off your driveway during the winter months. Like any piece of power equipment, snow blower safety should be a top priority…",
                url: "https://www.cubcadet.com/en_US/product-information/knowledge-snow-thrower-safety-tips.html",
                res: (
                  <ResponsiveImage
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg"
                    id="snow-thrower-safety-tips"
                    className="absolute w-full h-full object-cover"
                  />
                ),
              },
            ],
          }}
          numRows={4}
          className="container mt-8"
        />

        <AttchmentsAccessories
          viewAllLink="https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories"
          className="container mt-8"
          imgType={imgType}
          attAcc={{
            h2: "Snow Blower Attachments & Accessories",
            blocks: [
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg",
                title: "Universal Cab",
                item: "490-241-0032",
                price: "$132.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html#q=490-241-0032&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html?fitsOnModel=false"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-290-0010_1.jpg",
                title: "Snow Blower Cover",
                item: "490-290-0010",
                price: "$38.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2a0b010e/products/Attachments_Accessories/490-290-0010_1.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg",
                title: "Drift Cutter Kit",
                item: "OEM-390-679",
                price: "$41.99",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/drift-cutter-kit/OEM-390-679.html#q=OEM-390-679&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw32dc42ff/products/Attachments_Accessories/OEM-390-679.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
              {
                img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg",
                title: "LED Light Bar Kit",
                item: "753-08629A",
                price: "$135.89",
                url: "https://www.cubcadet.com/en_US/snow-blower-accessories/led-light-bar-kit/753-08629A.html#q=753-08629A&lang=en_US&start=0",
                res: (
                  <ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg" />
                ),
                orig: (
                  <img
                    src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw301fe215/products/753-08629.jpg?sw=280&sh=280&sm=fit"
                    alt=""
                  />
                ),
              },
            ],
          }}
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Categories",
            list: [
              {
                title: "Single-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/single-stage-snow-blowers",
              },
              {
                title: "Two-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/two-stage-snow-blowers",
              },
              {
                title: "Three-Stage Snow Blowers",
                href: "https://www.cubcadet.com/en_US/snow-blowers/three-stage-snow-blowers",
              },
              {
                title: "Snow Blower Accessories",
                href: "https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories",
              },
            ],
          }}
          className="container mt-8"
        />

        <RelatedLinks
          relatedCats={{
            h3: "Related Searches",
            list: [
              {
                title: "Financing",
                href: "https://www.cubcadet.com/en_US/financing",
              },
              {
                title: "Extended Warranty",
                href: "https://www.cubcadet.com/en_US/ew-info-page.html",
              },
              {
                title: "Register My Product",
                href: "https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html",
              },
              {
                title: "Operator’s Manual",
                href: "https://www.cubcadet.com/en_US/operatorsmanuals",
              },
              {
                title: "Snow Plow Blade Attachment",
                href: "https://www.cubcadet.com/en_US/riding-mower-accessories/46-inch-snow-plow-blade-attachment/19A30017OEM.html?fitsOnModel=false#q=snow%2Bplow%2Bblade&lang=en_US&start=0",
              },
            ],
          }}
          className="container mt-8"
        />

        <RelatedLinks
          relatedCats={{
            h3: "Snow Blower Maintenance",
            p: "When customers buy Snow Blowers they often buy or consider:",
            list: [
              {
                title: "Shear Pins",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shear-pins",
              },
              {
                title: "Belts",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-belts",
              },
              {
                title: "Shave Plates",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shave-plates",
              },
              {
                title: "Slide Shoes",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-slide-shoes",
              },
              {
                title: "Tires and Wheels",
                href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-tires-and-wheels",
              },
              {
                title: "All Snow Blower Parts",
                href: "https://www.cubcadet.com/en_US/shop-by-machine-type/snow-blower-parts",
              },
            ],
          }}
          className="container mt-8"
        />

        <div className="container mt-8">
          <h3 className="mt-6">Questions & Answers</h3>
          <Faqs
            className="border-t"
            faqs={[
              {
                question: "What does a snow blower do?",
                answer:
                  "Cub Cadet® snow blowers are engineered to quickly remove snow from unwanted areas. A single stage snow blower is the most basic kind, where the auger paddle pulls snow into the machine and throws it out of the chute. More advanced stages are designed to handle more snow.",
              },
              {
                question:
                  "What is the best type of snow blower for a driveway?",
                answer:
                  'There’s no one size fits all snow blower. Cub Cadet has models ideal for up to 6-in, 12-in, and 18-in. of snowfall, so take stock of how much snow is expected in your area to zero in on a category. From there, determine what kind of features you’d benefit from, like electric start, heated hand grips, IntelliPower™ engines, or LED headlights, among others. This <a href="https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html">snow blower buyers guide</a> goes into more detail.',
              },
              {
                question: "Do I need a 1, 2 or 3 stage snow blower?",
                answer: `
								Once you determine how much snowfall your area is expected to get, you can <a href="https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-choose-the-right-snow-blower.html">choose the right model</a> for your needs. Cub Cadet® single-stage snow blowers are generally ideal for up to 6-in. of snowfall, 2-stage models can handle up to 12-in. of snowfall and 3-stage units typically can handle up to 18-in. of snowfall. Cub Cadet® MAX units — available in 2-stage and 3-stage models — can tackle up to 23-in. of snowfall.
								`,
              },
              {
                question: "How do I finance a Cub Cadet snow blower?",
                answer: `
								Cub Cadet® offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.cubcadet.com/en_US/financing">Click here</a> for more details.
								`,
              },
              {
                question: "How do I store my snow blower in the off season?",
                answer: `
								Always refer to your <a href="https://www.cubcadet.com/en_US/operatorsmanuals">operator’s manual</a> for comprehensive instructions on maintenance and storage. Instructions will differ between single-, 2-, and 3-stage snow blowers. <a href="https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-prepare-your-snow-thrower-for-storage-in-the-off-season.html">This guide</a> can help walk you through some of the most common steps.
								`,
              },
              {
                question: "How do I register my Cub Cadet snow blower?",
                answer: `
								Once you’ve purchased a Cub Cadet® snow blower, you can register your machine <a href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">here</a>.
								`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
