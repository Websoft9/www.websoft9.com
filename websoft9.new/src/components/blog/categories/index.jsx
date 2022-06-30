import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import { createList, slugify } from "@utils";
import { BlogMetaType } from "@utils/types";
import { CategroiesWrap } from "./style";

const Categories = ({ categories, className, ...restProps }) => {
    let catList = createList({
        list: categories,
    });

    return (
        <CategroiesWrap className={cn(className, "categories")} {...restProps}>
            {catList.map((item) => (
                <Anchor path={`/category/${item.slug}`} key={item.slug}>
                    {item.title}
                    {item.sep}
                </Anchor>
            ))}
        </CategroiesWrap>
    );
};

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape(BlogMetaType)),
    className: PropTypes.string,
};

export default Categories;
