const PreQualify = () => {
  return (
    <div
      className="mt-6 mb-6 p-1"
      // style={{ backgroundColor: "#e2e2e2" }}
    >
      <ul className="container mb-0 p-4 flex flex-column flex-md-row list-unstyled">
        <li className="col-md-4 p-0">
          <div
            className="flex w-100 h-100 position-relative"
            style={{ minHeight: "300px" }}
          >
            <img
              src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/ew/DealerIndoor-0170.jpg"
              alt=""
              className="position-absolute w-100 h-100"
              style={{
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
          </div>
        </li>
        <li className="col-md-8 p-0">
          <div
            className="text-center p-4 flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: "#ffc20f", height: "100%" }}
          >
            <h2 className="h2">Find Out If You Pre-Qualify</h2>
            <hr
              className="w-100"
              style={{ maxWidth: "20%", borderTop: "3px solid #000" }}
            />
            <div
              className="ml-auto mr-auto mb-4"
              style={{ maxWidth: "60%", fontSize: "16px" }}
            >
              <ul
                className="text-left"
                style={{ listStyleType: "disc" }}
              >
                <li>Get a decision in seconds.</li>
                <li>No impact to your credit score.</li>
                <li>If prequalified, you can apply immediately.</li>
              </ul>
            </div>
            {/* <a
              href=""
              className="btn btn-primary"
            >
              See If You Pre-Qualify
            </a> */}

            <div className="pre-qual flex-col">
              <a
                className="btn btn-primary"
                href="#"
                title="Prequal"
                data-prequalurl="$url('FinancingApplication-GetURL','prequal','true')$"
              >
                See If You Pre-Qualify
              </a>

              <p className="mt-1">
                <a
                  className="btn-text click"
                  data-target="#financing-modal"
                  data-toggle="modal"
                  href="#"
                  title="Click for details"
                >
                  Click for details
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PreQualify;
