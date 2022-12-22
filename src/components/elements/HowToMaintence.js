import ImgCopyBlockStacked from "./ImgCopyBlockStacked";
const HowToMaintence = ({ jsonData }) => {
  return (
    <section className="pt-6">
      <div className="wrapper">
        <ul className="list-unstyled d-flex flex-column flex-md-row align-items-center px-3">
          <li className="">
            <h2 className="text-center">{jsonData.howTo.h2}</h2>
          </li>
          <li className="ml-2">
            <a href={jsonData.howTo.viewAllURL} className="d-block text-center">
              <u>View All</u>
            </a>
          </li>
        </ul>

        <div className="slick pl-3 pr-3">
          <ul className="list-unstyled d-flex flex-column flex-md-row">
            {jsonData.howTo.blocks.map((block, i) => {
              return (
                <li
                  className="col-sm-12 col-md-4 p-1 flex flex-column "
                  key={i}
                >
                  <ImgCopyBlockStacked
                    {...{ block }}
                    addClass="p-2 h-100"
                    addStyle={{ backgroundColor: "#efefef" }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToMaintence;
