import React from "react";
import PropTypes from "prop-types";
import { DropdownWrap, DropdownMenu } from "./style";

const Dropdown = ({ children, className, ...props }) => {
    return (
        <DropdownWrap className={className} {...props}>
            <DropdownMenu>{children}</DropdownMenu>
        </DropdownWrap>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Dropdown;
