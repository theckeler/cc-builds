export default function UtilityNavMobile({}) {
	return (
		<div className="mobile-utility-nav">
			<div className="utility-nav">
				<ul className="utility-list">
					<li>
						<a
							//href="javascript:void(0)"
							id="header-live-chat"
							className="icon-chat">
							<span>Live Chat</span>
						</a>
					</li>
					<li>
						<a
							href="https://www.cubcadet.com/en_US/servicelocator"
							className="icon-find-service">
							<span>Find Service</span>
						</a>
					</li>
					<li>
						<a
							href="/en_US/content-asset-page-includes/registration.html"
							className="icon-registration">
							<span>Registration</span>
						</a>
					</li>
					<li className="icon-account user">
						<a href="https://www.cubcadet.com/en_US/login">
							<span className="user-message">Account</span>
						</a>
					</li>
					<li
						className="menu-item dropdown country-selector"
						tabIndex={0}
						data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Page-SetLocale">
						<button
							tabIndex={-1}
							className="dropdown-toggle"
							id="dropdownCountrySelector"
							data-toggle="dropdown"
							data-currentcountry="USA"
							aria-haspopup="true"
							aria-expanded="false"
							aria-owns="countryList">
							<i className="flag-icon flag-icon-us" />
							USA (en)
						</button>
						<div
							id="countryList"
							className="dropdown-menu dropdown-country-selector"
							aria-labelledby="dropdownCountrySelector">
							<a
								className="dropdown-item"
								href="#"
								data-locale="en_CA"
								data-currencycode="CAD"
								data-country="CAN">
								<i className="flag-icon flag-icon-ca" />
								Canada - English
							</a>
							<a
								className="dropdown-item"
								href="#"
								data-locale="fr_CA"
								data-currencycode="CAD"
								data-country="CAN">
								<i className="flag-icon flag-icon-ca" />
								Canada - français
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
