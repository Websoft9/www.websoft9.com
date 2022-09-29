import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import { StyledTextarea } from "./style";
import Feedback from "../feedback";

const Textarea = forwardRef(
    (
        {
            className,
            rows,
            disabled,
            state,
            feedbackText,
            id,
            name,
            placeholder,
            value,
            showState,
            showErrorOnly,
            onChange,
            onClick,
            onBlur,
            width,
            height,
            customStyle,
            hover,
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <StyledTextarea
                    disabled={disabled}
                    className={classnames(className, "form-control")}
                    rows={rows}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
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

Textarea.displayName = "Textarea";

Textarea.propTypes = {
    className: PropTypes.string,
    rows: PropTypes.number,
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

Textarea.defaultProps = {
    rows: 2,
    showErrorOnly: true,
};

export default Textarea;
