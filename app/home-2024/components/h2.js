export default function Home2024H2({ title, href, className }) {
  return (
    <ul className={className}>
      <li>
        <h2 className="text-3xl">{title}</h2>
      </li>
      <li className="ml-auto">
        <a href={href}>See All</a>
      </li>
    </ul>
  );
}
