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
        <a href="/about" rel="noopener noreferrer">
          our team
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
