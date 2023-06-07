import Button from "../@/c/Button";
import ProductBlock from "../@/c/ProductBlock";

const Explore = ({ jsonCommonData, addButton }) => {
	return (
		<section>
			<div className="container py-5 px-1 d-flex flex-column ">
				<h2
					dangerouslySetInnerHTML={{ __html: jsonCommonData.explore.h2 }}
					className="mb-2 display-1 text-center"
				/>
				<ul className="list-unstyled d-flex flex-column flex-lg-row flex-wrap justify-content-center">
					{jsonCommonData.explore.blocks.map((block, i) => {
						return (
							<li className="col-12 col-lg-4 p-2" key={i}>
								<ProductBlock block={block} />
							</li>
						);
					})}
				</ul>
				{addButton && (
					<Button
						className="bg-secondary mb-0 text-center w-lg-auto d-flex-fill mx-lg-auto mt-2 d-block d-lg-inline-block"
						copy={jsonCommonData.explore.button.copy}
						url={jsonCommonData.explore.button.url}
					/>
				)}
			</div>
		</section>
	);
};

export default Explore;
