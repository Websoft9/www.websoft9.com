import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import {
    RecentPostsWidget,
    PopularTagsWidget,
    AdWidget,
} from "@components/widgets";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { Container, Row, Col } from "@ui/wrapper";
import BlogArea from "@containers/blog/layout-03";
import {
    BlogListWrapper,
    StyledHeading,
    SearchInfoHeader,
    SearchError,
    StyledSidebar,
} from "./style";

const SearchTemplate = ({ data, pageContext, location }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    const blogs = data.blogs.nodes || [];
    const { state } = location;
    const query = state && state.query;
    let filteredBlogs = [];
    if (state) {
        filteredBlogs = blogs.filter((post) => {
            const {
                title,
                quote_text,
                quote_author,
                categories,
                tags,
                content,
                author: { name: authorName },
            } = post;

            return (
                (title && title.toLowerCase().includes(query)) ||
                (quote_text && quote_text.toLowerCase().includes(query)) ||
                (quote_author && quote_author.toLowerCase().includes(query)) ||
                (content && content.toLowerCase().includes(query)) ||
                (authorName && authorName.toLowerCase().includes(query)) ||
                (tags &&
                    tags
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase())) ||
                (categories &&
                    categories
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase()))
            );
        });
    }

    return (
        <Layout location={location}>
            <Seo title={`Search`} />
            <Header
                data={{
                    ...globalContent?.["header"],
                    ...globalContent?.["menu"],
                    socials: data?.site?.siteMetadata?.socials,
                }}
            />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title={`Search`}
            />
            <main className="site-wrapper-reveal">
                <BlogListWrapper>
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
                                {filteredBlogs && (
                                    <SearchInfoHeader>
                                        <StyledHeading>
                                            Search for: <span>{query}</span>
                                        </StyledHeading>
                                        <h5>
                                            Posts Found: {filteredBlogs.length}
                                        </h5>
                                    </SearchInfoHeader>
                                )}
                                {filteredBlogs.length > 0 && (
                                    <BlogArea
                                        data={{
                                            blogs: filteredBlogs,
                                            siteUrl:
                                                data.site.siteMetadata.siteUrl,
                                        }}
                                    />
                                )}
                                {filteredBlogs.length === 0 && (
                                    <SearchError>
                                        <h2>Nothing Found</h2>
                                    </SearchError>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </BlogListWrapper>
            </main>
            <Footer data={{ ...data?.site?.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query BlogBySearchQuery {
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
        blogs: allArticle {
            nodes {
                ...BlogSix
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

SearchTemplate.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            query: PropTypes.string,
        }),
    }),
    pageContext: PropTypes.shape({}),
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
        }),
        recentPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        tags: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default SearchTemplate;
