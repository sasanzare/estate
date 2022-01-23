import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import './Place.css'

const MAPBOX_TOKEN =  "pk.eyJ1IjoicGFyc2FraG9qYXN0ZSIsImEiOiJja3lxbngzYTQwbTk5Mm9tdmNybjJtZ2lsIn0.wMg-mNdJoLMVWMuD8TFvSQ";


const Place = () => {
  const [viewport, setViewport] = useState({
    latitude: 32.4279,
    longitude: 53.6880,
    zoom: 4
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
    //   console.log(newViewport)
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
        
      });
    },
    [handleViewportChange]
  );

  return (
      <div className="col-lg-5 col-md-6 col-sm-9 col-12 mb-3 mx-auto rounded overflow-hidden shadow-es" >
        <ReactMapGL 
            ref={mapRef}
            {...viewport}
            width="100%"
            height="400px"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle='mapbox://styles/parsakhojaste/ckyqp57zt0hug14oav773sq17'
        >
            <Geocoder
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-right"
            placeholder="جستجو..."
            language="Persian"
            />
        </ReactMapGL>
      </div>
  );
};




export default Place;
