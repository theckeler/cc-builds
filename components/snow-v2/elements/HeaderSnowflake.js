import Pluses from "../@/c/Pluses";

const HeaderSnowflake = ({ addCSS, addClass, title }) => {
	return (
		<h2
			className={`wrapper text-center pt-8 mb-4 px-1 position-relative d-flex justify-content-center align-items-start ${addClass}`}
			style={addCSS}>
			<Pluses
				addClass="d-flex align-items-start"
				num="1"
				addCSS={{ marginTop: "-4px" }}
			/>
			{title}
		</h2>
	);
};

export default HeaderSnowflake;
