import MenuButton from "./MenuButton";
import FilterOptions from "./FilterOptions";

const Menu = ({ offersData, handleChange, toggleCheckboxes }) => {
	return (
		<ul className="d-flex flex-column list-unstyled p-lg-1">
			<li
				className="financing-filters-button d-lg-none"
				id="financing-filters-button"
				style={{
					zIndex: "100",
				}}>
				<MenuButton />
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
							<MenuButton addClass="p-2" />
						</span>
					</li>
					<li
						className="mb-2 overflow-auto no-scrollbar px-3 px-lg-0 pb-8"
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
						<button onClick={(e) => toggleCheckboxes(false, true)}>
							Reset
						</button>
						<button onClick={(e) => toggleCheckboxes(true, false)}>
							False
						</button>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default Menu;
