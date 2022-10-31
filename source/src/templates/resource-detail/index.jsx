import Seo from "@components/seo";
import ResourceDetailArea from "@containers/cta/layout-05";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const ResourceDetailTemplate = ({ location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulResource.nodes[0].title} description={data.allContentfulResource.nodes[0]?.description?.description} keywords={data.allContentfulResource.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">
                <ResourceDetailArea data={data.allContentfulResource.nodes[0]} relatedReading={data.RelatedReading.nodes} siteData={data.site.siteMetadata} />

            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query ResourceDetailQuery($language: String!,$slug:String!) {
        #多语言
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
            site {
                siteMetadata {
                copyright
                description
                siteUrl
                socials {
                    icon
                    id
                    link
                    title
                }
                }
                }
        #查询相关阅读
        RelatedReading:allContentfulResource(
            filter: {node_locale: {eq: $language},slug: {ne: $slug}}
            limit: 3
            sort: {fields: time, order: DESC}
        ) {
            nodes {
            id
            slug
            title
            time(formatString: "YYYY-MM-DD")
            image:featureImage
            type {
                id
                key
                title
            }
            }
        }
        #查询资源详情
        allContentfulResource(filter: {node_locale: {eq: $language}, slug: {eq: $slug}}) {
            nodes {
            id
            slug
            title
            description {
                    description
                }
            image: featureImage
            type {
                id
                key
                title
            }
            author {
                id
                title
                fullName
                pictureUrl
                customer {
                    name
                }
            }
            content {
                id
                content
                childMarkdownRemark {
                    html
                }
            }
            persons {
                id
                title
                reviews
                image:pictureUrl
                fullName
            }
            customers {
                id
                name
                siteurl
                logo {
                imageurl
                }
            }
            products {
                id
                key
                trademark
            }
            solutions:resources {
                id
                title
                time(formatString: "YYYY-MM-DD")
                slug
                type{
                    id
                    key
                    title
                }
            }
            tags {
                id
                name
                keyword
            }
            time(formatString: "YYYY-MM-DD")
            downloadUrl
            }
        }
    }
`;

export default ResourceDetailTemplate;
