import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <p> &copy; {new Date().getFullYear()}</p>
        <p>
          developed by{" "}
          <a className="author-link" href="https://github.com/kishanlalbj">
            @kishanlalbj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
