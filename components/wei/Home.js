"use client";
import Button from "@/components/Button";

//import "../../scss/wei.scss";

const Home = ({ openMenu }) => {
	return (
		<div
			className="wrapper home d-flex flex-column justify-content-center align-items-center"
			style={{ minHeight: "60vh" }}>
			<h1>Wei</h1>
			<p className="xxl-hide">Click button to start:</p>
			<Button
				copy="Start"
				className="bg-yellow xxl-hide border-0"
				onClick={openMenu}
			/>
		</div>
	);
};

export default Home;
