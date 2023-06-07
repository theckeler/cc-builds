const DealerLocation = () => {
	return (
		<div
			className="container dealer-locator p-4"
			data-geocoding-url="https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCRY5nRYhf3dJbFKwJKfoiKUxKBgURDkt8">
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1686135925262/css/storeLocator.css"
			/>
			<h2 className="page-title h2 text-center">
				Find A Cub Cadet Service Location
			</h2>
			<div className="">
				<div className="content-asset text-center">
					<p>
						<span className="font-weight-bold d-block">
							Cub Cadet Dealers are here to help with expert service &amp;
							support
						</span>
						Factory-trained service technicians help ensure your Cub Cadet keeps
						running strong season after season. Get the most out of your Cub
						Cadet with Genuine Factory Parts and attachments from your expert
						dealer.
					</p>
				</div>

				<div className="row no-gutters mx-auto">
					<div className="alert alert-danger geocoding-error hidden">
						<div>Incorrect Zip Code format. Please correct and try again.</div>
					</div>
					<div
						className="mb-2 mb-sm-3 pt-3 mx-auto"
						style={{ maxWidth: "400px" }}>
						<form
							action="/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-FindStores?showMap=false&isServiceLocator=true&isEliteDealer=false"
							className="store-locator service-locator-form"
							method="get"
							name="storelocator">
							<div className="d-flex justify-content-xs-between sl-form sl-container">
								<div className="form-group required sl-zip service-locator">
									<label
										className="form-control-label"
										htmlFor="store-postal-code">
										Enter Zip Code, City or State
									</label>
									<input
										autofocus=""
										required=""
										type="text"
										className="form-control"
										id="store-postal-code"
										name="address"
										defaultValue=""
										autoComplete="nofill"
									/>
									<div className="invalid-feedback" />
								</div>
								<div className="sl-radius">
									<label htmlFor="radius">Distance (miles)</label>
									<div className="select-wrapper">
										<select
											className="form-control custom-select radius"
											id="radius"
											name="radius"
											data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-FindStores?showMap=false&isServiceLocator=true&isEliteDealer=false">
											<option>15</option>
											<option>30</option>
											<option>50</option>
											<option>100</option>
											<option>300</option>
										</select>
										<span className="selector" />
									</div>
								</div>
								<div className="service-locator-radio">
									<div className="sl-product-from">
										<label htmlFor="productFrom">
											Where Did You Purchase Your Product
											<span className="sl-purchase-from-tooltip">
												<div className="content-asset">
													<span className="info-icon">
														<span
															className="icon"
															data-toggle="popover"
															tabIndex={0}
															title=""
															data-content="Select the store you purchased your product from. If unsure, select 'Other'."
															data-original-title=""></span>
													</span>
												</div>
											</span>
										</label>
										<div
											className="custom-radio product-from-list"
											data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-FindStores?showMap=false&isServiceLocator=true&isEliteDealer=false"
											data-missing-error="This field is required.">
											<div className="form-check">
												<input
													id="productFrom-dealer"
													name="productFrom"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="dealers"
													defaultChecked=""
												/>
												<label
													className="custom-control-label product-from-option"
													htmlFor="productFrom-dealer">
													<span className="font-weight-normal">
														Cub Cadet Independent Dealer / CubCadet.com
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productFrom-cubcare"
													name="productFrom"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="cubcare"
												/>
												<label
													className="custom-control-label product-from-option"
													htmlFor="productFrom-cubcare">
													<span className="font-weight-normal">
														The Home Depot / Tractor Supply Co / Other
													</span>
												</label>
											</div>
										</div>
									</div>
									<div className="sl-product-type">
										<label htmlFor="productType">
											Choose Your Product Type
											<span className="sl-product-type-tooltip">
												<div className="content-asset">
													<span className="info-icon">
														<span
															className="icon"
															data-toggle="popover"
															tabIndex={0}
															title=""
															data-content="Select the type of product you want to service. If unsure, select the closest match."
															data-original-title=""></span>
													</span>
												</div>
												{/* End content-asset */}
											</span>
										</label>
										<div
											className="custom-radio product-type-list"
											data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-FindStores?showMap=false&isServiceLocator=true&isEliteDealer=false"
											data-missing-error="This field is required.">
											<div className="form-check">
												<input
													id="productType-ALL"
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue=""
													defaultChecked=""
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-ALL">
													<span className="font-weight-normal">
														All Products
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productType-UTV "
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="UTV "
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-UTV ">
													<span className="font-weight-normal">
														Utility Vehicles
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productType-PRO"
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="PRO"
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-PRO">
													<span className="font-weight-normal">
														Professional Products
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productType-SNO"
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="SNO"
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-SNO">
													<span className="font-weight-normal">
														Snow Blowers
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productType-ROB"
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="ROB"
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-ROB">
													<span className="font-weight-normal">
														Robotic Mowers
													</span>
												</label>
											</div>
											<div className="form-check">
												<input
													id="productType-RZT,LGT,WBM,LOG,STR,CHS,PRW,TNC,TAT,HNC,LED,BLO"
													name="productType"
													type="radio"
													className="custom-control-input form-check-input"
													defaultValue="RZT,LGT,WBM,LOG,STR,CHS,PRW,TNC,TAT,HNC,LED,BLO"
												/>
												<label
													className="custom-control-label product-type-option"
													htmlFor="productType-RZT,LGT,WBM,LOG,STR,CHS,PRW,TNC,TAT,HNC,LED,BLO">
													<span className="font-weight-normal">
														Residential Products
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="sl-btn service-locator">
									<button
										className="btn btn-secondary btn-storelocator-search"
										type="submit">
										Find A Service Center
									</button>
								</div>
							</div>
						</form>

						<div className="trademark-disclaimer mt-2">
							The Home Depot is a registered trademark of Homer TLC, Inc.
							<br />
							TSC is a registered trademark of the Tractor Supply Co.
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DealerLocation;
