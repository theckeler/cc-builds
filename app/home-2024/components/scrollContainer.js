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

  return (
    <div className="relative scroll-container">
      <button
        className="w-12 h-12 absolute top-[50%] left-0 z-20 translate-y-[-100%] bg-white shadow outline-0 cursor-pointer rounded hidden back"
        style={{ transform: "translate(-8px, -50%)" }}
        aria-label="Scroll Backwards"
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
        aria-label="Scroll Forwards"
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
