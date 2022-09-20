import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import {Trans, useTranslation,Link, useI18next} from 'gatsby-plugin-react-i18next';
import PageHeader from "@containers/page-header/layout-01";
import TimelineArea from "@containers/timeline/layout-01";
import SmoothTransitionSlider from "@containers/elements/flexible-image-slider/smooth-transition-slider";
import AboutArea from "@containers/about/layout-04";
import CultureArea from "@containers/elements/box-image/section-03";
import CounterArea from "@containers/elements/counters/section-01";

const AboutUsPage = ({ location, data }) => {

    return (
        <Layout location={location}>
            <Seo title="About Us" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <AboutArea data={data.allContentfulPage.nodes[0].content[1]} />

                <TimelineArea data={data.allContentfulPage.nodes[0].content[2]} />  

                <SmoothTransitionSlider data={data.allContentfulPage.nodes[0].content[3]}/>

                <CultureArea data={data.allContentfulPage.nodes[0].content[4]} />

                <CounterArea data={data.allContentfulPage.nodes[0].content[5]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[6]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[7]} />

            </main>
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query AboutUsQuery($language: String!) {
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
        #查询当前页面数据
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "AboutUs"}}) {
            nodes {
            id
            key
            title
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
                    key
                    text: trademark
                    logo {
                        imageurl
                    }
                    }
                    ... on ContentfulResource {
                    id
                    slug
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
    }
`;

export default AboutUsPage;
