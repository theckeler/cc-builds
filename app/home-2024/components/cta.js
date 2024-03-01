import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomeCTA2024({
  base,
  content,
  button,
  src,
  videoID,
  className,
  img,
}) {
  return (
    <section className={className}>
      <ul className="w-full flex flex-col xl:flex-row justify-center">
        <li className="relative min-h-[420px] w-full xl:max-w-6xl">
          {videoID ? (
            <iframe
              width="560"
              height="315"
              className="w-full h-full absolute"
              src="https://www.youtube.com/embed/x-_qooDWr1c?rel=0"
              title={content.title + " Video"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <ResponsiveImage
              id={content.title
                .replace(/\s+/g, "-", "-")
                .replace(/\d+/g, "")
                .toLowerCase()}
              src={img.src}
              base={base}
              hero={img.hero ? true : false}
              alt=""
              className="h-full w-full absolute object-cover top-0 left-0"
            />
          )}
        </li>
        <li className={"w-full xl:max-w-xl " + content.className}>
          <h1 className="text-3xl xl:text-5xl">{content.title}</h1>
          <p className="text-base">{content.copy}</p>
          <a href={button.url + " inline-block"} className={button.className}>
            {button.title}
            <span className="sr-only"> {button.sr}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
