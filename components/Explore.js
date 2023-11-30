// "use client";
import Button from "@/components/Button";
import ProductBlock from "@/components/ProductBlock";

export default function Explore({ addButton, explore }) {
  return (
    <section>
      <div className="container py-5 px-1 d-flex flex-column ">
        {/* <h2
					dangerouslySetInnerHTML={{ __html: explore.h2 }}
					className="mb-2 display-1 text-center"
				/> */}
        <ul className="list-unstyled d-flex flex-column flex-lg-row flex-wrap justify-content-center">
          {explore.blocks.map((block, i) => {
            return (
              <li
                className="col-12 col-lg-4 p-2"
                key={i}
              >
                <ProductBlock block={block} />
              </li>
            );
          })}
        </ul>
        {addButton && jsonData && (
          <Button
            className={`bg-secondary mb-0 text-center w-lg-auto d-flex-fill mx-lg-auto mt-2 d-block d-lg-inline-block ${explore.button.className}`}
            copy={explore.button.copy}
            style={explore.button.style}
            url={explore.button.url}
          />
        )}
      </div>
    </section>
  );
}
