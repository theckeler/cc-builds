export default function IconBlock({ block, className, style }) {
	return (
		<a
			href="#"
			className={`d-block text-center p-1 ${className}`}
			style={style}>
			{block.icon}
			<span className="ml-1 d-none d-md-block">{block.title}</span>
		</a>
	);
}
