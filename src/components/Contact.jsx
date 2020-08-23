// Components
import React from "react"
import { Row, Col } from "react-bootstrap";
import Map from "../components/Map";

import "../style/Contact.css";

function Contact () {
    return (
        <div  id="contact">
            <h2>Nous contacter</h2>
            <div id="map">
            <Map />
            <Row className="contact-info ">
                <Col></Col>
                <Col>
                    <h3>Contact</h3>
                    <div >
                        <p>contact@habidom.fr</p>
                        <p>06 12 34 56 78</p>
                        <p>3 rue de l'alarme a Hazebrouck</p>
                        <p>pictos des reseaux</p>
                    
                    </div>

                </Col>

                <Col>
                    <h3>Horaires </h3>
                    <div className="mt-4">
                        <p>Lundi au Vendredi : 8h - 12h / 14h-18h</p>
                        <p>Samedi : 8h - 12h</p>
                        <p>Fermé le dimanche</p>
                        
                    
                    </div>
                
                </Col>
                <Col></Col>

            </Row>
          </div>
        </div>
    )
}

export default Contact;