import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import IframeArea from "@containers/iframe";
import PageHeader from "@containers/page-header/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const BecomePartnerPage = ({ pageContext, location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags} />
            <Header />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <IframeArea data={data.allContentfulPage.nodes[0].content[1]?.link?.[0].value} width="1200px" height="1400px" />

                <CtaArea data={data.allContentfulPage.nodes[0].content[2]} />
            </main>

            <Footer />
        </Layout>
    );
};
//
export const query = graphql`
    query BecomePartnerPageQuery($language: String!) {
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
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Becomepartner"}}) {
            nodes {
            title
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
        #查询顶部快捷菜单
        shortcutMenu: allContentfulMenu(
            filter: {type: {eq: "TopMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link    
            }
        }
        
    }
`;

export default BecomePartnerPage;