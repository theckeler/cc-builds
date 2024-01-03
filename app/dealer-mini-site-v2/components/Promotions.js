export default function Promotions({ jsonData }) {
  const styleOverride = { border: "1px solid #d9d9d9 !important" };

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
              className="h-full bg-[#1f1f1f] flex flex-col"
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

              <div className="text-white flex flex-col grow">
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
                    className="w-full py-2 bg-transparent text-white text-left"
                    style={{
                      borderTop: "1px solid #4b4b4b",
                      borderBottom: "1px solid #4b4b4b",
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
                    <div className="p-2 bg-neutral-200 text-black">
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
                        className="font-weight-bold text-white  text-uppercase w-full py-2 bg-transparent block px-1 text-left border-light"
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
