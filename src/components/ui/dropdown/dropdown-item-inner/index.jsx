import React from "react";
import PropTypes from "prop-types";
import { DropmenuItemInner } from "./style";

const DropdownItemInner = ({ children, active, ...props }) => {
    return (
        <DropmenuItemInner active={active} {...props}>
            {children}
            {active ? <i className="fa fa-angle-down"></i> : ""}
        </DropmenuItemInner>
    );
};

DropdownItemInner.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
};

export default DropdownItemInner;
