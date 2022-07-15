import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledRow } from "./style";

const Row = ({ children, noGutter, className, gutters, ...restProps }) => {
    return (
        <StyledRow
            className={cn(className, noGutter && "gx-0")}
            $gutters={gutters}
            {...restProps}
        >
            {children}
        </StyledRow>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    noGutter: PropTypes.bool,
    gutters: PropTypes.object,
    className: PropTypes.string,
};

export default Row;
