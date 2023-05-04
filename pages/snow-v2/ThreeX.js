import React from "react";
import indexData from "./data/threex.json";

import { ReactComponent as Logo } from "../../images/x-series.svg";

import QuoteBlock from "../elements/QuoteBlock";
import Pluses from "../elements/Pluses";
import IconCopyBlock from "../elements/IconCopyBlock";
import ImgCover from "../elements/ImgCover";
import Engineered from "./elements/Engineered";
import Footer from "./elements/Footer";
import HeaderSnowflake from "./elements/HeaderSnowflake";

const ThreeX = () => {
  //console.log("indexData", indexData.engineeredFor.blocks);

  return (
    <>
      <div className="snow-v2 snow-v2-threex">
        <section className="d-flex flex-column-reverse px-2 py-4">
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

        <section className="d-flex flex-column">
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
          <HeaderSnowflake title={indexData.threeStages.title} />

          <div>
            <div className="wrapper">
              <ul className="list-unstyled d-flex flex-wrap">
                <li className="col-lg-6 d-flex flex-column">
                  <div className="w-100 h-100" style={{ maxHeight: "600px" }}>
                    <img
                      src={indexData.threeStages.img}
                      className="w-100 h-100"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </li>
                <li className="col-lg-6 d-flex flex-column bg-white">
                  {indexData.threeStages.blocks.map((block, i) => {
                    return (
                      <div
                        className="mb-2 p-1"
                        style={{ backgroundColor: "#efefef" }}
                        key={i}
                      >
                        <ul
                          className="list-unstyled d-flex flex-wrap h-100 p-1 p-lg-0"
                          key={i}
                        >
                          <li
                            className="col-md-1 p-1 d-none d-md-block"
                            style={{ marginTop: "-9px", maxWidth: "36px" }}
                          >
                            <Pluses addClass="fill-black" num="1" />
                          </li>
                          <li className="col-md-5 p-1">
                            <p className="text-uppercase mb-0">
                              Stage {block.stage}
                            </p>
                            <h3 className="text-uppercase mb-1">
                              {block.title}
                            </h3>
                            <p className="mb-0">{block.copy}</p>
                          </li>
                          <li className="col-md-6 p-1">
                            <div
                              className="w-100 h-100"
                              style={{ maxHeight: "200px" }}
                            >
                              <img
                                src={block.img}
                                alt=""
                                className="w-100 h-100"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="d-flex flex-column p-2"
          style={{ minHeight: "45rem" }}
        >
          <div className="wrapper p-2 d-flex flex-column justify-content-end justify-content-md-start h-100 mt-auto mr-auto mb-0 my-md-0">
            <QuoteBlock
              quote={indexData.quote}
              addClass="bg-white clip-corner"
              addCSS={{ maxWidth: "40rem" }}
            />
          </div>
          <ImgCover
            objectDesktopPos="center top"
            objectMobilePos="center top"
            importData={indexData.quote}
          />
        </section>

        <section className="py-8 ">
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
            <h2>Shop & Compare Three-Stage Snow Blowers</h2>
          </div>
        </section>
      </div>

      <Footer {...{ indexData }} />
    </>
  );
};

export default ThreeX;
