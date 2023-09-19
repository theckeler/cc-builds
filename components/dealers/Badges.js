import EliteLogo from "./logos/EliteLogo";
import CertLogo from "./logos/Logo9";

export default function Badges({ badges }) {
	const dealerBagdes = [
		{
			icon: <EliteLogo style={{ minHeight: "100px" }} />,
			title: "Elite Dealer",
		},
		{
			icon: <CertLogo style={{ minHeight: "100px" }} />,
			title: "Certified Dealer",
		},
	];

	return (
		<ul className="d-flex justify-content-center list-unstyled mb-0 mx-auto h-100">
			{dealerBagdes.map(
				(block, i) =>
					badges[i] === true && (
						<li key={i}>
							<div className="d-flex align-items-center flex-column h-100 p-2">
								{block.icon}
								<span
									className="mt-auto font-bold"
									style={{ fontSize: "18px" }}>
									{block.title}
								</span>
							</div>
						</li>
					)
			)}
		</ul>
	);
}
