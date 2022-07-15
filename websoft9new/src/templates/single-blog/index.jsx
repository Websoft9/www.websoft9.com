import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import AuthorDetails from "@components/blog/author-details";
import NavigationArea from "@components/blog/navigation";
import AuthorMeta from "@components/blog/author-meta";
import BlogMeta from "@components/blog/blog-meta";
import Categories from "@components/blog/categories";
import Tags from "@components/blog/tags";
import BlogMedia from "@components/blog/blog-media";
import SocialShare from "@components/blog/social-share";
import { Container } from "@ui/wrapper";
import Comment from "@components/blog/comment";
import { BlogType } from "@utils/types";

import {
    StyledSection,
    StyledBlogWrap,
    StyledTitle,
    StyledHeaderMeta,
    StyledContent,
    StyledFooter,
} from "./style";

const SingleBlogTemplate = ({ pageContext, location, data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const articleData = data.article;

    return (
        <Layout location={location}>
            <Seo title={articleData.title} />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title="Blog"
                />
                <StyledSection>
                    <Container>
                        <BlogMedia
                            format={articleData?.format}
                            image={articleData?.image}
                            video_link={articleData?.video_link}
                            title={articleData?.title}
                            quote_text={articleData?.quote_text}
                            quote_author={articleData?.quote_author}
                            mb="46px"
                        />
                        <StyledBlogWrap>
                            <header className="blog-header">
                                <Categories
                                    textAlign="center"
                                    mb="10px"
                                    categories={articleData?.categories}
                                />
                                {articleData?.title && (
                                    <StyledTitle>
                                        {articleData.title}
                                    </StyledTitle>
                                )}
                                <StyledHeaderMeta>
                                    {articleData?.author && (
                                        <AuthorMeta
                                            mt="10px"
                                            mr="20px"
                                            slug={articleData.author?.slug}
                                            name={articleData.author?.name}
                                            image={articleData.author?.image}
                                        />
                                    )}
                                    {articleData?.postedAt && (
                                        <BlogMeta
                                            mt="10px"
                                            mr="20px"
                                            path={`/date/${articleData.postedAt.slug}`}
                                            text={articleData.postedAt.date}
                                            icon="fa fa-calendar-alt"
                                        />
                                    )}
                                    <BlogMeta
                                        mt="10px"
                                        mr="20px"
                                        path={`/`}
                                        text={`4 Comments`}
                                        icon="fa fa-comment-dots"
                                    />
                                </StyledHeaderMeta>
                            </header>
                            <StyledContent
                                dangerouslySetInnerHTML={{
                                    __html:
                                        articleData?.content || "Blog Content",
                                }}
                            />
                            <StyledFooter>
                                <Tags tags={articleData?.tags} mb={["10px"]} />
                                <SocialShare
                                    siteUrl={data.site.siteMetadata.siteUrl}
                                    slug={`/${articleData?.slug}`}
                                    title={articleData?.title}
                                />
                            </StyledFooter>
                            <AuthorDetails
                                avatar={articleData?.author?.image}
                                name={articleData?.author?.name}
                                bio={articleData?.author?.bio}
                                socials={articleData?.author?.socials}
                            />
                            <NavigationArea
                                data={{
                                    previous: pageContext.previous,
                                    next: pageContext.next,
                                }}
                            />
                            <Comment
                                url={articleData?.slug}
                                id={articleData?.id}
                                title={articleData?.title}
                                siteUrl={data.site.siteMetadata.siteUrl}
                            />
                        </StyledBlogWrap>
                    </Container>
                </StyledSection>
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const postQuery = graphql`
    query ($slug: String!) {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        article(slug: { eq: $slug }) {
            ...BlogSix
        }
    }
`;

SingleBlogTemplate.propTypes = {
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
        article: PropTypes.shape(BlogType),
    }),
    pageContext: PropTypes.shape({
        next: PropTypes.shape({}),
        previous: PropTypes.shape({}),
    }),
};

export default SingleBlogTemplate;
