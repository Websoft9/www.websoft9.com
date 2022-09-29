import React from "react";
import PropTypes from "prop-types";
import { DropdownItemWrap } from "./style";

const DropdownItem = ({ children, onClick, ...props }) => {
    return (
        <DropdownItemWrap {...props} onClick={onClick}>
            {children}
        </DropdownItemWrap>
    );
};

DropdownItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default DropdownItem;
