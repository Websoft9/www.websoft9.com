import React from "react";
import PropTypes from "prop-types";
import { LineWrap } from "./style";

const DividerLine = (props) => {
    return <LineWrap {...props} />;
};

DividerLine.propTypes = {
    className: PropTypes.string,
};

DividerLine.defaultProps = {
    borderWidth: "1px",
    borderStyle: "solid",
};

export default DividerLine;
