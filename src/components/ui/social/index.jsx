import React, { Children, isValidElement, cloneElement } from "react";
import PropTypes from "prop-types";
import { SocialLink } from "./social-link";
import { SocialWrap } from "./style";

const Social = ({ children, ...props }) => {
    const childProps = {
        color: props.color,
        size: props.size,
        shape: props.shape,
        variant: props.variant,
        hover: props.hover,
        space: props.space,
        tooltip: props.tooltip,
        tooltip_bg: props.tooltip_bg,
        tooltip_position: props.tooltip_position,
    };
    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, { ...childProps });
        }
        return child;
    });
    return <SocialWrap {...props}>{childrenWithProps}</SocialWrap>;
};

Social.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "transparent",
    ]),
    size: PropTypes.oneOf(["large", "medium", "small"]),
    shape: PropTypes.oneOf(["square", "rounded"]),
    variant: PropTypes.oneOf(["outlined", "flat", "texted", "underlined"]),
    hover: PropTypes.shape({}),
    space: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tooltip: PropTypes.bool,
    tooltip_bg: PropTypes.string,
    tooltip_position: PropTypes.string,
};

Social.defaultProps = {
    space: "15px",
    size: "medium",
};

export { SocialLink };

export default Social;
