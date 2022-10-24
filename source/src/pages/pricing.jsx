import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import FAQArea from "@containers/elements/accordion/section-01";
import PricingArea from "@containers/pricing/layout-02";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from "gatsby";
import React from "react";

const PricingPage = ({ pageContext, location, data }) => { 

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">

                <PricingArea data={data.allContentfulPage.nodes[0].content[0]} />

                <FAQArea data={data.allContentfulPage.nodes[0].content[1]} />

                <CtaArea data={data.allContentfulPage.nodes[0].content[2]} />
            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query PricingPageQuery($language: String!) {
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
        # 查询页面：Pricing(价格)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Pricing"}}) {
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
                content:key
                path:value
                }
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    description {
                        description
                    }
                }
                ... on ContentfulBlock {
                    id
                    title
                    subTitle
                    media
                    link{
                        key
                        value
                    }
                    buttons {
                    id
                    period:key
                    price:value
                    }
                    features {
                    ... on ContentfulBaseFeature {
                        id
                        title

                    }
                    }
                }
                }
            }
            }
        }
    }
`;

export default PricingPage;
