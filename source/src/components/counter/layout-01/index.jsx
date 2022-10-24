import cn from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FunFactMiddle, FunFactText, FunFactTitle, FunFactWrap } from "./style";

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
            {countTo && (
                <FunFactMiddle dangerouslySetInnerHTML={{ __html: countTo }} />
            )}   
            {title && (
                <FunFactTitle dangerouslySetInnerHTML={{ __html: title }} />
            )}   
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
