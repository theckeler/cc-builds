const Button = ({ copy, url, addClass, addClick, addStyle, srOnly }) => {
  const addPadding = { padding: "0.625rem 2.5rem" };


  

  if (url) {
    return (
      <a
        href={url}
        className={`button text-uppercase font-weight-bold text-decoration-none d-inline-block ${addClass}`}
        dangerouslySetInnerHTML={{ __html: copy }}
        style={{ ...addStyle, ...addPadding }}
      />
    );
  } else {
    return (
      <button
        onClick={addClick}
        className={`button font-weight-bold ${addClass}`}
        dangerouslySetInnerHTML={{ __html: copy }}
        style={{ ...addStyle, ...addPadding }}
      />
    );
  }
};

export default Button;
