import React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import PricingArea from "@containers/pricing/layout-02";
import CtaArea from "@containers/cta/layout-04";
import { graphql } from "gatsby";
import FAQArea from "@containers/elements/accordion/section-01";

const PricingPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title="Pricing Plan" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />

            <main className="site-wrapper-reveal">
               
                 <PricingArea data={ data.allContentfulPage.nodes[0].content[0]} />

                 <FAQArea data={data.allContentfulBaseFeature.nodes }/>

                 {/* <CtaArea data={ data.allContentfulPage.nodes[0].content[10] } /> */}


            </main>
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
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
            description
            socials {
                icon
                id
                link
                title
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
        #查询导航主菜单
        topMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "MainMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            text: title
            link
            megamenu: submenu {
                ... on ContentfulMenu {
                id
                text: title
                submenu {
                    ... on ContentfulMenu {
                    id
                    text: title
                    link
                    }
                    ... on ContentfulProduct {
                    id
                    text: trademark
                    logo {
                        imageurl
                    }
                    }
                    ... on ContentfulResource {
                    id
                    text: title
                    }
                }
                }
                ... on ContentfulBaseFeature {
                id
                title
                subtitle
                image
                buttons:link {
                    key
                    value
                }
                }
            }
            }
        }
        #查询底部菜单
        BottomMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "BottomMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            menus: submenu {
                ... on ContentfulMenu {
                id
                title
                link
                submenu {
                    ... on ContentfulMenu {
                    id
                    title
                    link
                    }
                }
                }
            }
            }
        }      
        #查询页脚菜单
        FooterMenu: allContentfulMenu(
            filter: {type: {eq: "FooterMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link
            submenu {
                ... on ContentfulMenu {
                id
                title
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
        #查询FAQ
        allContentfulBaseFeature(
            filter: {node_locale: {eq: $language}, type: {eq: "FAQ"}}
        ) {
            nodes {
            id
            title
            description {
                description
            }
            }
        }
    }
`;

export default PricingPage;
