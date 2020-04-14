import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          &#129505;
        </span>{" "}
        by{" "}
        <a
          href="https://allisonyick.myportfolio.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Allison Yick
        </a>{" "}
        <a
          href="https://www.youtube.com/channel/UC9xFO-llZ2ontatfj9LtLxw"
          rel="noopener noreferrer"
          target="_blank"
        >
          Jack He
        </a>{" "}
        <a
          href="https://www.youtube.com/user/alohakatiex"
          rel="noopener noreferrer"
          target="_blank"
        >
          Katie Tracy
        </a>{" "}
        <a
          href="https://ykatieli.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Katie Li
        </a>{" "}
        <a
          href="https://michaelcao.tech"
          onclick="captureOutboundLink('https://michaelcao.tech'); return false;"
          rel="noopener noreferrer"
          target="_blank"
        >
          Michael Cao
        </a>{" "}
        <a href="/" rel="noopener noreferrer" target="_blank">
          Mira Dhingra
        </a>{" "}
        <a
          href="https://www.instagram.com/sancho.syquia/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sancho Syquia
        </a>
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

export default Footer;
