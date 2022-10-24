import PropTypes from "prop-types";
import React from "react";
import { StyledAnchor, StyledLink } from "./style";

const Anchor = ({ path, children, className, hover, layout, ...props }) => {
    const internal = /^\/(?!\/)/.test(path);
    if (internal) {
        return (
            <StyledLink
                to={path}
                className={className}
                $hover={hover}
                $layout={layout}
                {...props}
            >
                {children}
            </StyledLink>
        );
    }
    return (
        <StyledAnchor
            href={path}
            className={className}
            $hover={hover}
            $layout={layout}
            {...props}
        >
            {children}
        </StyledAnchor>
    );
};

Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    path: PropTypes.string,
    hover: PropTypes.shape({}),
    layout: PropTypes.string,
};

export default Anchor;
