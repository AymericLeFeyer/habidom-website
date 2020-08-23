// Components
import React, { useState } from "react";
import { Card, Row, Carousel } from "react-bootstrap";
import { CSSTransition, transit } from "react-css-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBell,
  faBolt,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

// Constants
import { ORANGE } from "../utils/constants";

// Style
import "../style/Services.css";

function Services(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="services">
      {/*If about is not clicked and scrolling, the class is "myCarouselscrolling", no margin-top set*/}
      <div
        className={`${props.about ? "" : "myCarousel"}${
          props.scroll ? "scrolling" : ""
        }`}
      >
        {/*Carousel*/}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/*Item 1*/}
          <Carousel.Item>
            <div className="d-block w-100 item-carousel item-1">
              <div className="orange-filter"></div>
            </div>
            <Carousel.Caption>
              <h3>Domotique</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/*Item 2*/}
          <Carousel.Item>
            <div className="d-block w-100 item-carousel item-2">
              <div className="orange-filter"></div>
            </div>

            <Carousel.Caption>
              <h3>Alarme</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/*Item 3*/}
          <Carousel.Item>
            <div className="d-block w-100 item-carousel item-3">
              <div className="orange-filter"></div>
            </div>

            <Carousel.Caption>
              <h3>électricité</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/*Item 4*/}
          <Carousel.Item>
            <div className="d-block w-100 item-carousel item-4">
              <div className="orange-filter"></div>
            </div>

            <Carousel.Caption>
              <h3>solution connectée</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/*Services*/}
      <Row className="d-flex justify-content-center cards">
        <button onClick={() => setIndex(0)} className="button-service">
          <Service
            icon={faHouseUser}
            selected={index === 0}
            title="Domotique"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid quos odit quo debitis dolore, eos beatae a eligendi aut? Fugiat possimus et aperiam cupiditate reprehenderit? Ducimus atque magnam maiores?"
          />
        </button>
        <button onClick={() => setIndex(1)} className="button-service">
          <Service
            icon={faBell}
            selected={index === 1}
            title="Alarme"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid quos odit quo debitis dolore, eos beatae a eligendi aut? Fugiat possimus et aperiam cupiditate reprehenderit? Ducimus atque magnam maiores?"
          />
        </button>
        <button onClick={() => setIndex(2)} className="button-service">
          <Service
            icon={faBolt}
            selected={index === 2}
            title="électricité"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid quos odit quo debitis dolore, eos beatae a eligendi aut? Fugiat possimus et aperiam cupiditate reprehenderit? Ducimus atque magnam maiores?"
          />
        </button>
        <button onClick={() => setIndex(3)} className="button-service">
          <Service
            icon={faWifi}
            selected={index === 3}
            title="solution connectée"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid quos odit quo debitis dolore, eos beatae a eligendi aut? Fugiat possimus et aperiam cupiditate reprehenderit? Ducimus atque magnam maiores?"
          />
        </button>
      </Row>
    </div>
  );
}

function Service(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Header className={["card-header align-center"]}>
          {/*Transition*/}
          <CSSTransition {...transitionStyles} active={props.selected}>
            {/*Icon*/}
            <FontAwesomeIcon icon={props.icon} />{" "}
          </CSSTransition>
        </Card.Header>
        <Card.Body>
          <h3>{props.title}</h3>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const transitionStyles = {
  defaultStyle: {
    color: "black",
  },
  enterStyle: {
    color: transit(ORANGE, 500, "ease-in-out"),
  },
  leaveStyle: {
    color: transit("black", 500, "ease-in-out"),
  },
  activeStyle: {
    color: ORANGE,
  },
};

export default Services;
