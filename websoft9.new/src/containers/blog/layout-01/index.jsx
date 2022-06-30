import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Blog from "@components/blog/layout-01";
import { SectionTitleType, BlogType } from "@utils/types";
import { BlogWrapper, ListItem, ListLink } from "./style";

const BlogArea = ({ data }) => {
    return (
        <BlogWrapper>
            <Container>
                <Row>
                    <Col lg={4}>
                        {data?.section_title && (
                            <SectionTitle
                                textAlign="left"
                                mb="30px"
                                title={data.section_title?.title}
                                subtitle={data.section_title?.subtitle}
                            />
                        )}
                        {data?.recentBlogs && (
                            <ul>
                                {data.recentBlogs?.map((blog) => (
                                    <ListItem key={`${blog.slug}`}>
                                        <ListLink path={`/${blog.slug}`}>
                                            <i className="icon icon-1 far fa-long-arrow-right"></i>
                                            <i className="icon icon-2 far fa-long-arrow-right"></i>
                                            <span>{blog.title}</span>
                                        </ListLink>
                                    </ListItem>
                                ))}
                            </ul>
                        )}
                    </Col>
                    <Col lg={8}>
                        {data?.featuredBlogs && (
                            <Row>
                                {data.featuredBlogs?.map((blog) => (
                                    <Col
                                        md={6}
                                        key={blog.slug}
                                        mt={["50px", null, 0]}
                                    >
                                        <Blog
                                            title={blog.title}
                                            postedAt={blog.postedAt}
                                            slug={blog.slug}
                                            excerpt={blog.excerpt}
                                            format={blog.format}
                                            image={blog.image}
                                            quote_text={blog.quote_text}
                                            quote_author={blog.quote_author}
                                            video_link={blog.video_link}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </BlogWrapper>
    );
};

BlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        featuredBlogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
        recentBlogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

export default BlogArea;
