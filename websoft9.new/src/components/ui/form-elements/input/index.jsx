import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import { StyledInput } from "./style";
import Feedback from "../feedback";

const Input = forwardRef(
    (
        {
            className,
            type,
            disabled,
            state,
            feedbackText,
            id,
            name,
            onChange,
            onClick,
            onBlur,
            value,
            readonly,
            showState,
            showErrorOnly,
            width,
            height,
            customStyle,
            hover,
            placeholder,
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <StyledInput
                    type={type}
                    disabled={disabled}
                    ref={ref}
                    className={classnames(className, "form-control")}
                    id={id}
                    name={name}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    value={value}
                    readOnly={readonly}
                    placeholder={placeholder}
                    $state={state}
                    $showState={showState}
                    $showErrorOnly={showErrorOnly}
                    $width={width}
                    $height={height}
                    $customStyle={customStyle}
                    $hover={hover}
                    {...restProps}
                />
                {feedbackText && showState && (
                    <Feedback
                        state={state}
                        showState={showState}
                        showErrorOnly={showErrorOnly}
                    >
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    feedbackText: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    showState: PropTypes.bool,
    showErrorOnly: PropTypes.bool,
    state: PropTypes.oneOf(["success", "warning", "error"]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    width: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
    height: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
    customStyle: PropTypes.oneOf(["noborder", "nofocus"]),
    hover: PropTypes.oneOf([1, 2]),
};

Input.displayName = "Input";

Input.defaultProps = {
    type: "text",
    showErrorOnly: true,
    hover: 1,
};

export default Input;
