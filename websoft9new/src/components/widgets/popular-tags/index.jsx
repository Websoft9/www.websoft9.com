import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { BlogMetaType } from "@utils/types";
import { Wrapper } from "@ui/wrapper";
import { flatDeep } from "@utils";
import WidgetTitle from "../widget-title";
import { StyledTags, StyledTag } from "./style";

const PopularTags = ({ className, data, ...rest }) => {
    const items = flatDeep(data?.tags.map((tag) => tag.tags));
    let tagList = [];

    items.forEach((item) => {
        const tagIndex = tagList.findIndex((el) => el.slug === item.slug);
        if (tagIndex < 0) {
            tagList.push({ ...item, count: 1 });
        } else {
            tagList[tagIndex] = {
                ...tagList[tagIndex],
                count: tagList[tagIndex].count + 1,
            };
        }
    });

    const sortedTags = tagList.sort((a, b) => (b.count < a.count ? -1 : 0));

    return (
        <Wrapper className={cn("popular-tags-widget", className)} {...rest}>
            {data?.section_title && (
                <WidgetTitle>{data.section_title?.title}</WidgetTitle>
            )}
            <StyledTags>
                {sortedTags.slice(0, 3).map((tag) => (
                    <StyledTag key={tag.slug} path={`/tag/${tag.slug}`}>
                        {tag.title}
                    </StyledTag>
                ))}
            </StyledTags>
        </Wrapper>
    );
};

PopularTags.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }),
};

export default PopularTags;
