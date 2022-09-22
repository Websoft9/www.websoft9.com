import React from "react";
import PropTypes from "prop-types";
import { FlyoutBodyWrap, FlyoutBodyInner } from "./style";

export const FlyoutBody = ({ children }) => {
    return (
        <FlyoutBodyWrap>
            <FlyoutBodyInner>{children}</FlyoutBodyInner>
        </FlyoutBodyWrap>
    );
};

FlyoutBody.propTypes = {
    children: PropTypes.node.isRequired,
};
