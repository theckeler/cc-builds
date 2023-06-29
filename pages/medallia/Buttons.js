import Cart from "@/i/Cart";
import Feedback from "@/i/Feedback";
import LiveChat from "@/i/LiveChat";

export default function Buttons() {
	const tabs = [
		{ title: "View Cart", icon: Cart },
		{ title: "Feedback", icon: Feedback },
		{ title: "Live Chat", icon: LiveChat },
	];

	return (
		<div
			className="position-fixed"
			style={{
				top: "30%",
				left: "100%",
				zIndex: 2001,
				transform: "rotate(-90deg) translateX(-100%) translateY(-100%)",
				transformOrigin: "0 0",
			}}>
			<ul className="list-unstyled d-flex flex-row mb-0">
				{tabs.map((e, i) => {
					console.log(e);

					return (
						<li className={i < tabs.length - 1 && `mr-1`} key={i}>
							<button
								className="p-1 bg-secondary border-0"
								style={{ cursor: "pointer" }}>
								<ul className="list-unstyled d-flex align-items-center">
									<li className="" style={{ width: "2em" }}>
										<e.icon className="" style={{ height: "20px" }} />
									</li>
									<li className="text-nowrap">{e.title}</li>
								</ul>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
