import React from "react";
function Header() {
  // const openMenu = () => {
  //   document.querySelector(".menu").classList.toggle("active");
  // };

  return (
    <header>
      <nav className="mtd-page">
        <div
          className="wrapper ml-auto mr-auto flex"
          style={{ padding: "20px", maxWidth: "1400px" }}
        >
          <a href="/" title="Cub Cadet Home">
            <img
              className="icon logo"
              src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/logo.svg"
              alt="Cub Cadet"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
