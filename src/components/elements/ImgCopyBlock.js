import Button from "./Button";
import Video from "../elements/Video";

const ImgCopyBlock = ({
  block,
  addClass,
  linkable = true,
  ContainerType = "div",
  addStyle,
  //divClass,
  flushImg = false,
}) => {
  if (linkable) {
    ContainerType = "a";
  }

  //console.log("flushImg: ", flushImg);

  return (
    <div
      href={block.url}
      className={`d-flex flex-column text-decoration-none h-100 ${addClass}`}
      style={addStyle}
    >
      {flushImg === true && <ImgBlock img={block.img} />}
      <div className={`d-flex flex-column h-100 ${flushImg ? "p-3" : ""}`}>
        {flushImg !== true && !block.ytVideo && <ImgBlock img={block.img} />}
        {block.ytVideo && (
          <Video img={block.img} ytVideo={block.ytVideo} addClass="w-100" />
        )}
        <p
          className={`font-weight-bold ${!flushImg && "mt-2"} mb-0 display-4`}
          dangerouslySetInnerHTML={{
            __html: block.title,
          }}
        />
        <p
          className="copy mt-2"
          style={{ lineHeight: "1.7" }}
          dangerouslySetInnerHTML={{
            __html: block.copy,
          }}
        />
        {linkable && <span className="read-more mt-auto">Read more</span>}{" "}
        {block.button && (
          <Button
            copy={block.button.copy}
            url={block.button.url}
            addClass="bg-secondary align-self-start mt-auto"
          />
        )}
      </div>
    </div>
  );
};

export const ImgBlock = ({ img }) => {
  return <img src={img} alt="" className="w-100" />;
};

export default ImgCopyBlock;
