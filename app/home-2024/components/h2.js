export default function Home2024H2({ title, href, className }) {
  return (
    <ul className={className}>
      <li>
        <h2 className="text-2xl xl:text-3xl">{title}</h2>
      </li>
      <li className="ml-auto">
        <a href={href} className="h-12 flex items-center text-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-12 h-12 p-1"
          >
            <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" />
          </svg>
          See All
        </a>
      </li>
    </ul>
  );
}
