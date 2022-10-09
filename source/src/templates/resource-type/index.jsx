import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ResourceArea from "@containers/elements/lists/section-03"
import HeroArea from "@containers/hero/layout-01";
import { Container, Row, Col } from "react-bootstrap";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Text from "@ui/text";

const ResourceTypeTemplate = ({pageContext,location,data }) => {
    const { t } = useTranslation();
    const { currentPage, numberOfPages,rootPage} = pageContext;
    const solutionData = data.allSolution.nodes; //所有解决方案 
    const allData = data.allContentfulResource.nodes; //所有子类的资源

    const [solutionType, setSolutionType] =  React.useState('ALL');
    const [resourceData,setResourceData] = React.useState(allData);

    const solutionHandleChange = (event) => {
        const type = event.target.value;

        if(type == "ALL"){
            setResourceData(allData);
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
            setResourceData(values);
        }
        setSolutionType(type);
    };

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />
        
        <main className="site-wrapper-reveal">
            {/* <HeroArea data={data.allContentfulPage.nodes[0].content[0]} /> */}

            <div style={{paddingBlockStart: "55px"}}>
                <Container>
                    <Row>
                    <Col lg={6}>
                            <Text fontSize="30px" fontWeight="bold">{t("BROWSE ALL")}{" "}{data.allContentfulResource.nodes?.[0]?.type?.title}</Text>
                    </Col>
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
                </Row>                   
                </Container>
            </div>
            
            <ResourceArea
                resourceData = {resourceData}
                rootPage = {rootPage}
                currentPage = {currentPage}
                numberOfPages= {numberOfPages}
                location = {location}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer />
        </Layout>
    );
};
//
export const query = graphql`
    query ResourceTypeTemplateQuery($language: String!,$limit:Int!,$skip:Int!,$resourceType:String! ) {
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
        #查询所有资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: $resourceType}}}
            limit: $limit
            skip: $skip
        ) {
            nodes {
            id
            slug
            title
            time(formatString: "YYYY-MM-DD")
            image: featureImage
            type {
                id
                key
                title
                description{
                    description
                }
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
            title
            description {
                description
            }
            tags {
                id
                name
            }
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
    }
`;

export default ResourceTypeTemplate;
