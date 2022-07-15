import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import { Container, Row, Col } from "@ui/wrapper";
import {
    RecentPostsWidget,
    PopularTagsWidget,
    AdWidget,
} from "@components/widgets";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import BlogArea from "@containers/blog/layout-03";
import { StyledSection, StyledSidebar } from "./style";

const BlogCategoryTemplate = ({ pageContext, location, data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    const category = pageContext?.slug.split("-").join(" ");

    return (
        <Layout location={location}>
            <Seo title={`Category: ${category}`} />
            <Header
                data={{
                    ...globalContent?.["header"],
                    ...globalContent?.["menu"],
                    socials: data?.site?.siteMetadata?.socials,
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title={`Category: ${category}`}
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
                            </Col>
                        </Row>
                    </Container>
                </StyledSection>
            </main>
            <Footer data={{ ...data?.site?.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query BlogCategoryPageQuery($slug: String) {
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
            filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
        ) {
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

BlogCategoryTemplate.propTypes = {
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
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
    pageContext: PropTypes.shape({
        slug: PropTypes.string,
    }),
};

export default BlogCategoryTemplate;
