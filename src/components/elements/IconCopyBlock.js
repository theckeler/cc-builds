const IconCopyBlock = ({ block, addClass = "", addStyle }) => {
	console.log(addStyle);
	return (
		<ul
			className={`row list-unstyled align-items-center ${addClass}`}
			style={addStyle}>
			<li className="col-3 p-2">
				<img src={block.icon} alt="" className="w-100" style={block.addStyle} />
			</li>
			<li className="col-9 p-2">
				<strong className="text-uppercase">{block.title}</strong>
				<p className="mb-1">{block.copy}</p>
				{block.small && <p className="mb-0 small">{block.small}</p>}
			</li>
		</ul>
	);
};

export default IconCopyBlock;
