import React from "react";
import { Container } from "react-bootstrap";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing flex__center">
      <div className="landing-overlay overlay"></div>
      <Container className="landing-container">
        <div className="landing-hero">
          <p className="text__subtitle landing__hero-top">
            {" "}
            Welcome to <span> Microsoft Stream</span>
          </p>

          <h1 className="header__one">Download Unlimited</h1>
          <h1 className="header__one">Movies, Drama, Music</h1>
          <h1 className="header__one">Video and More Content.</h1>

          <p className="text__subtitle landing__hero-bottom">
            Enjoy exclusive Music Video popular movies and Live shows. Subscribe
            Microsoft Stream now{" "}
          </p>
          <div className="landing-nav ">
            <div className="landing-nav-left">
              {/* <div className="landing-nav-phcode flex__center col-2">+91</div> */}
              {/* <span></span> */}
              <input
                className="landing-nav-phno col-5"
                placeholder="Email or Phone Number "
              ></input>
            </div>
            <a href="/subscribe" className="flex__center nav__submit-link ">
              Join Now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
