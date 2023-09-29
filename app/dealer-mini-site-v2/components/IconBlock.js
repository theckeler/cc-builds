export default function IconBlock({ block, className, style }) {
	return (
		<button
			href="#"
			className={`border-0 rounded-circle p-1 d-block text-center p-1 ${className}`}
			style={{
				...style,
				width: "48px",
				height: "48px",
				backgroundColor: "#ffc20f",
			}}>
			{block.icon}
			{/* <span className="ml-1 d-none d-md-block">{block.title}</span> */}
		</button>
	);
}
