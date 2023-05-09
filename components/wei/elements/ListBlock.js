const ListBlock = (product) => {
  return (
    <ul className="list-unstyled d-flex py-2 border-bottom">
      <li className="col-lg-2 pl-0">
        <img src={product.img} alt="" className="w-100 border p-1" />
      </li>
      <li className="col-lg-10 px-0">
        <ul className="list-unstyled d-flex align-items-center">
          <li className="h3 col col-lg-11">{product.product}</li>
          <li className="ml-auto col col-lg-1 px-0">
            <button className="bg-none w-50 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="100%"
                height="100%"
              >
                <path
                  d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"
                  fill="#ffc20f"
                />
              </svg>
            </button>
          </li>
        </ul>
        <ul className="list-unstyled d-flex align-items-center">
          <li className="col text-center text-uppercase p-1">
            <a
              href="#top"
              className="small d-block border p-1 text-decoration-none"
            >
              Specifications
            </a>
          </li>
          <li className="col text-center text-uppercase p-1">
            <a
              href="#top"
              className="small d-block border p-1 text-decoration-none"
            >
              Manuals
            </a>
          </li>
          <li className="col text-center text-uppercase p-1">
            <a
              href="#top"
              className="small d-block border p-1 text-decoration-none"
            >
              GUIDE
            </a>
          </li>
          <li className="col text-center text-uppercase p-1">
            <a
              href="#top"
              className="small d-block border p-1 text-decoration-none"
            >
              Instructions
            </a>
          </li>
          <li className="col text-center text-uppercase p-1">
            <a
              href="#top"
              className="small d-block border p-1 text-decoration-none bg-yellow font-weight-bold"
            >
              Add to Cart
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ListBlock;
