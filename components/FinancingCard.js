export default function FinancingCard({ block }) {
	return (
		<div className="flex flex-col h-full bg-[#efefef]">
			<h3 className="text-center py-1 bg-secondary">
				<div className="text-7xl -mb-1">{block.term}</div>{" "}
				<div className="font-normal">months</div>
			</h3>

			<h4
				className="text-2xl text-center px-1"
				dangerouslySetInnerHTML={{ __html: block.title }}
			/>
			{!!block.text && (
				<p
					className="text-center px-1"
					dangerouslySetInnerHTML={{ __html: block.text }}
				/>
			)}
			{!!block.fee && (
				<p
					className="text-center font-bold px-1"
					dangerouslySetInnerHTML={{ __html: block.fee }}
				/>
			)}
			<p
				className="text-lg text-center px-1"
				dangerouslySetInnerHTML={{
					__html: block.minPurchase,
				}}
			/>
			<p className="text-center px-1">
				<span className="block">Valid from:</span>
				<span className="block">
					{block.validFrom} - {block.validTo}
				</span>
			</p>
			<div className="mt-auto text-center pb-2">
				<a
					className="uppercase w-full block  px-4 font-bold mb-2"
					data-target="#financing-modal"
					data-toggle="modal"
					href="#"
					title={block.detailText}>
					{block.detailText}
				</a>
				<a
					className="btn btn-primary btn-sm"
					href={block.buttonHref}
					title={block.buttonTitle}>
					{block.buttonTitle}
				</a>
			</div>
		</div>
	);
}
