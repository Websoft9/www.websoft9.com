import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapMarker from "@assets/images/icons/map-marker.png";
import { GooglMapWrap } from "./style";

const Marker = ({ text }) => (
    <div className="marker">
        <img src={MapMarker} alt={text} />
    </div>
);

Marker.propTypes = {
    text: PropTypes.string,
};

const GoogleMap = ({ center, APIKey, zoom, ...restProps }) => {
    return (
        <GooglMapWrap {...restProps}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: APIKey }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker lat={center.lat} lng={center.lng} text="Marker" />
            </GoogleMapReact>
        </GooglMapWrap>
    );
};

GoogleMap.propTypes = {
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    APIKey: PropTypes.string,
    zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
    center: {
        lat: 23.7808875,
        lng: 90.2792371,
    },
    APIKey: "AIzaSyD79MY72taVRlZVX2DU6L5PXOh3ezUUKMc",
    zoom: 11,
};

export default GoogleMap;
