export default function Search({}) {
	return (
		<div className="search">
			<div className="site-search">
				<form
					role="search"
					action="/en_US/search"
					method="get"
					name="simpleSearch">
					<span className="search-icon">
						<img
							className="icon icon-search-black"
							src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwe06e0879/images/svg-icons/icon-search-black.svg"
							alt="Search"
						/>
					</span>
					<input
						className="form-control search-field"
						type="search"
						name="q"
						defaultValue=""
						placeholder="Keyword, Model or Part #"
						autoComplete="off"
						aria-label="Keyword, Model or Part #"
					/>
					<div
						className="suggestions-wrapper"
						data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/SearchServices-GetSuggestions?q="
					/>
					<input type="hidden" defaultValue="en_US" name="lang" />
				</form>
			</div>
			<a href="#" className="search-button">
				<img
					className="icon icon-close"
					src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw305c0d11/images/svg-icons/icon-close.svg"
					alt="Close"
				/>
				<img
					className="icon icon-search"
					src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwa8bb662f/images/svg-icons/icon-search.svg"
					alt="Search"
				/>
				<span className="search-button-label">Search</span>
			</a>
		</div>
	);
}
