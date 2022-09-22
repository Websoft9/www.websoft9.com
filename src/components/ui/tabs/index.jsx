import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledTabs } from "./style";

const Tabs = ({ children, className, defaultActiveKey, layout, ...rest }) => {
    return (
        <StyledTabs
            className={cn(className)}
            defaultActiveKey={defaultActiveKey}
            $layout={layout}
            {...rest}
        >
            {children}
        </StyledTabs>
    );
};

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    defaultActiveKey: PropTypes.string.isRequired,
    layout: PropTypes.oneOf([1, 2]),
};

Tabs.defaultProps = {
    layout: 1,
};

export { default as TabContainer } from "react-bootstrap/TabContainer";
export { default as Tab } from "react-bootstrap/Tab";
export { default as TabContent } from "react-bootstrap/TabContent";
export { default as TabPane } from "react-bootstrap/TabPane";
export default Tabs;
