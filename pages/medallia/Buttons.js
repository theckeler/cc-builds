import Cart from "@/i/Cart";
import Feedback from "@/i/Feedback";
import LiveChat from "@/i/LiveChat";

export default function Buttons() {
	const tabs = [
		//{ title: "View Cart", icon: Cart },
		{ title: "Feedback", icon: Feedback },
		{ title: "Live Chat", icon: LiveChat },
	];

	return (
		<>
			<div id="usi_container">
				<div
					id="usi_display"
					role="alertdialog"
					aria-label="usi_display"
					aria-modal="true"
					className="usi_display usi_show_css"
					style={{
						zIndex: 2000010000,
						position: "fixed",
						display: "block",
						marginRight: "-42.6vh",
						right: 0,
					}}>
					<button type="button" id="usi_close" aria-label="Close" />
					<div id="usi_content">
						<a
							id="usi_tab"
							className="usi_tab_closed"
							href="javascript:usi_js.toggle()">
							<img
								src="https://www.upsellit.com/chatskins/6919/CubCadet-TT-4-2020-minicart-grabtab.png"
								border={0}
								alt="Open"
							/>
						</a>
					</div>
				</div>
				<style
					type="text/css"
					className="usi_style_tag"
					dangerouslySetInnerHTML={{
						__html:
							".usi_display {right:0px;top:0px;}#usi_close { position:absolute;left:85%;top:0px;width:15%;height:15%;z-index:2000000300;cursor:pointer;border:none;background:none;margin:0;padding:0; } #usi_content { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000200; } #usi_background { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000100; } #usi_page { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000150; } .usi_display * {padding:0 0 0 0;margin:0 0 0 0;color:#000000;font-weight:normal;font-size:12pt;text-decoration:none;line-height:12pt;box-shadow: none;border: none; outline: none;text-align: left;font-family: Helvetica, Arial, sans-serif;float:none;} .usi_quickhide_css {display:none;visibility:hidden;} button#usi_close, button#usi_close:hover, button#usi_close:active, button#usi_close:focus { background:none;border:none;cursor:pointer; }.usi_sr_only { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px, 1px, 1px, 1px); }#usi_shadow {background-color:#000000; opacity: 0.5;filter: alpha(opacity=50);} #usi_shadow.usi_show_shadow_css {display:block;visibility:visible;} #usi_shadow.usi_hide_shadow_css {display:none;visibility:hidden;}.usi_display.usi_show_css {transition:transform 0.5s ease; transform: translate(0px, 0px); } .usi_display.usi_hide_css {transition:transform 0.5s ease; transform: translate(3000px, 0px); }",
					}}
				/>
				<style
					type="text/css"
					className="usi_style_tag"
					dangerouslySetInnerHTML={{
						__html:
							'#usi_close {  height: 1.5em;  width: 1.5em;  text-align: center;  font-size: 2em;  left: auto;  right: 0;}#usi_close:after {  content: "\\00d7";}/*hide client\'s alert*/.add-to-basket-alert {display: none !important;}.usi_display * {  font-size: 1em;  line-height: 1;  box-sizing: border-box;  font-family: Aaux Pro,Arial,sans-serif;\t}#usi_display {  height: 100vh !important;  width: 42.6vh; /*width/height*/  font-size: 1.65vh;  top: 0;  margin: 0;  position: fixed !important;}.usi_display img {  max-width: 100%;}.usi_display button {  cursor: pointer;}#usi_content {  -webkit-box-shadow: 0px 0px 37px 0px rgba(0,0,0,0.75);  -moz-box-shadow: 0px 0px 37px 0px rgba(0,0,0,0.75);  box-shadow: 0px 0px 37px 0px rgba(0,0,0,0.75); }.usi_cart {  padding: 1em;}.usi_heading {  font-weight: bold;  padding-bottom: 1em;}.usi_shipping {  font-weight: bold;  color: #0067b1;  padding: 1em 0;}.usi_total {  font-weight: bold;  padding-bottom: 1em;  border-bottom: 1px solid #ccc;  margin: 1em 0;}.usi_total span {  font-weight: bold;  float: right;}.usi_checkout {  text-align: right;}.usi_checkout .usi_link {  padding: 1em;  text-align: center;  min-width: 60%;  display: inline-block;}.usi_financing {  position: absolute;  bottom: 0;  width: 100%;  background: #FFC20F;}/* Side Slider */.usi_display {  transition: right 0.5s ease-in-out;  background-color: #efefef;}#usi_tab {  position: absolute;  left: -45px;  top: 190px;}#usi_tab img {  width: 45px;}/* Recommended Products */.usi_products {  padding: 1em;}.usi_product {  background: #fff;  padding: 1em;}.usi_product_info {  display: inline-block;  width: 70%;  padding-left: 5%;}.usi_prod_image_link {  text-align: center;  display: inline-block;  width: 30%;  height: 100%;  vertical-align: top;}.usi_prod_image {  max-width: 100%;  max-height: 100%;}.usi_name {  padding-bottom: 1em;  overflow: hidden;  display: inline-block;  width: 70%;  vertical-align: top;}.usi_price {  text-align: right;  display: inline-block;  width: 30%;  vertical-align: top;}.usi_link {  font-weight: bold;  text-transform: uppercase;  background: #ffc20f;  color: #000;  padding: 1em;  text-align: center;  display: block;  text-decoration: none;}.usi_link:hover {  color: #fff;  text-decoration: none;}',
					}}
				/>
			</div>
			<div
				className="position-fixed"
				style={{
					top: "500px",
					left: "100%",
					zIndex: 2001,
					transform: "rotate(-90deg) translateX(-100%) translateY(-100%)",
					transformOrigin: "0 0",
				}}>
				<ul className="list-unstyled d-flex flex-row mb-0">
					{tabs.map((e, i) => {
						return (
							<li className={i < tabs.length - 1 && `mr-1`} key={i}>
								<button
									className="p-1 bg-secondary border-0"
									style={{ cursor: "pointer" }}>
									<ul className="list-unstyled d-flex align-items-center">
										<li className="" style={{ width: "2em" }}>
											<e.icon className="" style={{ height: "20px" }} />
										</li>
										<li className="text-nowrap">{e.title}</li>
									</ul>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
