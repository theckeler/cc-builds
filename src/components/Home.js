import { Link } from "react-router-dom";
import "../scss/home.scss";

const Home = () => {
	return (
		<div
			className="wrapper home p-8"
			style={{
				minHeight: "50vh",
				display: "d-flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<h1 style={{ textTransform: "uppercase" }}>CC Page Builds:</h1>
			<ul className="home-list">
				{/* <li style={{ marginTop: "20px" }}>
          <Link to="/base">
            Base CSS (preestabilished from
            https://cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1666955151563/css/global.css)
          </Link>
        </li> */}
				<li style={{ marginTop: "20px" }}>
					<Link to="/financing">Financing Updates</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link to="/wei">The Wei (rapid prototyping)</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<strong>Snow V2:</strong>
					<ul>
						<li>
							<Link to="/snowv2">Snow V2 Index</Link>
						</li>
						<li>
							<Link to="/snowv2/intellipower">IntelliPower</Link>
						</li>
						<li>
							<Link to="/snowv2/1x">1X</Link>
						</li>
						<li>
							<Link to="/snowv2/2x">2X</Link>
						</li>
						<li>
							<Link to="/snowv2/3x">3X</Link>
						</li>
					</ul>
				</li>
				<li style={{ marginTop: "20px" }}>
					<strong>Zero Turn V2:</strong>
					<ul>
						<li>
							<Link to="/zero-turn">Zero Turn Index</Link>
						</li>
						<li>
							<Link to="/zero-turn/ultima">Ultima</Link>
						</li>
						<li>
							<Link to="/zero-turn/ZTXSArticle">ZTXS Article</Link>
						</li>
					</ul>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link to="/customerservice">Customer Service</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link to="/xt-enduro-series">XT Enduro Series</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link to="/product-review-giveaway">Product Review Giveaway</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<a href="https://cc-site-build.vercel.app/" target="_new">
						CC Site Redo
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Home;
