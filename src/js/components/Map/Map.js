import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';
import GOOGLE_MAP_STYLES from './MapConst';

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: -41.288614, lng: 174.779751 }}
            options={{
                styles: { GOOGLE_MAP_STYLES },
            }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: -41.288614, lng: 174.779751 }} />
            )}
        </GoogleMap>
    )),
);

export default MyMapComponent;
