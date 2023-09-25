export default function ButtonMain({
	title,
	className,
	style,
	href = null,
	noButton = false,
	buttonPadding = "py-1",
	onClick,
	icon,
}) {
	const Type = noButton ? "div" : href ? "a" : "button";

	return (
		<Type
			className={`${!icon && buttonPadding} ${className}`}
			style={{ ...style, minHeight: "48px" }}
			href={href}
			onClick={onClick}
			aria-label={title}>
			{icon ? icon : title}
		</Type>
	);
}
