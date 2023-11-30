export default function Stars({
  className,
  starFill,
  fillBase,
  stars = { average: 4.6, reviews: 43 },
}) {
  console.log(starFill);
  return (
    <div className={`flex items-center ${className}`}>
      <span className="mr-1">{stars.average}</span>
      <span className="flex">
        {[...Array(5)].map((x, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 96 960 960"
          >
            <defs>
              <linearGradient id="starGrad">
                <stop
                  stopColor={starFill}
                  offset="0%"
                />
                <stop
                  stopColor={starFill}
                  offset={stars.average * 10 + "%"}
                />
                <stop
                  stopColor={fillBase}
                  offset={stars.average * 10 + "%"}
                />
                <stop
                  stopColor={fillBase}
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <path
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
              style={{ fill: i < 4 ? starFill : "url(#starGrad)" }}
            />
          </svg>
        ))}
      </span>
      <span className="ml-1">({stars.reviews} Google Reviews)</span>
    </div>
  );
}
