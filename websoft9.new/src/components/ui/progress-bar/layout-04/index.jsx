import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import VisibilitySensor from "react-visibility-sensor";
import { ProgressBarWrap } from "./style";

const ProgressBarOne = ({
    title,
    value,
    gradient,
    className,
    ...restProps
}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <VisibilitySensor
            offset={{ top: 50 }}
            onChange={(isVisible) => visibleChangeHandler(isVisible)}
        >
            {({ isVisible }) => (
                <ProgressBarWrap
                    className={cn(className, "progress-bar-wrap")}
                    {...restProps}
                >
                    {title && <h6 className="heading">{title}</h6>}
                    <div className="progress">
                        <div
                            className={`progress-bar gradient-${gradient}`}
                            style={{ width: focus ? value + "%" : 0 }}
                        >
                            <span className="percent-label">{value + "%"}</span>
                        </div>
                    </div>
                </ProgressBarWrap>
            )}
        </VisibilitySensor>
    );
};

ProgressBarOne.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    className: PropTypes.string,
    gradient: PropTypes.number,
};

ProgressBarOne.defaultProps = {
    value: 0,
    mb: "20px",
};

export default ProgressBarOne;
