import React from "react";
import indexData from "./data/onex.json";

import { ReactComponent as Logo } from "../../images/x-series.svg";

import QuoteBlock from "../elements/QuoteBlock";
import IconCopyBlock from "../elements/IconCopyBlock";
import ImgCover from "../elements/ImgCover";
import Footer from "./elements/Footer";
import Engineered from "./elements/Engineered";
import HeaderSnowflake from "./elements/HeaderSnowflake";

const OneX = () => {
  //console.log("indexData", indexData.engineeredFor.blocks);

  return (
    <>
      <div className="snow-v2 snow-v2-threex">
        <section className="flex flex-column-reverse px-2 py-4">
          <div
            className="wrapper d-flex align-items-end"
            style={{ minHeight: "37.5rem" }}
          >
            <div
              className="block bg-black clip-corner ml-auto py-3 px-5 w-100"
              style={{ maxWidth: "30rem" }}
            >
              <Logo className="w-100" style={{ filter: "invert(1)" }} />
            </div>
          </div>
          <ImgCover importData={indexData.hero} />
        </section>

        <section className="flex flex-column px-1">
          <div className="wrapper p-sm-6 p-md-9 max-width-1000">
            <h1
              dangerouslySetInnerHTML={{ __html: indexData.copyBlock.h1 }}
              className="text-center"
            />
            <p
              dangerouslySetInnerHTML={{ __html: indexData.copyBlock.copy }}
              className="text-center"
            />
          </div>
        </section>

        <Engineered {...{ indexData }} />

        <section className="mb-6 px-2">
          <HeaderSnowflake title={indexData.options.title} />

          <div className="wrapper">
            <ul className="row list-unstyled">
              {indexData.options.blocks.map((block, i) => {
                return (
                  <li className="quote col-sm-12 col-md-4" key={i}>
                    <div
                      className="h-100"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <img src={block.img} alt="" className="w-100" />
                      <p
                        className="mt-2 fw-bold text-uppercase display-3 px-2"
                        dangerouslySetInnerHTML={{
                          __html: block.title,
                        }}
                      />
                      <p
                        className="copy px-2 pb-2"
                        dangerouslySetInnerHTML={{
                          __html: block.copy,
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="d-flex flex-column p-2 min-height-quote">
          <div className="wrapper d-flex flex-column h-100 mt-auto mr-auto mb-0 my-md-0 p-0 p-lg-2">
            <QuoteBlock
              quote={indexData.quote}
              addClass="bg-white clip-corner ml-auto"
              addCSS={{ maxWidth: "40rem" }}
            />
          </div>
          <ImgCover
            objectDesktopPos="center top"
            objectMobilePos="center bottom"
            importData={indexData.quote}
          />
        </section>

        <section className="py-8 px-2">
          <div className="wrapper">
            <h2 className="text-center">{indexData.machineExtreme.h2}</h2>
            <p className="copy text-center">{indexData.machineExtreme.copy}</p>

            <ul className="row list-unstyled">
              {indexData.machineExtreme.blocks.map((block, i) => {
                return (
                  <li className="col-sm-12 col-md-6" key={i}>
                    <div className="p-2">
                      <IconCopyBlock {...{ block }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrapper text-center">
            <h2>Shop & Compare Single-Stage Snow Blowers</h2>
          </div>
        </section>
      </div>

      <Footer {...{ indexData }} />
    </>
  );
};

export default OneX;
