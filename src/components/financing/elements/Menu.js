import FilterButton from "./FilterButton";
import FilterOptions from "./FilterOptions";

const Menu = ({
	offersData,
	handleChange,
	toggleCheckboxes,
	numBlocks,
	help,
}) => {
	return (
		<ul className="d-flex flex-column list-unstyled p-lg-1">
			<li
				className="financing-filters-button d-lg-none"
				id="financing-filters-button"
				style={{
					zIndex: "100",
				}}>
				<FilterButton />
			</li>
			<li
				className="financing-filters position-fixed position-lg-relative w-100"
				id="financing-filters"
				style={{
					top: 0,
					zIndex: "101",
					backgroundColor: "#efefef",
				}}>
				<ul className="list-unstyled h-100 p-lg-1">
					<li className="p-1 text-uppercase h4 border-bottom d-flex align-items-center">
						<span>Filter:</span>
						<span className="ml-auto d-lg-none">
							<FilterButton />
						</span>
					</li>
					<li className="mb-2 px-3 px-lg-0 d-none d-lg-block">
						<button
							onClick={() => {
								help();
							}}
							className="py-2 px-4 w-100 border-0 text-black font-bold h-100"
							style={{ background: "#ffc20f" }}>
							Help Me Decide?
						</button>
						<div className="px-1 text-center mt-1" style={{ fontSize: ".8em" }}>
							Available number of offers: <strong>{numBlocks}</strong>
						</div>
					</li>
					<li
						className="mb-2  px-3 px-lg-0 pb-8 overflow-auto"
						style={{
							height: "calc(100vh - 60px)",
							maxHeight: "100vh",
						}}>
						{offersData.keys.map((key, i) => {
							return (
								<FilterOptions
									option={key}
									{...{ handleChange }}
									keysPos={i}
									key={i}
								/>
							);
						})}
						<button
							className="btn bg-black text-white w-100 p-1"
							onClick={(e) => toggleCheckboxes(false, true)}>
							Reset Options
						</button>
						{/* <button onClick={(e) => toggleCheckboxes(true, false)}>
							False
						</button> */}
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default Menu;
