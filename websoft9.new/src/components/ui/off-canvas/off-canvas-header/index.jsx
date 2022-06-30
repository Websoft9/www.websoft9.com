import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import CloseButton from "@ui/close-button";
import {
    OffCanvasHeaderWrap,
    OffCanvasHeaderLeft,
    OffCanvasHeaderRight,
} from "./style";

export const OffCanvasHeader = ({
    children,
    onClick,
    className,
    ...restProps
}) => {
    return (
        <OffCanvasHeaderWrap
            className={cn(className, "offcanvas-header")}
            {...restProps}
        >
            <OffCanvasHeaderLeft>{children}</OffCanvasHeaderLeft>
            <OffCanvasHeaderRight>
                <CloseButton onClick={onClick} />
            </OffCanvasHeaderRight>
        </OffCanvasHeaderWrap>
    );
};

OffCanvasHeader.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};
