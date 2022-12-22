const ImgCopyBlockStacked = ({ block, addClass, addStyle }) => {
  return (
    <a
      href={block.url}
      className={`flex flex-column text-decoration-none ${addClass}`}
      style={addStyle}
    >
      <img src={block.img} alt="" />
      <div className="content flex flex-column p-3 h-100">
        <strong
          className="h3"
          dangerouslySetInnerHTML={{
            __html: block.title,
          }}
          style={{ fontSize: "1.6em" }}
        />
        <p
          className="copy mt-2"
          dangerouslySetInnerHTML={{
            __html: block.copy,
          }}
        />
        <span
          className="mt-auto text-uppercase fw-bold"
          style={{ textDecoration: "underline" }}
        >
          Read more
        </span>
      </div>
    </a>
  );
};

export default ImgCopyBlockStacked;
