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
              {/* <span role="img" aria-label="house">
                &#127968;
              </span> */}
            </Link>
          </button>
          <button class="share">
            <Link className="nav-link" to="/form">
              share a donation link!{" "}
              {/* <span role="img" aria-label="globe">
                &#127760;
              </span> */}
            </Link>
          </button>
          <button class="feedback">
            <Link className="nav-link" to="/ideas">
              feedback?{" "}
              {/* <span role="img" aria-label="light">
                &#128161;
              </span> */}
            </Link>
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
