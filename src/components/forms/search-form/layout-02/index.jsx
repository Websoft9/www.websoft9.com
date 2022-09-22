import React, { useState } from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import { StyledForm, StyledInput, StyledButton } from "./style";

const HeaderForm = ({ inputId, ...restProps }) => {
    const [value, setValue] = useState();
    const handleInput = (e) => setValue(e.target.value);

    const handlSubmit = (e) => {
        e.preventDefault();

        const query = value
            .toLowerCase()
            .trim()
            .replace(/[^\w ]/g, "");
        // .replace(/\&+/g, '-')

        navigate(`/search?query=${query}`, { state: { query } });
    };

    return (
        <StyledForm onSubmit={handlSubmit} {...restProps}>
            <StyledInput
                onChange={handleInput}
                type="text"
                placeholder="Search..."
                id={inputId}
                name={inputId}
            />
            <StyledButton
                type="submit"
                color="light"
                disableHover={true}
                variant="texted"
            >
                <i className="fa fa-search"></i>
            </StyledButton>
        </StyledForm>
    );
};

HeaderForm.propTypes = {
    inputId: PropTypes.string,
};

export default HeaderForm;
