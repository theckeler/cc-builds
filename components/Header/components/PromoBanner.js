export default function PromoBanner({}) {
	return (
		<div className="header-banner slide-up">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="content">
							<div className="html-slot-container">
								<style
									type="text/css"
									dangerouslySetInnerHTML={{
										__html:
											".promo-header {\n\npadding-top: 0.75rem !important;\npadding-bottom: 0.75rem !important;\n\n}\n",
									}}
								/>
								<div
									className="font-weight-bold bg-secondary text-black promo-header"
									id="promo-header">
									Financing available for online purchases*{" "}
									<a href="https://www.cubcadet.com/en_US/financing">
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
