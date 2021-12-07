import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h4>
          All the love and none of the headache!
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
