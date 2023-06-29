export default function OneTrustBanner() {
	return (
		<div id="onetrust-consent-sdk">
			<div
				id="onetrust-banner-sdk"
				className="otFlat bottom ot-wo-title vertical-align-content"
				tabIndex={0}
				role="region"
				aria-label="Cookie banner"
				style={{ bottom: 0 }}>
				<div
					role="alertdialog"
					aria-describedby="onetrust-policy-text"
					aria-label="Privacy">
					<div className="ot-sdk-container">
						<div className="ot-sdk-row">
							<div
								id="onetrust-group-container"
								className="ot-sdk-eight ot-sdk-columns">
								<div className="banner_logo" />
								<div id="onetrust-policy">
									<p id="onetrust-policy-text">
										This website uses cookies to enhance user experience and to
										analyze performance and traffic on our website. We also
										share information about your use of our site with our social
										media, advertising and analytics partners.
									</p>
								</div>
							</div>
							<div
								id="onetrust-button-group-parent"
								className="ot-sdk-three ot-sdk-columns has-reject-all-button">
								<div id="onetrust-button-group">
									<button id="onetrust-pc-btn-handler">Cookies Settings</button>{" "}
									<button id="onetrust-reject-all-handler">
										Reject All But Necessary
									</button>{" "}
									<button id="onetrust-accept-btn-handler">
										Accept All Cookies
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Close Button */}
					<div id="onetrust-close-btn-container" />
					{/* Close Button END*/}
				</div>
			</div>
		</div>
	);
}
