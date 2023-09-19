export default function MiniCart({}) {
	return (
		<div
			className="minicart"
			data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-MiniCartShow">
			<div className="minicart-total">
				<a
					className="minicart-link"
					href="https://www.cubcadet.com/en_US/cart"
					title="View Cart">
					<img
						className="icon icon-cart"
						src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw15e69641/images/svg-icons/icon-cart.svg"
						alt=""
					/>
					<span className="minicart-label">
						Cart
						<span className="minicart-quantity">0</span>
					</span>
				</a>
			</div>
			<div className="popover popover-bottom" />
		</div>
	);
}
