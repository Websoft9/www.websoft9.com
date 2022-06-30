import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./style";

const MarkHeading = ({ as, children, ...restProps }) => {
    return (
        <StyledHeading
            as={as}
            dangerouslySetInnerHTML={{ __html: children }}
            {...restProps}
        />
    );
};

MarkHeading.propTypes = {
    as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    children: PropTypes.node.isRequired,
};

export default MarkHeading;
