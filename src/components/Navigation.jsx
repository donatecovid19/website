import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactGA from "react-ga";

function Navigation(props) {
  return (
    <div className="nav">
      <header>
        <ReactGA.OutboundLink eventLabel="Logo" to="/" target="_self">
          <img src="img/logo.png" alt="Logo Banner" />
        </ReactGA.OutboundLink>
        <p>
          <button class="homepage">
            <Link className="nav-link" to="/">
              home{" "}
            </Link>
          </button>
          <button class="share">
            <Link className="nav-link" to="/form">
              submit a donation link{" "}
            </Link>
          </button>
          <button id="share-mobile">
            <Link className="nav-link" to="/form">
              submit{" "}
            </Link>
          </button>
          <button class="feedback">
            <Link className="nav-link" to="/ideas">
              contact{" "}
            </Link>
          </button>
          <button class="resources">
            <a class="nav-link" href="https://donatecovid.carrd.co/">
              resources{" "}
            </a>
          </button>
          <button id="mobile-btn">
            <a className="nav-link" href="/#mobile">
              <strong>i</strong>{" "}
            </a>
          </button>
        </p>
      </header>
    </div>
  );
}

export default withRouter(Navigation);
