import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./style";

const Text = ({ children, className, ...props }) => {
    return (
        <StyledText className={className} {...props}>
            {children}
        </StyledText>
    );
};

Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    as: PropTypes.oneOf(["p", "a", "span", "strong", "em"]),
};

export default Text;
