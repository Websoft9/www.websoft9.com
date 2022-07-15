import React from "react";
import PropTypes from "prop-types";
import { SocialLinkWrap } from "./style";

export const SocialLink = ({
    path,
    children,
    title,
    tooltip,
    tooltip_bg,
    tooltip_position,
    color,
    size,
    shape,
    variant,
    space,
    hover,
    ...props
}) => {
    return (
        <SocialLinkWrap
            {...props}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            $tooltip={tooltip}
            $tooltip_bg={tooltip_bg}
            $tooltip_position={tooltip_position}
            $hastitle={title && !tooltip}
            $color={color}
            $size={size}
            $shape={shape}
            $variant={variant}
            $space={space}
            $hover={hover}
        >
            {children}
            {title && <span className="title">{title}</span>}
        </SocialLinkWrap>
    );
};

SocialLink.propTypes = {
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
    path: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
    tooltip: PropTypes.bool,
    tooltip_bg: PropTypes.string,
    tooltip_position: PropTypes.string,
    hover: PropTypes.shape({}),
};
