import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { OffCanvasBodyWrap } from "./style";

export const OffCanvasBody = ({ children, className, ...props }) => {
    return (
        <OffCanvasBodyWrap
            className={cn(className, "offcanvas-body")}
            {...props}
        >
            {children}
        </OffCanvasBodyWrap>
    );
};

OffCanvasBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
