export default function IconBlock({ block, className, style, onClick }) {
  return (
    <button
      href="#"
      className={`border-0 bg-transparent text-center ${className}`}
      onClick={onClick}
    >
      <span className="w-12 h-12 inline-block">{block.icon}</span>
      <span className="hidden md:block text-xs">{block.title}</span>
    </button>
  );
}
