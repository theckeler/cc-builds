import Badges from "@/components/dealers/Badges";


export default function DealerInfo({ dealer }) {
	

	return (
		<ul className="list-unstyled d-flex align-items-center flex-lg-column h-100">
			<li className="px-0 w-100" style={{ height: "60%" }}>
				<div
					className="position-relative w-100 d-flex align-items-center"
					style={{
						minHeight: "120px",
						height: "100%",
						overflow: "hidden",
					}}>
					<img
						src={dealer.logo}
						className="w-100 h-100 position-absolute p-4"
						style={{
							objectFit: "contain",
						}}
						alt=""
					/>
				</div>
			</li>
			{typeof dealer.badges !== "undefined" && (
				<li className="px-0 border-top w-100" style={{ height: "40%" }}>
					<Badges badges={dealer.badges} />
				</li>
			)}
		</ul>
	);
}
