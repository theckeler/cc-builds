import IconDirections from "@/components/icons/Directions";

export default function Menu({ setCurrentDealer, button }) {
	return (
		<div className="position-absolute" style={{ top: 0, right: 0 }}>
			<div className="flex align-items-center text-white">
				<span className="mr-1">Dealer:</span>
				<button
					className={`${button.className} mt-1`}
					style={{ ...button.style, borderRadius: "10px" }}
					onClick={() => {
						setCurrentDealer(0);
					}}>
					1
				</button>
				<button
					className={`${button.className} mt-1`}
					style={{ ...button.style, borderRadius: "10px" }}
					onClick={() => {
						setCurrentDealer(1);
					}}>
					2
				</button>
				<button
					className={`${button.className} mt-1`}
					style={{ ...button.style, borderRadius: "10px" }}
					onClick={() => {
						setCurrentDealer(2);
					}}>
					3
				</button>
				<button
					className={`${button.className} mt-1`}
					style={{ ...button.style, borderRadius: "10px" }}
					onClick={() => {
						setCurrentDealer(3);
					}}>
					4
				</button>
			</div>
		</div>
	);
}
