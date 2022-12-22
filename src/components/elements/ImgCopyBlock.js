const ImgCopyBlock = ({
  block,
  addClass,
  linkable = true,
  ContainerType = "div",
  addStyle,
  divClass,
}) => {
  if (linkable) {
    ContainerType = "a";
  }

  return (
    <ContainerType
      href={block.url}
      className={`text-decoration-none h-100 ${addClass}`}
      style={addStyle}
    >
      <img src={block.img} alt="" className="w-100" />
      <div className={`content flex flex-column p-3 ${divClass}`}>
        <p
          className="font-weight-bold mb-0 display-4"
          dangerouslySetInnerHTML={{
            __html: block.title,
          }}
        />
        <p className="copy mt-2" style={{ lineHeight: "1.7" }}>
          {block.copy}
        </p>
        {linkable && <span className="read-more mt-auto">Read more</span>}
      </div>
    </ContainerType>
  );
};

export default ImgCopyBlock;
