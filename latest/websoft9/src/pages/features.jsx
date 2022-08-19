import React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import { graphql } from "gatsby";
import HeroArea from "@containers/hero/layout-01";
import HeroImageLeftArea from "@containers/hero/layout-04";
import HeroImageRightArea from "@containers/hero/layout-05";
import VerticalTabArea from "@containers/tab/layout-02";
import ITServicesArea from "@containers/it-service/layout-02";
import CtaArea from "@containers/cta/layout-04";
import SolutionArea from "@containers/elements/box-large-image/section-02";

const FeaturesPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title="Pricing Plan" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />

            <main className="site-wrapper-reveal">
               
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
                <ITServicesArea data={ data.allContentfulPage.nodes[0].content[1] }/>

                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[2] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[3] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[4] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[5] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[6] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[7] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[8] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[9] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[10] }/>

                <VerticalTabArea data={ data.allContentfulPage.nodes[0].content[11] }/>
                <CtaArea data={ data.allContentfulPage.nodes[0].content[12] } />
                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[13] } />
            </main>
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query FeaturesPageQuery($language: String!) {
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
        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Features"}}) {
            nodes {
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
        
    }
`;

export default FeaturesPage;
