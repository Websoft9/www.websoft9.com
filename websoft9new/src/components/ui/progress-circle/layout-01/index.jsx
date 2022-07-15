import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import { ProgressCircleWrap } from "./style";

const ProgressCirle = ({
    value,
    variant,
    rotation,
    gradientId,
    startColor,
    endColor,
    text,
    icon,
    className,
    ...props
}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    const restProps = { ...props, variant, startColor, endColor };
    const gradientTransform = `rotate(90)`;
    return (
        <VisibilitySensor
            offset={{ top: 50 }}
            onChange={(isVisible) => visibleChangeHandler(isVisible)}
        >
            {({ isVisible }) => {
                const percentage = focus ? value : 0;
                return (
                    <ProgressCircleWrap
                        className={cn(className, "progress-circle")}
                        {...restProps}
                    >
                        <CircularProgressbarWithChildren
                            minValue={0}
                            maxValue={100}
                            value={percentage}
                            strokeWidth={2}
                            styles={buildStyles({
                                rotation: rotation,
                                strokeLinecap: "butt",
                                pathTransitionDuration: 5,
                                pathColor: gradientId && `url(#${gradientId})`,
                            })}
                        >
                            {(!text || !icon) && (
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={percentage}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div className="progress-child">
                                            <span ref={countUpRef} />%
                                        </div>
                                    )}
                                </CountUp>
                            )}
                            {text && (
                                <div className="progress-child">{text}</div>
                            )}
                            {icon && (
                                <div className="progress-child">
                                    <i className={icon}></i>
                                </div>
                            )}
                        </CircularProgressbarWithChildren>
                        <div className="circle-design one"></div>
                        <div className="circle-design two"></div>
                        {variant === "gradient" && (
                            <svg style={{ height: 0, width: 0 }}>
                                <defs>
                                    <linearGradient
                                        id={gradientId}
                                        gradientTransform={gradientTransform}
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor={startColor}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor={endColor}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        )}
                    </ProgressCircleWrap>
                );
            }}
        </VisibilitySensor>
    );
};

ProgressCirle.propTypes = {
    value: PropTypes.number,
    variant: PropTypes.oneOf(["primary", "secondary", "gradient"]),
    rotation: PropTypes.number,
    gradientId: PropTypes.string,
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
};

ProgressCirle.defaultProps = {
    variant: "primary",
    value: 65,
    rotation: 0,
};

export default ProgressCirle;
