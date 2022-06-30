import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "./list-item";
import { ListWrap } from "./style";

const List = ({ children, className, layout, ...props }) => {
    return (
        <ListWrap className={className} $layout={layout} {...props}>
            {children}
        </ListWrap>
    );
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    layout: PropTypes.oneOf([
        "separator",
        "check",
        "circle",
        "icon",
        "order-list",
        "animated-arrow",
    ]),
};

export { ListItem };
export default List;
