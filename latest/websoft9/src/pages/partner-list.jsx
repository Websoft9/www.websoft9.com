import React from "react";
import {graphql }  from  'gatsby';
import { Container, Row, Col } from "react-bootstrap";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import defaultImage from "@assets/images/default.png";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import HeroArea from "@containers/hero/layout-01";
import PartnerArea from "@containers/elements/box-large-image/section-02";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import ResourceArea from "@containers/elements/lists/section-03"


const PartnerDirectoryPage = ({location,data }) => {
    const { t } = useTranslation();
    const [brandType, setBrandType] =  React.useState('ALL');
    const allData = data.allContentfulBaseBrand.nodes ; //所有数据
    const [partnerceData,setPartnerceData] = React.useState(allData);

    const brandTypeHandleChange = (event) => {
        const type = event.target.value;

        if(type == "ALL"){
            setPartnerceData(allData);
        }
        else{
            setPartnerceData(allData.filter((item)=>item.type.key == type));
        }

        setBrandType(type);
    };


    return (
        <Layout location={location}>
            <Seo title="Partner List" />
            <Header shortcutMenuData={data.shortcutMenu.nodes} topMenuData={data.topMenu.nodes} />
        
            <main className="site-wrapper-reveal">
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <div style={{paddingBlockStart: "55px",paddingBlockEnd: "17px"}}>
                    <Container>
                        <Row>
                        <Col lg={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t("Categories")}</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={brandType}
                                    label="Categories"
                                    onChange={brandTypeHandleChange}
                                    >
                                        <MenuItem value="ALL">
                                            <em>{t("ALL")}</em>
                                        </MenuItem>
                                        {
                                            data.allContentfulAboutBrandType.nodes && data.allContentfulAboutBrandType.nodes.map((item)=>{
                                                return(
                                                    <MenuItem key={item.id} value={item.key}>{item.title}</MenuItem>
                                                ); 
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </Col>                   
                    </Row>                   
                    </Container>
                </div>
           
                <ResourceArea resourceData={ partnerceData }/>

                <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />

            </main>
        
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query PartnerDirectoryPageQuery($language: String!) {
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
        #查询所有合作伙伴类型
        allContentfulAboutBrandType(
            filter: {node_locale: {eq: $language}, key: {ne: "customer"}}
        ) {
            nodes {
            id
            key
            title
            }
        }
        #查询合作伙伴
        allContentfulBaseBrand(
                filter: {node_locale: {eq: $language}, type: {key: {ne: "customer"}}}
            ) {
                nodes {
                id
                key
                name
                siteurl
                type {
                    id
                    key
                    title
                }
                logo {
                    id
                    imageurl
                }
                }
            }
        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "PartnerList"}}) {
            nodes {
            content {
                id
                headings: title
                texts: subTitle
                media
                buttons {
                id
                content: key
                path: value
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

export default PartnerDirectoryPage;
