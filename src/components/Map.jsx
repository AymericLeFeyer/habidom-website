import React, { } from 'react';
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Style
import "../style/Map.css";

const coords = {
    center : {
        lat: 50.722849,
        lng: 2.536428
    },
    zoom: 11
}

function Map() {
    return (
        <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyApmLUp7X8a-DlITCRKdG0kNYJSMqbQFiU'}}
            defaultCenter={coords.center}
            defaultZoom={coords.zoom}
        >
        <LocationPin
            lat={coords.center.lat}
            lng={coords.center.lng}

        />
            
            
        </GoogleMapReact>
        </div>
    )
}

function LocationPin(props) {
    return (
        <div className="pin">
            <FontAwesomeIcon icon={faMapMarkerAlt} />       
        
        </div>
    )

}

export default Map;