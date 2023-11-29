"use client";
import { useEffect } from "react";

import jsonData from "./data/riding-lawn.json";

import Articles from "@/components/Articles";
import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import QuoteBlock from "@/components/QuoteBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function ZeroTurn({}) {
  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `<script>
  (function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
  </script>`;
    const scriptEl = document.createRange().createContextualFragment(html);
    document.body.appendChild(scriptEl);
  });

  return (
    <>
      <div
        className="top"
        id="sdb-container"
      >
        <section
          className="d-flex p-0 position-relative"
          style={{ minHeight: "500px" }}
        >
          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/hero-1024w.jpg"
            alt=""
            id="hero"
            className="w-100 h-100"
            //width={1200}
            //height={450}
            fill={true}
            style={{ objectFit: "cover" }}
            priority
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

        <Explore
          jsonData={jsonData}
          addButton={false}
        />

        <section className="relative">
          <div className="container w-100 relative z-20">
            <QuoteBlock
              quote={jsonData.quote}
              className="text-white absolute py-10"
              addCSS={{ maxWidth: "700px" }}
              stackStars={true}
              starFill="#fff"
              fillBase="#333"
            />
          </div>

          <div
            className="h-full w-full absolute top-0 left-0 z-10 opacity-40"
            style={{
              background:
                "linear-gradient(to bottom, #000 0, rgba(0,0,0,0) 16rem, rgba(0,0,0,0) 100%)",
            }}
          />
          <ResponsiveImage
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/riding-lawn-mowers/hero.jpg"
            alt=""
            id="quoteimg"
            className="w-100 h-100 relative z-0"
            //width={1200}
            //height={450}
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </section>

        <section className="py-5 px-1">
          <div id="product-finder-zero-turns"></div>
        </section>

        <section>
          <div className="container-fluid">
            <h2 className="mt-4 display-3 text-center">
              Shop & Compare Riding Lawn Mowers
            </h2>
          </div>
        </section>
      </div>

      <div
        className="middle my-6 d-flex justify-content-center align-items-center h2"
        style={{ backgroundColor: "#cfcfcf", minHeight: "600px" }}
      >
        For PLP
      </div>

      <div
        className="bottom container"
        id="sdb-container"
      >
        <Articles articles={jsonData.articles} />

        <hr />

        <Faqs
          faqs={jsonData.faqs}
          allOpen={true}
        />

        <RelatedLinks
          relatedCats={jsonData.relatedCats}
          className="mt-4"
        />
      </div>
    </>
  );
}
