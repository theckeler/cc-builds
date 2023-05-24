const Button = ({ copy, url, className, onClick, addStyle, srOnly }) => {
	const addPadding = { padding: "0.625rem 2.5rem" };

	if (url) {
		return (
			<a
				href={url}
				className={`button text-uppercase font-weight-bold text-decoration-none d-inline-block ${className}`}
				dangerouslySetInnerHTML={{ __html: copy }}
				style={{ ...addStyle, ...addPadding }}
			/>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={`button font-weight-bold ${className}`}
				dangerouslySetInnerHTML={{ __html: copy }}
				style={{ ...addStyle, ...addPadding }}
			/>
		);
	}
};

export default Button;
