import BillingPayment from "@/components/BillingPayment";
import ItemsDel from "@/components/ItemsDel";
import OrderInfo from "@/components/OrderInfo";
import OrderSum from "@/components/OrderSum";
import OrderTracker from "@/components/OrderTracker";

export default function OrderStatus() {
	return (
		<div>
			<link
				href="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd006db48162baba2af567f7c8619194f2376165f/Financing/financing-2020.css?version=1,684,337,597,000"
				rel="stylesheet"
			/>
			<div id="COPY-PASTE">
				<div className="container">
					<h1>Order #D0409138P1</h1>

					<OrderTracker />

					<ul className="list-unstyled">
						<li>Package shipped on 07/12/2023</li>
						<li>
							1Z4F531YYW79358928 -
							<a
								href="http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=1Z4F531YYW79358928"
								target="_blank">
								Track Your Package
							</a>
						</li>
					</ul>

					<div className="">
						An email confirmation was sent to bethlucke@gmail.com
					</div>

					<h4>Factory Delivery</h4>
					<p className="">
						Addresses &amp; shipping methods are listed under your items.
					</p>

					<h4 className="">Billing &amp; Payment</h4>

					<OrderInfo />

					<BillingPayment />

					<ItemsDel />

					<OrderSum />
				</div>
			</div>
		</div>
	);
}
