import HeroArea from "@containers/hero/layout-08";
import Heading from "@ui/heading";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import "markdown-navbar/dist/navbar.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { StyledSection } from "./style";
// import BoxImage from "@components/box-image/layout-02";
import defaultImage from "@assets/images/default.png";
import BoxImage2 from "@components/box-image/layout-01";
import BoxImage from "@components/box-large-image/layout-02";
import PartnerArea from "@containers/elements/client-logo/section-03";
import HeroImageArea from "@containers/hero/layout-06";
import ValuesArea from "@containers/it-service/layout-01";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { AnchorLink } from "gatsby-plugin-anchor-links";

//用于显示场景方案详情页
const CTAArea = ({ data,relatedReading,location }) => {
    const { t } = useTranslation();

    const heroData = {
        headings:data.title,
        texts:data.subTitle,
        media:data.featureImage,
        buttons:[],
        customers:[]
    };

    data.action.map((ac)=>{
        const button  = {
            id:ac.id,
            content:ac.key,
            path:ac.value
        }
        heroData.buttons.push(button);
    })

    // data.customers.map((item)=>{
    //     const customer  = {
    //         id:item.id,
    //         logo:{
    //             id:item.logo.id,
    //             src:item.logo.src,
    //             slug:item.logo.slug,
    //             title:item.logo.title
    //         }
    //     }
    //     heroData.customers.push(customer);
    // })
    const pathName = location.pathname;
    const catalogs = [
        {id:"id-anchorpoint-1",value:t("Challengeg")},
        {id:"id-anchorpoint-2",value:t("How do we solve it?")},
        {id:"id-anchorpoint-3",value:t("Cases")},
        {id:"id-anchorpoint-4",value:t("Related Applications")},
        {id:"id-anchorpoint-5",value:t("Related Services")},
        {id:"id-anchorpoint-6",value:t("Business insight")},
    ];

    return (
        <StyledSection>
            <HeroArea data={heroData} />
            <Row style={{backgroundColor:"rgba(25, 118, 210, 0.12)",marginTop:"0px"}}>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            disablePadding = {true}
                            style={{ display: 'flex', flexDirection: 'row', margin:"0 auto",maxWidth:"1200px",fontSize:'20px',fontWeight:"bold" }}
                            >
                                {
                                    catalogs && catalogs.map((item,index)=>{
                                        return (
                                            <ListItemButton key={item+index} /*onClick={(event) => handleListItemClick(event, item.value)}*/>
                                                <AnchorLink to={pathName+"#"+item.id} title={item.value}/>
                                            </ListItemButton>
                                        );
                                    })
                                }
                        </List>
            </Row>

            <Container>
                <Row>
                    <PartnerArea data={data.customers}/>
                </Row>

                <Row id="id-anchorpoint-1" mb="90px">
                        <Heading as="h4" mb="40px" textAlign="left">{t("Challengeg")}</Heading>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {data.description?.description}
                        </ReactMarkdown>

                        <ValuesArea data={data.features_List}/>
                </Row>

                <Row id="id-anchorpoint-2" mb="90px">
                        <Heading as="h4" mb="40px" textAlign="left">{t("How do we solve it?")}</Heading>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {data.content?.content}
                        </ReactMarkdown>
                </Row>

                <Row>
                        {
                            data.features && data.features.map((feature,i)=>{
                                if(i%2==0){
                                    return (
                                        <HeroImageArea  key={feature.id} data={feature} />
                                    );
                                }
                                else{
                                    return (
                                        <HeroImageArea  key={feature.id} data={feature} imageAlign="left" />
                                    );
                                }
                            })
                        }
                </Row>

                <Row id="id-anchorpoint-3" mb="90px">
                    <Heading as="h4" mb="40px" textAlign="left">{t("Cases")}</Heading>
                    {
                        data.resources && 
                        data.resources.filter((rs)=>rs.type.key == "case").slice(0,3).map((item) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                >
                                    <BoxImage
                                        title={item.title}
                                        image=
                                        {
                                            item.featureImage==null ? {src: defaultImage} : {src: item.featureImage}
                                        }
                                        category={item.type.title}
                                        path={`/${item.type.key}/${item.slug}`}
                                    />
                                </Col>
                            );
                        })}
                </Row>

                <Row id="id-anchorpoint-4" mb="90px">
                    <Heading as="h4" mb="40px" textAlign="left">{t("Related Applications")}</Heading>
                    {
                        data?.products && data?.products.slice(0,4).map((item) => {
                            return (
                                <Col
                                    lg={3}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                >
                                    <BoxImage2
                                        title={item.trademark}
                                        image=
                                        {                                         
                                            item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                        }
                                        desc={item.description}
                                        path={`/apps/product/${item.key}`}
                                    />
                                </Col>   
                            );
                        })
                    }
                </Row>

                <Row id="id-anchorpoint-5" mb="90px">
                    <Heading as="h4" mb="40px" textAlign="left">{t("Related Services")}</Heading>
                    {data.services && data.services.slice(0,3).map((feature,i) => {
                        var image = new Object();
                        image.src = feature.featureImage == null ? defaultImage : feature.featureImage;
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={feature.id}
                            >
                                <BoxImage
                                    image={image}
                                    title={feature.title}
                                    //category={feature.catalog[0].title}
                                    desc={feature.summary}
                                    path={`/services/${feature.catalog[0].key}/${feature.key}`}
                                />
                            </Col>
                        );
                    })}
                </Row>


                    {/* <Row>
                        <Heading as="h5" mb="20px" textAlign="left">{t("为全球品牌提供")+data.title}</Heading>
                        <PartnerArea data={data.customers} />
                    </Row> */}

                    <Row id="id-anchorpoint-6" mb="40px">
                        <Heading as="h4" mb="40px" textAlign="left">{t("Business insight")}</Heading>
                        {
                        data.resources && 
                        data.resources.filter((rs) => rs.type.key != "case").filter((rs) => rs.type.key != "news").slice(0,3).map((item) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                >
                                    <BoxImage
                                        title={item.title}
                                        image=
                                        {
                                            item.featureImage==null ? {src: defaultImage} : {src: item.featureImage}
                                        }
                                        category={item.type.title}
                                        path={`/${item.type.key}/${item.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
