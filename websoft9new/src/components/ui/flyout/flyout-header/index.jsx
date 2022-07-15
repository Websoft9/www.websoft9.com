import React from "react";
import PropTypes from "prop-types";
import { FlyoutHeaderWrap } from "./style";

export const FlyoutHeader = ({ children, className, ...rest }) => {
    return (
        <FlyoutHeaderWrap className={className} {...rest}>
            {children}
        </FlyoutHeaderWrap>
    );
};

FlyoutHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
