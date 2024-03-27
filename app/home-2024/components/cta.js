import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomeCTA2024({
  base,
  content,
  button,
  videoID,
  video,
  className,
  img,
}) {
  return (
    <section className={className}>
      <ul className="flex flex-col xl:flex-row justify-center">
        <li className="relative min-h-[180px] lg:min-h-[420px] w-full xl:max-w-6xl">
          {videoID && (
            <iframe
              width="560"
              height="315"
              className="w-full h-full absolute"
              src={`https://www.youtube.com/embed/${videoID}?rel=0&controls=0&modestbranding=1&showinfo=0`}
              title={content.title + " Video"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {video && (
            <video
              className="w-full h-full"
              aria-describedby="F8E60B45-45A4-4E07-AC54DD8032485467"
              muted
              loop
              autoPlay
              controls
              playsInline
              style={{ objectFit: "initial" }}
            >
              <source src={base + video.src} type="video/mp4"></source>
              Sorry, your browser doesn’t support embedded videos.
            </video>
          )}
          {img && (
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
              // resize={img.resize ? img.resize : ""}
            />
          )}
        </li>
        <li className={"w-full xl:max-w-xl " + content.className}>
          <h2 className="text-xl md:text-3xl xl:text-5xl">{content.title}</h2>
          <h3 className="text-lg md:text-xl">{content.subTitle}</h3>
          <p className="text-sm sm:text-base leading-5">{content.copy}</p>
          <a
            href={button.href}
            className={
              button.className +
              " min-h-[48px] flex items-center justify-center"
            }
          >
            {button.title} <span className="sr-only"> {button.sr}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
