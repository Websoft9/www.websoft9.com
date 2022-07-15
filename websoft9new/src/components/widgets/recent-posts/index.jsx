import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import WidgetTitle from "../widget-title";
import { Wrapper } from "@ui/wrapper";
import { ListItem, ListLink } from "./style";

const RecentPosts = ({ className, data, ...rest }) => {
    return (
        <Wrapper className={cn("recent-posts-widget", className)} {...rest}>
            {data?.section_title && (
                <WidgetTitle>{data.section_title?.title}</WidgetTitle>
            )}
            <ul>
                {data?.blogs?.map((blog) => (
                    <ListItem key={blog.slug}>
                        <ListLink path={`/${blog.slug}`}>
                            <i className="icon icon-1 far fa-long-arrow-right"></i>
                            <i className="icon icon-2 far fa-long-arrow-right"></i>
                            <span>{blog.title}</span>
                        </ListLink>
                    </ListItem>
                ))}
            </ul>
        </Wrapper>
    );
};

RecentPosts.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        blogs: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })
        ).isRequired,
    }),
};

export default RecentPosts;
