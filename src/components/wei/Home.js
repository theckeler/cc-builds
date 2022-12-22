import Button from "../elements/Button";

import "../../scss/wei.scss";

const Home = ({ openMenu }) => {
  return (
    <div
      className="wrapper home flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <h1>Wei</h1>
      <p className="xxl-hide">Click button to start:</p>
      <Button copy="Start" addClass="bg-yellow xxl-hide" addClick={openMenu} />
    </div>
  );
};

export default Home;
