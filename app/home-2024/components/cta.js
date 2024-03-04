import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomeCTA2024({
  base,
  content,
  button,
  videoID,
  className,
  img,
}) {
  return (
    <section className={className}>
      <ul className="w-full flex flex-col xl:flex-row justify-center">
        <li className="relative min-h-[180px] lg:min-h-[420px] w-full xl:max-w-6xl">
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
          <h2 className="text-xl md:text-3xl xl:text-5xl">{content.title}</h2>
          <p className="text-sm sm:text-base leading-5">{content.copy}</p>
          <a
            href={button.href}
            className={button.className + " min-h-[48px] flex items-center justify-center"}
          >
            {button.title}
            <span className="sr-only"> {button.sr}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
