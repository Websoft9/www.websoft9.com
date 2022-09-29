import React from "react";
import PropTypes from "prop-types";
import { DropmenuWrap } from "./style";

const DropdownSubMenu = ({ children }) => {
    return <DropmenuWrap>{children}</DropmenuWrap>;
};

DropdownSubMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DropdownSubMenu;
