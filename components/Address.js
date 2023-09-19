export default function Address({ address, className, style }) {
	return (
		<ul
			className={`d-flex flex-column list-unstyled w-100 mb-0 ${className}`}
			style={style}>
			<li className="mr-md-1">{address.street}</li>
			<li className="mr-md-1">
				{address.city}, {address.state} {address.zip}
			</li>
		</ul>
	);
}
