import React from 'react';
import Map from './Map';

import './map.css';

export default function() {
    return (
        <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWMDcwzPPDNag7ROpT0dncu6onGGWAU5A"
            loadingElement={<div />}
            containerElement={<div className="map__container" />}
            mapElement={<div className="map" />}
        />
    );
}
