import HeaderNew from "@/components/HeaderRevised/Header";

export default function HeaderReplace({ className, toggleMenu }) {
  return (
    <>
      <div
        className="position-fixed"
        style={{ top: 0, left: 0, width: "100%" }}
      >
        <HeaderNew />
      </div>
      <div style={{ minHeight: "calc(100vh - 600px)" }}></div>
    </>
  );
}
