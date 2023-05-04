import React, { useEffect } from "react";
import jsonData from "./data/home.json";

import { ReactComponent as Logo } from "../../images/x-series.svg";
import { ReactComponent as Intellipower } from "../../images/intellipower-logo.svg";
import { ReactComponent as EFI } from "../../images/efi-logo.svg";
import { ReactComponent as IntellipowerBack } from "../../images/intellipower-back.svg";

import Pluses from "../elements/Pluses";
import Button from "../elements/Button";
import QuoteBlock from "../elements/QuoteBlock";
import HowToMaintence from "../elements/HowToMaintence";
import Articles from "../elements/Articles";
import AttchmentsAccessories from "../elements/AttchmentsAccessories";

const App = () => {
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

  return (
    <>
      <div className="snow-v2 snow-v2-index">
        {/* HERO */}
        <section className="section-1 hero d-flex flex-column-reverse">
          <div className="wrapper">
            <div className="block bg-black clip-corner">
              <Logo className="w-100" />
            </div>
          </div>
          <img src={jsonData.hero.img} alt={jsonData.hero.alt} className="" />
        </section>

        {/* COPY BLOCK */}
        <section className="section-2 bg-black d-flex flex-column">
          <Pluses addClass="top" num="9" />
          <div className="wrapper">
            <h1
              dangerouslySetInnerHTML={{ __html: jsonData.copyBlock.h1 }}
            ></h1>
            <p
              dangerouslySetInnerHTML={{ __html: jsonData.copyBlock.copy }}
            ></p>
          </div>
          <Pluses addClass="bottom" num="6" />
        </section>

        {/* LINE UP */}
        <section className="section-3">
          <div className="wrapper">
            <div className="container">
              <h2>{jsonData.lineup.title}</h2>
              <ul className="row list-unstyled">
                {jsonData.lineup.blocks.map((block, i) => {
                  return (
                    <li key={i} className="col col-12 col-sm-12 col-md-4">
                      <div href={block.url} className="unstyled link">
                        <img src={block.img} alt={block.alt} />
                        <strong className="title">{block.title}</strong>
                        <p className="copy">{block.copy}</p>
                        <div className="eng-for">Engineered for</div>
                        <ul
                          className="row list-unstyled"
                          style={{ minHeight: "220px" }}
                        >
                          {block.engFor.map((subblock, i) => {
                            return (
                              <li
                                key={i}
                                className="flex-column col col-12 col-sm-12 col-md-4 eng-for-blocks"
                              >
                                <strong>{subblock.title}</strong>
                                <img
                                  src={subblock.img}
                                  alt=""
                                  className="icon"
                                />
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: subblock.copy,
                                  }}
                                  style={{ marginTop: "auto" }}
                                ></p>
                              </li>
                            );
                          })}
                        </ul>
                        <Button
                          addClass="bg-black text-center"
                          copy={block.button.copy}
                          url={block.url}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* SNOW FINDER */}
        <section className="section-4 snow-picker">
          <div id="product-finder-snow-blowers"></div>
        </section>

        {/* QUOTE */}
        <section className="section-5 quote d-flex flex-column-reverse">
          <div className="wrapper">
            <QuoteBlock
              quote={jsonData.quote}
              addClass="bg-white clip-corner"
              addCSS={{ maxWidth: "650px" }}
            />
          </div>
          <img src={jsonData.quote.img} alt={jsonData.quote.alt} />
        </section>

        {/* INTELLPOWER & EFI */}
        <section className="section-6">
          <div className="wrapper container">
            <ul className="row list-unstyled">
              <li className="col-12 col-sm-12 col-md-6 d-flex">
                <div className="bg-black clip-corner p-2 d-flex flex-column">
                  <div
                    className="logo intellipower p-6 position-relative"
                    style={{ zIndex: "1" }}
                  >
                    <Intellipower />
                  </div>
                  <ul
                    className="d-flex list-unstyled p-2 position-relative"
                    style={{ zIndex: "1" }}
                  >
                    <li className="plus">+</li>
                    <li className="content">
                      <p
                        className="copy title"
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[0].title,
                        }}
                      ></p>
                      <p
                        className="copy"
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[0].copy,
                        }}
                      ></p>
                      <small
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[0].tag,
                        }}
                      ></small>
                    </li>
                  </ul>
                  <IntellipowerBack
                    className="position-absolute w-100 h-100 fill-white"
                    style={{ zIndex: "0", opacity: ".5" }}
                  />
                </div>
              </li>
              <li className="col-12 col-sm-12 col-md-6 p-1 d-flex">
                <div className="bg-black clip-corner p-2 d-flex flex-column">
                  <div className="logo efi p-6 w-75 mx-auto">
                    <EFI />
                  </div>
                  <ul className="d-flex list-unstyled p-2">
                    <li className="plus">+</li>
                    <li className="content">
                      <p
                        className="copy title"
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[1].title,
                        }}
                      />
                      <p
                        className="copy"
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[1].copy,
                        }}
                      />
                      <small
                        dangerouslySetInnerHTML={{
                          __html: jsonData.intellipower.blocks[1].tag,
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <Button
                copy={jsonData.intellipower.button.copy}
                url={jsonData.intellipower.button.url}
                addClass="bg-black mx-auto"
                addStyle={{
                  clipPath:
                    "polygon(1rem 0, 100% 0%, 100% 100%, 0 100%, 0 1rem)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Machine Extreme  */}
        <section className="section-7 pl-1 pr-2">
          <div className="wrapper">
            <h2 className="text-center">{jsonData.machineExtreme.h2}</h2>
            <p className="copy text-center">{jsonData.machineExtreme.copy}</p>

            <ul className="row list-unstyled">
              {jsonData.machineExtreme.blocks.map((block, i) => {
                return (
                  <li className="col-12 col-sm-12 col-md-6" key={i}>
                    <div className="p-2">
                      <ul className="row list-unstyled align-items-center">
                        <li className="col-12 col-sm-3 col-md-3 p-1">
                          <img src={block.icon} alt="" className="" />
                        </li>
                        <li className="col-12 col-sm-9 col-md-9 p-1 pl-6 pr-6">
                          <strong>{block.title}</strong>
                          <p>{block.copy}</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* IMG BLOCK  */}
        <section className="section-8">
          <div className="wrapper p-1">
            <img
              className="mobile w-100"
              src={jsonData.imgBlocks.mobile}
              alt=""
            />
            <img
              className="desktop w-100"
              src={jsonData.imgBlocks.desktop}
              alt=""
            />
          </div>
        </section>

        {/* COMPARE */}
        <section className="section-9">
          <div className="wrapper container">
            <h2 className="text-center">{jsonData.compare.h2}</h2>
            <ul className="compare row list-unstyled">
              {jsonData.compare.blocks.map((block, i) => {
                return (
                  <React.Fragment key={i}>
                    {block.row.map((block2, x) => {
                      let output = "";

                      if (block2.logo) {
                        output += `<div class="logo"><img src=${block2.logo} /></div>`;
                      }

                      if (block2.img) {
                        output += `<div class="img"><img src=${block2.img} /></div>`;
                      }

                      if (block2.copy) {
                        output += `<span class="d-flex flex-column justify-content-center">${block2.copy}</span>`;
                      }

                      if (block2.active === true) {
                        output =
                          '<span class="dash-bull d-flex flex-column justify-content-center">&bull;</span>';
                      } else if (block2.active === false) {
                        output =
                          '<span class="dash-bull d-flex flex-column justify-content-center">&ndash;</span>';
                      }
                      return (
                        <li
                          className={`d-flex p-2 column-${x} row-${i}`}
                          key={x}
                          dangerouslySetInnerHTML={{
                            __html: output,
                          }}
                        ></li>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </ul>
            <h3 className="text-center">{jsonData.compare.copy}</h3>
            <div className="text-center">
              <Button
                copy={jsonData.compare.button.copy}
                url={jsonData.compare.button.url}
                addClass="bg-black mx-auto mt-5"
                addStyle={{
                  clipPath:
                    "polygon(1rem 0, 100% 0%, 100% 100%, 0 100%, 0 1rem)",
                }}
              />
            </div>
          </div>
        </section>

        {/* SHOP & COMPARE ONLY */}
        <section>
          <div className="wrapper text-center">
            <h2>Shop & Compare Two-Stage Snow Blowers</h2>
          </div>
        </section>
      </div>

      <div className="snow-v2 snow-v2-index">
        <HowToMaintence {...{ jsonData }} />
        <Articles {...{ jsonData }} />
        <AttchmentsAccessories {...{ jsonData }} />
      </div>
    </>
  );
};

export default App;
