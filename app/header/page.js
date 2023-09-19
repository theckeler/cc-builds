import HeaderNew from "@/components/Header/Header";

export default function HeaderReplace({ className, toggleMenu }) {
	return (
		<>
			<div className="position-fixed" style={{ top: 0, left: 0 }}>
				<HeaderNew />
			</div>
			<div className="" style={{ minHeight: "calc(100vh - 600px)" }}></div>
		</>
	);
}
