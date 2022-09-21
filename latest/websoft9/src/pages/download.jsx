import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import HeroArea from "@containers/hero/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import ResourceArea from "@containers/elements/lists/section-03"
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const DownloadPage = ({pageContext,location,data }) => {
    const { t } = useTranslation();

    return (
        <Layout location={location}>
            <Seo title="Download" />
            <Header shortcutMenuData={data.shortcutMenu.nodes} topMenuData={data.topMenu.nodes} />
        
            <main className="site-wrapper-reveal">
                <PageHeader pageContext={pageContext} location={location} title={t("Resource Download")} />

                <ResourceArea resourceData={ data.allContentfulResource.nodes } />

            </main>
        
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
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

export default DownloadPage;
