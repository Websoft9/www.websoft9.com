import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ResourceDetailArea from "@containers/cta/layout-06";

const SolutionDetailTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title={data.contentfulResource.title} description={data.contentfulResource.description?.description} keywords={data.contentfulResource.tags}/>
            <Header />
        
            <main className="site-wrapper-reveal">

                <ResourceDetailArea data={ data.contentfulResource} relatedReading={data.allContentfulResource.nodes} /> 
                
            </main>
        
        <Footer />
        </Layout>
    );
};
//
export const query = graphql`
    query SolutionDetaiTemplateQuery($language: String!,$slug:String!) {
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
        #查询解决方案详情
        contentfulResource(node_locale: {eq: $language}, slug: {eq: $slug}) {
            id
            tags {
                    id
                    name
                }
            title
            subTitle
            featureImage
            action {
            id
            key
            value
            }
            description {
                description
            }
            content {
            content
            }
            resource {
            id
            slug
            title
            featureImage
            type {
                id
                key
                title
            }
            }
            features {
            id
            headings:title
            texts:subtitle
            media:image
            }
            customers {
            id
            logo {
                src:imageurl
                id
                slug
                title
            }
            }
        }
        #查询“更多方案”
        allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: "solution"}}, slug: {ne: $slug}}
            limit: 4
        ) {
            nodes {
            id
            slug
            title
            featureImage
            type {
                id
                key
                title
            }
            }
        }
    }
`;

export default SolutionDetailTemplate;