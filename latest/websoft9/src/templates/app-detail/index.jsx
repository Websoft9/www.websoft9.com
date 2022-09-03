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
import { Link,graphql }  from  'gatsby';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BoxImage from "@components/box-image/layout-01";
import PropTypes from "prop-types";
import defaultImage from "@assets/images/default.png";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-01";
import ProductDetailArea from "@containers/cta/layout-03";

const AppDetailTemplate = ({ location,data }) => {
    return (
        <Layout location={location}>
            <Seo title="App Detail" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />
        
        <main className="site-wrapper-reveal">
            {/* <HeroArea data={data.allContentfulPage.nodes[0].content[0]} /> */}
            <ProductDetailArea data={ data.allContentfulProduct.nodes[0] } resourceData={data.allContentfulResource.nodes }  />

        </main>      
        <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query AppDetailQuery($language: String!,$slug:String!) {
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
        #根据产品key查询相关学习资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}, product: {elemMatch: {key: {eq: $slug}}}}
        ) {
            nodes {
            type {
                title
            }
            id
            title
            subTitle
            image:featureImage
            slug
            }
        }

        allContentfulProduct(filter: {node_locale: {eq: $language}, key: {eq: $slug}}) {
            nodes {
                id
                title
                trademark
                review
                summary
                image: logo {
                    imageurl
                }
                type: catalog {
                    key
                    title
                    product {
                        id
                        key
                        trademark
                        summary
                        image:logo {
                            imageurl
                        }
                    }
                }
                screenshots{
                    key
                    value
                }
                os
                supportLanguage
                program {
                    name
                }
                userType {
                    title
                }
                solution {
                    title
                }
                license {        
                    key
                }
                websiteurl
                overview {
                    overview
                }
                highlights
                description {
                    childMarkdownRemark {
                        html
                    }
                }
                faq {
                    key
                    value
                    id
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

export default AppDetailTemplate;
