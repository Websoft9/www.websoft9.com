import React from "react";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import Button from "@ui/button";
import {
    BoxIconWrap,
    BoxIconInner,
    BoxIconImg,
    BoxIconContent,
    BoxIcontitle,
    BoxIconText,
    BoxIconBtn,
} from "./style";

const BoxIcon = ({ id, icon, title, desc, path, className, ...restProps }) => {
    return (
        <BoxIconWrap>
            <BoxIconInner className={className} {...restProps}>
                {icon && (
                    <BoxIconImg>
                        <ReactVivus
                            id={`svg-${id}`}
                            option={{
                                file: icon,
                                type: "oneByOne",
                                animTimingFunction: "EASE",
                                duration: 250,
                            }}
                        />
                    </BoxIconImg>
                )}
                <BoxIconContent>
                    {title && <BoxIcontitle>{title}</BoxIcontitle>}
                    {desc && <BoxIconText>{desc}</BoxIconText>}
                    {path && (
                        <BoxIconBtn>
                            <Button
                                path={path}
                                variant="texted"
                                fontWeight={400}
                                disableHover={true}
                                icondistance="8px"
                                icon="far fa-long-arrow-right"
                            >
                                Discover now
                            </Button>
                        </BoxIconBtn>
                    )}
                </BoxIconContent>
            </BoxIconInner>
        </BoxIconWrap>
    );
};

BoxIcon.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
};

BoxIcon.defaultProps = {
    path: "/",
};

export default BoxIcon;
