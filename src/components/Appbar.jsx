import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

import "../style/Appbar.css";

import Logo from "../res/logo_habidom_seul.png";

class Drawer extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <Col className="fixed-top navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
          <Row>
            <nav className="navbar navbar-expand-lg navbar-light appbar w-100 logo">
              {/* Logo */}
              <Col xs={2}>
                <img src={Logo} alt="Logo Habidom" className="logo" />
              </Col>

              <Col>
                {/* First Row */}
                <Row>
                  {/* Slogan */}
                  <h2 className="slogan">
                    La domotique au coeur de votre habitation
                  </h2>
                </Row>
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
                          <NavLink className="nav-link" to="/about">
                            <p className="item">à propos</p>
                          </NavLink>
                        </li>
                        <li className="nav-item item">
                          <NavLink className="nav-link" to="/services">
                            <p className="item">Services</p>
                          </NavLink>
                        </li>

                        <li className="nav-item item">
                          <NavLink className="nav-link" to="/contact">
                            <p className="item">Contact</p>
                          </NavLink>
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
                      3 rue de l'alarme <FontAwesomeIcon icon={faHome} /> <br />{" "}
                      59190 Hazebrouck{" "}
                    </a>
                  </div>
                </Row>
              </Col>
            </nav>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Drawer;
