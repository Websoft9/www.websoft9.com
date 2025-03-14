import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import CultureArea from "@containers/elements/box-image/section-06";
import HeroArea from "@containers/hero/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Text from "@ui/text";
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />
        
            <main className="site-wrapper-reveal">
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <div style={{paddingBlockStart: "55px",paddingBlockEnd: "17px"}}>
                    <Container>
                        <Row>
                        <Col lg={6}>
                            <Text fontSize="30px" fontWeight="bold">{t("BROWSE ALL")}</Text>
                        </Col>
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

                <CultureArea data={partnerceData} lgSize={3}/>

                <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />

            </main>
        
            <Footer />
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
                description
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
    }
`;

export default PartnerDirectoryPage;
