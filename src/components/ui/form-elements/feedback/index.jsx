import React from "react";
import PropTypes from "prop-types";
import { StyledFeedback } from "./style";

const Feedback = ({ state, showState, showErrorOnly, children }) => {
    return (
        <StyledFeedback
            $state={state}
            $showState={showState}
            $showErrorOnly={showErrorOnly}
        >
            {children}
        </StyledFeedback>
    );
};

Feedback.propTypes = {
    showState: PropTypes.bool,
    showErrorOnly: PropTypes.bool,
    state: PropTypes.oneOf(["success", "warning", "error"]),
    children: PropTypes.node,
};

export default Feedback;
