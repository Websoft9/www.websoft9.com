import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import { createList, slugify } from "@utils";
import { TagWrapper } from "./style";

const Tags = ({ tags, className, ...restProps }) => {
    let tagList = createList({
        list: tags,
    });

    return (
        <TagWrapper className={cn(className, "tags")} {...restProps}>
            <i className="fa fa-tags icon"></i>
            {tagList.map((item) => (
                <Anchor path={`/tag/${item.slug}`} key={item.slug}>
                    {item.title}
                    {item.sep}
                </Anchor>
            ))}
        </TagWrapper>
    );
};

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default Tags;
