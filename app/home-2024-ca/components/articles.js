import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomeArticles2024({
  container,
  base,
  img,
  content,
  button,
}) {
  return (
    <div
      className={
        "h-full grid grid-rows-[100px_1fr] xl:grid-rows-[300px_1fr] min-w-[300px] xl:w-full" +
        container.className
      }
    >
      <div className="relative w-full">
        <ResponsiveImage
          base={base}
          src={img.src}
          className="w-full h-full absolute object-cover top-0 left-0 z-0"
        />
      </div>
      <div className={"h-full flex flex-col" + " " + content.className}>
        <h3 className="text-lg/5 sm:text-xl">{content.title}</h3>
        <p className="line-clamp-2 lg:line-clamp-4 text-sm md:text-base">
          {content.copy}
        </p>
        <a href={button.href} className={"mt-auto " + button.className}>
          Read More
          <span className="sr-only"> {button.sr}</span>
        </a>
      </div>
    </div>
  );
}
