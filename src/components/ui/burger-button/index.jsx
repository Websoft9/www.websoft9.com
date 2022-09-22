import React from "react";
import PropTypes from "prop-types";
import { StyledBurgerButton } from "./style";

const BurgerButton = ({ onClick, ...props }) => {
    return (
        <StyledBurgerButton
            className="burger-btn"
            type="button"
            onClick={onClick}
            {...props}
        >
            <span></span>
        </StyledBurgerButton>
    );
};

BurgerButton.propTypes = {
    onClick: PropTypes.func,
};

export default BurgerButton;
