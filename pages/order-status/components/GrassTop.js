export default function GrassTop({ className, cut1, cut2, cut3, cut4, cut5 }) {
	console.log(cut1);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			viewBox="0 0 500 44"
			className={className}>
			<g
				id="cut-1"
				className={cut1 === true && "none"}
				style={{ visibility: "hidden" }}>
				<path
					fill="#228B22"
					d="M44.9 30.5s-1.1 1.7-3 5c-1.3 2.2-2.9 5.1-4.8 8.5h1.6c1.4-3.3 2.7-6.1 3.7-8.3l2.5-5.2zm46-15s-1.7 9.1-3.8 24.4c-.2 1.3-.4 2.7-.6 4.1h2.3l.3-3.9 1.8-24.6zM115.6 44h1.5l2.3-13.5s-1.5 5-3.8 13.5zm8.8-35.5s0 10.9-2.1 28.7c-.3 2.2-.5 4.4-.8 6.8h2.4c.2-2.3.3-4.5.5-6.6 1-18-.1-28.9 0-28.9zm-30 11s-.5 2.3-.7 6.6c-.2 4.2-.1 10.4 1 17.9h2c-1.6-7.5-2.3-13.6-2.4-17.9-.2-4.2.1-6.6.1-6.6z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M41.9 17.5s-.7 8.9-2.7 23.5c-.1 1-.3 1.9-.4 3H41c.1-.9.1-1.9.2-2.7 1-14.8.6-23.8.7-23.8zM25.9 29s0 5.7-1.9 15h1.6c1-9.4.2-15 .3-15zm85-3.5s-1.5 1.8-3.6 5.5c-1.8 3-3.9 7.4-5.9 13h1.8c1.5-5.4 3.2-9.7 4.6-12.8 1.8-3.7 3.1-5.7 3.1-5.7zm-75-4s-1 8.1-1.7 21.5v1h2.1v-1c-.5-13.4-.5-21.5-.4-21.5zM8.5 43l.3-4.5-1 4.4c-.1.4-.2.7-.2 1.1h.8c.1-.4.1-.7.1-1zm73.4-19.5s-1.2 7.7-2.1 20.5h2c-.1-12.8.1-20.5.1-20.5zM96.2 44h.6c.3-2.6.5-4 .5-4 .1 0-.4 1.4-1.1 4zm18.7-13.4c.5-3.3.9-5.1.9-5.1s-.6 1.7-1.5 5c-.8 3.1-1.9 7.7-2.3 13.5h1.9c0-5.6.5-10.2 1-13.4z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M112.2 32.6c1.8-2.8 3.2-4.1 3.1-4.1 0 0-1.5 1.1-3.6 3.7-1 1.3-2.2 3.1-3.2 5.3-.9 1.9-1.6 4-2.2 6.5h1.9c.8-5 2.4-8.9 4-11.4zM12.4 40s-.1 1.4-.4 4h.6c-.1-2.6-.2-4-.2-4zm92-11s.9 1.8 2.3 5.1c1 2.4 2.2 5.8 3.3 9.9h1.7c-1.5-4.3-3.1-7.7-4.4-10.1-1.8-3.2-2.9-4.9-2.9-4.9zm-74.5-9c.1 0-2.5 8.8-4.4 23.8v.2h2c.9-15 2.4-24 2.4-24zm54 11-3.2 13h1.4c.5-3 .8-5.6 1.1-7.7.5-3.4.7-5.3.7-5.3zm-65 8.5s-.6 1.6-1.3 4.5h.6c.3-2.9.7-4.5.7-4.5zm97.7 4.5h.5c-.2-2.6-.3-4-.3-4s0 1.4-.2 4zM93 44c.7-2.6 1.4-4 1.3-4 0 0-.9 1.2-1.9 3.8 0 .1-.1.1-.1.2h.7zm-17.5-2.2c.5-3.1.9-4.8.8-4.8 0 0-.6 1.6-1.5 4.6-.2.7-.4 1.5-.6 2.4h.9c.2-.8.3-1.6.4-2.2zM33.1 44h1.7c-2.7-9.3-4.9-14.5-4.9-14.5-.1 0 1.4 5.3 3.2 14.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M32.2 43.3c1-13.8 3.7-21.8 3.7-21.8.1 0-3.6 7.7-5.6 21.6 0 .3-.1.6-.1.9h2.1c-.1-.2-.1-.4-.1-.7zM21 44h1.4c-.9-7.3-2-11.5-2-11.5-.1 0 .5 4.2.6 11.5zm92.2-13.9c-.9 3.3-2 8-2.9 13.9h1.9c1-12.3 2.8-19.5 2.8-19.5-.1 0-.8 1.9-1.8 5.6zM4 37.2c0-3.7-.1-5.7-.1-5.7l-.5 5.7C3.2 39 3 41.3 2.7 44H4v-6.8zm14.3-.3c-.8-3.4-2-4.9-1.9-4.9 0 0 .9 1.7 1.3 5 .2 1.7.3 3.7.2 6.1v.8h1.3V43c-.2-2.3-.5-4.4-.9-6.1zm88.8.5.8-5.4s-.5 1.8-1.4 5.2c-.5 1.8-1 4.1-1.6 6.8h1.3c.4-2.6.7-4.8.9-6.6zm-17 .2c.4-3.6.8-5.6.8-5.6s-.6 1.9-1.4 5.5c-.4 1.8-.8 4-1.2 6.5h1.3c.1-2.5.3-4.7.5-6.4zm30.3-9.1s-.8 1.9-1.8 5.6c-.7 2.5-1.3 5.8-1.8 9.9h1.5c.3-9.8 2.1-15.5 2.1-15.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M18.4 38.3c.8-3.4.9-5.3.9-5.3s-.4 1.9-1.5 5.1c-.6 1.6-1.3 3.6-2.2 5.9h1.3c.6-2.2 1.2-4.1 1.5-5.7zm-9.6 5c.5-3.4 1.1-5.3 1-5.3 0 0-.8 1.8-1.7 5.2.1.2 0 .5-.1.8h.7c.1-.2.1-.5.1-.7zM79.4 38s.3 1.9.6 5.3c0 .2 0 .5.1.7h.7c0-.3-.1-.6-.1-.8-.8-3.4-1.3-5.2-1.3-5.2zm-1-15-1.6 5.8c-1 3.6-2.5 8.8-4.2 15.2h2l2.8-15.1c.7-3.8 1-5.9 1-5.9zm-46.7 6.9c-1.2 3.3-2.5 8.1-3.5 14.1h1.9c1.1-12.4 3.9-19.5 3.8-19.5 0 0-.9 1.8-2.2 5.4zm2.6-11.2c.1-.2.1-.5.2-.7h-.2v.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M32.4 27.6c.7-3.9 1.4-6.9 1.9-8.9V18h.2c-.1.2-.1.4-.2.7l.1 1.3.1-2v-.7l-.2.7c-.7 1.8-1.8 5-3 9.4s-2.4 10-3 16.6h2.4c.2-6.5.9-12 1.7-16.4zM14.8 38.3c-.7 1.5-1.4 3.4-2.1 5.7H14c1.2-6.4 2.9-10 2.8-10 .1 0-.8 1.4-2 4.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m29.2 27.7.1-5.7-.7 5.7c-.5 3.7-1.1 9-1.6 15.8v.5h2v-.5c0-6.7.2-12 .2-15.8zM116 38.4c-.5 1.5-1.1 3.4-1.6 5.6h1.2c1.1-6.7 2.3-10.5 2.3-10.5s-.8 1.7-1.9 4.9zm6.9-6.9s-.6 4.6-1.6 12.5h1.4c.2-7.9.2-12.5.2-12.5zm-40 4.1c.2-3 .4-5.5.5-7.6.1-4.2-.1-6.5 0-6.5 0 0-.1 2.3-.6 6.4-.3 2.1-.6 4.6-1.1 7.5-.4 2.5-.9 5.4-1.3 8.6h1.9c.2-3.1.4-5.9.6-8.4zm-45.2-6.8c-.6-1.7-1.5-2.8-2.1-3.4-.7-.6-1.1-.8-1.1-.8s.4.3 1 .9c.6.7 1.2 1.9 1.7 3.5.9 3.3.9 8.4.3 14.6v.4h2v-.3c0-6.4-.5-11.6-1.8-14.9zM15.2 44h1c.3-5.4.7-8.5.7-8.5s-.8 3-1.7 8.5zm82.6 0h1.8c-1.9-10.7-3.8-17-3.7-17-.1 0 .9 6.4 1.9 17zm-21 0h.8c.8-3.2 1.3-5 1.3-5s-.9 1.7-2.1 5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M38.9 38.5s-.2 1.7-.5 4.9v.6h.6v-.6c-.1-3.2-.1-4.9-.1-4.9zm74.8-5.3c1.1-3.5 2.2-5.2 2.2-5.2s-1.3 1.5-2.8 5c-1.1 2.6-2.1 6.4-2.8 11h1.6c.3-4.5.9-8.2 1.8-10.8zm10.3 5.1c1.2-7.8 3.1-14 4.9-17.9 1.8-4 3.5-5.9 3.4-5.9 0 0-1.8 1.7-4 5.6-2.2 3.9-4.6 10-6.3 17.9-.4 1.9-.8 3.9-1.2 6.1h2.4c.3-2.1.5-4 .8-5.8z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M111.1 44h1.7c1.9-10.4 3.5-16.5 3.5-16.5.1 0-2.3 6-5.2 16.5zM84 39.7c1.1-3.1 1.9-4.7 1.9-4.7s-2.1 3.1-4.5 9h1.2c.5-1.6.9-3.1 1.4-4.3zm-10.1-3.2s.8 1.9 1.3 5.7c.1.6.1 1.2.2 1.8h.8c-.1-.7-.2-1.4-.4-2-.9-3.7-2-5.5-1.9-5.5zM37.7 44h.6c-.5-2.6-.9-4-.9-4-.1 0 .2 1.4.3 4zm-18.1 0h.2c.1-1 .1-1.5.1-1.5l-.3 1.5zM0 34.3.9 25s-.3 1.4-.9 4.1v5.2zm9.9-4.8S9.7 34.9 8.4 44h1.4c.5-9.2 0-14.5.1-14.5zm-7 9.5-1.8 4.5-.2.5h.7c0-.1.1-.2.1-.3.8-3 1.2-4.7 1.2-4.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M5.1 35.4c1.1-2.9 2-5.4 2.8-7.5 1.4-4.1 2-6.5 2-6.5s-.8 2.3-2.5 6.2L4 34.9C2.8 37.5 1.5 40.5.6 44h2c.6-3.2 1.6-6.1 2.5-8.6zM0 26.9v1.7c.2-.6.5-1.2.7-1.7 1.5-3.5 2.7-5.4 2.6-5.4 0 0-1.3 1.7-3.2 5.1 0 .1 0 .2-.1.3zM5.4 38l-1.3 4.7c-.1.4-.2.9-.3 1.3h.8c.1-.4.1-.8.2-1.1.4-3.2.6-4.9.6-4.9zm108.4 6h1.2c1.2-6.7 2.4-10.5 2.3-10.5.1 0-1.6 3.7-3.5 10.5zm-54 0h2.1c-.5-15.5-1.1-25-1.1-25s-.5 9.5-1 25zm-13 0h.4l-.3-2.5s-.1.9-.1 2.5zm37.5 0h.5c.6-2.6 1-4 1-4 .1 0-.5 1.4-1.5 4z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M61.1 25.7c-.1-3.7-.2-5.7-.2-5.7l-.4 5.7c-.2 3.7-.7 9-1.1 15.6-.1.9-.1 1.8-.2 2.7h2.2v-2.7c-.1-6.6-.2-11.9-.3-15.6zm10.3-5.2s-.1 2.5-.5 7.1c-.3 4-1 9.5-1.9 16.4h1.8c.4-6.8.7-12.3.7-16.3 0-4.7-.1-7.2-.1-7.2zm-15.9 10c.8-3.6 1.4-5.5 1.4-5.5s-.9 1.8-2 5.3c-1 3.2-2.1 7.9-2.9 13.7h1.9c.2-5.7.9-10.3 1.6-13.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M55.4 37s-1.5.8-3.8 3c-1 1-2.2 2.3-3.4 4h1.4c.8-1.4 1.7-2.6 2.5-3.6C54 38 55.4 37 55.4 37zm-11.6 7h1.9c2.5-16.1 5.8-25.5 5.7-25.5 0 0-4.2 9.2-7.6 25.5zm25.1-12s-1.1 1.6-2.9 4.7c-1.1 1.9-2.4 4.3-3.8 7.3h1.5c1-2.8 2-5.1 2.8-7 1.5-3.2 2.4-5 2.4-5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M59.8 24.3c1.6-4 3.1-5.8 3.1-5.8s-1.7 1.7-3.6 5.5c-2 3.8-4.2 9.7-6.4 17.1-.3 1-.6 1.9-.9 2.9h2.2c.2-.8.3-1.6.5-2.3 1.8-7.5 3.5-13.5 5.1-17.4zM70.3 44h1.3c1.3-7.3 2.3-11.5 2.3-11.5s-1.6 4.1-3.6 11.5zm3.1-14s-1.2 1.7-2.8 5.1c-1 2.2-2.1 5.2-3 8.9h1.5c.5-3.5 1.3-6.5 2.1-8.7 1.1-3.5 2.2-5.3 2.2-5.3zm-27.5 1.5s-.9 4.6-2 12.5h1.4c.3-7.9.6-12.5.6-12.5zM42.7 44h.6c-.9-3.6-1.5-5.5-1.5-5.5.1 0 .4 1.9.9 5.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M53.7 44h.2c-.3-1-.5-1.5-.5-1.5l.3 1.5zm9.3 0h1.6l-3.2-15s.4 5.6 1.6 15zm-4.1-8.5s-.2 1.7-1 4.8c-.3 1.1-.7 2.3-1.2 3.7h1.1c.3-1.3.6-2.5.7-3.6.5-3.2.3-4.9.4-4.9zM75.5 44h1.1c.7-6 .8-9.5.8-9.5s-.6 3.5-1.9 9.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M78.4 29s-1.9 1-5.1 3.6c-2.7 2.3-6.2 5.9-9.1 11.4h2c2.3-5 5.2-8.6 7.6-11 2.7-2.8 4.6-4 4.6-4z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M65.6 38.9c.4-1.6.7-3.2 1.1-4.6.7-2.9 1.4-5.4 1.9-7.4 1-4.1 1.3-6.4 1.3-6.4s-.6 2.2-1.9 6.2l-2.5 7.2c-.5 1.4-1 3-1.5 4.6-.3.8-.4 1.7-.7 2.5-.3.9-.5 1.8-.8 2.7 0 .1 0 .2-.1.2h2c.4-1.6.9-3.3 1.2-5zm12.3-10.4s-1.4 1.5-3.5 4.7c-1.6 2.5-3.7 6.1-5.5 10.8h1.7c1.4-4.4 3-7.9 4.3-10.5 1.8-3.3 3-5 3-5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M66.4 36s-1.5 1-3.4 3.7c-.8 1.1-1.7 2.6-2.5 4.3h1.2c.6-1.5 1.2-2.9 1.8-4 1.5-2.8 2.9-4 2.9-4zm-11-1s-.8 1.6-2.2 4.6c-.6 1.2-1.2 2.7-2 4.4h1.2c.5-1.6 1-3 1.4-4.1l1.6-4.9z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M60.5 40.3c-.1-1.8-.5-3.2-.9-4-.4-.9-.7-1.2-.7-1.2s1.1 1.7 1 5.3c0 1.1-.2 2.3-.4 3.7h1c.1-1.5.1-2.7 0-3.8zM73.1 44h.4l.4-2.5s-.3.9-.8 2.5zM19.9 25s-1.3 7.1-3.1 19h1.8c.9-11.9 1.3-19 1.3-19z"
					class="st0"
				/>
			</g>
			<g id="cut-2">
				<path
					fill="#228B22"
					d="M144.3 44h1c.6-4.2 1.1-6.5 1.1-6.5s-.9 2.3-2.1 6.5zm27.5 0h1.9c3.4-12.9 6.2-20.5 6.2-20.5s-3.7 7.4-8.1 20.5zM210 14.2c2.3-4.1 3.9-6.2 3.8-6.2 0 0-1.7 2-4.4 5.9-2.6 3.9-6.2 9.9-9.2 18-1.4 3.6-2.6 7.7-3.7 12.1h2.7c.8-4.1 1.8-8 2.9-11.4 2.6-8.1 5.6-14.3 7.9-18.4zM228.4 7s-.4 8.9-.1 23.6c.1 4 .2 8.5.3 13.4h2.8c-.4-4.9-.8-9.4-1.2-13.5C229 15.9 228.4 7 228.4 7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M230.7 22.6c-.1-3.9-.3-6.1-.3-6.1s0 2.1-.3 6S229 32 227.8 39c-.3 1.6-.6 3.3-.9 5h2.3c.2-1.6.4-3.2.5-4.7.8-7.1 1.1-12.8 1-16.7zM218.9 8.4c.7-5.4 1-8.4 1-8.4l-1.6 8.3-4.6 22.8c-.8 4-1.6 8.3-2.4 12.9h2.6c.6-4.5 1.2-8.7 1.8-12.6 1.4-9.8 2.5-17.6 3.2-23zM176.4 25s1 1.8 2 5.4c.9 3.2 1.6 7.8 1.7 13.6h1.8c-.6-5.9-1.7-10.6-3-13.8-1.3-3.5-2.6-5.2-2.5-5.2zm-8.3 4.4c.8-2.8 1.3-5.2 1.7-7.2.7-4 .6-6.2.6-6.2s-.2 2.2-1.2 6.1c-.5 1.9-1.3 4.3-2.3 7-1 2.7-2.2 5.8-3.3 9.3-.6 1.8-1.2 3.7-1.8 5.7h2.4c.4-1.8.8-3.5 1.2-5.1 1-3.7 1.9-6.8 2.7-9.6zM137.2 44h1.9c1.2-10 2.4-16 2.3-16 0 0-2.1 5.9-4.2 16zm-1.4-9.8c-1.6 2.4-3.6 5.6-5.7 9.8h1.7c4-9.5 7.5-14.5 7.5-14.5.1 0-1.3 1.6-3.5 4.7zm11.6 4.8s-.8 1.5-2 4.5c-.1.2-.1.4-.2.5h.7c0-.1.1-.2.1-.3.8-3.1 1.4-4.7 1.4-4.7zm17.3 4.4c-.1.2-.2.4-.2.6h2.2c4.4-12.4 8.4-19.5 8.3-19.5-.1 0-4.9 6.6-10.3 18.9zm8 .6h.7c-.9-3.2-1.6-5-1.6-5 .1 0 .4 1.8.9 5zm32.2-3.9c.5-14.1 1.5-22.6 1.5-22.6s-1.9 8.3-3.5 22.4c-.1 1.3-.3 2.7-.4 4.1h2.3c0-1.3 0-2.7.1-3.9zm27-8.6s-.2 4.7-1.6 12.5h1.5c.5-7.9 0-12.5.1-12.5zm13.5-10s.6 2.1 1.2 6 1.3 9.5 1.1 16.5h2c-.3-7.2-1.4-12.8-2.4-16.6-1.1-3.9-1.9-5.9-1.9-5.9z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M172.4 36.5s-.6 2.7-1.1 7.5h.9c0-4.8.2-7.5.2-7.5zm8-14.4c.9-4.1 2-6.1 2-6.1s-1.3 1.9-2.6 6c-1.3 4-2.2 10.2-1.9 17.9 0 1.3.1 2.7.2 4.1h2.3c-.2-1.5-.4-2.9-.5-4.2-.9-7.5-.4-13.6.5-17.7zm-32.7 21.7c0-2.2 0-4.1-.1-5.6-.2-3.1-.8-4.7-.8-4.7s.3 1.7.1 4.7c-.1 1.5-.3 3.4-.5 5.5v.3h1.3v-.2zm-16.8-22.3s-.4 7.1-1.5 18.8c-.1 1.2-.2 2.4-.4 3.7h2.3c0-1.2 0-2.4.1-3.6.1-11.8-.5-18.9-.5-18.9zM194.8 39c1.8-2.7 3.1-4 3-4 0 0-1.4 1.1-3.5 3.7-1.1 1.3-2.4 3.1-3.6 5.3h1.4c.9-2 1.9-3.7 2.7-5zm15.9 5h.3l-.1-2zm4.7-14.5s1 1.6 2.1 4.8c.8 2.4 1.7 5.7 2.3 9.7h1.7c-1-4.2-2.2-7.6-3.4-10-1.5-3.1-2.8-4.5-2.7-4.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M220.3 44h.7c.8-3.2 1.4-5 1.3-5 .1 0-.8 1.7-2 5zm20.1 0h1c-.2-5.1-.6-8-.6-8 .1 0 0 2.9-.4 8zm3.3-19.9c-1.6-3.7-2.8-5.6-2.8-5.6-.1 0 4 8.1 6 22.6.1.9.3 1.9.4 2.9h2.2l-.6-3.3c-1.6-7.2-3.6-12.8-5.2-16.6zM169.9 26s-.1 2-.6 5.6c-.4 3.1-1.2 7.3-2.3 12.4h1.8c.7-5.1 1.1-9.3 1.2-12.4 0-3.6-.1-5.6-.1-5.6zm4.4 10.4c.9-3.2 1.6-4.9 1.6-4.9s-.9 1.6-2.2 4.7c-.8 2-1.6 4.6-2.4 7.8h1.5c.4-3.1 1-5.7 1.5-7.6zm56.1 7.3c.3-7.2.8-13 1-17l.5-6.2-1.1 6.1c-.7 4-1.6 9.7-2.4 16.9v.4h2v-.2zM184.9 27s1.3 1.6 3.1 4.9c1.5 2.8 3.2 6.9 4.6 12.1h1.9c-1.9-5.5-4.1-9.7-5.9-12.5-2.2-3.1-3.8-4.5-3.7-4.5zm-51.8 16.7c0-3.1-.1-5.9-.4-8.4-.3-2.5-.8-4.5-1.4-6.2-1.2-3.3-2.6-4.6-2.5-4.7 0 0 1.2 1.5 2 4.8.4 1.6.7 3.7.7 6.1.1 2.4-.1 5.1-.4 8.2v.4h2v-.2z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M198.4 40.5s-1.9.3-4.9 2.3c-.5.3-1.1.8-1.7 1.2h1.2c.3-.3.6-.5.8-.7 2.7-2.2 4.6-2.8 4.6-2.8zm7.8-13.4c-2.4-3.3-3.8-5.1-3.8-5.1s1.2 1.9 3.3 5.5c2.1 3.5 5 8.7 8.4 15.3l.6 1.2h2.4c-.4-.7-.8-1.5-1.3-2.2-3.9-6.4-7.3-11.3-9.6-14.7zm34.9 16.1c.2-3.4.2-5.2.2-5.2l-.9 5.2c0 .3-.1.6-.1.8h.7c.1-.3.1-.5.1-.8zm-111.5-9.1c0-3.6-.2-5.6-.2-5.6s-.1 2-.4 5.6c-.2 2.5-.6 5.9-1.2 9.9h1.6c.1-4 .2-7.3.2-9.9zm21.9 9.9h.2l-.3-1.5s0 .5.1 1.5zm-8.5 0h1.3c1.2-6 2.1-9.5 2.1-9.5S145 37.9 143 44zm10.3 0h.3c.4-1.6.7-2.5.7-2.5.1 0-.3.9-1 2.5zm1.7 0h1.5c3.9-9.3 6.9-14.5 6.8-14.5.1 0-3.5 5-8.3 14.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M207.3 44h1.1c.9-6.1 1.5-9.5 1.5-9.5s-1.1 3.4-2.6 9.5zm5.8-.6c.2-1 .4-2 .6-2.9.9-3.8 2.1-7.2 3-10.1 1-3 1.8-5.5 2.4-7.7 1.2-4.3 1.3-6.7 1.3-6.7s-.3 2.4-1.9 6.5c-.7 2.1-1.8 4.5-3 7.4-1.2 2.9-2.6 6.2-3.8 10.1-.3 1.3-.6 2.7-.9 4h2.1c.1-.2.2-.4.2-.6zm14.3-7.4s-1.1 1.7-2.6 5.2c-.4.8-.7 1.8-1.1 2.8h.9c.3-.9.5-1.8.8-2.6 1.1-3.5 2-5.4 2-5.4zm22.5-13.5s.5 2.1 1.3 5.9c.7 3.7 1.7 9 2.4 15.6h2c-1.2-6.8-2.6-12.1-3.7-15.8-1.3-3.7-2-5.7-2-5.7zM177 31.7c.4-3.7.9-5.7.8-5.7 0 0-.6 1.9-1.5 5.6-.7 3-1.4 7.2-1.6 12.4h1.7c0-5.1.3-9.2.6-12.3zM160.3 44h1.6c-.8-9.1-1-14.5-1-14.5s-.6 5.4-.6 14.5zm-8.6 0h.3c0-1.3-.1-2-.1-2s-.1.7-.2 2zm-9.3-2.4c1.2-8.5 3.1-15.2 4.7-19.8 1.6-4.5 2.9-6.8 2.8-6.8 0 0-1.4 2.2-3.4 6.6-1.9 4.4-4.3 11.1-6.1 19.6-.2.9-.3 1.8-.5 2.7h2.2c.1-.7.2-1.5.3-2.3zm-11.5-11.4c.2-1.9.4-3.3.6-4.2.2-1 .4-1.4.4-1.4s-.3.5-.5 1.4c-.3.9-.7 2.4-1 4.2-.7 3.3-1.4 8-2 13.9h1.8c.1-5.9.4-10.6.7-13.9z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m137.9 23-2.1 5.7c-1.3 3.6-3.4 8.8-5.6 15.3h2c1.7-6.4 3.2-11.5 4.2-15.1 1-3.8 1.5-5.9 1.5-5.9zm66 9s-1.3 1.4-3.1 4.3c-1.1 1.9-2.4 4.5-3.6 7.7h1.5c.8-3 1.7-5.5 2.6-7.4 1.5-3.1 2.6-4.6 2.6-4.6zm-15.5-5.8c.1-2 .3-3.5.6-4.4.3-1 .9-1.3.8-1.3 0 0-.5.2-1 1.2-.5.9-.8 2.5-1.1 4.4-.5 3.9-.5 9.7-.1 16.9 0 .3 0 .7.1 1h2.1l-.2-1.2c-.8-7-1.3-12.7-1.2-16.6zm-8-3.2s-.4 2.1-1.3 5.9c-.9 3.6-2.2 8.8-3.9 15.1h1.9c1.2-6.3 2.1-11.4 2.6-15 .5-3.9.7-6 .7-6zm55.5 9-1 5.4c-.3 1.8-.8 4-1.3 6.6h1.3c.3-2.6.5-4.8.6-6.6.3-3.5.4-5.4.4-5.4zm4.5.5s-1 4.2-1.9 11.5h1.2c.3-7.3.7-11.5.7-11.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M239.9 32s-.2 1.9 0 5.4c.1 1.8.3 4 .6 6.6h1.3c-.6-2.6-1-4.9-1.3-6.7-.6-3.4-.6-5.3-.6-5.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m242.9 23.5-1.2 5.8c-.7 3.5-1.8 8.5-2.9 14.7h1.9c.7-6.1 1.3-11.1 1.6-14.6.4-3.8.6-5.9.6-5.9zm-40-9s-1.1 8.9-1 23.6c0 1.9 0 3.8.1 5.9h2.4c-.2-2.1-.3-4.1-.5-5.9-1.2-14.7-1-23.6-1-23.6zm3.7 14c-.1-3.9-.2-6-.2-6s-.1 2.1-.4 6c-.3 3.7-.8 9-1.4 15.5h1.9c.1-6.5.2-11.8.1-15.5zM173.9 35l-.4 5.2c-.1 1.1-.2 2.4-.3 3.8h1c0-1.4-.1-2.7-.1-3.7-.1-3.4-.2-5.3-.2-5.3zm-9.5-18.5s-.7 2.1-1.6 6.1c-.9 4-1.8 9.8-2.1 17.2-.1 1.4-.1 2.8-.1 4.2h2.3c-.1-1.4-.1-2.9-.1-4.2-.5-14.6 1.7-23.3 1.6-23.3zM127.9 36s-1.3 1.2-3 4.1c-.6 1.1-1.3 2.4-1.9 3.9h1.1c.4-1.4.8-2.6 1.3-3.6 1.3-3 2.5-4.4 2.5-4.4zm14.5 4.5c1-7.6 2.3-13.6 3.3-17.7s1.7-6.3 1.6-6.3c0 0-.9 2.2-2.2 6.2-1.4 4-3.1 10-4.6 17.5-.2 1.2-.5 2.5-.7 3.8h2.2c.2-1.2.3-2.3.4-3.5zm7.5-11.2c.4-3.7 1-5.8.9-5.8 0 0-.8 1.9-1.5 5.7-.7 3.5-1.3 8.6-1.5 14.8h1.9c-.3-6.2-.2-11.2.2-14.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M157.4 36.5c.9-3.1 2-5.6 3.1-7.6 2.2-4 3.9-5.9 3.9-5.9s-1.9 1.7-4.4 5.6c-1.2 1.9-2.6 4.4-3.7 7.6-.9 2.3-1.6 5-2.1 7.9h1.8c.3-2.8.8-5.4 1.4-7.6zm12 2s-.1 1.9-.3 5.3v.2h.6v-.2c-.1-3.4-.3-5.3-.3-5.3zm71-7s1 4.5 1.5 12.5h1.3c-.4-2.8-.8-5.1-1.3-7-.9-3.6-1.5-5.5-1.5-5.5zM238.5 44h.3c.1-1 .1-1.5.1-1.5s-.1.5-.4 1.5zm-90.1-1.5s.2.4.3 1.2v.3h.2c0-.1 0-.2-.1-.3-.2-.8-.4-1.2-.4-1.2zm39.5-2.9c.2-2.4.4-4.6.4-6.3.1-3.4 0-5.3 0-5.3s-.1 1.9-.6 5.3c-.3 1.7-.6 3.8-1.1 6.2-.3 1.4-.5 2.9-.7 4.6h1.7c.1-1.7.2-3.1.3-4.5zm18-6.6s1.6 1.3 2.9 4.7c.6 1.7 1.1 3.8 1.4 6.3h1.3c-.5-2.6-1.3-4.9-2.1-6.6-1.7-3.3-3.6-4.4-3.5-4.4zm4.5-.2c-.6-.6-1.1-.8-1.1-.8s.4.2.9.9 1.2 1.8 1.8 3.3c.8 2 1.7 4.6 2.5 7.9h1.6c-1.2-3.4-2.4-6.1-3.5-8.1-.8-1.6-1.5-2.6-2.2-3.2zM197.1 44h1.8c1.1-10.7 2.5-17 2.5-17s-2.2 6.2-4.3 17zm-70.7-21.7c.8-4.1 1.5-6.3 1.4-6.3 0 0-.9 2.1-2 6.1-1.1 4-2.4 10-2.8 17.7-.1 1.3-.1 2.8-.1 4.2h2.3c-.1-1.4-.1-2.8-.2-4.2-.1-7.4.7-13.4 1.4-17.5zm45.4 21.2c.7-6.7 2-12 3.1-15.5 1.1-3.6 2-5.4 2-5.4s-1.1 1.7-2.6 5.2-3.2 8.7-4.5 15.4c-.1.3-.1.6-.1.8h2.1v-.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M156.1 43.2c.4-3.4.8-5.2.8-5.2s-.6 1.8-1.4 5.1c-.1.3-.1.6-.2.9h.7c.1-.3.1-.5.1-.8zm40.9.8h1.7c-1.8-9.9-1.8-16-1.9-16 .1 0-.6 6 .2 16zm21.1-12.8c-.9 3-2 7.3-2.8 12.8h1.8c.7-11.4 2.9-18 2.8-18 0 0-.8 1.8-1.8 5.2zm-8.4 1.8.7-5.5s-.5 1.9-1.3 5.4c-.6 2.8-1.4 6.5-2.2 11.1h1.7c.4-4.5.8-8.3 1.1-11zm27.2-10s-.8 1.8-1.9 5.4c-1.1 3.5-2.4 8.8-3.1 15.5v.1h2c.4-13.2 3-21 3-21zm-96.4 21h.5c0-2.6-.1-4-.1-4s-.1 1.4-.4 4z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M231.6 42.9c-.2.4-.3.7-.5 1.1h.8c1.1-3.6 2-5.5 2-5.5s-1 1.5-2.3 4.4zm-76.9-10.2c0 2.8.2 6.7.9 11.3h1.7c-2.3-10.5-2.4-17-2.4-17s-.2 2-.2 5.7zm-15.1 2.9c-.4-.8-.8-1.1-.7-1.1 0 0 .3.4.6 1.2.3.8.6 2.1.8 3.7.1 1.3.2 2.8.1 4.6h1.1c-.1-1.8-.3-3.3-.6-4.6-.4-1.7-.9-3-1.3-3.8zm52.6 8.4h1c-.1-5.7-.4-9-.4-9 .1 0-.1 3.3-.6 9zm-1.3-12.2c1.7-3.5 3-5.2 2.9-5.3 0 0-1.5 1.6-3.5 5-1.7 2.8-3.6 7.1-5 12.5h1.8c1-5.2 2.5-9.4 3.8-12.2zm34 6.2s.7 1.8.7 5.1v.9h.7c0-.3 0-.7-.1-1-.4-3.4-1.4-5-1.3-5zm24.6-6c-.1-3.8-.2-6-.2-6l-.5 5.9c-.2 3-.6 7.1-1.1 12.1h1.7c.2-5 .2-9 .1-12zm-6.3.6c.9-3.4 1.7-5.1 1.6-5.1 0 0-1 1.6-2.2 4.9-1 2.7-2.1 6.7-2.8 11.6h1.7c.4-4.8 1-8.6 1.7-11.4zm-92.9 3.3c1.2-3.5 2.1-5.4 2.1-5.4s-1.1 1.7-2.7 5.1c-.7 1.7-1.6 3.9-2.2 6.5-.2.6-.3 1.2-.4 1.8h1.4c.4-3.2 1.1-5.9 1.8-8zm-20-1.2c.6-1.6 1.5-2.6 2.1-3.3.6-.6 1-.9 1-.9s-.4.2-1.1.8c-.7.6-1.7 1.6-2.5 3.2s-1.4 3.7-2.1 6.1c-.3 1.1-.6 2.2-.9 3.4h1.6c.2-1.1.4-2.2.5-3.2.4-2.4.7-4.5 1.4-6.1zm46.6 3.3s-1.7.9-3.8 3.8c-.5.6-.9 1.4-1.4 2.2h1c.3-.7.6-1.3 1-1.9 1.6-2.9 3.2-4.1 3.2-4.1zm63-4.5s-1.4 1.5-3.5 4.5c-1.1 1.6-2.3 3.6-3.6 6h1.4c1-2.2 1.9-4.1 2.7-5.6 1.8-3.3 3-4.9 3-4.9z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M189.4 36.5s-1.5 1.1-3.1 3.9c-.6 1-1.2 2.2-1.7 3.6h1.1c.4-1.2.8-2.4 1.2-3.3 1.2-2.9 2.5-4.2 2.5-4.2zm-28 0s-1 2.6-2.2 7.5h1c.6-4.8 1.2-7.5 1.2-7.5zm83.7 7.5h.8c.4-4.5.4-7 .4-7s-.3 2.5-1.2 7zm-89.2-6s.5 1.6.7 4.5c0 .5.1 1 .1 1.5h.8c-.1-.6-.2-1.1-.3-1.6-.6-2.9-1.4-4.4-1.3-4.4zm40.5-13.5s.3 2.3-.6 6.2c-.7 3.4-2.3 7.9-4.6 13.3h1.9c1.8-5.3 3-9.8 3.4-13.2.4-4.1-.1-6.3-.1-6.3zm35 4s.8 1.9 1.3 5.5c.4 2.5.5 5.9.4 10h1.6c-.2-4.2-.6-7.6-1.3-10.2-1-3.6-2.1-5.3-2-5.3z"
					class="st0"
				/>
			</g>
			<g id="cut-3">
				<path
					fill="#228B22"
					d="M280.2 44h1.4c-.4-7.3-.7-11.5-.7-11.5s-.3 4.2-.7 11.5zm31.7-20.5s-.9 7-1.5 18.7c0 .6-.1 1.2-.1 1.8h2.1v-1.8l-.5-18.7zM353.6 44h2.1c4.5-11.9 7.7-19 7.7-19s-4.2 6.9-9.8 19zm-12.2-31c-.1 0 3.3 9.1 6.3 24.5.4 2.1.8 4.2 1.2 6.5h2.4c-.6-2.4-1.1-4.8-1.7-6.9-4-15.4-8.3-24.1-8.2-24.1zm33.8 27c.9-14.7 2.7-23.5 2.6-23.5.1 0-2.7 8.6-4.6 23.3-.2 1.3-.3 2.8-.5 4.2h2.3c.1-1.4.2-2.7.2-4zm-51.9-22.7c-1.5-2.1-3.2-3.4-4.4-3.8-1.3-.5-2-.4-2-.5 0 0 .7 0 1.9.6s2.7 1.9 4 4c2.6 4.3 4.1 11.6 5 20.7.2 1.8.3 3.7.4 5.7h2.3c-.2-2.1-.5-4.1-.8-5.9-1.3-9.2-3.4-16.5-6.4-20.8z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M322.2 36.3c.4-3.9.8-7.3 1.3-10.4.5-3 1.1-5.6 1.6-7.7 1.2-4.1 2.2-6.3 2.2-6.3s-1.3 2-2.8 6.1c-.8 2-1.6 4.6-2.3 7.6-.7 3-1.4 6.5-2.1 10.3l-1 6.1-.2 1.9h2.5l.1-1.6.7-6zm-6.5-22.5 1.2-7.3-1.8 7.2c-1.2 4.7-2.9 11.4-4.8 19.9-.7 3.2-1.5 6.7-2.2 10.3h2.6c.5-3.5 1.1-6.9 1.6-10l3.4-20.1zM303.4 24l-1.9 6.3c-1 3.4-2.4 8-4 13.7h1.7l2.9-13.5c.8-4.2 1.3-6.5 1.3-6.5zm-41 11.4c.9-16.6 4-26.4 4-26.4s-.9 2.3-2.2 6.8c-1.3 4.4-2.7 11-3.7 19.4-.3 2.8-.6 5.7-.9 8.8h2.5c0-3 .1-5.9.3-8.6zm-3.8-11.9c-.4-3.4-1-6.4-1.7-8.7-1.3-4.3-2.8-6.5-3-6.8.1.2 1.3 2.5 2.4 6.9.5 2.3.9 5.2 1.1 8.6.1 3.4 0 7.3-.4 11.6-.2 2.8-.6 5.7-1 8.8h2.5c.3-3.1.5-6 .6-8.7 0-4.3-.2-8.3-.5-11.7zM253.9 8zm23.3 36h.9c-1-4.5-1.8-7-1.8-7s.5 2.5.9 7zm-9-.7c1.4-3.4 2.9-6.3 4.1-8.9l.9-1.9.9-1.7c.6-1.1 1.1-2.1 1.5-3.1 1.7-3.7 2.7-5.7 2.7-5.7s-1.2 1.9-3.2 5.4c-.5.9-1.1 1.8-1.8 2.9l-1.1 1.6-1.1 1.8c-1.5 2.5-3.1 5.4-4.8 8.7-.3.5-.5 1-.8 1.6h2.3c.2-.2.3-.5.4-.7zm37.2-6.3s-.2 1.7-.4 5c0 .6-.1 1.3-.1 2h.9c0-.7-.1-1.4-.1-2-.3-3.2-.3-5-.3-5zm25.5-2.5s.1 3.5-.7 9.5h1.1c.1-6.1-.5-9.5-.4-9.5zm36.7 9.5h1.1c.8-5.4 1.6-8.5 1.6-8.5.1 0-1.2 3-2.7 8.5zm-14.2-9.5s-1.2 1.7-2.9 5.1c-.6 1.2-1.4 2.7-2.1 4.4h1.1c.5-1.6 1-3 1.5-4.2 1.4-3.5 2.4-5.3 2.4-5.3zm-4.7 6.8c.7-1.5 1.3-2.6 1.8-3.4.5-.7.9-1 .9-1s-.4.2-1 .9-1.3 1.7-2.2 3.2c-.5.9-1.1 1.8-1.7 3h1.1c.3-1 .7-1.9 1.1-2.7zM304.2 44h.3c.2-1.3.4-2 .4-2s-.3.7-.7 2zM280 44h1.7c1.6-10 2.2-16 2.1-16 .1 0-1.3 6-3.8 16z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M271.1 41c.6-6.9 1.4-12.3 1.9-16.1l.9-5.8s-.6 2-1.5 5.7-2.2 9.1-3.3 16c-.2 1.1-.3 2.2-.5 3.3h2.2c.1-1.1.2-2.2.3-3.1zm49.1 3h.5c-.8-2-1.4-3-1.3-3 0 0 .3 1 .8 3zm49.2-12s-.8 1.6-1.9 4.8c-.7 1.9-1.3 4.3-1.9 7.2h1.4c.7-7.7 2.4-12 2.4-12zm-5.7-1.6c1.5-3.3 2.7-4.9 2.6-4.9 0 0-1.3 1.5-3.2 4.6-1.8 3-4 7.7-5.7 13.9h2c1.3-5.9 2.9-10.5 4.3-13.6z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M273.9 24c.1 0-2 7.4-3.3 20h2c.3-12.5 1.3-20 1.3-20zm39 5.5-2.8 5.4c-1.2 2.3-2.8 5.4-4.6 9.1h1.6c1.4-3.5 2.6-6.5 3.6-8.8l2.2-5.7zm7.3 14.5h1.6c-2.2-9.8-4-15.5-4-15.5.1 0 1.1 5.7 2.4 15.5zm8.7-9s.5 1.9 1.5 5.2c.3 1.1.7 2.4 1.2 3.8h1.1c-.7-1.5-1.2-2.8-1.7-4-1.4-3.2-2.1-5-2.1-5zm32.3-5.7c.3-1.9.7-3.4 1-4.4.3-1 .7-1.4.7-1.4s-.4.4-.8 1.3-.9 2.4-1.4 4.3c-.5 1.9-1.1 4.3-1.7 7-.5 2.4-1.1 5-1.8 7.9h1.9c.5-2.8.8-5.4 1.1-7.6.3-2.8.7-5.2 1-7.1z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M359.9 26s.8 1.9 1.7 5.5c.8 3 1.7 7.2 2.6 12.5h1.8c-1.3-5.3-2.6-9.6-3.8-12.6-1.3-3.6-2.3-5.4-2.3-5.4zm-88 7.5s-.2 3.9-1 10.5h1.2c.1-6.7-.2-10.5-.2-10.5zM293.4 22s-1.1 1.8-2.8 5.3c-1.7 3.5-3.9 8.8-5.8 15.6-.1.4-.2.7-.3 1.1h2.1c0-.2.1-.4.1-.6 2.8-13.7 6.8-21.4 6.7-21.4zm0 18.6c-.3 1-.7 2.1-1 3.4h1c1-5.5 2.1-8.5 2-8.5 0 0-.9 1.7-2 5.1zM309.9 20s-1.2 8.5-1.3 22.6V44h2.1c0-.5-.1-1-.1-1.4-.9-14.1-.7-22.6-.7-22.6zm16 10s-.3 2-.9 5.7c-.3 2.2-.8 5-1.4 8.3h1.4c.3-3.3.5-6.1.6-8.3.2-3.7.3-5.7.3-5.7zm14.5-.5s.8 2 1.8 5.7c.6 2.3 1.3 5.3 1.8 8.8h1.5c-.8-3.7-1.8-6.7-2.6-9-1.5-3.6-2.6-5.5-2.5-5.5zm-6.7-8.1c.6-3.5 1.2-5.4 1.2-5.4s-.8 1.8-1.8 5.3-1.9 8.7-2.3 15.3c-.1 2.3-.2 4.8-.2 7.4h2.5c-.2-2.6-.3-5-.4-7.3-.1-6.5.4-11.7 1-15.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M366.9 28.5s-1 1.6-2.2 4.8c-1 2.6-2 6.2-2.9 10.7h1.7c.5-4.4 1.1-8 1.8-10.5.8-3.3 1.6-5 1.6-5zm.9 6.4c1.3-7.4 2.2-13.4 2.6-17.5.4-4.1.5-6.4.5-6.4s-.3 2.3-1.1 6.3c-.8 4.1-2.1 9.9-3.9 17.2-.7 2.9-1.5 6.1-2.2 9.5h2.6c.5-3.2 1-6.2 1.5-9.1zM279.7 44h1.1c1.2-6.1 2.1-9.5 2.1-9.5s-1.4 3.4-3.2 9.5zm5.2-8s.3 2.9.1 8h.9c-.1-1.1-.1-2.1-.2-2.9-.4-3.3-.8-5.1-.8-5.1zm6.6 5.7c1.3-3.2 2.4-4.7 2.4-4.7s-1.3 1.4-3 4.4c-.4.7-.8 1.6-1.2 2.6h1c.2-.8.5-1.6.8-2.3zm17.4-13.2s-.1 2-.5 5.7c-.3 2.5-.7 5.9-1.2 9.8h1.5c.2-4 .3-7.3.3-9.8 0-3.7-.1-5.7-.1-5.7zm9-12.5s-.4 9.5-1.4 25.1c-.1.9-.1 1.9-.2 2.9h2.2v-2.8c0-15.7-.7-25.2-.6-25.2zm-5 10.5s-.7 2-1.5 5.8c-.6 2.9-1.2 6.9-1.6 11.7h1.6c0-11 1.5-17.5 1.5-17.5zM349.3 44h.4l-.3-3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M365.7 44h.8c-.5-3.9-1.1-6-1.1-6s.2 2.1.3 6zm-105.1-.8c.1-2.5 0-4.7-.2-6.4-.3-3.5-1.1-5.3-1.1-5.3s.5 1.9.4 5.3c0 1.7-.2 3.8-.5 6.3l-.1.9h1.3c.2-.3.2-.5.2-.8zm2.1-8.8c.1-1.6.4-2.9.7-3.7.3-.8.5-1.2.5-1.2s-.3.3-.7 1.1c-.4.8-.8 2-1.1 3.7-.5 2.4-.7 5.7-.7 9.7h1.6c-.4-3.9-.5-7.2-.3-9.6zm14-5c-.8-.7-1.3-.9-1.3-.9-.1 0 2 1.2 3.7 4.8 1.2 2.6 2.2 6.2 2.9 10.7h1.6c-1-4.7-2.4-8.5-3.9-11-1.1-1.8-2.2-2.9-3-3.6zm16.3.2c.9-4 1.9-6.1 1.9-6.1s-1.2 1.9-2.5 5.9c-1.1 3.4-2.2 8.4-2.6 14.6h1.8c0-6.1.5-11 1.4-14.4zm1.7 5.2c.9-3.6 2.2-5.3 2.1-5.3 0 0-1.4 1.5-2.7 5.1-.8 2.3-1.6 5.5-1.8 9.4h1.5c-.1-3.7.3-6.9.9-9.2zm24.2-1.3.7 5c.2 1.5.5 3.4.8 5.5h1.3c-.6-2.2-1.1-4.1-1.5-5.6l-1.3-4.9zM332.4 23s-2.9 7.6-4.8 21h2c.9-13.2 2.8-21 2.8-21zm8.5 10-.3 5.5c-.1 1.5-.2 3.4-.3 5.5h1.2c-.1-2.1-.2-4-.2-5.5l-.4-5.5zm-4.2 7.7c.7-3.7 1.4-7.1 1.7-10.1.3-3 .3-5.6.2-7.7-.1-4.2-.3-6.5-.2-6.5 0 0-.1 2.3-.4 6.4-.2 2.1-.4 4.6-.9 7.5-.5 2.9-1.4 6.2-2.4 9.8-.3 1.2-.6 2.4-.9 3.7h2.3c.2-.9.4-2 .6-3.1zm29.7-5.7s.3 1.7.8 4.9c.2 1.2.4 2.6.6 4.1h1.1c-.4-1.6-.7-3.1-1.1-4.3-.9-3-1.4-4.7-1.4-4.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m260.4 29.5.9 5.7c.4 2.3.8 5.3 1.4 8.8h1.5c-.8-3.6-1.6-6.6-2.2-9l-1.6-5.5zm12.4 3.5c-1.3-3.4-2.4-5-2.4-5s.9 1.8 1.8 5.2c.7 2.7 1.2 6.3 1.2 10.8h1.7c-.2-1.7-.4-3.2-.6-4.7-.5-2.5-1.1-4.6-1.7-6.3zm23.4 7.7c1.8-15.2 4.8-24.2 4.7-24.2.1 0-3.9 8.6-6.7 23.9l-.6 3.6h2.2c.1-1.1.2-2.2.4-3.3zm9.9 3.2c.4-7 1.1-12.6 1.7-16.5.6-3.9 1.1-5.9 1.1-5.9s-.7 2-1.7 5.8-2.2 9.4-3.1 16.5v.2l2-.1c0 .1 0 .1 0 0zm27-5.1c-.1-3.5-.8-5.3-.8-5.3s.4 1.9.1 5.3c-.1 1.5-.3 3.2-.5 5.2h1.2c.1-2 .1-3.8 0-5.2zm14.6-10.3 1.7-6-2.2 5.8c-1.3 3.6-3.4 8.9-4.8 15.7h2c.8-6.6 2.3-11.9 3.3-15.5zm-31.1 8.3c-.4-1.5-.8-2.9-1-4.3-.6-2.7-1.1-5.1-1.7-6.9-1.2-3.8-2.5-5.5-2.5-5.5s1.1 1.9 1.9 5.7c.4 1.9.7 4.2 1.1 7 .2 1.4.4 2.9.7 4.4.3 1.5.5 3.2.7 4.9.1.6.2 1.3.2 2h2.2c-.1-.8-.3-1.6-.4-2.3-.5-1.9-.8-3.5-1.2-5zm33.3.8c.1-3.3 0-5.1 0-5.1s-.2 1.8-.6 5.1c-.2 1.7-.6 3.9-1 6.4h1.3c.1-2.5.2-4.7.3-6.4zm20 6.4h1.6c-.9-10.1-1.7-16-1.7-16l.1 16zm-66-7s-1.3 2.4-2.9 7h1c1-4.5 1.9-7 1.9-7zM289 44h.4c.3-1.6.6-2.5.6-2.5-.1 0-.5.9-1 2.5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M259.7 44h1.7l-1-19s-.4 7.1-.7 19zm54.2-3.2c.3-2.7.7-5 1.3-6.8 1.1-3.6 2.2-5.5 2.2-5.5s-1.3 1.7-2.8 5.3c-.7 1.8-1.4 4.1-1.9 6.8-.2 1.1-.4 2.2-.5 3.4h1.5c0-1.1.1-2.2.2-3.2zm17.5 3.2h.4c-.2-1.9-.4-3-.4-3v3zm-5.5-8s-.7 1.6-1.8 4.7c-.4 1-.8 2.1-1.2 3.3h1c.3-1.2.5-2.2.8-3.1l1.2-4.9zm-20.6 8h.8c.4-3.8.7-6 .7-6 .1 0-.6 2.1-1.5 6zm-32.6 0h.8c.8-3.9 1.4-6 1.4-6s-.9 2.1-2.2 6z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M260.2 44h1.1c-.4-6.1-.9-9.5-.9-9.5-.1 0 0 3.5-.2 9.5zm29.1-2.9c-.2-3.3-.5-5.1-.5-5.1s.1 2.9-.4 8h.9c.1-1.1.1-2 0-2.9zm-.4-10.1s-.3 1.9-1 5.5c-.4 2-.9 4.6-1.6 7.5h1.4c.3-2.9.6-5.5.8-7.5.3-3.5.4-5.5.4-5.5zm-4 2s-.2 4.1-1.4 11h1.2c.2-2.2.3-4.1.3-5.7 0-3.4-.1-5.3-.1-5.3zm21.5 11h.2l.3-1.5s-.2.5-.5 1.5zm24.5-19s-.3 7.1-1.7 19h1.7c.5-11.9 0-19 0-19zm-6.3 11.6.7-7.4.6-6.2-1.2 6.1-1.3 7.3-.8 4.6c-.2 1-.3 2-.5 3h1.9c.1-1 .2-1.9.3-2.8l.3-4.6zm37.3-2.1s.9 1.6 1.5 4.7c.3 1.3.4 2.9.5 4.8h1.2c-.3-1.9-.6-3.6-1.1-4.9-1-3.2-2.2-4.6-2.1-4.6zm-1.5 1.5s.1 2.9-.5 8h1c0-1.3 0-2.4-.1-3.4-.1-3-.4-4.6-.4-4.6zm-41-2.5s-1.1 1.7-2.7 5.1c-.7 1.5-1.5 3.3-2.3 5.4h1.2c.6-2 1.2-3.8 1.7-5.2 1.2-3.5 2.1-5.3 2.1-5.3zm-45.6-3.7c-1.6 3.3-3.6 8.1-5.4 14.2h1.9c3-12.8 6.7-20 6.6-20 0 0-1.2 2-3.1 5.8z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m261.9 35-.4 5.4c-.1 1.1-.2 2.3-.3 3.6h1c0-1.3-.1-2.5-.1-3.6-.1-3.5-.2-5.4-.2-5.4zm114.2 9h1.9c3-12.7 5.9-20 5.8-20 .1 0-3.7 7.2-7.7 20zm-71.7-15s-1.9 1.1-4.3 4.1c-1.9 2.4-4 6.1-5.8 10.9h1.7c1.3-4.5 2.9-8.1 4.5-10.5 2.1-3.2 3.9-4.5 3.9-4.5z"
					class="st0"
				/>
			</g>
			<g id="cut-4">
				<path
					fill="#228B22"
					d="M424.8 31.4s1.2 1.7 2.7 5c.9 2 1.9 4.5 2.9 7.6h1.5c-1.3-3.3-2.6-6-3.8-7.9-1.9-3.2-3.3-4.7-3.3-4.7zM438.3 44h.4c-.3-2-.4-3.1-.4-3.1V44zm-30.5-6.1s.6 1.5 1.2 4.3l.3 1.8h.9c-.2-.7-.4-1.4-.6-2-1-2.8-1.8-4.1-1.8-4.1z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="m425.3 41 .2-6.2c.2-7.9.4-14.2 1-18.5.3-2.1.6-3.8 1-4.9.4-1.1.7-1.6.7-1.6s-.4.4-.9 1.5c-.5 1-1 2.7-1.5 4.8-1 4.3-1.7 10.6-2.4 18.5l-.6 6.2c-.1 1-.2 2.1-.3 3.2h2.5c.3-1 .3-2 .3-3zM447 23.8c.9-4.2 1.8-6.4 1.8-6.4s-1.2 2.1-2.4 6.3c-1.2 4.2-2.5 10.5-2.7 18.4V44h2.1l-.1-1.9c-.3-7.8.4-14.1 1.3-18.3zM415.3 44h2c-4-14.9-8.1-23.3-8.1-23.3s3.1 8.6 6.1 23.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M422.1 44h1.4c1.5-8.4 2.8-13.1 2.8-13.1s-1.9 4.7-4.2 13.1zm14.7-20.1s-1.4 1.9-3.3 5.6c-1.7 3.3-3.8 8.3-5.7 14.6h1.9c1.4-6.1 3-10.9 4.4-14.3 1.5-4 2.7-5.9 2.7-5.9zm4.3 17.1c.2-4 .7-6.2.7-6.2s-.7 2.1-1.3 6.1c-.1.9-.3 1.9-.4 3.1h.9c0-1.1.1-2.1.1-3zm1.4-.4c.6-3.4 1.3-5.2 1.3-5.2s-.9 1.7-1.9 5.1c-.3 1-.6 2.2-.9 3.5h1c.1-1.3.3-2.4.5-3.4zm-2.2-18.2s-.4 2.2-1.3 6.1L435.3 44h1.9c1-6.5 1.9-11.7 2.4-15.4.5-4 .7-6.2.7-6.2z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M437.4 42.8c.3-3.2.9-4.9.9-4.9s-.8 1.6-1.5 4.8c-.1.4-.2.8-.2 1.3h.8c-.1-.4 0-.8 0-1.2z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M438.8 37.6c.4-3.7.5-5.8.5-5.8s-.3 2-1.1 5.7c-.4 1.8-.9 3.9-1.5 6.5h1.3c.3-2.5.6-4.6.8-6.4zM433 44h1.6c-.1-9.8-.2-15.6-.3-15.6 0 0-.6 5.7-1.3 15.6zm-17.7-4.1s-.4 1.4-1.1 4.1h.5c.4-2.7.6-4.1.6-4.1zm2.5-5s.1 1.8-.5 5c-.2 1.2-.5 2.6-.9 4.1h1.1c.2-1.5.4-2.9.5-4.1.1-3.3-.2-5-.2-5zm11.6 9.1h.5c0-2.4-.1-3.6-.1-3.6s-.1 1.2-.4 3.6zm.6-5.9s.4 2.1.5 5.9h.8c-.1-.5-.1-.9-.2-1.3-.6-3-1.1-4.6-1.1-4.6zm27 4.1c-.8-.7-1.5-1.3-2.1-1.9-1.2-1.2-1.9-2.3-2.2-3.2-.3-.8-.4-1.3-.4-1.3s0 .5.3 1.3c.3.9.8 2.1 1.9 3.5.5.7 1.2 1.4 1.9 2.2.3.4.7.7 1 1.1h1.5c-.7-.6-1.3-1.2-1.9-1.7zm38.8-4.8s-1.4 1.2-3.5 3.7c-.7.8-1.5 1.8-2.3 2.9h1.2c.6-.9 1.1-1.8 1.6-2.5 1.8-2.7 3-4.1 3-4.1zM461 17.6c-1.4-4-2.3-6.2-2.3-6.2s.6 2.2 1.7 6.4c1 4.1 2.3 10.2 3.3 17.8.4 2.6.6 5.5.9 8.5h2.5c-.4-3.1-.9-6.1-1.4-8.8-1.5-7.7-3.3-13.7-4.7-17.7zm26.5 25.6c0-2.4 0-4.5-.2-6.2-.3-3.4-1.1-5.1-1.1-5.1s.5 1.8.5 5.1c0 1.7-.2 3.7-.5 6.1 0 .3-.1.6-.1.9h1.3c.1-.3.1-.6.1-.8z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M458.8 42.9c1.1-7.2 2.4-13 3.4-16.9 1-3.9 1.6-6.1 1.6-6.1s-.8 2.1-2.2 5.9c-1.3 3.8-3.1 9.5-4.7 16.7l-.3 1.5h2.1c0-.4 0-.8.1-1.1zm15.5-.5s-.1.6-.3 1.6h.2c.1-1.1.1-1.6.1-1.6zm-3-11s-.8 2.1-2.5 6L466 44h1.3c.8-2.5 1.6-4.6 2.1-6.4 1.3-4 1.9-6.2 1.9-6.2zM482.1 44h1.9c2.8-13.4 5.8-21.1 5.8-21.1s-3.9 7.5-7.7 21.1z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M483.2 44h1.3c1.4-6.8 2.8-10.6 2.7-10.6.1 0-1.9 3.7-4 10.6zm-26.9-19.6s.6 2.2 1.4 6.2c.6 3.3 1.3 7.8 1.8 13.4h1.7c-.9-5.7-1.9-10.3-2.9-13.6-1.2-3.9-2.1-6-2-6zm-1.5 9.5s-1.3 1.7-3 5.3c-.6 1.3-1.3 3-2 4.8h1.1c.5-1.7 1-3.3 1.5-4.6 1.3-3.6 2.4-5.5 2.4-5.5zm25-4.5s-.4 5.4-1.3 14.6h1.4c.2-9.3-.2-14.6-.1-14.6z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M462 33.5c0-3.7-.2-5.7-.2-5.7s-.1 2-.4 5.7l-1 10.5h1.6V33.5zM451.9 44h1.5c-.7-9.2-1.1-14.6-1.1-14.6s-.3 5.4-.4 14.6zm25.9-8.6s-.8 1.6-2.1 4.7c-.5 1.1-1 2.4-1.6 3.9h1.1c.4-1.4.7-2.6 1-3.7 1-3.2 1.6-4.9 1.6-4.9zm-9-9.5c.1 0-1.1 6.7-1.5 18.1h1.7c-.5-11.3-.2-18.1-.2-18.1zm2.5 10.5-1.6 6.2c-.1.4-.2.9-.3 1.4h.8c.1-.4.1-.9.2-1.3.6-4.1.9-6.3.9-6.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M473.6 34.9c-.7-.6-1.3-.5-1.3-.5s.6-.1 1.2.6 1 2 1.2 3.7c.2 1.5.2 3.3.1 5.3h1.2c-.1-2.1-.3-3.9-.6-5.4-.6-1.8-1.1-3.1-1.8-3.7zm-7.8 9.1h1.6c1.5-9.6 3-15.1 2.9-15.1 0 0-2.2 5.4-4.5 15.1z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M474.6 44h.3c.5-1.4.8-2.1.8-2.1.1 0-.4.7-1.1 2.1zm6.2-4.1s-.1 1.5-.6 4.1h.5c.2-2.7.1-4.1.1-4.1zm-25.1-1.6c.2-2.8.2-5.2.1-7.1-.1-2-.4-3.5-.8-4.4-.4-1-.7-1.4-.7-1.4s.3.5.5 1.4c.3 1 .4 2.5.4 4.4-.1 1.9-.3 4.3-.7 7l-.7 4.4c-.1.5-.1 1-.2 1.5h1.7l.1-1.3.3-4.5zm8.1-6.9s-.1 4.6-.8 12.6h1.3c-.1-8-.6-12.6-.5-12.6zM491.1 44h1.2c1.5-6.4 1.9-10.1 1.9-10.1.1 0-.9 3.7-3.1 10.1zm-9.8 0h1.4c1.1-8.3 2.1-13.1 2.1-13.1s-1.6 4.7-3.5 13.1zM500 29.1c-.7 3.3-1.7 8.4-2.9 14.9h2l.9-9.7v-5.2z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M495.8 44h1c-1.9-5.1-3-8-3-8 .1 0 .7 2.9 2 8z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M494.8 38.4c-1-3.4-1.4-5.4-1.4-5.4s.1 2 .8 5.6c.2.9.4 1.9.7 3 .2.8.3 1.6.5 2.5h1.2c-.3-1-.6-1.9-.9-2.8-.3-1.1-.6-2-.9-2.9zm3.1 1.6s-.2 1.4-.5 4h.6c-.1-2.6-.1-4-.1-4zm2-7.5s-.3 4.2-1.1 11.5h1.2c.1-7.3-.1-11.5-.1-11.5zm-8.5 1s-.1 1.9-.5 5.2c-.2 1.5-.4 3.3-.7 5.3h1.2c.1-2 .2-3.8.2-5.2-.1-3.4-.2-5.3-.2-5.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M494.2 37.9c0-1.7-.1-3.2-.1-4.7 0-2.9 0-5.4.1-7.4l.2-6.3s-.3 2.2-.8 6.3c-.2 2-.5 4.5-.7 7.4-.1 1.5-.2 3-.3 4.7-.1 1.7-.1 3.4-.2 5.3v.9h2c0-.3 0-.6-.1-.9 0-1.9-.1-3.7-.1-5.3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M493.9 32s-.1 1.8-.5 4.9c-.3 1.9-.7 4.3-1.2 7.1h1.4c.2-2.8.3-5.2.4-7 0-3.2-.1-5-.1-5z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M491.9 36.5s.5 2.7.5 7.5h1c-.1-1.1-.3-2.1-.4-2.9-.6-3-1.1-4.6-1.1-4.6zm5.3 7.5h.4l-.2-3s-.1 1.1-.2 3z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M500 28.6v-1.7c-1.9 3.4-4.2 8.5-6.1 15.1-.2.7-.4 1.3-.6 2h2.2l.3-1.5c1.3-5.8 2.8-10.5 4.2-13.9zm-10.3 12.9c.4-3.3 1.2-5 1.1-5 0 0-1 1.6-1.7 4.9-.2.8-.3 1.6-.5 2.6h.9c.1-.9.2-1.7.2-2.5zm-1.2-6.3c.9-3.4 1.4-5.2 1.4-5.2s-.8 1.7-2 5c-.8 2.3-1.9 5.3-2.9 9h1.6c.6-3.6 1.3-6.6 1.9-8.8zm-19 3.3c1.6-3.1 2.9-4.6 2.8-4.6 0 0-1.4 1.3-3.4 4.3-1 1.5-2 3.4-2.9 5.8h1.3c.7-2.2 1.4-4.1 2.2-5.5zm-9.7-2.1s-.8 1.7-2 4.8c-.3.8-.7 1.8-1.1 2.9h1c.2-1 .5-1.9.7-2.7.8-3.3 1.4-5 1.4-5zM413.4 44h1.1c-.7-6.4-1.2-10.1-1.1-10.1-.1 0-.1 3.7 0 10.1zm-13.7-1.6c1.4-7.7 3.2-13.7 4.4-17.9l1.8-6.5-2.4 6.3c-1.5 4.1-3.8 10-5.7 17.7-.2.7-.3 1.3-.5 2h2.1c.1-.5.2-1.1.3-1.6zm-9.9 1.6h1c-.2-5.1-.5-8-.5-8s-.1 2.9-.5 8zm17.1-16.5s.8 2 1.7 5.7c.6 2.7 1.2 6.4 1.4 10.8h1.6c-.5-4.6-1.5-8.3-2.4-11-1.3-3.7-2.4-5.5-2.3-5.5zm-9.3 14.8c.7-3.1 1.3-4.8 1.2-4.8 0 0-.7 1.6-1.8 4.6-.2.6-.4 1.2-.6 1.9h.9c.1-.6.2-1.2.3-1.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M409.2 27.7c.9-4.1 2-6.1 2-6.1s-1.3 1.9-2.6 6c-1.2 3.8-2.1 9.5-2 16.5h1.9c-.6-7-.2-12.6.7-16.4zm-18 16.3h.7c.3-3.2.5-5 .5-5s-.5 1.8-1.2 5zM380.9 8s-.7 8.8-1.7 23.3c-.3 3.9-.5 8.1-.8 12.7h2.8V31.3c-.1-14.5-.3-23.3-.3-23.3zm53.9 22.2c0-3.6-.2-5.6-.2-5.6s-.1 2-.4 5.6c-.3 3.3-.9 8-1.7 13.9h1.9c.3-5.9.4-10.6.4-13.9zM384.7 44h.6c-.1-2.9-.4-4.5-.4-4.5s0 1.6-.2 4.5zm5.1-17.3c.3-3.7.6-5.7.6-5.7s-.5 2-1.2 5.6c-.7 3.7-1.5 9-1.9 15.8 0 .5-.1 1-.1 1.5h2.1v-1.5c-.1-6.6.2-12 .5-15.7zm8.1-12.7c-.1 0 1.8 9.1 2.5 24.2.1 1.8.2 3.8.2 5.8h2.4c-.2-2.1-.4-4.1-.6-6-1.8-15.1-4.6-24-4.5-24z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M383.8 44h1.4c.7-8.5 1.2-13.5 1.2-13.5s-1.1 4.9-2.6 13.5zm11.6-9.5s.9 1.6 1.7 4.9c.3 1.3.6 2.9.8 4.6h1.1c-.4-1.9-.9-3.5-1.4-4.8-1.1-3.2-2.3-4.7-2.2-4.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M385 38.8c.6-7.2 1.1-13.1 1.3-17.1.2-4 .1-6.2.1-6.2s-.2 2.2-.7 6.2c-.5 4-1.5 9.7-2.6 16.9-.3 1.7-.5 3.5-.8 5.4h2.3c.2-1.8.3-3.5.4-5.2zm5.4-8.8s-.3 1.8-.4 5.3c-.1 2.3 0 5.2.4 8.7h1.5c-.7-3.5-1.1-6.5-1.3-8.8-.3-3.3-.2-5.2-.2-5.2z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M384.1 39.1c.2-4 .5-7.6.6-10.7.1-3.2.1-5.9 0-8.1-.3-4.4-.9-6.8-.9-6.8s.4 2.4.2 6.8c-.1 2.2-.3 4.9-.6 8L382 38.9c-.2 1.6-.4 3.3-.5 5.1h2.3c.2-1.7.2-3.3.3-4.9zm18-13.5c.7-3.9.7-6.1.7-6.1s-.3 2.1-1.3 5.9c-1 3.8-2.9 9.1-5.3 15.9l-.9 2.7h2.3l.6-2.1c1.8-6.9 3.3-12.4 3.9-16.3zM416.4 44h1.8l1.2-19.4s-1.3 7.2-3 19.4zm-21.5-11.5s-1.7 1.3-3.9 4.4c-1.3 1.8-2.7 4.2-4.1 7.1h1.4c1-2.8 2.1-5.1 3.1-6.8 2-3.2 3.5-4.7 3.5-4.7z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M393.9 44h1.5c1.8-8.3 3.5-13 3.5-13s-2.4 4.6-5 13zm-12.5-13.5s0 2-.2 5.7c-.1 2.1-.2 4.7-.5 7.8h1.4c0-3.1-.1-5.7-.3-7.8-.2-3.7-.4-5.7-.4-5.7zm26.5 2s-.5 1.9-1 5.3c-.3 1.7-.6 3.8-.8 6.2h1.2c0-2.4.1-4.5.2-6.1.2-3.5.4-5.4.4-5.4z"
					class="st0"
				/>
				<path
					fill="#228B22"
					d="M402 28.8c1.4-3.5 2.4-5.3 2.3-5.3 0 0-1.1 1.7-2.9 5-1.8 3.3-4.1 8.3-6 14.9 0 .2-.1.4-.1.5h2.1v-.1c1.4-6.4 3.2-11.5 4.6-15z"
					class="st0"
				/>
			</g>
		</svg>
	);
}
