import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyleFormGroup } from "./style";

const FormGroup = ({ className, children, ...restProps }) => {
    return (
        <StyleFormGroup className={cn("form-group", className)} {...restProps}>
            {children}
        </StyleFormGroup>
    );
};

FormGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default FormGroup;
