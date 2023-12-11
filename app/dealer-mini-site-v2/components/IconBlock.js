export default function IconBlock({ block, className, style }) {
  return (
    <button
      href="#"
      className={`border-0 bg-transparent text-center ${className}`}
      style={{
        ...style,
      }}
    >
      <span className="w-12 h-12 inline-block">{block.icon}</span>
      <span className="hidden lg:block text-xs">{block.title}</span>
    </button>
  );
}
