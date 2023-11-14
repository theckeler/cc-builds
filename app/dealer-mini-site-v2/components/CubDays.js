import IconCubDays from "@/components/images/IconCubDays";
import Button from "@/components/Button";

export default function CubDays({ title, className, style }) {
	return (
		<div
			className="mt-0 mt-xl-2 mt-0 mt-xl-2"
			id="cub-days"
			style={{ scrollMarginTop: 16 }}>
			{/* <h3 className="position-relative flex mb-0 mb-xl-1">Cub Days</h3> */}
			<div className="">
				<div>
					<IconCubDays />
					<div className="p-4 text-center">
						<h2>
							Only 2 Days Left To Save $100 on Select Cub Cadet Lawn Tractors
							and Zero Turns through May 16th 2018!
						</h2>
						<p className="mx-lg-8 my-3">
							Do not delay before this promotion ends. All Cub Cadet XT1 Lawn
							Tractors, Heavy Duty LX42, LX46EFI FAB, GX54D Lawn & Garden
							Tractors, and RZTLX54, RZTSX50, & RZTSX54 Zero Turn mowers are
							featured under the $100 off promotion. 0% financing is available
							with approved financing and all Cub Cadet products and are backed
							by Central Equipment's extensive service department.
						</p>
						<Button copy="Find out More" className="border-0 bg-secondary" />
					</div>
				</div>
			</div>
		</div>
	);
}
