import jsonData from "./data/ultima.json";
import jsonCommonData from "./data/common.json";

import Footer from "./elements/Footer";
import Button from "../elements/Button";
import ImgCopyBlock from "../elements/ImgCopyBlock";
import Introducing from "./elements/Introducing";
import Explore from "./elements/Explore";

const Ultima = () => {
  return (
    <>
      <div className="top">
        <section className="d-flex p-0">
          <img
            src={jsonData.hero.img}
            alt={jsonData.hero.alt}
            className="d-none d-md-block w-100"
          />
          <img
            src={jsonData.hero.mobile}
            alt={jsonData.hero.alt}
            className="d-block d-md-none w-100"
          />
        </section>

        <section className="py-5 px-1">
          <div className="container">
            <h1 className="text-lg-center">{jsonData.copyBlock.h1}</h1>
            <p
              className="text-lg-center mt2 mb-0 mx-auto"
              style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
              {jsonData.copyBlock.copy}
            </p>
          </div>
        </section>

        <section className="py-5 px-1" style={{ backgroundColor: "#efefef" }}>
          <div className="container">
            <ul className="list-unstyled d-flex flex-column flex-lg-row">
              {jsonData.explore.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-lg-6 p-2" key={i}>
                    <ImgCopyBlock
                      {...{
                        addClass: "d-flex flex-column h-100 bg-white",
                        block,
                        linkable: false,
                        divClass: "",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <Introducing jsonData={jsonData} />

        {/* experience */}
        <section className="py-4">
          <div className="container">
            <h2 className="h2 text-center">{jsonData.experience.h2}</h2>
            <ul className="list-unstyled d-flex flex-column flex-lg-row">
              {jsonData.experience.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-lg-4 p-2" key={i}>
                    <div
                      className="bg-yellow px-4 py-6 d-flex flex-column align-items-center"
                      style={{
                        clipPath:
                          "polygon(2rem 0, 100% 0%, 100% 100%, 0 100%, 0 2rem)",
                      }}
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: block.line1,
                        }}
                        className="mb-0"
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: block.line2,
                        }}
                        className="mb-0"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* quotes */}
        <section className="py-3" style={{ backgroundColor: "#efefef" }}>
          <div className="container">
            <ul className="list-unstyled d-flex flex-column flex-lg-row mb-0">
              {jsonData.quotes.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-lg-6 p-2" key={i}>
                    <div className="bg-yellow px-2 py-3 d-flex flex-column align-items-center h-100">
                      <ul className="list-unstyled d-flex h-100">
                        <li
                          className="col-1 p-0 text-white"
                          style={{
                            fontSize: "7em",
                            lineHeight: "0",
                            marginTop: ".4em",
                          }}
                        >
                          &ldquo;
                        </li>
                        <li
                          className="col-10 p-0"
                          style={{
                            lineHeight: "1.8",
                          }}
                        >
                          <ul className="list-unstyled d-flex flex-column h-100">
                            <li className="mb-2">{block.quote}</li>
                            <li className="mb-0 font-weight-bold mt-auto">
                              - {block.author}
                            </li>
                          </ul>
                        </li>
                        <li
                          className="col-1 p-0 text-white align-self-end"
                          style={{
                            fontSize: "7em",
                            lineHeight: "0",
                            marginBottom: ".3em",
                          }}
                        >
                          &rdquo;
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* possibilty */}
        <section className="py-8 mt-2">
          <div className="container">
            <h2 className="h2 text-center mb-5">{jsonData.possibilty.h2}</h2>
            <ul
              className="list-unstyled d-flex flex-column flex-lg-row mb-0"
              style={{
                backgroundColor: "#efefef",
                clipPath: "polygon(2rem 0, 100% 0%, 100% 100%, 0 100%, 0 2rem)",
              }}
            >
              {jsonData.possibilty.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-lg-6 p-2" key={i}>
                    <div className="px-2 py-3 d-flex flex-column h-100">
                      <ul className="list-unstyled d-flex w-100 h-100 align-items-center">
                        <li className="col-2 p-0">
                          <img
                            src={block.img}
                            alt={block.alt}
                            className="w-100"
                          />
                        </li>
                        <li className="col-10 pl-4 p-0">
                          <p className="font-weight-bold mb-1">{block.title}</p>
                          <p
                            className="mb-0"
                            style={{
                              lineHeight: "1.8",
                            }}
                          >
                            {block.copy}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Explore */}
        <Explore {...{ jsonCommonData }} />

        {/* find */}
        <section className="py-6 px-1 bg-secondary">
          <div className="container text-center">
            <h2 className="h2">{jsonData.find.h2}</h2>
            <p
              className="mt2 mb-0 mx-auto"
              style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
              {jsonData.find.copy}
            </p>
            <Button
              addClass="bg-black mt-3"
              url={jsonData.find.button.url}
              copy={jsonData.find.button.copy}
            />
          </div>
        </section>

        {/* awards */}
        <section className="py-6 px-1">
          <div className="container">
            {/* <ul className="list-unstyled d-flex flex-column flex-lg-row">
              <li className="col-12 col-lg-6 mt-2">
                <ul
                  className="list-unstyled d-flex py-4 px-6 align-items-center h-100 flex-column flex-lg-row"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <li className="col-2 p-0 pl-xl-0">
                    <img
                      src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v7669c972e2fe9833daebcb53384cc0fc28010e28/images/ultima/usa.svg"
                      alt=""
                      className="w-100 mb-3"
                    />
                  </li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: jsonData.awards.blocks[0].copy,
                    }}
                    className="px-2 text-center"
                  ></li>
                </ul>
              </li>
              <li className="col-12 col-lg-6 mt-2">
                <ul
                  className="list-unstyled d-flex py-4 px-6 align-items-center flex-column-reverse flex-lg-row"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <li
                    dangerouslySetInnerHTML={{
                      __html: jsonData.awards.blocks[1].copy,
                    }}
                    className="px-2 text-center"
                  ></li>
                  <li className="col-2 p-0 pr-xl-0">
                    <img
                      src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v7669c972e2fe9833daebcb53384cc0fc28010e28/images/ultima/warranty.svg"
                      alt=""
                      className="w-100 mb-3"
                    />
                  </li>
                </ul>
              </li>
            </ul> */}
            <div style={{ backgroundColor: "#efefef" }}>
              <div
                className="list-unstyled py-4 px-6 text-center mx-auto"
                style={{ maxWidth: "33em" }}
              >
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v7669c972e2fe9833daebcb53384cc0fc28010e28/images/ultima/warranty.svg"
                  alt=""
                  className="w-100 mb-3"
                  style={{ maxWidth: "8em" }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: jsonData.awards.blocks[1].copy,
                  }}
                  className="px-2 text-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 px-1" style={{ backgroundColor: "#efefef" }}>
          <div className="container text-center">
            <h2 className="h2">{jsonData.financing.h2}</h2>
            <p
              className="mt2 mb-0 mx-auto"
              style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
              {jsonData.financing.copy}
            </p>
            <ul className="list-unstyled d-flex flex-column flex-lg-row">
              {jsonData.financing.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-lg-4" key={i}>
                    <ul className="list-unstyled d-flex flex-column mt-4 bg-white h-100">
                      <li className="bg-secondary py-1">
                        <span className="h1" style={{ fontSize: "5em" }}>
                          {block.months}
                        </span>
                        <br />
                        months
                      </li>
                      <li className="px-3 py-1">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: block.title,
                          }}
                          className="display-3 mt-2"
                          style={{ fontSize: "1.5em" }}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: block.copy,
                          }}
                          className="mt-2"
                          style={{ fontSize: "1em" }}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: block.term,
                          }}
                          className="mt-2"
                          style={{ fontSize: "0.8em" }}
                        />
                        <p className="font-weight-bold mb-0">Valid from:</p>
                        <p
                          className="display-3 mb-0"
                          style={{ fontSize: "1em" }}
                        >
                          {block.validFrom}
                        </p>
                      </li>
                      <li className="mt-auto px-3 py-1">
                        <Button
                          url={block.url}
                          copy="Apply Now"
                          addClass="bg-black w-100"
                        />
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>

            <Button
              addClass="bg-secondary mt-6 font-weight-bold"
              copy={jsonData.financing.button.copy}
              url={jsonData.financing.button.url}
            />
          </div>
        </section>
      </div>

      <div className="bottom">
        <Footer jsonData={jsonData} />
      </div>
    </>
  );
};

export default Ultima;
