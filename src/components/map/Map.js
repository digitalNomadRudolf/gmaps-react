import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin";
import "./map.scss";

const Map = ({ location, zoomLevel }) => (

    <div className="map">
        <h2 className="map-h2">
            Come visit us at our campus
        </h2>

        <div className="google-map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                >
                 <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                    />
              </GoogleMapReact>  
        </div>
    </div>
);

export default Map;