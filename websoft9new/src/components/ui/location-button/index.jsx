import React from "react";
import PropTypes from "prop-types";
import { LocationBtnWrap, LocationBtnText } from "./style";

const LocationButton = ({ className, ...props }) => {
    return (
        <LocationBtnWrap className={className} {...props}>
            <LocationBtnText type="button">
                <span className="button-icon">
                    <i className="icon fa fa-map-marker-alt"></i>
                </span>
                <span className="button-text">View on Google map</span>
            </LocationBtnText>
        </LocationBtnWrap>
    );
};

LocationButton.propTypes = {
    className: PropTypes.string,
};

export default LocationButton;
