import React from "react";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import classnames from "clsx";
import { StyledMotto } from "./style";

const Motto = ({ text, linkText, path, className, ...rest }) => {
    return (
        <StyledMotto className={classnames(className, "motto")} {...rest}>
            {text && <>{text}</>}{" "}
            {linkText && (
                <Anchor $layout="underline" $hover={{ layout: 2 }} path={path}>
                    {linkText}
                </Anchor>
            )}
        </StyledMotto>
    );
};

Motto.propTypes = {
    text: PropTypes.string,
    linkText: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

Motto.defaultProps = {
    path: "/",
};

export default Motto;
