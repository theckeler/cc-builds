import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomePromo2024({ base, button, content }) {
  return (
    <>
      <div className="p-3 flex flex-col items-center w-full relative z-10">
        <h2 className="text-2xl">{content.title}</h2>
        <p className="text-center px-24 text-base">{content.copy}</p>
        <a
          href={button.href}
          className="border-2 border-[#ffc20f] px-4 py-1 mt-auto uppercase no-underline font-bold text-center inline-block"
        >
          {button.title}
          <span className="sr-only"> {button.sr}</span>
        </a>
      </div>

      <ResponsiveImage
        id="hero"
        src="31AM5HVSB56_2X26_Inteli_env02.jpg"
        base={base}
        alt=""
        className="w-full h-full absolute object-cover top-0 left-0 z-0"
        hero
      />
    </>
  );
}
