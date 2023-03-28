import React from "react";
import githubLogo from "../assets/images/github.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={githubLogo} alt="github logo"></img>
      <div className="footer-text">Developed by lucasstinson</div>
    </div>
  );
};

export default Footer;
