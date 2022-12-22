import Button from "../elements/Button";

const CTABlock = ({ block, addClass, addCSS }) => {
  return (
    <>
      <h2
        dangerouslySetInnerHTML={{ __html: block.h1 }}
        className="text-center"
      />
      <p
        dangerouslySetInnerHTML={{ __html: block.copy }}
        className="text-center"
      />
      <Button
        url={block.button.url}
        copy={block.button.copy}
        addClass="bg-white mt-2"
      />
    </>
  );
};

export default CTABlock;
