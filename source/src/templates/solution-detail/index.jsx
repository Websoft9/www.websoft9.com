import Seo from "@components/seo";
import SolutionDetailArea from "@containers/cta/layout-06";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const SolutionDetailTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title={data.contentfulResource.title} description={data.contentfulResource.description?.description} keywords={data.contentfulResource.tags}/>
            <Header />
        
            <main className="site-wrapper-reveal">

                <SolutionDetailArea data={ data.contentfulResource} relatedReading={data.allContentfulResource.nodes} location={location}/> 
                
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
            features_List {
                id
                key
                value
            }
            content {
                content
            }
            resources {
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
                title
                subtitle
                image
                description {
                    description
                }
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
            products {
                id
                key
                title
                trademark
                description: summary
                image: logo {
                    imageurl
                }
            }
            services{
                id
                key
                title
                summary
                featureImage
                catalog {
                    id
                    key
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