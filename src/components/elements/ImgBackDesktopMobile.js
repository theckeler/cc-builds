const ImgBackDesktopMobile = ({ imgMobile, imgDesktop, alt, addCSS }) => {
  let mobileBlockCSS = { zIndex: "1" };
  let mobileImgCSS = { zIndex: "0", objectFit: "cover" };

  let desktopBlockCSS = {
    zIndex: "0",
  };
  let desktopImgCSS = {
    zIndex: "0",
    left: 0,
    top: 0,
    objectFit: "cover",
  };

  if (addCSS) {
    mobileBlockCSS = { ...ImgBackDesktopMobile, ...addCSS.mobile.block };
    mobileImgCSS = { ...mobileImgCSS, ...addCSS.mobile.img };

    desktopBlockCSS = { ...desktopBlockCSS, ...addCSS.desktop.block };
    desktopImgCSS = { ...desktopImgCSS, ...addCSS.desktop.img };
  }

  return (
    <>
      {/* MOBILE */}
      <div
        className="d-block d-lg-none w-100 h-100 position-absolute"
        style={mobileBlockCSS}
      />
      <img
        src={imgMobile}
        alt={alt}
        className="w-100 h-100 d-block d-lg-none"
        style={mobileImgCSS}
      />
      {/* DESKTOP */}
      <div
        className="d-none d-lg-block position-relative"
        style={desktopBlockCSS}
      />
      <img
        src={imgDesktop}
        alt={alt}
        className="d-none d-lg-block position-lg-absolute w-100 h-100"
        style={desktopImgCSS}
      />
    </>
  );
};

export default ImgBackDesktopMobile;
