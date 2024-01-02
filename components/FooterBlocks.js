import ResponsiveImage from "./ResponsiveImage";

export default function FooterBlocks({ articles, className }) {
  console.log(articles.schema);

  return (
    <section className={className}>
      <div className="">
        <ul className="flex items-center">
          <li>
            <h2 className="text-center text-3xl">{articles.title.h2}</h2>
          </li>
          <li>
            <a
              href={
                articles.title.href
                  ? articles.title.href
                  : "https://www.cubcadet.com/en_US/help-center/"
              }
              className="ml-2"
            >
              <u>View All</u>
            </a>
          </li>
        </ul>

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
                <div
                  className="d-flex flex-column text-decoration-none p-1 h-full"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div className="relative h-40">
                    <ResponsiveImage
                      src={block.img.src}
                      className={
                        "absolute w-full h-full object-cover " +
                        block.img.className
                      }
                    />
                  </div>
                  <div
                    className={"px-2 pt-2 text-xl " + block.title.className}
                    dangerouslySetInnerHTML={{
                      __html: block.title.copy,
                    }}
                  />
                  <div
                    className="px-2 pt-1 line-clamp-4 text-xs"
                    dangerouslySetInnerHTML={{
                      __html: block.copy,
                    }}
                  />

                  <div className="mt-auto pt-2">
                    {block.button ? (
                      <a
                        href={block.button.href}
                        className="button text-uppercase font-weight-bold text-decoration-none d-inline-block bg-secondary text-center py-1 px-4 w-full mt-2"
                      >
                        {block.button.copy}
                      </a>
                    ) : (
                      <a
                        href={block.url}
                        className="mt-2 font-bold underline py-1 px-1"
                      >
                        Read more
                      </a>
                    )}
                  </div>
                </div>
                {articles.schema.active && (
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(schemea),
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
