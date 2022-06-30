import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { OffCanvasHeader } from "./off-canvas-header";
import { OffCanvasBody } from "./off-canvas-body";
import { OffCanvaseWrap, OffCanvasInner } from "./style";

const OffCanvas = ({ children, onClick, className, ...props }) => {
    return (
        <OffCanvaseWrap
            {...props}
            onClick={onClick}
            className={cn(className, "offcanvas")}
        >
            <OffCanvasInner {...props} onClick={(e) => e.stopPropagation()}>
                {children}
            </OffCanvasInner>
        </OffCanvaseWrap>
    );
};

OffCanvas.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export { OffCanvasHeader, OffCanvasBody };
export default OffCanvas;
