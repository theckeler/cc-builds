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
  const imgSrc = base ? base + src : src;

  useEffect(() => {
    let srcSetJpg = "";
    let srcSetWebp = "";
    let sizes = "";

    let img = document.createElement("img");
    img.src = imgSrc;
    img.onload = function () {
      breakpoints.forEach((breakpoint) => {
        if (breakpoint < img.width) {
          if (id) {
            const ratio = (breakpoint / img.width).toFixed(4);
            const width = Math.round(img.width * ratio);
            const height = Math.round(img.height * ratio);

            srcSetJpg += `${imgSrc}?resize=${width}x${height} ${breakpoint}w, `;
            srcSetWebp += `${webp}?resize=${width}x${height} ${breakpoint}w, `;
            sizes += `(min-width: ${breakpoint}px) ${breakpoint}px, `;
          }
        }
      });

      if (id) {
        sizes += `100vw`;

        const jpgElement = document.querySelector("#" + id + "-jpg");
        if (jpgElement) {
          jpgElement.setAttribute(
            "srcset",
            srcSetJpg.substring(0, srcSetJpg.length - 2)
          );
          jpgElement.setAttribute("sizes", sizes);
        }

        if (webp) {
          const webpElement = document.querySelector("#" + id + "-webp");
          if (webpElement) {
            webpElement.setAttribute("sizes", sizes);
            webpElement.setAttribute(
              "srcset",
              srcSetWebp.substring(0, srcSetWebp.length - 2)
            );
          }
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
      src={imgSrc}
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
