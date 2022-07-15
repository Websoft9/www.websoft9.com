import React from "react";
import PropTypes from "prop-types";
import { ClickableWrap } from "./style";

const Clickable = ({ children, onClick, className, ...props }) => {
    return (
        <ClickableWrap
            type="button"
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </ClickableWrap>
    );
};

Clickable.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Clickable;
