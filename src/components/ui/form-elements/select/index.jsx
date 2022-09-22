import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import { StyledSelect } from "./style";
import Feedback from "../feedback";

const Select = forwardRef(
    (
        {
            className,
            disabled,
            state,
            feedbackText,
            id,
            name,
            value,
            onChange,
            onBlur,
            onClick,
            children,
            showState,
            showErrorOnly,
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
                <StyledSelect
                    className={classnames(className, "custom-select")}
                    ref={ref}
                    id={id}
                    name={name}
                    value={value}
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
                >
                    {children}
                </StyledSelect>
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

Select.displayName = "Select";

Select.propTypes = {
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
    children: PropTypes.node.isRequired,
};

Select.defaultProps = {
    showErrorOnly: true,
};

export default Select;
