import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledTitle } from "./style";

const WidgetTitle = ({ className, children }) => {
    return (
        <StyledTitle className={cn("widget-title", className)}>
            {children}
        </StyledTitle>
    );
};

WidgetTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default WidgetTitle;
