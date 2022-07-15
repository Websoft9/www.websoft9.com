import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeaturedBlog from "@components/blog/layout-03";
import RecentBlog from "@components/blog/layout-04";
import { SectionTitleType, BlogType } from "@utils/types";
import { BlogWrap, BlogList, BlogListItem } from "./style";

const BlogArea = ({ data }) => {
    return (
        <BlogWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["47px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}

                <Row>
                    {data?.featuredBlog && (
                        <Col lg={6}>
                            <FeaturedBlog
                                key={data.featuredBlog.slug}
                                format={data.featuredBlog.format}
                                title={data.featuredBlog.title}
                                slug={data.featuredBlog.slug}
                                postedAt={data.featuredBlog.postedAt}
                                author={data.featuredBlog.author}
                                image={data.featuredBlog.image}
                                excerpt={data.featuredBlog.excerpt}
                                quote_text={data.featuredBlog.quote_text}
                                quote_author={data.featuredBlog.quote_author}
                                video_link={data.featuredBlog.video_link}
                            />
                        </Col>
                    )}

                    <Col lg={6}>
                        {data?.recentBlogs && (
                            <BlogList>
                                {data.recentBlogs.map((recentBlog) => (
                                    <BlogListItem key={recentBlog.slug}>
                                        <RecentBlog
                                            format={recentBlog.format}
                                            title={recentBlog.title}
                                            slug={recentBlog.slug}
                                            postedAt={recentBlog.postedAt}
                                            author={recentBlog.author}
                                            image={recentBlog.image}
                                            video_link={recentBlog.video_link}
                                        />
                                    </BlogListItem>
                                ))}
                            </BlogList>
                        )}
                    </Col>
                </Row>
            </Container>
        </BlogWrap>
    );
};

BlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        featuredBlog: PropTypes.shape(BlogType),
        recentBlogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

export default BlogArea;
