import React from "react";
import PropTypes from "prop-types";
import { AlertWrap } from "./style";

const Alert = ({ children, className, ...restProps }) => {
    return (
        <AlertWrap className={className} {...restProps}>
            {children}
        </AlertWrap>
    );
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Alert;
