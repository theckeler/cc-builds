import jsonData from "../data/howtos-articles.json";

import HowToMaintence from "../../elements/HowToMaintence";
import Articles from "../../elements/Articles";
import AttchmentsAccessories from "../../elements/AttchmentsAccessories";

const Footer = () => {
  return (
    <>
      <HowToMaintence {...{ jsonData }} />

      <Articles {...{ jsonData }} />

      <AttchmentsAccessories {...{ jsonData }} />
    </>
  );
};

export default Footer;
