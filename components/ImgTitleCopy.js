export default function ImgTitleCopy({ jsonData }) {
  return (
    <ul className="grid lg:grid-flow-col gap-8">
      {jsonData.map((block, i) => {
        return (
          <li
            className=""
            key={i}
          >
            <div className="">
              <div className="">
                {block.img.src && (
                  <img
                    alt=""
                    className="w-100 mb-2"
                    src={block.img.src}
                  />
                )}
                <h3 className="mb-1">{block.title}</h3>
                <p className="mb-0">{block.copy}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
