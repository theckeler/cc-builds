import Image from "next/image";
import Link from "next/link";
import ButtonMain from "@/components/Buttons/Main";
import H2 from "@/app/dealer-mini-site-v2/components/H2";

export default function Card({ className, block }) {
	return (
		<Link
			href={block.button.href}
			className={`flex flex-column h-100 ${className} ${block.className}`}
			style={{ textDecoration: "none" }}>
			{!block.p && (
				<H2 className="text-center w-100 d-block" title={block.title} />
			)}

			{!!block.img && !block.noIMG && (
				<div className="position-relative mb-2" style={{ minHeight: "200px" }}>
					<Image
						src={block.img.src}
						alt=""
						fill
						className="w-100 h-100"
						style={
							block.img.style
								? { ...block.img.style }
								: { objectFit: "contain" }
						}
					/>
				</div>
			)}

			{block.p && (
				<>
					<H2 title={block.title} />
					<p
						style={{
							overflow: "hidden",
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							fontSize: "13px",
							lineHeight: 1.4,
						}}>
						{block.p}
					</p>
				</>
			)}

			<ButtonMain
				title={block.button.title}
				className="d-block bg-secondary border-0 px-2 w-100 font-weight-bold mt-auto"
			/>
		</Link>
	);
}
