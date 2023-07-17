import Stars from "./Stars";
import Social from "./Social";

export default function DealerInfo() {
	return (
		<div>
			<img
				src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw0e63aa38/images/stores/dealer-logos/WorcestersInc_BW.png"
				alt=""
			/>
			<h1>Worcester Sales and Service, Inc.</h1>
			<a href="tel:(440) 327-2196" className="display-4">
				(440) 327-2196
			</a>

			
			<Stars />
			<Social />
		</div>
	);
}
