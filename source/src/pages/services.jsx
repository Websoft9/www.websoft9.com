import * as React from "react";
import { graphql } from "gatsby";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-01";
import CultureArea from "@containers/elements/box-image/section-03";
import SolutionArea from "@containers/elements/box-large-image/section-02";
import ListArea from "@containers/elements/lists/section-04"

const ServicesPage = ({ location, data }) => {

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header/>

            <main className="site-wrapper-reveal">

                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <ListArea />

                <SolutionArea data={data.allContentfulPage.nodes[0].content[1]} />

            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query ServicesQuery($language: String!) {
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
        #查询所有服务
        allContentfulBaseCatalog(
            filter: {node_locale: {eq: $language}, key: {eq: "service"}}
        ) {
            nodes {
            base_catalog {
                id
                key
                title
                position
                overview
                service {
                    id
                    key
                    texts:title
                    headings:summary
                    image:featureImage
                    customerType {
                        key
                        title
                    }
                    catalog {
                        id
                        key
                        title
                    }
                }
            }
            }
        }
 
        #查询所有服务对象
        allContentfulAboutBrandType(filter: {node_locale: {eq: $language}}) {
            nodes {
            id
            key
            title
            }
        }

        #查询当前页面数据
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Services"}}) {
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
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    image
                    icon
                    description {
                        description
                    }
                }
                ... on ContentfulResource {
                        type {
                            id
                            key
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

export default ServicesPage;
