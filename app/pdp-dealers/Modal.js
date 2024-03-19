"use client";

export default function Modal() {
  return (
    <div>
      <link hrel="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1710759957519/css/dealerSelector.css" />
      <div
        className="modal fade dealer-selector-modal p-4"
        id="dealerSelectorModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="dealerSelectorModal"
        action-get-delivery-zipcode="/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-GetDeliveryZipCode"
        data-product-id="31AM5HVSB10"
        data-product-quantity={1}
        data-shipping-method="dealer-pickup"
        data-event-type=""
        style={{ backgroundColor: "rgba(0,0,0,0.6)", opacity: 100 }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title dealer-selector-title">Modal</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  document
                    .querySelector(".dealer-selector-modal")
                    .classList.remove("d-block");
                }}
              >
                <span aria-hidden="true" />
              </button>
            </div>
            <div className="modal-body" style={{ minHeight: "50vh" }}>
              MODAL
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
