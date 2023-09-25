export default function OrderSum() {
	return (
		<div>
			<h6>Order Summary</h6>

			<ul className="list-unstyled">
				<li>Subtotal</li>
				<li>$113.19</li>

				<li>Order Discount</li>
				<li>-$0.00</li>

				<li>Delivery Charge</li>
				<li>$0.00</li>

				<li>Delivery Discount</li>
				<li>-0.0</li>

				<li>Sales Tax</li>
				<li>$7.07</li>

				<li>Order Total</li>
				<li>$120.26</li>
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
