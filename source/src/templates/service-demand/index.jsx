import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import IframeArea from "@containers/iframe";
import PageHeader from "@containers/page-header/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const DemandPage = ({pageContext,location,data }) => {
    const { slug } = pageContext;
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />
        
            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />
                
                <IframeArea data={ data.allContentfulPage.nodes[0].content[1]?.link?.[0].value+`?servers_type=${slug}` }  width="100%" height="1100px" />

                <CtaArea data={ data.allContentfulPage.nodes[0].content[2] } />

            </main>
            <Footer/>
        </Layout>
    );
};
//
export const query = graphql`
    query DemandPageQuery($language: String!) {
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

        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Demand"}}) {
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
                image: backgourdImage
                media
                buttons {
                    id
                    content: key
                    path: value
                }
                link {
                id
                key
                value
                }
            }
            }
        }
    }
`;

export default DemandPage;
