export default function IconBlock({ block }) {
	return (
		<a href="#" className="d-block text-center p-1">
			{block.icon}
			<span>{block.title}</span>
		</a>
	);
}
