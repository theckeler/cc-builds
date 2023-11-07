import { Fragment } from "react";
import ButtonMain from "@/components/Buttons/Main";

export default function BookService() {
	const inputText = <input className="w-100 p-1" />;
	const inputSelect = (
		<select className="p-1">
			<option>Select One</option>
		</select>
	);
	const inputDate = <input type="date" className="w-full p-1" />;

	const form = [
		{ title: "Name", input: inputText },
		{ title: "Address", input: inputText },
		{ title: "City", input: inputText },
		{ title: "State", input: inputText },
		{ title: "Zipcode", input: inputText },
		{ title: "Date", input: inputDate },
		{ title: "Service Type", input: inputSelect },
	];

	return (
		<ul
			className="list-unstyled flex flex-wrap align-items-center"
			style={{ gap: "0.75em" }}>
			{form.map(function (block, i) {
				return (
					<Fragment key={i}>
						<li
							className="col-2 text-right font-bold px-0 mb-0"
							style={{ fontSize: "16px" }}>
							{block.title}:
						</li>
						<li className="col-9 px-0">{block.input}</li>
					</Fragment>
				);
			})}
			<li className="col-2 text-right font-bold px-0 mb-0"></li>
			<li className="col-9 px-0 mt-2">
				<ButtonMain
					title="Submit"
					href="#top"
					className="flex justify-content-center align-items-center bg-secondary border-0 px-2 font-weight-bold text-decoration-none text-uppercase"
					style={{}}
				/>
			</li>
		</ul>
	);
}
