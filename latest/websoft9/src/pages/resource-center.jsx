import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {graphql }  from  'gatsby';
import defaultImage from "@assets/images/default.png";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ResourceArea from "@containers/elements/lists/section-03"
import HeroArea from "@containers/hero/layout-01";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import styled from "@styled";

const ResourceCenterPage = ({location,data }) => {
    const { t } = useTranslation();
    
    const cataLogData = data.allContentfulAboutContent.nodes.filter((item)=>item.key != "solution").filter((item)=>item.key != "news"); //所有资源目录(排除解决方案和新闻)
    const solutionData = data.allSolution.nodes; //所有解决方案
    const allData = data.allContentfulResource.nodes.filter((item)=>item.type.key != "news").filter((item)=>item.type.key != "solution"); //所有资源(排除新闻)
    // var allSolutionSubResource = [];
    
    // //遍历所有资源取出所有关联资源
    // allData?.map((item)=>{
    //     if(item.solutions != null){
    //         item.solutions.map((subItem)=>{
    //             if(subItem.type.key != "news"){
    //                 allSolutionSubResource.push(subItem);
    //             }
    //         })
    //     }
    // })

    // const allResourceData = allSolutionSubResource;

    const [solutionType, setSolutionType] =  React.useState('ALL');
    const [contentType, setContentType] =  React.useState('ALL');

    const [resourceData,setResourceData] = React.useState(allData);

    const solutionHandleChange = (event) => {
        const type = event.target.value;
        if(type == "ALL" && contentType == "ALL"){ //查询所有解决方案下所有相关资源
            setResourceData(allData);
        }
        else if(contentType == "ALL"){//根据某一个解决方案查询所有相关资源
            let values = [];
            allData.map((item)=>{
                if(item!=null){               
                        item.solutions?.map((sub)=>{
                            if(sub.slug == type){
                                values.push(item);
                            }
                        })
                }
            })
            setResourceData(values);
        }
        else if(type == "ALL"){ //全部解决方案下根据类型查询
            setResourceData(allData.filter((item)=>item.type.key == contentType));
        }
        else{            
            let values = [];
            allData.map((item)=>{
                if(item!=null){               
                        item.solutions?.map((sub)=>{
                            if(sub.slug == type){
                                values.push(item);
                            }
                        })
                }               
            })            
            setResourceData(values.filter((item)=>item.type.key == contentType));
        }
        setSolutionType(type);
    };

    const cataLogHandleChange = (event) => {
        const type = event.target.value;    
        if(solutionType == "ALL" && type == "ALL"){
            setResourceData(allData);
        }
        else if(solutionType == "ALL"){
            setResourceData(allData.filter((item)=>item.type.key == type));
        }
        else if(type == "ALL"){
            let values = [];
            allData.map((item)=>{
                if(item!=null){               
                        item.solutions?.map((sub)=>{
                            if(sub.slug == solutionType){
                                values.push(item);
                            }
                        })
                }               
            })   
            setResourceData(values);
        }
        else{
            let values = [];
            allData.map((item)=>{
                if(item!=null){               
                        item.solutions?.map((sub)=>{
                            if(sub.slug == solutionType){
                                values.push(item);
                            }
                        })
                }               
            })            
            setResourceData(values.filter((item)=>item.type.key == type));
        }
        setContentType(type);
    };

    return (
        <Layout location={location}>
            <Seo title="Resource Center" />
            <Header shortcutMenuData={data.shortcutMenu.nodes} topMenuData={data.topMenu.nodes} />
        
        <main className="site-wrapper-reveal">
            <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

            <div style={{paddingBlockStart: "55px",paddingBlockEnd: "17px"}}>
                <Container>
                    <Row>
                    <Col>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">{t("Categories")}</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={solutionType}
                                label="Categories"
                                onChange={solutionHandleChange}
                                >
                                    <MenuItem value="ALL">
                                        <em>{t("ALL")}</em>
                                    </MenuItem>
                                    {
                                        solutionData.map((item)=>{
                                            return(
                                                <MenuItem key={item.id} value={item.slug}>{item.title}</MenuItem>
                                            ); 
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">{t("Type of asset")}</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={contentType}
                                label="Type of asset"
                                onChange={cataLogHandleChange}
                                >
                                    <MenuItem value="ALL">
                                        <em>{t("ALL")}</em>
                                    </MenuItem>
                                    {
                                        cataLogData.map((item)=>{
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
           
            <ResourceArea
                // cataLogData={data.allContentfulAboutContent.nodes}
                resourceData={resourceData}
                // solutionData={solutionData}
                // rootPage ="/resource-center"
                // currentPage = {currentPage}
                // numberOfPages={resourceTypesNumberOfPages}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query ResourceCenterPageQuery($language: String!) {
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
        allContentfulResource(filter: {node_locale: {eq: $language}}) {
            nodes {
            id
            slug
            title
            image: featureImage
            type {
                id
                key
                title
            }
            solutions {
                id
                slug
                title
                image: featureImage
                type {
                id
                key
                title
                }
            }
            }
        }
        #查询所有解决方案
        allSolution:allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: "solution"}}}
        ) {
            nodes {
            id            
            slug
            title
            subTitle
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

export default ResourceCenterPage;