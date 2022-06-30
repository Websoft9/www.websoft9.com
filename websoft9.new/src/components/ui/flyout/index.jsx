import React from "react";
import PropTypes from "prop-types";
import { FlyoutHeader } from "./flyout-header";
import { FlyoutBody } from "./flyout-body";
import { FlyoutWrap } from "./style";

const Flyout = ({ children, ...restProps }) => {
    return <FlyoutWrap {...restProps}>{children}</FlyoutWrap>;
};

Flyout.propTypes = {
    children: PropTypes.node.isRequired,
};

export { FlyoutHeader, FlyoutBody };
export default Flyout;
