import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer() { 

  const goToTop = () => {
    window.location.href = "#top"
  }

  return (
    <div className="footer">
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          &#129505;
        </span>{" "}
        by{" "}
        <Link className="nav-link" to="/about" onClick = {goToTop}>
          our team
        </Link>
      </footer>
    </div>
  );
}

export default withRouter(Footer);
