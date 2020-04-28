import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          &#129505;
        </span>{" "}
        by{" "}
        <Link className="nav-link" to="/about">
          our team
        </Link>
        <p>
          Image Source:{" "}
          <a
            href="https://ls.graphics/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Whoosh
          </a>
        </p>
      </footer>
    </div>
  );
}

export default withRouter(Footer);
