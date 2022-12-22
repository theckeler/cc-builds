import React, { useEffect } from "react";
import jsonData from "./data/intellipower.json";

import { ReactComponent as Intellipower } from "../../images/intellipower-logo.svg";
import { ReactComponent as EFI } from "../../images/efi-logo.svg";
import { ReactComponent as IntellipowerBack } from "../../images/intellipower-back.svg";
import Button from "../elements/Button";
import QuoteBlock from "../elements/QuoteBlock";
import Faqs from "../elements/Faqs";
import Video from "../elements/Video";

const App = () => {
  // console.log(jsonData);
  useEffect(() => {
    document.querySelectorAll(".js-scripts").forEach(function (elem) {
      elem.remove();
    });

    const headHTML = `
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    `;
    const scriptHeadHTML = document
      .createRange()
      .createContextualFragment(headHTML);
    document.body.prepend(scriptHeadHTML);

    const footerHTML = `

<script type="text/javascript" class="js-scripts">
  document.querySelector("#button-efi-faqs").onclick = () => {
     document.querySelector("#button-intellipower-faqs").classList.remove("active");
    document.querySelector("#button-efi-faqs").classList.add("active");

    document.querySelector("#faqs-intellipower").classList.remove("active");
    document.querySelector("#faqs-efi").classList.add("active");
  };

  document.querySelector("#button-intellipower-faqs").onclick = () => {
    document.querySelector("#button-intellipower-faqs").classList.add("active");
    document.querySelector("#button-efi-faqs").classList.remove("active");
    
    document.querySelector("#faqs-intellipower").classList.add("active");
    document.querySelector("#faqs-efi").classList.remove("active");
  };
</script>
<script class="js-scripts">
window.onload = function() {
  $(".slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
};
</script>
<script type="text/javascript" class="js-scripts" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
`;
    const scriptFooterHTML = document
      .createRange()
      .createContextualFragment(footerHTML);
    document.body.appendChild(scriptFooterHTML);
  });

  // document.querySelector("#button-step-up").onclick = () => {
  //   document.querySelector("#button-vr").classList.remove("active");
  //   document.querySelector("#button-step-up").classList.add("active");

  //   document.querySelector("#vr").classList.remove("active");
  //   document.querySelector("#step-up").classList.add("active");
  // };

  // document.querySelector("#button-vr").onclick = () => {
  //   document.querySelector("#button-vr").classList.add("active");
  //   document.querySelector("#button-step-up").classList.remove("active");

  //   document.querySelector("#vr").classList.add("active");
  //   document.querySelector("#step-up").classList.remove("active");
  // };

  return (
    <div className="snow-v2 snow-v2-intellipower">
      <section className="section-1">
        <div className="wrapper flex flex-column align-items-center justify-content-center px-3">
          <h1
            className="text-center"
            dangerouslySetInnerHTML={{ __html: jsonData.hero.h1 }}
          ></h1>
          <p
            className="mt-3 text-center"
            dangerouslySetInnerHTML={{ __html: jsonData.hero.copy }}
          ></p>
        </div>
      </section>

      <section className="section-2 bg-black">
        <div className="wrapper flex flex-column align-items-center justify-content-center px-3">
          <div className="logo">
            <Intellipower />
          </div>
          <h2
            className="w-100 text-uppercase mt-9 text-center"
            dangerouslySetInnerHTML={{ __html: jsonData.intellipower.text }}
          ></h2>
        </div>
        <IntellipowerBack />
      </section>

      <section className="section-3 pt-8 pb-8">
        <div className="wrapper px-3">
          <h2
            className="text-uppercase text-center h2 mb-0"
            dangerouslySetInnerHTML={{
              __html: jsonData.stats.h2,
            }}
          ></h2>
          <p
            className="text-center small ml-auto mr-auto mt-0 text-black-50"
            dangerouslySetInnerHTML={{
              __html: jsonData.stats.copy,
            }}
          ></p>
          <ul className="row list-unstyled power">
            {jsonData.stats.blocks.map((block, i) => {
              return (
                <li className="col-12 col-sm-12 col-md-4 p-2 mt-2" key={i}>
                  <div className="p-2 flex flex-column">
                    <p className="text-uppercase text-center fw-bold text-uppercase h3 line-1 mb-0">
                      Up To
                    </p>
                    <p
                      className="text-uppercase text-center fw-bold text-uppercase h1 mt-0"
                      dangerouslySetInnerHTML={{
                        __html: block.line1,
                      }}
                    ></p>
                    <p
                      className="text-uppercase text-center fw-bold text-uppercase h3 line-3 mt-0 "
                      dangerouslySetInnerHTML={{
                        __html: block.line2,
                      }}
                    ></p>
                    <p
                      className="text-center small line-4 mb-0 pb-0 text-black-50 mt-4 pt-2 w-75 ml-auto mr-auto"
                      dangerouslySetInnerHTML={{
                        __html: block.line3,
                      }}
                    ></p>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="row list-unstyled consistent">
            {jsonData.consistent.blocks.map((block, i) => {
              return (
                <li className="col-12 col-sm-12 col-md-6 p-1" key={i}>
                  <div className="h-100 bg-yellow p-5 flex flex-column">
                    <p
                      className="text-center h3 mt-0 pt-0 line-1"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    ></p>
                    <p
                      className="text-center w-100 pt-2 mt-2 pb-0 mb-0 line-2"
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    ></p>
                  </div>
                </li>
              );
            })}
          </ul>

          <h3
            className="text-center pt-8 mt-6"
            dangerouslySetInnerHTML={{
              __html: jsonData.howItWorks.h2,
            }}
          ></h3>
          <ul className="row list-unstyled mt-6">
            {jsonData.howItWorks.blocks.map((block, i) => {
              return (
                <li className="col-12 col-sm-12 col-md-6 p-1" key={i}>
                  <div className="bg-black clip-corner p-4 flex flex-column">
                    <p
                      className="text-uppercase fw-bold"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    ></p>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    ></p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* <ul className="row list-unstyled videos">
            <li
              className="col-12 col-sm-12 col-md-12 p-1 active video"
              id="step-up"
            >
              <div className="p-4 flex flex-column">
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/ve1f3e6cb0cf2f950d44a96bbcdc4fbdabb979847/snow-v2/18-percent-power.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="col-12 col-sm-12 col-md-12 p-1 video" id="vr">
              <div className="p-4 flex flex-column">VR Video</div>
            </li>
          </ul>

          <ul className="row list-unstyled p-0 m-0 video-buttons">
            <li className="col-12 col-sm-6 col-md-6 p-0">
              <div className="p-0 flex flex-column">
                <button className="active" id="button-step-up">
                  IntelliPower<sup>™</sup> Step-Up: Wall of Winter
                </button>
              </div>
            </li>
            <li className="col-12 col-sm-6 col-md-6 p-0">
              <div className="p-0 flex flex-column">
                <button className="" id="button-vr">
                  IntelliPower<sup>™</sup> VR Experience
                </button>
              </div>
            </li>
          </ul> */}
        </div>
      </section>

      <section className="section-3 pt-8 pb-8 bg-yellow">
        <div className="wrapper">
          <ul className="row list-unstyled bg-yellow">
            {jsonData.quotes.blocks.map((block, i) => {
              return (
                <li
                  className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
                  key={i}
                >
                  <QuoteBlock quote={block} addClass="bg-white" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-4 bg-black pt-9 pb-9">
        <div className="wrapper">
          <div className="logo w-50 m-auto">
            <EFI />
          </div>
          <p
            className="w-50 mt-6 ml-auto mr-auto text-center copy"
            dangerouslySetInnerHTML={{ __html: jsonData.efi.copy }}
          ></p>
          <p
            className="w-50 mt-3 ml-auto mr-auto text-center small"
            dangerouslySetInnerHTML={{ __html: jsonData.efi.small }}
          ></p>

          <ul className="row list-unstyled blocks">
            {jsonData.efi.blocks.map((block, i) => {
              return (
                <li className="block col-12 col-sm-12 col-md-6 p-3" key={i}>
                  <div className="p-4 h-100 flex flex-column bg-white clip-corner">
                    <strong
                      className="title text-center mb-2 pb-2"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    ></strong>
                    <p
                      className="text-center mb-0"
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    ></p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-5 pt-9 pb-9">
        <div className="wrapper p-3">
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: jsonData.efiBlock.h2,
            }}
          ></h2>

          <Video
            img={jsonData.efiBlock.img}
            ytVideo={jsonData.efiBlock.ytVideo}
            addClass="w-100 mt-6"
            // addStyle={{ minHeight: "300px" }}
            // videoClass="w-100"
            // videoStyle={{ minHeight: "56.25vw" }}
          />
        </div>
      </section>

      <section className="section-6 pt-9 pb-9 bg-yellow">
        <div className="wrapper">
          <ul className="row list-unstyled bg-yellow">
            {jsonData.quotes.blocks.map((block, i) => {
              return (
                <li
                  className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
                  key={i}
                >
                  <QuoteBlock quote={block} addClass="bg-white" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* <section className="section-7 py-9">
        <div className="wrapper flex flex-column">
          <ul className="row list-unstyled">
            {jsonData.learnMore.blocks.map((block, i) => {
              return (
                <li className="quote col-12 col-sm-12 col-md-6 p-0" key={i}>
                  <a href="#top" className="text-decoration-none p-3 d-block">
                    <img src={block.img} alt="" className="w-100" />
                  </a>
                </li>
              );
            })}
          </ul>
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: jsonData.learnMore.h2,
            }}
          />
          <p
            className="copy text-center max-width-1000 mb-4 mt-1"
            dangerouslySetInnerHTML={{
              __html: jsonData.learnMore.copy,
            }}
          />
          <Button
            copy={jsonData.learnMore.button.copy}
            url={jsonData.learnMore.button.url}
            addClass="bg-yellow mx-auto"
          />
        </div>
      </section> */}

      <section className="section-7 pt-9 pb-9">
        <div className="wrapper">
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: jsonData.learnMore.h2,
            }}
          ></h2>
          <ul className="row list-unstyled">
            {jsonData.learnMore.blocks.map((block, i) => {
              return (
                <li
                  className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3 bg-grey"
                  key={i}
                >
                  <a href={block.button.url} className="text-decoration-none">
                    <img src={block.img} alt="" className="w-100" />
                    <p
                      className="title mt-2 fw-bold"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    ></p>
                    <p
                      className="copy"
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    ></p>
                    <Button copy={block.button.copy} addClass="bg-yellow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-8 pt-9 pb-9">
        <div className="wrapper">
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: jsonData.viewMore.h2,
            }}
          ></h2>
          <ul className="row list-unstyled">
            {jsonData.viewMore.blocks.map((block, i) => {
              return (
                <li
                  className="flex flex-column quote col-12 col-sm-12 col-md-4 p-1"
                  key={i}
                >
                  <a
                    href={block.url}
                    className="flex flex-column p-3 h-100 text-decoration-none bg-grey"
                  >
                    <img src={block.img} alt="" className="w-100" />
                    <p
                      className="copy fw-bold mt-2 mb-0 pb-0"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    ></p>
                    <p
                      className="copy mt-0 pt-0"
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    ></p>
                    <Button
                      copy={block.button.copy}
                      addClass="bg-yellow mt-auto"
                    />
                  </a>
                </li>
              );
            })}
            <li class="flex flex-column quote col-12 col-sm-12 col-md-4 p-1">
              <a
                href="https://www.cubcadet.com/en_US/snow-blowers/two-stage-snow-blowers"
                class="flex flex-column p-3 h-100 text-decoration-none bg-grey"
              >
                <div className="img-wrapper">
                  <img
                    src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw26bee84c/images/product-line-browse/Main-Carousel/SnowBlow_PLB_31AH5GVO710_2X_30EFI_desktop_1015x630.jpg"
                    alt=""
                    class="w-100 h-100"
                  />
                </div>
                <button class="coh-link coh-style-button-action bg-yellow mt-auto py-2 px-5 border-0">
                  View All 2X Snowblowers
                </button>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-9 pt-9 pb-9 p-0">
        <div className="wrapper p-3">
          <ul className="row list-unstyled">
            <li className="col-12 col-sm-12 col-md-6 p-0">
              <div className="p-0 flex flex-column">
                <button
                  className="active py-2 px-5 border-0"
                  id="button-intellipower-faqs"
                >
                  IntelliPower<sup>™</sup>
                </button>
              </div>
            </li>
            <li className="col-12 col-sm-12 col-md-6 p-0">
              <div className="p-0 flex flex-column">
                <button className="py-2 px-5 border-0" id="button-efi-faqs">
                  EFI
                </button>
              </div>
            </li>
          </ul>

          <div className="">
            <Faqs
              faqs={jsonData.faqs[0].intellipower}
              addClass="faqs-intellipower active"
              addID="faqs-intellipower"
            />
            <Faqs
              faqs={jsonData.faqs[1].efi}
              addClass="faqs-efi"
              addID="faqs-efi"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
