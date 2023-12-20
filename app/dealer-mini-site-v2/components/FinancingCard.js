import ButtonMain from "@/components/Buttons/Main";

const FinancingCard = ({ block }) => {
  return (
    <div className="border h-100 x d-flex flex-column ">
      <ul className="list-unstyled text-center p-1 bg-secondary">
        <li
          className="display-1"
          style={{ fontSize: 48 }}
        >
          {block.term}
        </li>
        <li
          className="display-4"
          style={{ fontSize: 18 }}
        >
          months
        </li>
      </ul>
      <ul className="list-unstyled px-2 pt-2">
        <li
          className="text-center font-bold mb-1"
          style={{ fontSize: "1.2rem" }}
          dangerouslySetInnerHTML={{
            __html: block.title,
          }}
        />
        <li>
          <ul
            className="mx-auto px-2 py-0"
            style={{ fontSize: "14px" }}
          >
            <li
              dangerouslySetInnerHTML={{
                __html: block.text,
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: block.minPurchase,
              }}
            />
            <li>
              <strong>Valid from:</strong> {block.validFrom} - {block.validTo}
            </li>
          </ul>
        </li>
      </ul>
      <ul className="mt-auto list-unstyled px-2">
        <li className="pt-1 text-center">
          <a
            className="td-payment-details btn-text"
            data-title="Details & Disclosures"
            data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
            tabIndex={0}
          >
            Click for Details
          </a>
        </li>
        <li className="text-center mt-3 pb-2">
          <ButtonMain
            title="Apply Now"
            className="d-block bg-primary text-white border-0 px-2 w-100 font-weight-bold mt-auto"
          />
        </li>
      </ul>
    </div>
  );
};

export default FinancingCard;
