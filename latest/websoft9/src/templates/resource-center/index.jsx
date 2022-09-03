import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import { SectionWrap, ListGroupWrap } from "./style";
import ProductArea from "@containers/elements/box-image/section-01";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {graphql }  from  'gatsby';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BoxImage from "@components/box-image/layout-01";
import PropTypes from "prop-types";
import defaultImage from "@assets/images/default.png";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ListArea from "@containers/elements/lists/section-03"
import HeroArea from "@containers/hero/layout-01";

const ResourceCenterTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages } = pageContext;

    return (
        <Layout location={location}>
            <Seo title="App Center" />
            <Header shortcutMenuData={data.shortcutMenu.nodes} topMenuData={data.topMenu.nodes} />
        
        <main className="site-wrapper-reveal">
            <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
            
            <ListArea 
                cataLogData={data.allContentfulAboutContent.nodes}
                resourceData={data.allContentfulResource.nodes}
                rootPage ="/resource-center"
                currentPage = {currentPage}
                numberOfPages={numberOfPages}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};
//
export const query = graphql`
    query ResourceCenterTemplateQuery($language: String!,$limit:Int!,$skip:Int!) {
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
        #查询资源目录
        allContentfulAboutContent(filter: {node_locale: {eq: $language}}) {
            nodes {
            id
            key
            title
            }
        }
        #查询所有资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}}
            limit: $limit
            skip: $skip
        ) {
            nodes {
            id
            slug
            title
            image:featureImage
            type {
                id
                key
                title
            }
            }
        }

        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "ResourceCenter"}}) {
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
    }
`;

export default ResourceCenterTemplate;
