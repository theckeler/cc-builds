import Pluses from "../@/components/Pluses";

const HeaderSnowflake = ({ addCSS, className, title }) => {
	return (
		<h2
			className={`wrapper text-center pt-8 mb-4 px-1 position-relative d-flex justify-content-center align-items-start ${className}`}
			style={addCSS}>
			<Pluses
				className="d-flex align-items-start"
				num="1"
				addCSS={{ marginTop: "-4px" }}
			/>
			{title}
		</h2>
	);
};

export default HeaderSnowflake;
