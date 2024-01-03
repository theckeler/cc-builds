export default function Promotions({ jsonData }) {
  return (
    <div>
      <h3 className="font-weight-bold text-center">Promotions</h3>
      <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 grid-flow-row p-3">
        {jsonData.map((block, i) => (
          <li
            key={i}
            //style={{ perspective: "1000px" }}
            className=""
          >
            <div
              id={`card-${i}`}
              className="h-full border border-color-[#efefef] flex flex-col"
              style={
                {
                  //  transformStyle: "preserve-3d",
                  //transform: "rotateY(180deg)",
                }
              }
            >
              <img
                src={block.img.src}
                alt=""
                className="w-full"
              />

              <div className="flex flex-col grow">
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
                    className="w-full py-2 bg-transparent text-left"
                    style={{
                      borderTop: "1px solid #dadada",
                      borderBottom: "1px solid #dadada",
                    }}
                    onClick={(e) => {
                      e.currentTarget.nextElementSibling.classList.toggle(
                        "hidden"
                      );
                    }}
                  >
                    {block.link}
                  </button>
                  <div className="relative hidden">
                    <div className="p-2">
                      <h3 style={{ fontSize: "18px" }}>Offer Details</h3>
                      <ul className="">
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
                    </div>
                  </div>

                  {!!block.button && (
                    <div className="">
                      <a
                        href={block.button.href}
                        className="font-weight-bold bg-[#ffc20f] text-uppercase w-full py-2 block px-1 text-left border-light"
                      >
                        {block.button.title}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
