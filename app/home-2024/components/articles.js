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
        "h-full grid grid-rows-[300px_1fr] w-full" + container.className
      }
    >
      <div className="relative h-[300px] w-full">
        <ResponsiveImage
          base={base}
          src={img.src}
          className="w-full h-full absolute object-cover top-0 left-0 z-0"
        />
      </div>
      <div className={"h-full flex flex-col" + " " + content.className}>
        <h3>{content.title}</h3>
        <p className="text-base">{content.copy}</p>
        <a href={button.href} className={"mt-auto " + button.className}>
          Read More
          <span className="sr-only"> Phasellus nec suscipit metus</span>
        </a>
      </div>
    </div>
  );
}
