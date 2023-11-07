export default function IconBlock({ block, className, style }) {
	return (
		<button
			href="#"
			className={`border-0 rounded-circle p-1 text-center p-1 ${className}`}
			style={{
				...style,
			}}>
			<span className="w-8 h-8 bg-yellow-400 inline-block rounded-full">
				{block.icon}
			</span>
			<span className="d-none d-md-block text-xs">{block.title}</span>
		</button>
	);
}
