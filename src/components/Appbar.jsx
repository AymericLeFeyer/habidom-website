// Components
import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Style
import "../style/Appbar.css";

// Assets
import Logo from "../res/logo/logo_habidom_seul.png";
import LogoTitle from "../res/logo/habidom.png";

function Drawer(props) {
  return (
    <div className="container-fluid">
      <Col className="fixed-top navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Row id="nav">
          <nav
            className={`navbar navbar-expand-lg navbar-light w-100 appbar${
              props.scroll ? " appbar-small" : ""
            }`}
          >
            {/* Logo */}
            <Col xs={2}>
              {/*eslint-disable-next-line*/}
              <a href="#to" onClick={goTop}>
                {" "}
                <img
                  src={props.scroll ? LogoTitle : Logo}
                  alt="Logo Habidom"
                  className={`logo${props.scroll ? " logo-small" : ""}`}
                />
              </a>
            </Col>

            <Col>
              {/* First Row */}
              {!props.scroll ? (
                <Row>
                  {/* Slogan */}
                  <h2 className="slogan">
                    La domotique au coeur de votre habitation
                  </h2>
                </Row>
              ) : (
                <Row></Row>
              )}
              {/* Second Row */}
              <Row className="links">
                <nav className="navbar navbar-expand-lg navbar-light d-md-flex d-block flex-row mx-md-auto mx-0">
                  {/* If too small, display a button to expand items */}
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item item">
                        {/*eslint-disable-next-line*/}
                        <AnchorLink
                          className="nav-link"
                          href="#about"
                          onClick={function (event) {
                            props.setDisplayAbout();
                            goTop();
                          }}
                        >
                          <p className="item">À propos</p>
                        </AnchorLink>
                      </li>
                      <li className="nav-item item">
                        <AnchorLink className="nav-link" href="#services">
                          <p className="item">Services</p>
                        </AnchorLink>
                      </li>

                      <li className="nav-item item">
                        <AnchorLink className="nav-link" href="#contact">
                          <p className="item">Contact</p>
                        </AnchorLink>
                      </li>
                      <li className="nav-item item">
                        <NavLink className="nav-link" to="/project">
                          <p className="item">Votre Projet</p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </Row>
            </Col>

            {/* Contact */}

            <Col className="contact" xs={2}>
              {!props.scroll ? (
                <div>
                  <Row className="contact_line">
                    <div className="w-100">
                      <a href="mailto:contact@habidom.fr">
                        contact@habidom.fr <FontAwesomeIcon icon={faAt} />
                      </a>
                    </div>
                  </Row>
                  <Row className="contact_line">
                    <div className="w-100">
                      <a href="tel:0612345678">
                        06 12 34 56 78 <FontAwesomeIcon icon={faPhone} />
                      </a>
                    </div>
                  </Row>
                  <Row className="contact_line">
                    <div className="w-100">
                      <a
                        href="https://goo.gl/maps/qFb3Yf2jd8X5kPpp8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        3 rue de l'alarme <FontAwesomeIcon icon={faHome} />{" "}
                        <br /> 59190 Hazebrouck{" "}
                      </a>
                    </div>
                  </Row>
                </div>
              ) : (
                <Col xs={2}></Col>
              )}

              {props.scroll ? (
                <Row className="contact_line">
                  <div className="w-100">
                    <a href="mailto:contact@habidom.fr" className="brand-icon">
                      <FontAwesomeIcon icon={faAt} />
                    </a>
                    •
                    <a href="tel:0612345678" className="brand-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    •
                    <a
                      href="https://goo.gl/maps/qFb3Yf2jd8X5kPpp8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faHome} />
                    </a>
                    •
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    •
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    •
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </Row>
              ) : (
                <Row className="contact_line">
                  <div className="w-100">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    •
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    •
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-icon"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </Row>
              )}
            </Col>
          </nav>
        </Row>
      </Col>
    </div>
  );
}

function goTop() {
  window.scrollTo(0, 0);
}

export default Drawer;
