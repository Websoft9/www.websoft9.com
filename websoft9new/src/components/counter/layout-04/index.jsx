import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
    FunFactWrap,
    StyledIcon,
    FunFactTitle,
    FunFactCount,
    FunFactText,
} from "./style";

const Counter = ({ title, countTo, icon, className, ...restProps }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <FunFactWrap className={cn(className, "fun-fact")} {...restProps}>
            <StyledIcon>
                <i className={icon} />
            </StyledIcon>

            <div className="funfact-content">
                {countTo && (
                    <FunFactCount>
                        <CountUp
                            start={focus ? 0 : null}
                            end={countTo}
                            duration={5}
                        >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) =>
                                            visibleChangeHandler(isVisible)
                                        }
                                    >
                                        <span className="sr-only">+</span>
                                    </VisibilitySensor>
                                </div>
                            )}
                        </CountUp>
                    </FunFactCount>
                )}
                {title && (
                    <FunFactTitle dangerouslySetInnerHTML={{ __html: title }} />
                )}
            </div>
        </FunFactWrap>
    );
};

Counter.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    countTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

Counter.defaultProps = {
    mb: "30px",
};

export default Counter;
