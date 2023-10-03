"use client";

export default function StateSelector({ curState, setCurState }) {
	return (
		<div
			className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
			<label
				className="form-control-label"
				htmlFor="shippingState"
				id="shippingStateLabel">
				State
			</label>
			<div className="select-wrapper select-wrapper--secondary">
				<select
					className="form-control shippingState custom-select"
					aria-labelledby="shippingStateLabel"
					id="shippingState"
					autoComplete="shipping address-level1"
					name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
					required=""
					onChange={(e) => {
						setCurState(e.currentTarget.value);
					}}>
					<option id=""></option>
					<option id="AL" value="AL">
						Alabama
					</option>
					<option id="AZ" value="AZ">
						Arizona
					</option>
					<option id="AR" value="AR">
						Arkansas
					</option>
					<option id="CA" value="CA">
						California
					</option>
					<option id="CO" value="CO">
						Colorado
					</option>
					<option id="CT" value="CT">
						Connecticut
					</option>
					<option id="DE" value="DE">
						Delaware
					</option>
					<option id="DC" value="DC">
						District of Columbia
					</option>
					<option id="FL" value="FL">
						Florida
					</option>
					<option id="GA" value="GA">
						Georgia
					</option>
					<option id="ID" value="ID">
						Idaho
					</option>
					<option id="IL" value="IL">
						Illinois
					</option>
					<option id="IN" value="IN">
						Indiana
					</option>
					<option id="IA" value="IA">
						Iowa
					</option>
					<option id="KS" value="KS">
						Kansas
					</option>
					<option id="KY" value="KY">
						Kentucky
					</option>
					<option id="LA" value="LA">
						Louisiana
					</option>
					<option id="ME" value="ME">
						Maine
					</option>
					<option id="MD" value="MD">
						Maryland
					</option>
					<option id="MA" value="MA">
						Massachusetts
					</option>
					<option id="MI" value="MI">
						Michigan
					</option>
					<option id="MN" value="MN">
						Minnesota
					</option>
					<option id="MS" value="MS">
						Mississippi
					</option>
					<option id="MO" value="MO">
						Missouri
					</option>
					<option id="MT" value="MT">
						Montana
					</option>
					<option id="NE" value="NE">
						Nebraska
					</option>
					<option id="NV" value="NV">
						Nevada
					</option>
					<option id="NH" value="NH">
						New Hampshire
					</option>
					<option id="NJ" value="NJ">
						New Jersey
					</option>
					<option id="NM" value="NM">
						New Mexico
					</option>
					<option id="NY" value="NY">
						New York
					</option>
					<option id="NC" value="NC">
						North Carolina
					</option>
					<option id="ND" value="ND">
						North Dakota
					</option>
					<option id="OH" value="OH">
						Ohio
					</option>
					<option id="OK" value="OK">
						Oklahoma
					</option>
					<option id="OR" value="OR">
						Oregon
					</option>
					<option id="PA" value="PA">
						Pennsylvania
					</option>
					<option id="RI" value="RI">
						Rhode Island
					</option>
					<option id="SC" value="SC">
						South Carolina
					</option>
					<option id="SD" value="SD">
						South Dakota
					</option>
					<option id="TN" value="TN">
						Tennessee
					</option>
					<option id="TX" value="TX">
						Texas
					</option>
					<option id="UT" value="UT">
						Utah
					</option>
					<option id="VT" value="VT">
						Vermont
					</option>
					<option id="VA" value="VA">
						Virginia
					</option>
					<option id="WA" value="WA">
						Washington
					</option>
					<option id="WV" value="WV">
						West Virginia
					</option>
					<option id="WI" value="WI">
						Wisconsin
					</option>
					<option id="WY" value="WY">
						Wyoming
					</option>
				</select>
				<span className="selector" />
			</div>
			<div className="invalid-feedback" />
		</div>
	);
}
