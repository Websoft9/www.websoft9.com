import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Blog from "@components/blog/layout-02";
import SectionTitle from "@ui/section-title";
import { SectionTitleType, BlogType } from "@utils/types";
import { BlogBox } from "./style";

const BlogArea = ({ data }) => {
    return (
        <Fragment>
            <div className="blog Area">
                {data?.section_title && (
                    <SectionTitle
                        mb={["45px", null, "65px"]}
                        {...data.section_title}
                    />
                )}
                {data?.blogs?.map((blog) => (
                    <BlogBox key={blog.slug}>
                        <Blog
                            title={blog.title}
                            slug={blog.slug}
                            excerpt={blog.excerpt}
                            format={blog.format}
                            postedAt={blog.postedAt}
                            author={blog.author}
                            categories={blog.categories}
                            image={blog.image}
                            quote_text={blog.quote_text}
                            quote_author={blog.quote_author}
                            video_link={blog.video_link}
                            siteUrl={data.siteUrl}
                        />
                    </BlogBox>
                ))}
            </div>
        </Fragment>
    );
};

BlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
        siteUrl: PropTypes.string,
    }),
};

export default BlogArea;
