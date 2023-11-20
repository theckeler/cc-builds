import ResponsiveImage from "./ResponsiveImage";
import Button from "./Button";

export default function FinancingBanner18({ className }) {
  return (
    <a
      className={`block text-white bg-black no-underline ${className}`}
      href="https://www.cubcadet.com/en_US/financing"
      aria-label="See Details"
    >
      <ul className="mb-0 list-unstyled grid grid-cols-[80px_1fr_120px] gap-2 items-stretch p-1">
        <li className="overflow-hidden relative">
          <ResponsiveImage
            id="financing-18"
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/cub-cadet-credit-card-new.jpg"
            alt=""
            className="position-absolute w-full h-full top-0 left-0  object-contain min-w-[60px]"
          />
        </li>
        <li className="px-0 font-bold text-center lg:text-left">
          <span style={{ fontSize: "1.2em" }}>
            18 Month Financing Available
          </span>
          <br />
          <small>Restrictions apply</small>
        </li>
        <li className="">
          <Button
            copy="Learn More"
            className="p-1 border-0 bg-secondary w-full h-full text-black"
          />
        </li>
      </ul>
    </a>
  );
}
