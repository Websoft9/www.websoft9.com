import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    BoxIconWrap,
    BoxIconMarker,
    BoxIconInfo,
    BoxIconHeading,
    BoxIconTitle,
    BoxIconDesc,
} from "./style";

const BoxIcon = ({
    icon,
    title,
    desc,
    heading,
    className,
    layout,
    ...restProps
}) => {
    return (
        <BoxIconWrap className={cn("box-icon", className)} {...restProps}>
            {icon && (
                <BoxIconMarker $layout={layout}>
                    <i className={icon}></i>
                </BoxIconMarker>
            )}
            {(title || desc || heading) && (
                <BoxIconInfo>
                    {heading && (
                        <BoxIconHeading $layout={layout}>
                            {heading}
                        </BoxIconHeading>
                    )}
                    {title && (
                        <BoxIconTitle $layout={layout}>{title}</BoxIconTitle>
                    )}
                    {desc && <BoxIconDesc>{desc}</BoxIconDesc>}
                </BoxIconInfo>
            )}
        </BoxIconWrap>
    );
};

BoxIcon.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    heading: PropTypes.string,
    className: PropTypes.string,
    layout: PropTypes.number,
};

export default BoxIcon;
