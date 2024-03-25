import ResponsiveImage from "@/components/ResponsiveImage";

export default function Home2024LinkBlock({
  base,
  addBlock = false,
  product,
  className,
}) {
  return (
    <a
      href={product.href}
      className="w-[50vw] md:w-[300px] h-full group relative z-10 no-underline bg-white block"
    >
      <div className="relative z-10 flex flex-col h-full">
        <ResponsiveImage
          id={product.title}
          src={product.src}
          base={base}
          alt=""
          className={className}
          width="300"
          height="300"
        />
        <h3 className="text-xs md:text-sm uppercase text-center px-10 pb-1 group-hover:text-black mt-auto">
          {product.title}
        </h3>
      </div>
      {addBlock && (
        <div className="h-full absolute top-0 left-0 bg-[#efefef] z-0 w-full border-x-[24px] border-t-[0] border-white group-hover:bg-[#ffc20f]" />
      )}
    </a>
  );
}
