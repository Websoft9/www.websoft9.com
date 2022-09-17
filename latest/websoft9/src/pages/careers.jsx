import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import {Trans, useTranslation,Link, useI18next} from 'gatsby-plugin-react-i18next';
import PageHeader from "@containers/page-header/layout-01";
import SmoothTransitionSlider from "@containers/elements/flexible-image-slider/smooth-transition-slider";
import IdeaArea from "@containers/elements/box-image/section-04";
import TestimonialArea from "@containers/elements/testimonials/section-03";
import CtaArea from "@containers/cta/layout-04";

const CareersPage = ({ location, data }) => {

    return (
        <Layout location={location}>
            <Seo title="Careers" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <IdeaArea data={data.allContentfulPage.nodes[0].content[1]} lgSize={6}/>

                <SmoothTransitionSlider data={data.allContentfulPage.nodes[0].content[2]}/> 

                <TestimonialArea data={data.allContentfulPage.nodes[0].content[3]}/>
                
                <IdeaArea data={data.allContentfulPage.nodes[0].content[4]} lgSize={4}/>

                <CtaArea data={data.allContentfulPage.nodes[0].content[5]}  /> 
            </main>
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query CareersQuery($language: String!) {
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
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Careers"}}) {
            nodes {
            id
            key
            title
            content {
                id
                headings: title
                texts: subTitle
                image: backgourdImage
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
                ... on ContentfulBasePerson {
                    id
                    title
                    type
                    fullName
                    pictureUrl
                    reviews
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
    }
`;

export default CareersPage;
