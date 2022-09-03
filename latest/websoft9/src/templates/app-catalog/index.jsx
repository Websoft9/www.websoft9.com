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
import ListArea from "@containers/elements/lists/section-02"
import HeroArea from "@containers/hero/layout-01";

const AppCatalogTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title="App Center" />
            <Header shortcutMenuData={data.shortcutMenu.nodes} topMenuData={data.topMenu.nodes} />
        
        <main className="site-wrapper-reveal">
            <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
            
            <ListArea 
                cataLogData={data.allContentfulBaseCatalog.nodes[0].base_catalog}
                productsData={data.allContentfulProduct.nodes}
                marketplaceData={data.allContentfulBaseBrand.nodes}
                rootPage = {rootPage}
                currentPage = {currentPage}
                numberOfPages={numberOfPages}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};
// $catalog: String!,$limit:Int!,$skip:Int!
export const query = graphql`
    query AppCatalogTemplateQuery($language: String!,$limit:Int!,$skip:Int!,$catalog: String!) {
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
        #查询云平台
        allContentfulBaseBrand(filter: {node_locale: {eq: $language}, type: {eq: "Marketplace"}}) {
            nodes {
            id
            key
            name
            }
        }
        allContentfulBaseCatalog(
            filter: {node_locale: {eq: $language}, key: {eq: "product"}}
            sort: {fields: catalog___catalog___catalog___position, order: ASC}
        ) {
            nodes {
            base_catalog {
                id
                key
                title
                product {
                id
                }
                base_catalog {
                id
                key
                title
                product {
                    id
                }
                }
            }
            }
        }
        allContentfulProduct(
            filter: {node_locale: {eq: $language}, catalog: {elemMatch: {key: {eq: $catalog}}}}
            limit: $limit
            skip: $skip
            sort: {fields: catalog___catalog___product___hot, order: DESC}
        ) {
            nodes {
                id
                key
                title
                trademark
                description: summary
                image: logo {
                    imageurl
                }
            }
        }
        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "AppCenter"}}) {
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

export default AppCatalogTemplate;
