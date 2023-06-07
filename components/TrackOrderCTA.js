import Button from "./Button";

const TrackOrder = ({ title, sub, className, addStyle }) => {
	return (
		<form
			action="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Order-Track"
			className="trackorder"
			method="GET"
			name="trackorder-form">
			<h2 className="text-center">Track My Order</h2>

			<p className="track-order-header-text text-center">
				Looking to track your order? Look no further! Simply click below to get
				started and stay up-to-date on the whereabouts of your purchase.
			</p>
			<p className="mt-4">
				<Button
					copy="Track My Order"
					url="https://www.cubcadet.com/en_US/track-my-order"
					className="btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0 w-100"
				/>
			</p>
		</form>
	);
};

export default TrackOrder;
