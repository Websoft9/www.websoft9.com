import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import { Container, Row, Col } from "@ui/wrapper";
import {
    RecentPostsWidget,
    PopularTagsWidget,
    AdWidget,
} from "@components/widgets";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import BlogArea from "@containers/blog/layout-03";
import Pagination from "@components/blog/pagination";
import { StyledSection, StyledSidebar } from "./style";

const BlogListTemplate = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
    const { currentPage, numberOfPages } = pageContext;

    return (
        <Layout location={location}>
            <Seo
                title={`Blog: ${
                    currentPage !== 0 ? `Page ${currentPage}` : ""
                }`}
            />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title="Blog Update"
                />
                <StyledSection>
                    <Container>
                        <Row>
                            <Col
                                lg={{ span: 4, order: 1 }}
                                xs={{ span: 12, order: 2 }}
                            >
                                <StyledSidebar>
                                    <RecentPostsWidget
                                        mb="50px"
                                        blogs={data.recentPosts.nodes}
                                        data={{
                                            ...content["recent-widget-section"],
                                            blogs: data.recentPosts.nodes,
                                        }}
                                    />
                                    <AdWidget
                                        data={content["ad-section"]}
                                        mb="47px"
                                    />
                                    <PopularTagsWidget
                                        data={{
                                            ...content["tag-section"],
                                            tags: data.tags.nodes,
                                        }}
                                    />
                                </StyledSidebar>
                            </Col>
                            <Col
                                lg={{ span: 8, order: 2 }}
                                xs={{ span: 12, order: 1 }}
                            >
                                <BlogArea
                                    data={{
                                        ...content["blog-section"],
                                        blogs: data.blogs.nodes,
                                        siteUrl: data.site.siteMetadata.siteUrl,
                                    }}
                                />
                                <Pagination
                                    mt="40px"
                                    rootPage="/blog"
                                    currentPage={currentPage}
                                    numberOfPages={numberOfPages}
                                />
                            </Col>
                        </Row>
                    </Container>
                </StyledSection>
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query BlogListTemplateQuery($skip: Int!, $limit: Int!) {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "blog" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        blogs: allArticle(
            sort: { fields: postedAt___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            nodes {
                ...BlogFive
            }
        }
        recentPosts: allArticle(
            sort: { fields: postedAt___date, order: ASC }
            limit: 5
        ) {
            nodes {
                ...BlogTwo
            }
        }
        tags: allArticle {
            nodes {
                tags {
                    title
                    slug
                }
            }
        }
    }
`;
BlogListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        currentPage: PropTypes.number,
        numberOfPages: PropTypes.number,
    }),
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                contact: PropTypes.shape({}),
                siteUrl: PropTypes.string,
            }),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        blogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
            totalCount: PropTypes.number,
        }),
        recentPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        tags: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default BlogListTemplate;
