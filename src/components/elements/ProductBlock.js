import Button from "../elements/Button";

const ProductBlock = ({ block, addClass, addCSS }) => {
  return (
    <div
      className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
      style={{ backgroundColor: "#efefef" }}
    >
      {block.new && (
        <div
          className="bg-black position-absolute"
          style={{
            fontSize: "0.9em",
            padding: "4px 15px",
            right: "26px",
            top: "26px",
          }}
        >
          NEW
        </div>
      )}
      <div className="bg-white p-2">
        <img alt="" src={block.img} className="w-100 mb-2" />
      </div>
      <h2 className="h2">{block.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: block.copy,
        }}
        style={{ lineHeight: "1.8" }}
        className="mb-2"
      />

      <ul className="list-unstyled d-flex">
        {block.engFor.map((block, i) => {
          return (
            <li className="col-3 p-2" key={i}>
              <img alt="" src={block.icon} className="w-100" />
              <p className="small text-center mt-1 mb-0">{block.copy}</p>
            </li>
          );
        })}
      </ul>

      <Button
        addClass="bg-black mb-0 text-center w-100 mt-auto"
        copy="Shop Now"
        url={block.url}
      />
    </div>
  );
};

export default ProductBlock;
