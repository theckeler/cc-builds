import Stars from "./Stars";

const QuoteBlock = ({
  quote,
  addClass,
  addCSS,
  stackStars = false,
  starFill = "#FFC10F",
}) => {
  const stackEmUp = stackStars ? "flex-column" : "";
  const starCSS = stackStars ? 12 : 8;

  return (
    <div
      className={`quote-block d-flex flex-column h-100 w-100 p-4 ${addClass}`}
      style={addCSS}
    >
      <ul className={`list-unstyled d-flex mb-0 ${stackEmUp}`}>
        <li className={`col-${starCSS} font-weight-bold h3 text-uppercase p-0`}>
          {quote.title}
        </li>
        <li className={`col-4 text-right p-0`}>
          <Stars fill={starFill} />
        </li>
      </ul>
      <p className="mt-2">{quote.copy}</p>
      <ul className="list-unstyled d-flex mt-1">
        <li className="border-right font-weight-bold pr-2">{quote.name}</li>
        <li
          className="font-weight-normal pl-2"
          dangerouslySetInnerHTML={{
            __html: quote.unit,
          }}
        ></li>
      </ul>
    </div>
  );
};

export default QuoteBlock;
