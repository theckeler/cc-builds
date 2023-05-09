const NoResults = () => {
	return (
		<li className="financing-filter col-12 mb-1 p-1">
			<div className="p-1">
				<h2 className="pb-2 mb-3 border-bottom">
					No Results Found for Your Selection
				</h2>
				<p>
					We're sorry, but there are no results that match your selected
					criteria. It's possible that there are no options available for the
					specific filters or categories you've chosen, or the information may
					not be available on our website.
				</p>
				<p>
					Please try adjusting your selection by removing or changing some of
					the filters, or broadening your search criteria. You can also contact
					us for assistance with finding the information you need.
				</p>
				<p>
					We understand that finding the right information is important, and we
					apologize for any inconvenience caused by the lack of results.
				</p>
			</div>
		</li>
	);
};

export default NoResults;
