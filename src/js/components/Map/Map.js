import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: -41.288614, lng: 174.779751 }}
            options={{
                styles: [
                    {
                        featureType: 'all',
                        elementType: 'labels',
                        stylers: [
                            {
                                gamma: 0.26,
                            },
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.province',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'on',
                            },
                            {
                                lightness: -50,
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.province',
                        elementType: 'labels.text',
                        stylers: [
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.province',
                        elementType: 'labels.text.stroke',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.attraction',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'simplified',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.business',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'simplified',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'simplified',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.sports_complex',
                        elementType: 'all',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'all',
                        stylers: [
                            {
                                hue: '#ff0000',
                            },
                            {
                                visibility: 'on',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.stroke',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [
                            {
                                lightness: 50,
                            },
                            {
                                hue: '#ff0000',
                            },
                        ],
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'geometry',
                        stylers: [
                            {
                                lightness: 20,
                            },
                        ],
                    },
                ],
            }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: -41.288614, lng: 174.779751 }} />
            )}
        </GoogleMap>
    )),
);

export default MyMapComponent;
