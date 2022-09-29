import React from "react";
import PropTypes from "prop-types";
import { DotsWrap, Dot } from "./style";

const DividerDot = ({ className, ...props }) => {
    return (
        <DotsWrap className={className} {...props}>
            <Dot serial="first" />
            <Dot serial="second" />
            <Dot serial="third" />
        </DotsWrap>
    );
};

DividerDot.propTypes = {
    className: PropTypes.string,
};

export default DividerDot;
