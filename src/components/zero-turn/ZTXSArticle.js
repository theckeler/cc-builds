import jsonData from "./data/ztxs-article.json";

import Footer from "./elements/Footer";
import Button from "../elements/Button";
import Video from "../elements/Video";

const ZTXSArticle = () => {
  return (
    <>
      <div className="top">
        <section
          className="p-0"
          style={{ overflow: "visible", minHeight: "36em" }}
        >
          <img
            src={jsonData.hero.background}
            alt={jsonData.hero.alt}
            className="w-100 position-relative"
            style={{ zIndex: "0" }}
          />
          <div
            className="container position-absolute w-100 p-0"
            style={{
              maxWidth: "63em",
              height: "31em",
              top: "4em",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
            }}
          >
            <img
              src={jsonData.hero.img}
              alt={jsonData.hero.alt}
              className="w-100 h-100 px-2"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section className="py-5 px-1">
          <div className="container" style={{ maxWidth: "63em" }}>
            <h1 className="">Introducing The Ultima ZTXS</h1>
            <div className="mx-auto mt-3" style={{ lineHeight: "1.8" }}>
              <p className="">
                Your one-of-a-kind lawn has finally met its match. The Cub
                Cadet® Ultima Series™ ZTXS is our first-of-its kind mower with a
                zero-turn steering wheel. Built with commercial-grade features,
                this machine was engineered to take on the varied terrain of
                almost any yard. Including yours.
              </p>
              <p>
                Able to pull a zero-turn with ease, tackle tough hillsides of up
                to 20 degrees, and take on the long stretches of up to 12 acres
                in between, you might think the ZTXS was built specifically for
                your yard. From stretching hillsides to dodging that pond and
                your favorite bushes and even the barn, the ZTXS is ready for
                the job.
              </p>
              <p>
                Synchro-Steer™ technology gives you control of all four wheels
                from the intuitive steering wheel, making our signature
                zero-turn possible. And, with a commercial-grade deck and
                engine, the ZTXS offers strength and the consistent cut quality
                you can depend on. Mow after mow and zone after zone. So you can
                be confident you won’t mow over that sapling and our tubular
                steel rollover will put your mind at ease on those hills. All
                while delivering the comfort you expect from an Ultima seat and
                armrests.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5 px-1 bg-secondary">
          <div className="container" style={{ maxWidth: "63em" }}>
            <ul className="list-unstyled d-flex flex-column flex-md-row align-items-center">
              <li className="col-md-7">
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ztxs-article/ztxs-features.jpg"
                  alt=""
                  className="w-100 mb-2 mb-md-0"
                />
              </li>
              <li className="col-md-5">
                <h2 className="display-3" style={{ fontSize: "1.4em" }}>
                  Commercial-grade features take on unique terrain
                </h2>
                <p className="mb-0">
                  From tight turns to inclined hillsides and stretching valleys,
                  the Ultima ZTXS is built to help tackle your yard’s unique
                  challenges.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-8 px-1">
          <div className="container" style={{ maxWidth: "63em" }}>
            <h2 className="text-center">See the ZTXS In Action</h2>
            <Video
              img="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ztxs-article/ztxs-action.jpg"
              addClass="mt-3"
              ytVideo="mjWUwAIRS5w"
              title="See the ZTXS In Action"
            />
          </div>
        </section>

        <section
          className="py-5 px-1 mt-6"
          style={{ backgroundColor: "#efefef", overflow: "visible" }}
        >
          <div className="container" style={{ maxWidth: "50em" }}>
            <ul className="list-unstyled d-flex flex-column-reverse flex-md-row align-items-center">
              <li className="col-12 col-md-5">
                <h2 className="display-3 mb-1" style={{ fontSize: "2em" }}>
                  Exceptional Financing Offers Available<sup>*</sup>
                </h2>
                <p className="mb-3" style={{ fontSize: ".7em" }}>
                  <sup>*</sup> Offers subject to credit approval. Some
                  restrictions apply.
                </p>
                <p className="mb-0">
                  <Button
                    addClass="bg-black text-white"
                    copy="Learn More"
                    url="https://www.cubcadet.com/en_US/financing"
                  />
                </p>
              </li>
              <li className="col-12 col-md-7 mb-3 mb-md-0">
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ztxs-article/CubCard1.png"
                  alt=""
                  className="w-100 mt-n9"
                />
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-5">
          <div className="container" style={{ maxWidth: "50em" }}>
            <h2 className="text-center">Shop & Compare Zero-Turn Mowers</h2>
          </div>
        </section>
      </div>

      <div className="bottom">
        <Footer jsonData={jsonData} />
      </div>
    </>
  );
};

export default ZTXSArticle;
