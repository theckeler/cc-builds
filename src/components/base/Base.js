import jsonData from "./data/home.json";

const Base = () => {
	return (
		<div>
			<section className="container d-flex flex-column p-0 mt-3 bg-light">
				<h1 className="h1 d-block">{jsonData.copyBlock.h1}</h1>
			</section>
		</div>
	);
};

export default Base;
