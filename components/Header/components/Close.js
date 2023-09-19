"use client";
export default function Close({}) {
	return (
		<a
			href="#"
			role="button"
			onClick={() => {
				const mainNav = document.querySelector("#sg-navbar-collapse");
				mainNav.classList.toggle("ada-enhanced");
				mainNav.classList.toggle("in");
			}}>
			Close
			<span aria-hidden="true">
				<img
					className="icon icon-close"
					src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw305c0d11/images/svg-icons/icon-close.svg"
					alt=""
				/>
			</span>
		</a>
	);
}
