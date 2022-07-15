import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./style";

const Heading = ({ children, className, child, ...props }) => {
    return (
        <StyledHeading
            className={className}
            $child={child}
            {...props}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
};

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    child: PropTypes.shape({}),
};

Heading.defaultProps = {
    as: "h2",
};

export default Heading;
