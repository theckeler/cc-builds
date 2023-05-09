import React from "react";

import Button from "../@/c/Button";
import FinancingBlock from "./FinancingBlock";
import EmptyBlock from "./EmptyBlock";

const MainBlock = ({ block, i, keywords, multiBlockLength }) => {
	return (
		<li
			className={`financing-filter col-12 col-lg-6 mb-1 p-1 ${keywords.trim()}`}
			key={i}>
			<div className="border d-flex flex-column h-100">
				<div className="bg-secondary text-center py-2 px-2 font-weight-bold">
					<p
						className="mb-0"
						style={{
							fontSize: "3em",
							lineHeight: "1",
						}}>
						{block.term}
					</p>
					<p
						className="mb-0 font-weight-normal text-uppercase"
						style={{
							fontSize: "1.5em",
						}}>
						Months
					</p>
				</div>
				{!!multiBlockLength > 0 ? (
					block.offers.map((block, i) => {
						const borderRun = i < multiBlockLength - 1 ? `border-bottom` : "";

						return (
							<React.Fragment key={i}>
								{block.display === true && (
									<FinancingBlock
										{...{
											block,
											addClass: borderRun,
										}}
									/>
								)}
							</React.Fragment>
						);
					})
				) : (
					<EmptyBlock />
				)}
				<div className="p-1 mt-auto">
					<Button
						copy={block.button.copy}
						url={block.button.url}
						addClass="w-100 text-center bg-black text-white"
					/>
				</div>
			</div>
		</li>
	);
};

export default MainBlock;
