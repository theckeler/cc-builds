export default function OrderSum() {
	return (
		<div className="">
			<h6>Order Summary</h6>

			<ul className="list-unstyled">
				<li className="">Subtotal</li>
				<li className="">$113.19</li>

				<li className="">Order Discount</li>
				<li className="">-$0.00</li>

				<li className="">Delivery Charge</li>
				<li className="">$0.00</li>

				<li className="">Delivery Discount</li>
				<li className="">-0.0</li>

				<li className="">Sales Tax</li>
				<li className="">$7.07</li>

				<li className="">Order Total</li>
				<li className="">$120.26</li>
				<li>
					<a
						href="/en_US/home"
						title="Continue Shopping"
						className="btn btn-outline-secondary btn-block order-confirmation-continue-shopping d-none d-md-block"
						role="button">
						Continue Shopping
					</a>
				</li>
			</ul>
		</div>
	);
}
