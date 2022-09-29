import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ResourceArea from "@containers/elements/lists/section-03"
import HeroArea from "@containers/hero/layout-01";

const ResourceTypeTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} />
            <Header />
        
        <main className="site-wrapper-reveal">
            <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
            
            <ResourceArea
                cataLogData={data.allContentfulAboutContent.nodes}
                resourceData={data.allContentfulResource.nodes}
                rootPage = {rootPage}
                currentPage = {currentPage}
                numberOfPages={numberOfPages}
                location={location}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer />
        </Layout>
    );
};
//
export const query = graphql`
    query ResourceTypeTemplateQuery($language: String!,$limit:Int!,$skip:Int!,$resourceType:String! ) {
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
        #查询资源目录
        allContentfulAboutContent(filter: {node_locale: {eq: $language}}) {
            nodes {
            id
            key
            title
            }
        }
        #查询所有解决方案
        allSolution:allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: "solution"}}}
        ) {
            nodes {
            id            
            slug
            title
            subTitle
            featureImage
            }
        }
        #查询所有资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: $resourceType}}}
            limit: $limit
            skip: $skip
        ) {
            nodes {
            id
            slug
            title
            image: featureImage
            type {
                id
                key
                title
            }
            }
        }

        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "ResourceCenter"}}) {
            nodes {
            title
            content {
                id
                headings:title
                texts:subTitle
                media
                buttons {
                    id
                    content:key
                    path:value
                }
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    icon
                    image
                }
                ... on ContentfulResource {
                        type {
                            title
                        }
                        id
                        title
                        subTitle
                        image: featureImage
                        slug
                    }
                }
            }
            }
        }
    }
`;

export default ResourceTypeTemplate;
