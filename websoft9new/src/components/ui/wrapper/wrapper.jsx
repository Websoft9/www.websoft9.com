import React from "react";
import cn from "clsx";
import PropTypes from "prop-types";
import { StyledWrapper } from "./style";

const Wrapper = ({ children, className, tag, ...restProps }) => {
    return (
        <StyledWrapper
            as={tag}
            className={cn("wrapper", className)}
            {...restProps}
        >
            {children}
        </StyledWrapper>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    tag: PropTypes.string,
};

export default Wrapper;
