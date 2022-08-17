import React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PricingArea from "@containers/pricing/layout-02";
import CtaArea from "@containers/cta/layout-04";
import { graphql } from "gatsby";

const PricingPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title="Pricing Plan" />
            {/* <Header data={{ menu:data.allContentfulMenu.nodes, }} /> */}

            <main className="site-wrapper-reveal">
               
                 <PricingArea data={ data.allContentfulPage.nodes[0].content[0]} />

                 {/* <CtaArea data={ data.allContentfulPage.nodes[0].content[10] } /> */}

            </main>
            {/* <Footer data={{ ...data.site.siteMetadata }} /> */}
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
        site {
            siteMetadata {
                copyright
                contact {
                    phone
                    email
                    address
                    website
                }
                siteUrl
            }
        }
        # 查询菜单项
        allContentfulMenu(
            filter: {node_locale: {eq: $language}, isTop: {eq: true}}
            sort: {fields: title}
        ) {
            nodes {
            id
            text: title
            link
            megamenu: submenu {
                title
                submenu {
                id
                text: title
                link
                }
            }
            }
        }
        # 查询页面：Pricing(价格)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Pricing"}}) {
            nodes {
            content {
                headings: title
                texts: subTitle
                media
                buttons {
                    id
                    content: key
                    path: value
                }
                features {
                ... on ContentfulBlock {
                    id
                    title
                    subTitle
                    media
                    features {
                    ... on ContentfulBaseFeature {
                        id
                        title
                    }
                    }
                    buttons {
                        id
                        period: key
                        price:value
                    }
                }
                }
            }
            }
        }
    }
`;

export default PricingPage;
