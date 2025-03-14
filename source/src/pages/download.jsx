import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import PageHeader from "@containers/page-header/layout-01";
import ResourceArea from "@containers/elements/lists/section-03"

const DownloadPage = ({pageContext,location,data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />
        
            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <ResourceArea resourceData={ data.allContentfulResource.nodes} location={location}/>

            </main>
        
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query DownloadPageQuery($language: String!) {
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

        #查询有下载附件的资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}, downloadUrl: {ne: null}}
            ) {
            nodes {
                id
                slug
                title
                subTitle
                downloadUrl
                image:featureImage
                type {
                    id
                    key
                    title
                }
            }
        }

         #查询当前页面数据
         allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Download"}}) {
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
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    image
                    description {
                        description
                    }
                }
                }
            }
            }
        }
    }
`;

export default DownloadPage;
