export default function H2({ title, className, style }) {
	return (
		<h2 className={className} style={{ ...style, fontSize: "20px" }}>
			{title}
		</h2>
	);
}
