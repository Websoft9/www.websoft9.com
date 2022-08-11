import React from "react";
import PropTypes from "prop-types";
import { CloseButtonWrap } from "./style";

const CloseButton = ({ onClick, className, ...restProps }) => {
    return (
        <CloseButtonWrap onClick={onClick} className={className} {...restProps}>
            <span></span>
        </CloseButtonWrap>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default CloseButton;
