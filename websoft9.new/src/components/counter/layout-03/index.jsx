import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunFactWrap, FunFactTitle, FunFactCount, FunFactText } from "./style";

const Counter = ({ title, countTo, text, className, ...restProps }) => {
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
            {title && (
                <FunFactTitle dangerouslySetInnerHTML={{ __html: title }} />
            )}
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
            {text && <FunFactText dangerouslySetInnerHTML={{ __html: text }} />}
        </FunFactWrap>
    );
};

Counter.propTypes = {
    title: PropTypes.string,
    countTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
    className: PropTypes.string,
};

Counter.defaultProps = {
    mb: "30px",
};

export default Counter;
