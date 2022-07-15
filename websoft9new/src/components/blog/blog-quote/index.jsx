import React from "react";
import PropTypes from "prop-types";
import { StyledQuoute } from "./style";

const BlogQuote = ({ children, color, size, shape }) => {
    return (
        <StyledQuoute $size={size} $color={color} $shape={shape}>
            {children}
        </StyledQuoute>
    );
};

BlogQuote.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(["light", "dark"]),
    size: PropTypes.oneOf(["small", "large", "xlarge"]),
    shape: PropTypes.oneOf(["square", "rounded"]),
};

BlogQuote.defaultProps = {
    color: "light",
    size: "large",
    shape: "square",
};

export default BlogQuote;
