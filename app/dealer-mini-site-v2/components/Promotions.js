import ButtonMain from "@/components/Buttons/Main";

export default function Promotions({ block }) {
  return (
    <div className="h-100 border h-full flex flex-col">
      <h3
        className="w-100 text-center bg-secondary p-2 mb-0"
        style={{ fontSize: "24px" }}
      >
        {block.title}
      </h3>

      <div className="p-2">
        <p className="text-center">{block.valid}</p>
        <p className="text-center">{block.subTitle}</p>

        <h3 style={{ fontSize: "18px" }}>Offer Details</h3>
        <ul>
          {block.offerDetails.map(function (detail, i) {
            return (
              <li
                style={{ listStyle: "inside" }}
                key={i}
                dangerouslySetInnerHTML={{
                  __html: detail,
                }}
              />
            );
          })}
        </ul>
      </div>

      <a
        href="#top"
        className="mt-auto pb-2 text-center"
      >
        {block.link}
      </a>

      {!!block.button && (
        <div className="pb-2 px-2">
          <ButtonMain
            title={block.button.title}
            href={block.button.href}
            className="flex justify-content-center align-items-center bg-secondary font-weight-bold text-decoration-none text-uppercase"
            style={{ fontSize: "16px" }}
          />
        </div>
      )}
    </div>
  );
}
