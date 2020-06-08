import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  const goToTop = () => {
    window.location.href = "#top";
  };

  return (
    <div className="footer">
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          &#129505;
        </span>{" "}
        by{" "}
        <Link className="nav-link" to="/about" onClick={goToTop}>
          our team
        </Link>
        <div className="socials">
          <a
            href="https://www.instagram.com/donatecovid/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram size="2.5em" />
          </a>
          <a
            href="mailto:donatecovid19team@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiMail size="2.5em" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default withRouter(Footer);
