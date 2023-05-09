import { useNavigate } from "react-router-dom";
import Button from "../@/c/Button";

const AccountForm = ({ setLoggedIn, addClass, addClick }) => {
	const navigate = useNavigate();

	const checkboxChange = (showWhat) => {
		document.querySelector(showWhat).classList.toggle("d-block");
	};

	return (
		<ul className="list-unstyled d-flex">
			<li className="col col-lg-6 px-0">
				<ul className="list-unstyled d-flex flex-column">
					<li className=" title d-flex flex-column">
						<label>Name</label>
						<input className="border p-1 w-100" value="Joe Schmo" readOnly />
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>Address</label>
						<input
							className="border p-1 w-100"
							value="5903 Grafton Road"
							readOnly
						/>
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>City</label>
						<input className="border p-1 w-100" value="Valley City" readOnly />
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>State</label>
						<input className="border p-1 w-100" value="OH" readOnly />
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>Zip</label>
						<input className="border p-1 w-100" value="44280" readOnly />
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>Phone</label>
						<input
							className="border p-1 w-100"
							value="1-330-225-2600"
							readOnly
						/>
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>Interested in?</label>
						<ul className="list-unstyled d-flex flex-column">
							<li className="title d-flex mt-2">
								<input
									type="checkbox"
									id="lawn"
									name="lawn"
									className="mr-1"
									onChange={(e) => {
										checkboxChange("#mower-more");
									}}
								/>
								<label htmlFor="lawn">Lawn Mowers</label>
							</li>
							<li className="title mt-0 d-none" id="mower-more">
								<ul className="list-unstyled d-flex flex-column m-2">
									<li className="title d-flex mt-2">
										<input
											type="checkbox"
											id="walk"
											name="walk"
											className="mr-1"
										/>
										<label htmlFor="walk">Walk-Behind Mowers</label>
									</li>
									<li className="title d-flex mt-2">
										<input
											type="checkbox"
											id="Riding"
											name="Riding"
											className="mr-1"
										/>
										<label htmlFor="Riding">Riding Lawn Mowers</label>
									</li>
									<li className="title d-flex mt-2">
										<input
											type="checkbox"
											id="Robotic"
											name="Robotic"
											className="mr-1"
										/>
										<label htmlFor="Robotic">Robotic Mowers</label>
									</li>
								</ul>
							</li>
							<li className="title d-flex mt-2">
								<input type="checkbox" id="zero" name="zero" className="mr-1" />
								<label htmlFor="zero">Zero-Turn</label>
							</li>
							<li className="title d-flex mt-2">
								<input
									type="checkbox"
									id="electric"
									name="electric"
									className="mr-1"
								/>
								<label htmlFor="electric">Electric</label>
							</li>
							<li className="title d-flex mt-2">
								<input type="checkbox" id="pro" name="pro" className="mr-1" />
								<label htmlFor="pro">Professional</label>
							</li>
							<li className="title d-flex mt-2">
								<input
									type="checkbox"
									id="snow"
									name="snow"
									className="mr-1"
									onChange={(e) => {
										checkboxChange("#snow-more");
									}}
								/>
								<label htmlFor="snow">Snow</label>
							</li>
							<li className="title mt-0 d-none" id="snow-more">
								<ul className="list-unstyled d-flex flex-column m-2">
									<li className="title d-flex mt-2">
										<input type="checkbox" id="1X" name="1X" className="mr-1" />
										<label htmlFor="walk">1X</label>
									</li>
									<li className="title d-flex mt-2">
										<input type="checkbox" id="2X" name="2X" className="mr-1" />
										<label htmlFor="Riding">2X</label>
									</li>
									<li className="title d-flex mt-2">
										<input type="checkbox" id="3X" name="3X" className="mr-1" />
										<label htmlFor="3X">3X</label>
									</li>
								</ul>
							</li>
							<li className="title d-flex mt-2">
								<input type="checkbox" id="utv" name="utv" className="mr-1" />
								<label htmlFor="utv">UTV</label>
							</li>
							<li className="title d-flex mt-2">
								<input
									type="checkbox"
									id="chore"
									name="chore"
									className="mr-1"
									onChange={(e) => {
										checkboxChange("#chore-more");
									}}
								/>
								<label htmlFor="chore">Chore & Handheld</label>
							</li>
							<li className="title mt-0 d-none" id="chore-more">
								<ul className="list-unstyled d-flex flex-column m-2">
									<li className="title d-flex mt-2">
										<input type="checkbox" id="1X" name="1X" className="mr-1" />
										<label htmlFor="walk">Chainsaw</label>
									</li>
									<li className="title d-flex mt-2">
										<input type="checkbox" id="2X" name="2X" className="mr-1" />
										<label htmlFor="Riding">Trimmers</label>
									</li>
								</ul>
							</li>
							<li className="title d-flex mt-2">
								<input
									type="checkbox"
									id="attachments"
									name="attachments"
									className="mr-1"
								/>
								<label htmlFor="attachments">Attachments</label>
							</li>
						</ul>
					</li>
				</ul>

				<div className="mt-3 pt-3 border-top">
					<Button
						copy={`Add More <span class="ml-auto">&plus;</span>`}
						addClass="w-100 text-left text-uppercase d-flex bg-yellow px-2"
						addClick={(e) => {
							checkboxChange("#account-more-1");
						}}
					/>
				</div>

				<ul
					className="list-unstyled flex-column mt-3 d-none"
					id="account-more-1">
					<li className=" title d-flex flex-column">
						<label>Extra Field</label>
						<input
							className="border p-1 w-100"
							value="Defaulted Input"
							readOnly
						/>
					</li>
					<li className="title d-flex flex-column mt-2">
						<label>Make a selection</label>
						<select
							className="border p-1 w-100"
							onChange={(e) => {
								document.querySelectorAll(".subs").forEach(function (el) {
									el.classList.remove("d-block");
								});

								if (e.target.value) {
									document
										.querySelector("#" + e.target.value)
										.classList.toggle("d-block");
								}
							}}>
							<option value="">Selection that only makes a selection</option>
							<option value="select-more">Selection opens a small extra</option>
							<option value="select-more-2">
								Selection opens a large extra
							</option>
						</select>

						<ul
							className="list-unstyled flex-column mt-3 subs d-none"
							id="select-more">
							<li className=" title d-flex flex-column">
								<label>Select more</label>
								<input
									className="p-1 w-100"
									value="More questions inputs"
									readOnly
								/>
							</li>
						</ul>

						<ul
							className="list-unstyled flex-column mt-3 subs d-none"
							id="select-more-2">
							<li className=" title d-flex flex-column">
								<label>Select even more Based on the selection</label>
								<input
									className="p-1 w-100"
									value="More questions inputs"
									readOnly
								/>
							</li>
							<li className=" title d-flex flex-column mt-2">
								<label>Select even more Based on the selection</label>
								<input
									className="p-1 w-100"
									value="More questions inputs"
									readOnly
								/>
							</li>
							<li className=" title d-flex flex-column mt-2">
								<label>Select even more Based on the selection</label>
								<input
									className="p-1 w-100"
									value="More questions inputs"
									readOnly
								/>
							</li>
						</ul>
					</li>
				</ul>

				<Button
					copy="Submit &gt;"
					addClass="w-100 text-uppercase bg-yellow mt-6"
					addClick={() => {
						setLoggedIn(1);
						navigate("/wei/");
					}}
				/>
			</li>
			<li
				className="col col-lg-6 px-2 h-100 position-sticky"
				style={{ top: 0 }}>
				<div className="p-4 border mt-2">
					<h3 className="h3">Donec quis tincidunt ante</h3>
					<p className="mb-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
						mauris tincidunt, posuere purus vitae, euismod odio. Nam eu erat
						quis tortor faucibus tempus. Maecenas elementum iaculis leo non
						efficitur. Praesent mollis leo et sem gravida egestas. Sed vehicula
						dictum vehicula. In hac habitasse platea dictumst. Phasellus ipsum
						ex, ultrices tincidunt sodales id, mattis vitae lacus. Vestibulum
						nec magna in mauris fringilla blandit eu vitae augue. Mauris
						hendrerit nulla ac mi pulvinar, non tincidunt lectus faucibus. Cras
						tempus, dolor nec tincidunt vehicula, nunc justo pretium est, vel
						consectetur nisl lectus non arcu. Sed in est quis leo tristique
						finibus ac quis ligula. Cras ex nisi, ullamcorper at ex id, gravida
						aliquet massa. Morbi et mi sit amet turpis commodo sodales. Sed non
						laoreet enim. Morbi commodo, sapien vel fringilla sagittis, urna
						arcu varius nibh, quis sollicitudin risus lorem quis augue.
					</p>
				</div>
				<div className="p-4 mt-2 border">
					<h3 className="h3">Sed ac orci a lorem</h3>
					<p className="mb-0">
						Nam non iaculis erat, et sodales ipsum. Morbi non justo vel quam
						convallis dapibus vel quis tellus. Etiam ornare porttitor arcu, in
						blandit arcu facilisis sit amet. Vivamus ultrices eleifend libero,
						in vestibulum lorem feugiat vel. Fusce aliquam porttitor felis, in
						dapibus nisi pharetra aliquam.
					</p>
				</div>
			</li>
		</ul>
	);
};

export default AccountForm;
