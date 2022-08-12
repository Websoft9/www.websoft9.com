import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunFactWrap, FunFactTitle, FunFactCount, FunFactText,StyledMarkHeading,FunFactMiddle } from "./style";

const Counter = ({ title, countTo, text, className, layout, ...restProps }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <FunFactWrap
            className={cn(className, "fun-fact")}
            $layout={layout}
            {...restProps}
        >
            {title && (
                <FunFactTitle dangerouslySetInnerHTML={{ __html: title }} />
            )}
            {/* <StyledMarkHeading> */}
                 {/* <mark> { countTo } </mark>  */}
                 <FunFactMiddle dangerouslySetInnerHTML={{ __html: countTo }} />
            {/* </StyledMarkHeading> */}
               
            {text && (
                <FunFactText
                    $layout={layout}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
        </FunFactWrap>
    );
};

Counter.propTypes = {
    title: PropTypes.string,
    countTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
    className: PropTypes.string,
    layout: PropTypes.number,
};

export default Counter;
