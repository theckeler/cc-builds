"use client";
import { useEffect } from "react";

export default function ResponsiveImage({
  src,
  alt = "",
  className,
  style,
  id,
  hero = undefined,
  webp = undefined,
  base = undefined,
}) {
  const breakpoints = [2048, 1920, 1366, 1025, 768, 544];

  useEffect(() => {
    let srcSetJpg = "";
    let srcSetWebp = "";
    let sizes = "";

    let img = document.createElement("img");
    img.src = src;
    img.onload = function () {
      breakpoints.forEach((breakpoint) => {
        if (breakpoint < img.width) {
          if (id) {
            const ratio = (breakpoint / img.width).toFixed(4);
            const width = Math.round(img.width * ratio);
            const height = Math.round(img.height * ratio);

            srcSetJpg += `${src}?resize=${width}x${height} ${breakpoint}w, `;
            srcSetWebp += `${webp}?resize=${width}x${height} ${breakpoint}w, `;
            sizes += `(min-width: ${breakpoint}px) ${breakpoint}px, `;
          } else {
          }
        }
      });
      if (id) {
        sizes += `100vw`;
        document
          .querySelector("#" + id + "-jpg")
          .setAttribute("srcset", srcSetJpg.substring(0, srcSetJpg.length - 2));
        document.querySelector("#" + id + "-jpg").setAttribute("sizes", sizes);
        if (webp) {
          document
            .querySelector("#" + id + "-webp")
            .setAttribute("sizes", sizes);

          document
            .querySelector("#" + id + "-webp")
            .setAttribute(
              "srcset",
              srcSetWebp.substring(0, srcSetWebp.length - 2)
            );
        }
      }
    };
  });

  return (
    <img
      alt={alt}
      className={className}
      style={style}
      id={id ? `${id}-jpg` : ""}
      src={base ? base + src : src}
      // HERO:
      rel={hero ? "preload" : undefined}
      as={hero ? "image" : undefined}
      fetchPriority={hero ? "high" : undefined}
      decoding={hero ? "async" : undefined}
      // NOT
      loading={!hero ? "lazy" : undefined}
    />
  );
}
