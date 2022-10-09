import React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import { graphql } from "gatsby";
import HeroArea from "@containers/hero/layout-01";
import ResourceArea from "@containers/elements/lists/section-03"

const SolutionsPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">
            
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <ResourceArea resourceData={ data.allContentfulResource.nodes} location={location}/>
            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query SolutionsPageQuery($language: String!) {
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
        #查询当前页面(功能页面：Solution)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Solution"}}) {
            nodes {
            title
            description {
                description
            }
            tags {
                id
                name
            }
            content {
                id
                headings: title
                texts: subTitle
                media
                buttons {
                id
                content: key
                path: value
                }
            }
            }
        }
        #查询所有解决方案
        allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: "solution"}}}
        ) {
            nodes {
            id
            slug
            title
            subTitle
            image: featureImage
            type {
                key
                title
                }
            }
        }
    }
`;

export default SolutionsPage;
