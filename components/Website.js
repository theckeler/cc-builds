export default function Website({ className, style }) {
	return (
		<a
			href="http://www.worcesters.com"
			target="_blank"
			title="Open dealer's website in a new window"
			aria-label="Open dealer's website in a new window"
			className={className}
			style={style}>
			worcesters.com
		</a>
	);
}
