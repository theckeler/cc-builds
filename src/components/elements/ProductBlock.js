import Button from "../elements/Button";

const ProductBlock = ({ block, addClass, addCSS }) => {
	//console.log(block.border);

	return (
		<div
			className={`mb-2 h-100 d-flex flex-column h-100 position-relative ${addClass}`}
			style={{
				backgroundColor: "#efefef",
				border:
					typeof block.border === "undefined" || block.border === true
						? "1em solid #efefef"
						: "",
			}}>
			{block.new && (
				<div
					className="bg-black position-absolute"
					style={{
						fontSize: "0.9em",
						padding: "4px 15px",
						right: "26px",
						top: "26px",
					}}>
					NEW
				</div>
			)}

			<div className="d-flex flex-column h-100">
				<div className="bg-white p-2">
					<img src={block.img} alt="" className="w-100 mb-2" />
				</div>

				<div
					className={`d-flex flex-column h-100 mt-2 ${
						block.border === false && "p-1 p-lg-4"
					}`}
					style={{ backgroundColor: "#efefef" }}>
					<h2 className="h2">{block.title}</h2>
					<p
						dangerouslySetInnerHTML={{
							__html: block.copy,
						}}
						style={{ lineHeight: "1.8" }}
						className="mb-2"
					/>

					<ul className={`list-unstyled d-flex align-items-start`}>
						{block.engFor.map((engForblock, i) => {
							const numEngForblock = 12 / block.engFor.length;

							return (
								<li className={`p-2 col-${numEngForblock}`} key={i}>
									{engForblock.title && (
										<strong className="text-center mt-0 mb-2 text-uppercase d-block">
											{engForblock.title}
										</strong>
									)}
									<div className="position-relative" style={{ height: "6em" }}>
										<img
											src={engForblock.icon}
											className="position-absolute w-100 h-100"
											alt=""
											style={{ objectFit: "contain" }}
										/>
									</div>
									<p className="small text-center mt-2 mb-0">
										{engForblock.copy}
									</p>
								</li>
							);
						})}
					</ul>

					<Button
						addClass={`mb-0 text-center w-100 mt-auto ${
							typeof block.button === "undefined"
								? "bg-black"
								: block.button.bgColor
						}`}
						copy={
							typeof block.button === "undefined"
								? "Shop Now"
								: block.button.copy
						}
						url={block.url}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductBlock;
