import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo"/>
          <p>
            FlavorFly – Fresh & Delicious Food at Your Doorstep! <br/> Discover a world
            of delicious flavors with FlavorFly, your go-to app for quick and
            easy food delivery. FlavorFly offers a diverse
            menu to satisfy every craving. With a user-friendly interface,
            seamless ordering process, and real-time tracking, we bring your
            favorite dishes straight to your doorstep. Whether you're in the
            mood for a healthy bite or a comfort meal, FlavorFly delivers food
            that delights.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
