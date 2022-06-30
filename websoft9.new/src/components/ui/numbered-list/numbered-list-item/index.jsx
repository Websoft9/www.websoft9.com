import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    ItemWrap,
    ItemAnchor,
    TitleWrap,
    TitleInner,
    Title,
    IconWrap,
} from "./style";

export const NumberedListItem = ({ path, children, className }) => {
    return (
        <ItemWrap className={cn(className, "numbered-list-item")}>
            <ItemAnchor path={path}>
                <TitleWrap>
                    <TitleInner>
                        <Title>{children}</Title>
                        <IconWrap>
                            <i className="icon icon-1 far fa-long-arrow-right"></i>
                            <i className="icon icon-2 far fa-long-arrow-right"></i>
                        </IconWrap>
                    </TitleInner>
                </TitleWrap>
            </ItemAnchor>
        </ItemWrap>
    );
};

NumberedListItem.propTypes = {
    path: PropTypes.string,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

NumberedListItem.defautProps = {
    path: "/",
};
