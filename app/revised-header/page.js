import HeaderNew from "@/components/HeaderRevised/Header";

export default function HeaderReplace({ className, toggleMenu }) {
  return (
    <>
      <div
        id="sdb-container"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <HeaderNew />
      </div>
      <div style={{ minHeight: "80vh", backgroundColor: "#efefef" }}></div>
    </>
  );
}
