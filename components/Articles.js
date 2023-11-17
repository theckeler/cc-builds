export default function Articles({
  articles,
  className,
  numRows,
  imgType = null,
  viewAllLink = "https://www.troybilt.com/en_US/knowledge-center/",
}) {
  return (
    <section className={className}>
      <div className="">
        <ul className="flex flex-col lg:flex-row items-center">
          <li>
            <h2 className="text-center text-3xl">
              {typeof articles.h2 !== undefined && articles.h2}
            </h2>
          </li>
          <li>
            <a href={viewAllLink} className="ml-2">
              <u>View All</u>
            </a>
          </li>
        </ul>

        <div className="">
          <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {articles.blocks.map((block, i) => {
              let schemea = {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                headline: block.title,
                image: [block.img],
              };

              return (
                <li key={i}>
                  <a
                    href={block.url}
                    className="d-flex flex-column text-decoration-none p-1 h-full"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    <div className="relative h-40">{block.res}</div>
                    <div
                      className="px-2 pt-2 text-xl"
                      dangerouslySetInnerHTML={{
                        __html: block.title,
                      }}
                    />
                    <div
                      className="px-2 pt-1 line-clamp-4 text-xs"
                      dangerouslySetInnerHTML={{
                        __html: block.copy,
                      }}
                    />
                    <div
                      className="px-2 pt-2 mt-auto text-uppercase font-weight-bold"
                      style={{ textDecoration: "underline" }}
                    >
                      Read more
                    </div>
                  </a>
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(schemea),
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
