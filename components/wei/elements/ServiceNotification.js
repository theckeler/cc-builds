import Button from "../@/c/Button";

const ServiceNotification = ({ product }) => {
	var serviceDate = new Date();
	serviceDate.setMonth(serviceDate.getMonth() + 3);

	//  console.log(product);

	return (
		<div className="border p-2 m-1 text-center">
			<strong className="text-uppercase">
				Service date coming up for {product.product} on
				{" " + serviceDate.toLocaleDateString()}
			</strong>

			{product.dealer ? (
				<div className="text-left mt-2">
					<p className="mb-0 font-weight-bold tex">Your dealer is:</p>
					<p className="mb-0">{product.dealer.name}</p>
					<p className="mb-0">{product.dealer.address}</p>
				</div>
			) : (
				<Button
					copy={`Order Parts for your ${product.product}`}
					className="w-100 font-weight-normal text-capitalize bg-yellow mt-1 border-0"
				/>
			)}
		</div>
	);
};

export default ServiceNotification;
