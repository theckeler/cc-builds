import React from "react";
import indexData from "./data/twox.json";

import { ReactComponent as Logo } from "../../images/x-series.svg";
import { ReactComponent as Intellipower } from "../../images/intellipower-logo.svg";
import { ReactComponent as EFI } from "../../images/efi-logo.svg";

import QuoteBlock from "../elements/QuoteBlock";
//import Pluses from "../elements/Pluses";
import IconCopyBlock from "../elements/IconCopyBlock";
import ImgCover from "../elements/ImgCover";
import Button from "../elements/Button";
import Footer from "./elements/Footer";
import Engineered from "./elements/Engineered";
import HeaderSnowflake from "./elements/HeaderSnowflake";

const TwoX = () => {
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
            <div className="wrapper">
              <ul className="row list-unstyled">
                {indexData.options.blocks.map((block, i) => {
                  return (
                    <li className="quote col-sm-12 col-md-3" key={i}>
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
          </div>
        </section>

        <section
          className="d-flex flex-column p-2"
          style={{ minHeight: "38rem" }}
        >
          <div className="wrapper p-2 d-flex flex-column justify-content-end justify-content-md-start h-100 mt-auto mr-auto mb-0 my-md-0">
            <QuoteBlock
              quote={indexData.quote}
              addClass="bg-white clip-corner ml-auto"
              addCSS={{ maxWidth: "40rem" }}
            />
          </div>
          <ImgCover
            objectDesktopPos="center top"
            objectMobilePos="center top"
            importData={indexData.quote}
          />
        </section>

        <section className="mt-7">
          <div className="wrapper container">
            <ul className="row list-unstyled">
              <li className="col-12 col-sm-12 col-md-6 p-1 flex">
                <div className="bg-black clip-corner p-2 flex flex-column h-100">
                  <div
                    className="logo intellipower p-6"
                    style={{ height: "220px" }}
                  >
                    <Intellipower />
                  </div>
                  <ul className="flex list-unstyled p-2 h-100">
                    <li
                      className="plus mt-n2 pr-2"
                      style={{ fontSize: "25px" }}
                    >
                      +
                    </li>
                    <li className="content">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "1.25rem", lineHeight: "1.2" }}
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[0].title,
                        }}
                      />
                      <p
                        className="copy"
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[0].copy,
                        }}
                      />
                      <small
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[0].tag,
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="col-12 col-sm-12 col-md-6 p-1 flex">
                <div className="bg-black clip-corner p-2 flex flex-column h-100">
                  <div
                    className="logo efi p-6 w-75 mx-auto"
                    style={{ height: "220px" }}
                  >
                    <EFI />
                  </div>
                  <ul className="flex list-unstyled p-2 h-100">
                    <li
                      className="plus mt-n2 pr-2"
                      style={{ fontSize: "25px" }}
                    >
                      +
                    </li>
                    <li className="content">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "1.25rem", lineHeight: "1.2" }}
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[1].title,
                        }}
                      />
                      <p
                        className="copy"
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[1].copy,
                        }}
                      />
                      <small
                        dangerouslySetInnerHTML={{
                          __html: indexData.intellipower.blocks[1].tag,
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <Button
                copy={indexData.intellipower.button.copy}
                url={indexData.intellipower.button.url}
                addClass="bg-black mx-auto"
              />
            </div>
          </div>
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
            <h2>Shop & Compare Two-Stage Snow Blowers</h2>
          </div>
        </section>
      </div>

      <Footer {...{ indexData }} />
    </>
  );
};

export default TwoX;
