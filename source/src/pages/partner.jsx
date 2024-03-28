import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import CultureArea from "@containers/elements/box-image/section-03";
import PartnerStoreArea from "@containers/elements/box-large-image/section-02";
import HeroArea from "@containers/hero/layout-01";
import PartnerArea from "@containers/partner/layout-02";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from "gatsby";
import * as React from "react";

const PartnerPage = ({ location, data }) => {

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags} />
            <Header />

            <main className="site-wrapper-reveal">
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[1]} lgSize={4} />

                <PartnerArea data={data.allContentfulPage.nodes[0].content[2]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[3]} lgSize={4} />

                <PartnerStoreArea data={data.allContentfulPage.nodes[0].content[4]} />

                <CtaArea data={data.allContentfulPage.nodes[0].content[5]} />

            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query PartnerQuery($language: String!) {
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
        #查询当前页面数据
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Partner"}}) {
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
                ... on ContentfulBaseBrand {
                        id
                        path: siteurl
                        logo {
                            src: imageurl
                        }
                    }
                    ... on ContentfulResource {
                        type {
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

export default PartnerPage;
