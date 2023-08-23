import GrassBottom from "./GrassBottom";
import GrassTop from "./GrassTop";

export default function OrderTracker() {
	return (
		<div className="position-relative overflow-hidden">
			{/* <ul
				className="row mx-0 list-unstyled position-absolute mb-0 w-100 h-50"
				style={{ zIndex: 1, top: 0, left: 0 }}>
				<li className="col bg-white" style={{}}>
					line
				</li>
				<li className="col border-white" style={{}}>
					line
				</li>
				<li className="col border-white" style={{}}>
					line
				</li>
			</ul> */}
			<ul
				className="position-relative w-100 list-unstyled"
				style={{
					zIndex: 0,
				}}>
				<li>
					<GrassTop className="w-100 h-100" cut1={false} />
				</li>
				<li>
					<GrassBottom className="w-100 h-100" />
				</li>
			</ul>
		</div>
	);
}
