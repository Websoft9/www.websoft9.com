import React from "react";
import PropTypes from "prop-types";
import { StyledCol } from "./style";

const Col = ({ children, className, ...restProps }) => {
    return (
        <StyledCol className={className} {...restProps}>
            {children}
        </StyledCol>
    );
};

Col.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Col;
