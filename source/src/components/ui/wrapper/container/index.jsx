import React from "react";
import PropTypes from "prop-types";
import { Containerwrap } from "./style";

const Container = ({ children, className, ...restProps }) => {
    return (
        <Containerwrap className={className} {...restProps}>
            {children}
        </Containerwrap>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container;
