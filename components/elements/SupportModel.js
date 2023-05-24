const SupportModel = ({ title, sub, className, addStyle }) => {
	return (
		<form
			action="https://www.cubcadet.com/en_US/service-and-parts#part-finder"
			className="d-flex flex-column h-100"
			method="get"
			name="simpleSearch"
			noValidate=""
			role="search">
			<h2 className="text-center">{title}</h2>
			<p className="text-center">{sub}</p>

			<label htmlFor="search-by-number">Model #, Part # or Item #</label>

			<input
				autoComplete="off"
				className="form-control search-field"
				id="search-by-number"
				name="q"
				required=""
				type="search"
				aria-describedby="16680858695420"
			/>

			<div className="mt-3">
				<img
					src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw3bde9ca9/Service%20and%20Parts/How%20to%20Find%20Model%20Number/Find_Model_Number_Cub_Cadet.jpg"
					alt=""
					className="ml-auto mr-auto"
				/>
				<p className="my-2">
					The Model number is eleven characters long and is printed on the left
					of the product identification label. Characters can include numbers,
					letters or hyphens.
				</p>
			</div>

			<button
				className="btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0"
				type="submit">
				Find Support
			</button>
		</form>
	);
};

export default SupportModel;
