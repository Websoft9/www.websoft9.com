import React from "react";
import cn from "clsx";
import { ButtonComponentType } from "@utils/types";
import { ButtonWrap, AnchorButton, HashButton, LinkButton } from "./style";

const Button = ({
    children,
    icon,
    className,
    path,
    type,
    onClick,
    stickyBtn,
    icondistance,
    shadow,
    size,
    color,
    shape,
    variant,
    disableHover,
    hoverStyle,
    fullwidth,
    iconposition,
    iconsize,
    imgbutton,
    ...rest
}) => {
    const internal = /^\/(?!\/)/.test(path);
    const btn = {
        size: size || "medium",
        color: color || "primary",
        shape: shape || "rounded",
        variant: variant || "contained",
        disableHover: disableHover || false,
        hoverStyle: hoverStyle || "one",
        fullwidth: fullwidth || false,
        iconposition: iconposition || "right",
        iconsize: iconsize || "22px",
    };

    if (path) {
        const isHash = path.startsWith("#");
        if (internal) {
            return (
                <LinkButton
                    to={path}
                    className={cn(className, "mt-btn")}
                    $color={btn.color}
                    $size={btn.size}
                    $shape={btn.shape}
                    $variant={btn.variant}
                    $disableHover={btn.disableHover}
                    $hoverStyle={btn.hoverStyle}
                    $fullwidth={btn.fullwidth}
                    $iconposition={btn.iconposition}
                    $icondistance={icondistance}
                    $iconsize={btn.iconsize}
                    $stickyBtn={stickyBtn}
                    $imgbutton={imgbutton}
                    $shadow={shadow}
                    {...rest}
                >
                    {btn.iconposition === "left" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                    {children}
                    {btn.iconposition === "right" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                </LinkButton>
            );
        } else if (isHash) {
            return (
                <HashButton
                    href={path}
                    className={cn(className, "mt-btn")}
                    $color={btn.color}
                    $size={btn.size}
                    $shape={btn.shape}
                    $variant={btn.variant}
                    $disableHover={btn.disableHover}
                    $hoverStyle={btn.hoverStyle}
                    $fullwidth={btn.fullwidth}
                    $iconposition={btn.iconposition}
                    $icondistance={icondistance}
                    $iconsize={btn.iconsize}
                    $stickyBtn={stickyBtn}
                    $imgbutton={imgbutton}
                    $shadow={shadow}
                    {...rest}
                >
                    {btn.iconposition === "left" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                    {children}
                    {btn.iconposition === "right" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                </HashButton>
            );
        } else {
            return (
                <AnchorButton
                    href={path}
                    className={cn(className, "mt-btn")}
                    $color={btn.color}
                    $size={btn.size}
                    $shape={btn.shape}
                    $variant={btn.variant}
                    $disableHover={btn.disableHover}
                    $hoverStyle={btn.hoverStyle}
                    $fullwidth={btn.fullwidth}
                    $iconposition={btn.iconposition}
                    $icondistance={icondistance}
                    $iconsize={btn.iconsize}
                    $stickyBtn={stickyBtn}
                    $imgbutton={imgbutton}
                    $shadow={shadow}
                    {...rest}
                >
                    {btn.iconposition === "left" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                    {children}
                    {btn.iconposition === "right" && icon && (
                        <i className={`btn-icon ${icon}`}></i>
                    )}
                </AnchorButton>
            );
        }
    } else {
        return (
            <ButtonWrap
                type={type}
                className={cn(className, "mt-btn")}
                $color={btn.color}
                $size={btn.size}
                $shape={btn.shape}
                $variant={btn.variant}
                $disableHover={btn.disableHover}
                $hoverStyle={btn.hoverStyle}
                $fullwidth={btn.fullwidth}
                $hasIcon={Boolean(icon)}
                $iconposition={btn.iconposition}
                $icondistance={icondistance}
                $iconsize={btn.iconsize}
                $stickyBtn={stickyBtn}
                $imgbutton={imgbutton}
                $shadow={shadow}
                onClick={onClick}
                {...rest}
            >
                {btn.iconposition === "left" && icon && (
                    <i className={`btn-icon ${icon}`}></i>
                )}
                {children}
                {btn.iconposition === "right" && icon && (
                    <i className={`btn-icon ${icon}`}></i>
                )}
            </ButtonWrap>
        );
    }
};

Button.propTypes = ButtonComponentType;

export default Button;
