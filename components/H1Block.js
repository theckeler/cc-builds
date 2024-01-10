export default function H1Block({ block, className }) {
  return (
    <section className={className}>
      <div className="h1">{block.h1}</div>
      <h2 className="font-normal text-3xl">{block.h2}</h2>
      <p className="lg:px-48 mt-1 lg:mt-4">
        {block.copy}
      </p>
    </section>
  );
}
