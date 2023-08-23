import IconDirections from "@/components/icons/Directions";

export default function Address() {
	return (
		<ul className="d-flex list-unstyled">
			<li className="col-10 px-0">
				<ul className="d-flex flex-column list-unstyled w-100">
					<li className="mr-md-1">34200 LORAIN ROAD</li>
					<li className="mr-md-1">NORTH RIDGEVILLE, OH 44039</li>
				</ul>
			</li>
			<li className="col-2 px-0 ml-auto">
				<a href="#">
					<IconDirections /> Directions
				</a>
			</li>
		</ul>
	);
}
