"use client";
import { Fragment } from "react";

export default function Faqs({
  faqs,
  className,
  style,
  id,
  allOpen,
  answers,
  questions,
}) {
  let schemea = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
  };
  let mainEntity = [];
  faqs.forEach(function (block) {
    mainEntity = [
      ...mainEntity,
      {
        "@type": "Question",
        name: block.question,
        acceptedAnswer: { "@type": "Answer", text: block.answer },
      },
    ];
  });
  schemea = { ...schemea, mainEntity: mainEntity };

  const Button = ({ block }) =>
    allOpen ? (
      <div
        className="my-3 font-bold"
        style={{ fontSize: "1.6em" }}
        dangerouslySetInnerHTML={{
          __html: block.question,
        }}
      />
    ) : (
      <button
        onClick={(e) => {
          const el = e.currentTarget.querySelector(".rotate-45");
          e.currentTarget.nextElementSibling.classList.toggle("hidden");
          el.classList.toggle("active");

          el.style.transform = el.classList.contains("active")
            ? "rotate(0)"
            : "rotate(45deg)";
        }}
        className={`text-left question cursor-pointer w-100 p-1 border-0 bg-transparent ${
          questions ? questions.className : ""
        }`}
        style={
          (questions && {
            ...questions.style,
          },
          {
            cursor: "pointer",
            fontSize: style?.fontSize ? questions.style.fontSize : "1.1rem",
            textTransform: "none",
          })
        }
      >
        <ul className="list-unstyled d-flex align-items-center w-100 mb-0">
          <li
            dangerouslySetInnerHTML={{
              __html: block.question,
            }}
            className="text-left"
          />
          <li className="ml-auto">
            <div className="rotate-45" style={{ transform: "rotate(45deg)" }}>
              ✖
            </div>
          </li>
        </ul>
      </button>
    );

  return (
    <div className={className} id={id}>
      {faqs.map((block, i) => {
        return (
          <Fragment key={i}>
            <Button block={block} />

            <div
              dangerouslySetInnerHTML={{
                __html: block.answer,
              }}
              className={`${!allOpen && "hidden"} text-xs px-3 pb-2 ${
                answers ? answers.className : ""
              }`}
              style={answers ? { ...answers.style } : null}
            />

            <div className="border-bottom"></div>
          </Fragment>
        );
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemea) }}
      />
    </div>
  );
}
