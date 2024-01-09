"use client";
import { useState } from "react";
import SearchResults from "./components/SearchResults";

export default function HeaderRevised({}) {
  const [subNavOpen, setSubNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const nav = {
    top: [
      {
        title: "Financing",
        svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-full h-full"
      >
        <g
          fill="none"
          transform="translate(1 1)"
        >
          <circle
            cx="11"
            cy="11"
            r="11"
            stroke="#ffc20f"
          />
          <path
            fill="#fff"
            d="M14.704 12.32q0 1.168-.816 1.984-.736.768-1.92.992V16h-1.712v-.704q-2.272-.368-2.96-2.672l1.808-.496q.288.96 1.152 1.248v-2.352q-1.28-.336-1.92-.848-.848-.688-.848-1.84 0-1.104.864-1.824.736-.624 1.904-.8v-.88h1.712v.848q1.392.24 2.352 1.552l-1.392 1.152q-.4-.544-.96-.816v1.936q2.736.8 2.736 2.816zM10.256 7.6q-.816.224-.816.736 0 .448.816.736zm2.48 4.768q0-.544-.768-.848v1.856q.768-.256.768-1.008z"
            aria-label="$"
          />
        </g>
      </svg>`,
      },
      {
        title: "Find Service",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFC20F" d="M8.498 3c-.315.003-.557.32-.563.553v1.335a5.61 5.61 0 0 0-1.414.795l-1.18-.668a.592.592 0 0 0-.768.207L3.071 7.778a.568.568 0 0 0 .206.754l1.185.674c-.041.26-.094.518-.094.794 0 .275.053.529.094.789l-1.185.673a.568.568 0 0 0-.206.76l1.502 2.556c.148.25.513.346.769.201l1.179-.667a5.61 5.61 0 0 0 1.414.794v1.341c0 .29.268.553.563.553h3.004a.58.58 0 0 0 .563-.553v-1.34a5.61 5.61 0 0 0 1.414-.795l1.18.667a.591.591 0 0 0 .768-.201l1.502-2.556a.568.568 0 0 0-.206-.76l-1.185-.673c.04-.26.094-.514.094-.789 0-.276-.053-.533-.094-.794l1.185-.674a.568.568 0 0 0 .206-.754l-1.502-2.556a.592.592 0 0 0-.769-.207l-1.18.668a5.61 5.61 0 0 0-1.413-.795V3.553A.58.58 0 0 0 11.502 3H8.498zm.563 1.105h1.878v1.146a.57.57 0 0 0 .399.524 4.52 4.52 0 0 1 1.724.973c.175.159.457.19.663.074l1.01-.57.938 1.595-1.015.576a.564.564 0 0 0-.27.604c.074.319.118.643.118.973 0 .33-.044.654-.118.973a.563.563 0 0 0 .27.599l1.015.575-.939 1.595-1.009-.57a.588.588 0 0 0-.663.075 4.52 4.52 0 0 1-1.724.973.569.569 0 0 0-.4.53v1.145H9.062v-1.146a.57.57 0 0 0-.399-.53 4.52 4.52 0 0 1-1.725-.972.588.588 0 0 0-.663-.075l-1.009.57-.938-1.595 1.015-.575a.563.563 0 0 0 .27-.6A4.333 4.333 0 0 1 5.494 10c0-.33.044-.654.118-.973a.564.564 0 0 0-.27-.604l-1.015-.576.938-1.595 1.01.57a.588.588 0 0 0 .662-.074 4.52 4.52 0 0 1 1.725-.973.57.57 0 0 0 .4-.524V4.105zM10 6.685c-1.86 0-3.38 1.49-3.38 3.315s1.52 3.316 3.38 3.316c1.86 0 3.38-1.491 3.38-3.316 0-1.825-1.52-3.316-3.38-3.316zm0 1.104c1.251 0 2.253.983 2.253 2.211 0 1.228-1.002 2.21-2.253 2.21-1.251 0-2.253-.982-2.253-2.21S8.75 7.79 10 7.79z"/></svg>`,
      },
      {
        title: "Registration",
        svg: `
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path d='M4.372 14.666l-.6 3.08 3.108-1.188zM17.415 4.04l-1.158 1.333-2.1-1.584 1.157-1.334zM5.486 13.543l7.688-8.852 2.34 1.766-7.688 8.852z' fill='#FFC20F'/></svg>`,
      },
      {
        title: "USA/EN",
        svg: `<i class="flag-icon flag-icon-us"></i>`,
        after: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none"><path stroke="#FFC20F" d="M9.496 3C5.916 3 3 5.918 3 9.5S5.916 16 9.496 16c3.58 0 6.496-2.918 6.496-6.5S13.076 3 9.496 3z"/><path fill="#FFC20F" d="M9.389 12L6.38 8.927 7.4 8l1.989 2.145L11.36 8l1.02.927z"/></g></svg>`,
      },
    ],
    middle: [
      {
        title: "Account",
        svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="1.25"
          d="M6.946 6.22C6.946 4.448 8.318 3 10 3c1.682 0 3.053 1.447 3.053 3.22 0 1.773-1.371 3.197-3.053 3.197S6.946 7.971 6.946 6.221zM16 15.753c-.053-2.338-2.575-4.26-5.708-4.38-1.646-.06-3.239.377-4.434 1.229C4.664 13.453 4 14.603 4 15.85c0 .633.717 1.15 1.566 1.15h8.867c.425 0 .823-.12 1.115-.337.292-.218.45-.515.45-.813l.002-.098z"
        />
      </svg>`,
        className: "hidden md:block",
      },
      {
        title: "Cart (1)",
        svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <g
          fill="#000"
         
        >
          <path d="M17.594 5.417a1.835 1.835 0 0 0-1.42-.687H4.64l-.36-1.374A1.814 1.814 0 0 0 2.52 2H.587A.585.585 0 0 0 0 2.576c0 .316.265.576.587.576H2.52c.284 0 .53.186.606.465l2.31 9.027A1.814 1.814 0 0 0 7.197 14h7.556c.833 0 1.572-.557 1.762-1.356l1.42-5.721c.133-.521.02-1.078-.34-1.506zm-.814 1.245l-1.42 5.72a.623.623 0 0 1-.606.465H7.197a.623.623 0 0 1-.606-.464L4.943 5.9h11.232c.189 0 .378.093.492.241.114.148.17.334.114.52zM7.995 15a2.01 2.01 0 0 0-1.999 2c0 1.096.904 2 1.999 2a2.01 2.01 0 0 0 1.999-2c0-1.096-.904-2-1.999-2zm0 2.79a.78.78 0 0 1-.788-.79.78.78 0 0 1 .788-.789.78.78 0 0 1 .788.79.805.805 0 0 1-.788.788zM13.991 15a2.01 2.01 0 0 0-1.998 2c0 1.096.903 2 1.998 2a2.01 2.01 0 0 0 1.999-2c-.019-1.095-.903-2-1.999-2zm0 2.789a.78.78 0 0 1-.788-.789.78.78 0 0 1 .788-.789.78.78 0 0 1 .789.79.805.805 0 0 1-.789.788z" />
        </g>
      </svg>`,
        className: "",
      },
    ],
    bottom: [
      {
        title: "Residental Lawn Mowers",
        onClick: () => setSubNavOpen(!subNavOpen),
      },
      { title: "Professional Lawn Mowers" },
      { title: "Snow Blowers" },
      { title: "Handheld Tools" },
      // { title: "Utility Vehicles" },
      { title: "Attachments" },
      { title: "Support" },
    ],
    hover: [
      {
        title: "Zero Turn Lawn Movers",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw9cf18212/menu-card-images/Cub-Cadet-ZT260_NavCard.png",
      },
      {
        title: "Riding Lawn Mowers",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf810af75/menu-card-images/Cub-Cadet-Riding-Mower2_NavCard.png",
      },
      {
        title: "Electric Lawn Mowers",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb45fd490/menu-card-images/33AA27JDB10_XT1LT42E_RT_200x0_200.jpg",
      },
      {
        title: "Walk-Behind Lawn Mowers",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw98f56dd0/menu-card-images/Cub-Cadet-SCP100_NavCard.png",
      },
      {
        title: "Riding Lawn Mowers Attachments",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw63b8d5db/menu-card-images/Cub-Cadet-Riding-Mower-Accessory1_NavCard.png",
      },
      {
        title: "Zero Turn Lawn Movers Attachments",
        img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb3c7d8c4/menu-card-images/Cub-Cadet-RZT-Mower-Accessory1_NavCard.png",
      },
    ],
  };

  return (
    <>
      <header className="w-full bg-[#FFC20F]">
        <div className="bg-[#202020] hidden lg:block">
          <ul className="grid grid-flow-col justify-end container mx-auto">
            {nav.top.map((block, i) => (
              <li
                key={i}
                className=""
              >
                <a
                  href="#top"
                  className="text-white flex gap-2 items-center uppercase font-bold no-underline p-2"
                >
                  <div
                    className="w-6"
                    dangerouslySetInnerHTML={{
                      __html: block.svg,
                    }}
                  />
                  {block.title}
                  {block.after && (
                    <div
                      className="w-6"
                      dangerouslySetInnerHTML={{
                        __html: block.after,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto">
          <ul className="grid grid-cols-[1fr_48px]  md:grid-cols-[1fr_48px_48px] lg:grid-cols-[200px_minmax(500px,1fr)_minmax(48px,120px)_minmax(48px,120px)] p-2 gap-4 items-center border-b border-black ">
            <li className="w-48 order-1">
              <a
                href=""
                className="block w-48"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 180 26"
                  className="w-full h-full"
                >
                  <g fill="none">
                    <path
                      fill="#000"
                      d="M177.835 23.332h-.426v-.954h.542c.278 0 .579.062.579.46 0 .473-.332.494-.695.494m1.104-.474c0-.577-.295-.858-.921-.858H177v3h.409v-1.291h.435L178.56 25h.44l-.753-1.326c.392-.048.692-.274.692-.816"
                    />
                    <path
                      fill="#000"
                      d="M177.507 25.631c-1.162 0-2.055-.92-2.055-2.144 0-1.199.893-2.12 2.055-2.12 1.151 0 2.04.921 2.04 2.12 0 1.223-.889 2.144-2.04 2.144m0-4.631c-1.361 0-2.507 1.076-2.507 2.487A2.493 2.493 0 0 0 177.507 26 2.485 2.485 0 0 0 180 23.487 2.48 2.48 0 0 0 177.507 21"
                    />
                    <path
                      fill="#000"
                      d="M129.352 14.746a681.332 681.332 0 0 1-2.45 5.561c-1.354.857-4.44.414-4.213-2.316.142-1.72 2.687-5.963 6.58-3.955.25.136.177.498.083.71m-20.658 0a681.332 681.332 0 0 1-2.448 5.561c-1.355.857-4.44.414-4.214-2.316.141-1.72 2.687-5.963 6.58-3.955.251.136.176.498.082.71m35.271.279c1.258-2.09 5.343-3.129 6.324-.797.071.167.123.57.103.822-.005.065-.012.2-.185.2h-6.18s-.217.012-.062-.225m19.242 3.38c.357-.955 4.436-9.98 4.436-9.98h8.791c.266 0 .493-.108.614-.375L179 3.838h-9.619l1.303-3.304h-5.817l-1.264 2.86c-.072.166-.25.402-.768.402h-3.045l-2.002 4.631 3.959-.001-5.044 11.677-11.266.012c-.24-.023-2.338.138-2.406-1.673h10.417c.5-.002.932-.29 1.144-.71 1.336-2.84.982-7.108-3.049-8.468-3.221-.967-7.968 0-10.823 3.044-1.744 1.773-3.61 4.951-3.546 7.806h-2.787c-1.153 0-1.449-.852-1.052-1.71.395-.856 7.851-17.863 7.851-17.863h-5.77l-4.446 9.688c-3.35-2.6-14.172.144-14.344 9.895h-3.087c-1.103 0-1.342-.839-.978-1.72.364-.88 4.092-9.208 4.092-9.208h-5.909l-.559 1.17c-4.629-3.044-14.397.99-14.603 9.739l-15.939-.002c-2.593-.017-4.306-2.225-3.279-4.352C79.718 8.809 88.44 5.408 91.522 5.634c1.345.099 1.066 1.285.112 2.51-.257.328.044.62.269.62h5.715c2.348-3.46 2.101-9.359-5.203-8.715C80.174 1.125 69.905 10.966 70 18.585c.043 3.541 3.679 7.122 8.12 7.193h18.375l.729-1.7c3.486 3.447 7.776 1.598 9.146-.482.61 1.3 2.51 2.18 3.414 2.18h6.943l1-2.35c2.975 3.945 7.634 2.825 9.427.185.874 1.46 2.428 2.167 3.166 2.167h7.605l.901-2.105c1.566 1.988 3.524 2.117 3.864 2.104l13.752.002.78-1.791c.383.706 1.98 1.789 3.788 1.789l10.528.002 2.399-5.655h-9.829c-1.052 0-1.258-.765-.902-1.72M59.678 16.363c-.141 1.708-2.707 5.925-6.63 3.93-.253-.135-.177-.495-.082-.706a1261.5 1261.5 0 0 1 2.426-5.505c.086-.053.179-.101.277-.144 1.454-.672 4.225-.143 4.009 2.425m-2.247-6.92L61.418.537h-5.632l-8.77 19.442h-3.653c-.657 0-.91-.674-.592-1.368l4.378-9.537h-6.025s-4.863 10.709-4.933 10.905H34.02c-.707 0-1.102-.57-.757-1.375.418-.974 4.35-9.53 4.35-9.53h-6.036L26.97 19.326c-.005.024-.147.28-.221.653l-17.032-.001c-2.613-.018-4.34-2.212-3.304-4.326C9.793 8.754 18.582 5.374 21.687 5.599c1.355.097 1.072 1.257.113 2.493-.256.33.041.617.271.617h5.759c2.367-3.44 2.117-9.3-5.243-8.66C10.252 1.118-.095 10.897.001 18.468c.043 3.52 3.798 7.148 8.28 7.148H26.7l.815-1.874c.556.823 1.713 1.875 3.358 1.875h5.197s.67-1.417.943-1.953c.45.639 1.56 1.952 3.369 1.952l9.904.004.53-1.097c3.471 2.763 10.4 2.05 13.531-5.622 2.079-5.092-.953-10.746-6.915-9.46"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li
              className={`fixed h-screen md:h-auto md:relative top-0 left-0 order-3 lg:order-2 col-span-full lg:col-span-1 ${
                searchOpen ? "bg-white" : "bg-transparent"
              }  p-1 z-50`}
            >
              <div
                className={`flex border-b border-t border-s border-[#FFC20F]`}
              >
                <input
                  className="w-full h-full min-h-[48px] p-2"
                  placeholder="Search keyword, model or part number"
                  value={searchOpen ? "Mowers" : ""}
                  onClick={() => {
                    console.log("input");
                    // document
                    //   .querySelector("#overlay")
                    //   .classList.remove("hidden");
                    setSearchOpen(!searchOpen);
                  }}
                />
                <button className="bg-black px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <path
                      fill="#FFC20F"
                      d="M20.743 19.404l-6.525-6.526a7.94 7.94 0 0 0 1.704-4.92 7.938 7.938 0 0 0-2.331-5.626A7.932 7.932 0 0 0 7.966 0a7.946 7.946 0 0 0-5.635 2.332A7.94 7.94 0 0 0 0 7.962a7.94 7.94 0 0 0 2.331 5.63 7.93 7.93 0 0 0 5.627 2.331 7.938 7.938 0 0 0 4.863-1.662l.056-.043 6.524 6.526a.87.87 0 0 0 .62.256c.224 0 .45-.086.62-.257l.102-.102a.872.872 0 0 0 0-1.238zm-8.199-6.858a6.454 6.454 0 0 1-4.582 1.898 6.463 6.463 0 0 1-4.583-1.898A6.46 6.46 0 0 1 1.48 7.962c0-1.658.633-3.319 1.898-4.584A6.46 6.46 0 0 1 7.962 1.48c1.658 0 3.318.634 4.582 1.898a6.458 6.458 0 0 1 1.898 4.584 6.456 6.456 0 0 1-1.898 4.584z"
                    />
                  </svg>
                </button>
              </div>
              <div className={`${searchOpen ? "block" : "hidden"}`}>
                <SearchResults />
              </div>
            </li>
            {nav.middle.map((block, i) => (
              <li
                key={i}
                className={`order-2 lg:order-3 ${block.className}`}
              >
                <a
                  href="#top"
                  className="flex gap-1 no-underline w-full items-center justify-center py-2 font-bold uppercase"
                >
                  <div
                    className="w-6"
                    dangerouslySetInnerHTML={{
                      __html: block.svg,
                    }}
                  />
                  <span className="hidden lg:block">{block.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="items-center hidden sm:flex">
            <ul className="grid grid-flow-col gap-2 overflow-y-auto no-scrollbar w-full max-w-4xl lg:max-w-none">
              {nav.bottom.map((block, i) => (
                <li key={i}>
                  <a
                    href="#top"
                    className="py-2 block text-center no-underline uppercase font-bold hover:text-black border-b-4 border-transparent hover:border-black whitespace-nowrap"
                    onClick={block.onClick}
                  >
                    {block.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-auto lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className={`bg-white ${subNavOpen ? "block" : "hidden"}`}>
          <ul className="grid grid-flow-col gap-2 container mx-auto p-2">
            {nav.hover.map((block, i) => (
              <li key={i}>
                <a
                  href="#top"
                  className="text-center no-underline font-bold uppercase grid gap-2 justify-center text-xs p-1 w-[200px]"
                >
                  <div className="relative min-h-[140px] mb-1">
                    <img
                      src={block.img}
                      alt=""
                      className="w-full h-full object-contain absolute top-0 left-0"
                    />
                  </div>
                  {block.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {searchOpen && (
        <div
          className={`${
            searchOpen ? "block" : "hidden"
          } fixed z-40 bg-black/80 h-full w-full top-0 left-0`}
          id="overlay"
          onClick={() => {
            setSearchOpen(false);
          }}
        />
      )}
    </>
  );
}
