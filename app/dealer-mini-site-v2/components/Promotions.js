export default function Promotions({ jsonData }) {
  const styleOverride = { border: "1px solid #d9d9d9 !important" };

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.border-light {
  border-top:  1px solid #4b4b4b !important;
  border-bottom:  1px solid #4b4b4b !important;
}

.card-flip {
  transform: rotateY(180deg);
}
        
.flip-card {
  background-color: transparent;
  width: 100%;
  perspective: 800px; 
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  border: 1px solid #000 !important;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
`,
        }}
      />

      <h3 className="font-weight-bold text-center">Promotions</h3>
      <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 grid-flow-row p-3">
        {jsonData.map((block, i) => (
          <li
            key={i}
            //style={{ perspective: "1000px" }}
            className="flip-card min-h-[500px]"
          >
            <ul
              id={`card-${i}`}
              className="flip-card-inner"
              style={
                {
                  //  transformStyle: "preserve-3d",
                  //transform: "rotateY(180deg)",
                }
              }
            >
              <li
                className="flip-card-front flex flex-col rounded-xl"
                //  style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={block.img.src}
                  alt=""
                  className="w-full rounded-t-xl"
                />

                <div className="text-white bg-[#1f1f1f] flex flex-col grow">
                  <h3
                    className="mb-2 px-2 pt-2"
                    style={{ fontSize: "24px" }}
                  >
                    {block.title}
                  </h3>

                  <p className="px-2">{block.valid}</p>
                  <p className="px-2">{block.subTitle}</p>

                  <div className="mt-auto">
                    <button
                      className="w-full py-2 bg-transparent text-white text-left border-light"
                      onClick={(e) => {
                        document
                          .querySelector(`#card-${i}`)
                          .classList.add("card-flip");
                      }}
                    >
                      {block.link}
                    </button>

                    {!!block.button && (
                      <div className="">
                        <a
                          href={block.button.href}
                          className="font-weight-bold text-white  text-uppercase w-full py-2 bg-transparent block px-1 text-left border-light"
                        >
                          {block.button.title}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li
                className="flip-card-back p-2 text-white rounded-xl"
                style={{
                  backgroundColor: "#4b4b4b",
                  // backfaceVisibility: "hidden",
                  //transform: "rotateY(180deg)",
                }}
              >
                <button
                  className="text-amber-500 bg-transparent font-bold text-lg mb-2"
                  onClick={(e) => {
                    document
                      .querySelector(`#card-${i}`)
                      .classList.remove("card-flip");
                  }}
                >
                  &lsaquo; BACK
                </button>
                <h3 style={{ fontSize: "18px" }}>Offer Details</h3>
                <ul>
                  {block.offerDetails.map(function (detail, i) {
                    return (
                      <li
                        style={{ listStyle: "inside" }}
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: detail,
                        }}
                      />
                    );
                  })}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
