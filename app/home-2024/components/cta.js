import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomeCTA2024({
  base,
  content,
  button,
  src,
  videoID,
  className,
}) {
  return (
    <section className={className}>
      <ul className="w-full flex flex-col xl:flex-row justify-center">
        <li className="relative min-h-[220px] lg:min-h-[420px] w-full xl:max-w-6xl">
          {videoID ? (
            <iframe
              width="560"
              height="315"
              className="w-full h-full absolute"
              src="https://www.youtube.com/embed/2AgVMA02lTw?si=6RsGLMFiTQFy5im8"
              title={content.title + "-video"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <ResponsiveImage
              id="hero"
              src={src}
              base={base}
              alt=""
              className="h-full w-full absolute object-cover top-0 left-0"
              hero
            />
          )}
        </li>
        <li className={"w-full xl:max-w-xl " + content.className}>
          <h1 className="text-5xl">{content.title}</h1>
          <p>{content.copy}</p>
          <a href={button.url + " inline-block"} className={button.className}>
            {button.title}
            <span className="sr-only"> {button.sr}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
