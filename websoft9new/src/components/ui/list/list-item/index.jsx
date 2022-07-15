import React from "react";
import PropTypes from "prop-types";
import { ListItemWrap } from "./style";

export const ListItem = ({ children, className, ...props }) => {
    return (
        <ListItemWrap className={className} {...props}>
            {children}
        </ListItemWrap>
    );
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
