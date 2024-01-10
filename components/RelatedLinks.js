const defaultSVG = (
  <svg
    className="mr-1 p-1 border rounded"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    style={{ width: "32px" }}
  >
    <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"></path>
  </svg>
);

export default function RelatedLinks({
  relatedCats,
  className,
  icon = defaultSVG,
  viewAllLink = false,
}) {
  return (
    <div className={className}>
      <nav
        className="related-links"
        aria-labelledby="related-links-title"
        data-ui="related-links"
      >
        {viewAllLink ? (
          <ul className="flex flex-col lg:flex-row items-center">
            <li>
              <h3 className="text-center text-3xl">{relatedCats.h3}</h3>
            </li>
            <li className="ml-2">
              <a
                href={viewAllLink}
                className="d-block text-center"
              >
                <u>View All</u>
              </a>
            </li>
          </ul>
        ) : (
          relatedCats.h3 && (
            <h3
              id="related-links-title"
              tag="h3"
              className="h3 mb-1"
            >
              {relatedCats.h3}
            </h3>
          )
        )}

        {relatedCats.p && <p className="mb-1">{relatedCats.p}</p>}
        <ul className="list-unstyled d-flex flex-wrap">
          {relatedCats.list.map(({ href, title }, i) => {
            return (
              <li
                className="pt-1 pr-1"
                key={i}
              >
                <a
                  className="d-inline-flex align-items-center p-1"
                  href={href}
                >
                  {icon}
                  <span>{title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
