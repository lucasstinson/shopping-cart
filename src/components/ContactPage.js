import React from "react";
import githubLogo from "../assets/images/github-black.png";
import discordLogo from "../assets/images/discord-logo.jpeg";
import twitterLogo from "../assets/images/twitter-logo.png";
import telegramLogo from "../assets/images/telegram-logo.png";
import instagramLogo from "../assets/images/instagram-logo.png";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="contact-page-content">
      <div className="contact-page-text-container">
        <p className="contact-page-text-1">
          We take pride in providing the best and easiest ways to buy computer
          parts.
        </p>
        <p className="contact-page-text-1">
          If you need to make a bulk order, please feel free to reach out to us
          at one of the below socials.
        </p>
      </div>
      <div className="contact-logo-container">
        <Link
          to={"https://github.com/lucasstinson/"}
          className="logo-link-container"
        >
          <img src={githubLogo} className="github-logo" alt="github logo"></img>
          <img
            src={discordLogo}
            className="discord-logo"
            alt="discord logo"
          ></img>
          <img
            src={twitterLogo}
            className="twitter-logo"
            alt="twitter logo"
          ></img>
          <img
            src={telegramLogo}
            className="telegram-logo"
            alt="telegram logo"
          ></img>
          <img
            src={instagramLogo}
            className="instagram-logo"
            alt="instagram logo"
          ></img>
        </Link>
      </div>
      <div className="contact-address">
        <div className="contact-address-title">Address </div>
        <div className="contact-street">742 Evergreen Terrace </div>
        <div className="contact-city">Springfield, US</div>
      </div>
    </div>
  );
};

export default ContactPage;
