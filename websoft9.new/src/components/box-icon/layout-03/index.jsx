import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxIconWrap,
    BoxIconInner,
    BoxIconTop,
    IconWrap,
    Heading,
    BoxIconBottom,
    Text,
} from "./style";

const BoxIcon = ({ icon, title, desc, className }) => {
    return (
        <BoxIconWrap className={className}>
            <BoxIconInner>
                <BoxIconTop>
                    {icon?.src && (
                        <IconWrap>
                            <Image src={icon.src} alt={icon?.alt || title} />
                        </IconWrap>
                    )}
                    {title && <Heading>{title}</Heading>}
                </BoxIconTop>
                {desc && (
                    <BoxIconBottom>
                        <Text>{desc}</Text>
                    </BoxIconBottom>
                )}
            </BoxIconInner>
        </BoxIconWrap>
    );
};

BoxIcon.defaultProps = {
    title: "",
    desc: "",
};

BoxIcon.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.shape(ImageType),
    className: PropTypes.string,
};

export default BoxIcon;
