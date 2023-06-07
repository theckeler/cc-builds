const TrackOrder = ({ title, sub, className, addStyle }) => {
	return (
		// <form
		//   action="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Order-Track"
		//   className="trackorder d-flex flex-column h-100"
		//   method="GET"
		//   name="trackorder-form"
		// >
		//   <h2 className="text-center">{title}</h2>
		//   <p className="text-center">{sub}</p>
		//   <div className="form-group required">
		//     <label className="form-control-label" htmlFor="trackorder-form-number">
		//       Order number
		//     </label>
		//     <input
		//       type="text"
		//       required=""
		//       className="form-control"
		//       id="trackorder-form-number"
		//       name="trackOrderNumber"
		//     />
		//     <div className="invalid-feedback"></div>
		//   </div>

		//   <div className="form-group required">
		//     <label className="form-control-label" htmlFor="trackorder-form-email">
		//       Order Email
		//     </label>
		//     <input
		//       type="email"
		//       required=""
		//       className="form-control"
		//       data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
		//       id="trackorder-form-email"
		//       name="trackOrderEmail"
		//       pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
		//       maxLength="50"
		//     />
		//     <div className="invalid-feedback"></div>
		//   </div>
		//   <div className="form-group required">
		//     <label className="form-control-label" htmlFor="trackorder-form-zip">
		//       Billing ZIP code
		//     </label>
		//     <input
		//       type="text"
		//       required=""
		//       className="form-control"
		//       id="trackorder-form-zip"
		//       name="trackOrderPostal"
		//       pattern="^\d{5}(-\d{4})?$"
		//       aria-describedby="zipCodeHelp"
		//     />
		//     <div className="invalid-feedback"></div>
		//     <small className="form-text text-muted" id="zipCodeHelp">
		//       Ex: 12345
		//     </small>
		//   </div>

		//   <input
		//     type="hidden"
		//     name="csrf_token"
		//     value="dpIQUPBljk9LlpKNP6Mjsg3_k4jC_LRPrmMrW-Zh55Vi4WLKxTnYAQ7atxL1sOphJUr_0KwA0IsBHaGLcAOuDPGeVyYR05_rX4j3AKZL_LKsPTVNjU7YV1tEdbU8myM0dAkhYcqW75aLoM5szvho_hCvsMiEMKCxTOfPBA0sEVBTrUmA4jE="
		//   />

		//   <button
		//     className="btn btn-block btn-secondary mt-auto"
		//     type="submit"
		//     name="submit"
		//     value="submit"
		//   >
		//     Check status
		//   </button>
		// </form>
		<form
			action="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Order-Track"
			className="trackorder"
			method="GET"
			name="trackorder-form">
			<h2 className="track-order-header ada-enhanced text-center">
				Track My Order
			</h2>
			<div className="card-body">
				<p className="track-order-header-text text-center">
					See your order even if you are not a registered user. Enter the order
					number and the billing address ZIP code.
				</p>

				<div className="form-group required">
					<label className="form-control-label" for="trackorder-form-number">
						Order number
					</label>
					<input
						type="text"
						required=""
						className="form-control"
						id="trackorder-form-number"
						name="trackOrderNumber"
					/>
					<div className="invalid-feedback"></div>
				</div>

				<div className="form-group required">
					<label className="form-control-label" for="trackorder-form-email">
						Order Email
					</label>
					<input
						type="email"
						required=""
						className="form-control"
						data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
						id="trackorder-form-email"
						name="trackOrderEmail"
						pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
						maxlength="50"
					/>
					<div className="invalid-feedback"></div>
				</div>
				<div className="form-group required">
					<label className="form-control-label" for="trackorder-form-zip">
						Billing ZIP code
					</label>
					<input
						type="text"
						required=""
						className="form-control"
						id="trackorder-form-zip"
						name="trackOrderPostal"
						pattern="^\d{5}(-\d{4})?$"
						aria-describedby="zipCodeHelp"
					/>
					<div className="invalid-feedback"></div>
					<small className="form-text text-muted" id="zipCodeHelp">
						Ex: 12345
					</small>
				</div>

				<div className="form-group">
					<button
						className="btn btn-block btn-secondary"
						type="submit"
						name="submit"
						value="submit">
						Check status
					</button>
				</div>
			</div>
		</form>
	);
};

export default TrackOrder;
