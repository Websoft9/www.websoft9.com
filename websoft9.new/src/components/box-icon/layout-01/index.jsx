import React from "react";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import { truncateString } from "@utils";
import Button from "@ui/button";
import { IDType, SvgIconType } from "@utils/types";
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
                {icon?.svg?.src?.publicURL && (
                    <BoxIconImg>
                        <ReactVivus
                            id={`svg-${id}`}
                            option={{
                                file: icon.svg.src.publicURL,
                                type: "oneByOne",
                                animTimingFunction: "EASE",
                                duration: 250,
                            }}
                        />
                    </BoxIconImg>
                )}
                <BoxIconContent>
                    {title && (
                        <BoxIcontitle>
                            {truncateString(title, 18, false)}
                        </BoxIcontitle>
                    )}
                    {desc && (
                        <BoxIconText>{truncateString(desc, 90)}</BoxIconText>
                    )}
                    {path && (
                        <BoxIconBtn>
                            <Button
                                path={path}
                                variant="texted"
                                icondistance="8px"
                                fontWeight={400}
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
    id: IDType,
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(SvgIconType)]),
    className: PropTypes.string,
};

BoxIcon.defaultProps = {
    path: "/",
};

export default BoxIcon;
