"use client";
import { useEffect } from "react";

import Home2024LinkBlock from "./linkBlock";

export default function Home2024ScrollContainer({
  base,
  products,
  addBlock = false,
}) {
  const moveMe = (e, dir) => {
    const el = e.currentTarget.closest(".scroll-container");
    const scrollWidth = el.scrollWidth;
    const scrollMe = scrollWidth / 2;
    const scrollContainer = el.querySelector(".scroll-me");
    const scrollPos = scrollContainer.scrollLeft;

    let moveMe = dir === "back" ? scrollPos - scrollMe : scrollPos + scrollMe;
    scrollContainer.scroll(moveMe, 0);
  };

  useEffect(() => {
    console.log(document.querySelectorAll(".scroll-me"));

    document.querySelectorAll(".scroll-me").forEach(function (el) {
      el.addEventListener("scroll", (scroll) => {
        const containerWidth = scroll.currentTarget.offsetWidth;
        const contentWidth = scroll.currentTarget.scrollWidth;
        const scrollLeft = scroll.currentTarget.scrollLeft;

        const isEndReached = contentWidth - scrollLeft <= containerWidth;
        console.log("isEndReached: ", isEndReached);

        // Toggle "hidden" class based on scroll position
        if (isEndReached) {
          el.parentElement.querySelector(".forward").classList.add("hidden");
        } else {
          el.parentElement.querySelector(".forward").classList.remove("hidden");
        }

        if (scrollLeft > 0) {
          el.parentElement.querySelector(".back").classList.remove("hidden");
        } else {
          el.parentElement.querySelector(".back").classList.add("hidden");
        }
      });
    });
  }, []);

  //   useEffect(() => {
  //     console.log(document.querySelectorAll(".scroll-me"));
  //
  //     document.querySelectorAll(".scroll-me").forEach(function (el) {
  //       el.addEventListener("scroll", (scroll) => {
  //         const eScrollWidth = scroll.currentTarget.parentElement.scrollWidth;
  //         const eScrollLeft = scroll.currentTarget.scrollLeft;
  //
  //         // console.log("eScrollLeft: ", eScrollLeft);
  //         // console.log("eScrollWidth: ", eScrollWidth);
  //
  //         const isEndReached =
  //           eScrollWidth - eScrollLeft === scroll.currentTarget.clientWidth;
  //         console.log("eScrollWidth - eScrollLeft: ", eScrollWidth - eScrollLeft);
  //         console.log(
  //           "scroll.currentTarget.clientWidth: ",
  //           scroll.currentTarget.clientWidth
  //         );
  //
  //         // console.log("eScrollLeft + eScrollWidth: ", eScrollLeft + eScrollWidth);
  //
  //         //     if (scroll.currentTarget.scrollLeft >= scrollWidth) {
  //         //       el.querySelector(".forward").classList.add("hidden");
  //         //     } else {
  //         //       el.querySelector(".forward").classList.remove("hidden");
  //         //     }
  //         //
  //         //     if (scroll.currentTarget.scrollLeft > 100) {
  //         //       el.querySelector(".back").classList.remove("hidden");
  //         //     } else {
  //         //       el.querySelector(".back").classList.add("hidden");
  //         //     }
  //       });
  //     });
  //
  //     //     document.querySelectorAll(".scroll-me").forEach(function (el) {
  //     //       el.addEventListener("scroll", (scroll) => {
  //     //         const eScrollWidth = scroll.currentTarget.parentElement.scrollWidth;
  //     //         const eScrollLeft = scroll.currentTarget.scrollLeft;
  //     //
  //     //         // Log the numbers for debugging
  //     //         console.log("eScrollLeft: ", eScrollLeft);
  //     //         console.log("eScrollWidth: ", eScrollWidth);
  //     //
  //     // //         // Get the forward and back elements
  //     // //         const forwardElement = el.querySelector(".forward");
  //     // //         const backElement = el.querySelector(".back");
  //     // //
  //     // //         // Toggle "hidden" class based on scroll position
  //     // //         if (forwardElement) {
  //     // //           const isEndReached =
  //     // //             eScrollWidth - eScrollLeft === scroll.currentTarget.clientWidth;
  //     // //           forwardElement.classList.toggle("hidden", isEndReached);
  //     // //         }
  //     // //
  //     // //         if (backElement) {
  //     // //           const isAtBeginning = eScrollLeft === 0;
  //     // //           backElement.classList.toggle("hidden", isAtBeginning);
  //     // //         }
  //     //       });
  //     //     });
  //   });

  // document.querySelector(".scroll-me").addEventListener("scroll", (event) => {
  //   let scroll = this.scrollY;
  //   console.log(scroll);
  // });

  return (
    <div className="relative scroll-container">
      <button
        className="w-12 h-12 absolute top-[50%] left-0 z-20 translate-y-[-100%] bg-white shadow outline-0 cursor-pointer rounded hidden back"
        style={{ transform: "translate(-8px, -50%)" }}
        onClick={(e) => {
          moveMe(e, "back");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>
      <div className="overflow-x-scroll max-w-[100vw] pb-2 no-scrollbar relative scroll-me">
        <ul className="flex gap-3">
          {products.map((product, i) => (
            <li className="relative" key={i}>
              <Home2024LinkBlock
                base={base}
                addBlock={addBlock}
                product={product}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="w-12 h-12 absolute top-[50%] right-0 z-20 translate-y-[-100%] bg-white shadow outline-0 cursor-pointer forward"
        style={{ transform: "translate(8px, -50%)" }}
        onClick={(e) => {
          moveMe(e, "forward");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </div>
  );
}
