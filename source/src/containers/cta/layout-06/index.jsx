import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import { StyledSection,StyledContent} from "./style";
import Text from "@ui/text";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Line from "@ui/divider/line";
import { Link }  from  'gatsby';
import Heading from "@ui/heading";
import ReactMarkdown from "react-markdown";
import "markdown-navbar/dist/navbar.css";
import remarkGfm from 'remark-gfm'
import HeroArea from "@containers/hero/layout-01";
// import BoxImage from "@components/box-image/layout-02";
import BoxImage from "@components/box-large-image/layout-02";
import HeroImageArea from "@containers/hero/layout-06";
import PartnerArea from "@containers/elements/client-logo/section-03";

//用于显示场景方案详情页
const CTAArea = ({ data,relatedReading }) => {
    const { t } = useTranslation();

    const heroData = {
        headings:data.title,
        texts:data.subTitle,
        media:data.featureImage,
        buttons:[]
    };

    data.action.map((ac)=>{
        const button  = {
            id:ac.id,
            content:ac.key,
            path:ac.value
        }
        heroData.buttons.push(button);
    })

    return (
        <StyledSection>
            <HeroArea data={heroData} />
            <Container>              
                {/* <StyledContent> */}
                <Row>
                    <Col lg={12} md={6} >
                        <Heading as="h5" mb="20px" textAlign="left">{t("Challengeg")}</Heading>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {data.description.description}
                        </ReactMarkdown>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={6} >
                        <Heading as="h5" mb="20px" textAlign="left">{t("How do we solve it?")}</Heading>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {data.content.content}
                        </ReactMarkdown>
                    </Col>
                </Row>
                <Row>
                    {
                        data.resource && 
                        data.resource.filter((rs)=>rs.type.key != "news").slice(0,4).map((item) => {
                            return (
                                <Col
                                    lg={3}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                    style={{marginBlockEnd:"20px",marginBlockStart:"20px"}}
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
                    <Row>
                        <Heading as="h5" mb="20px" textAlign="left">{t("为全球品牌提供")+data.title}</Heading>
                        <PartnerArea data={data.customers} />
                    </Row>  
                    <Row>
                        <Heading as="h5" mb="20px" textAlign="left">{t("More solution")}</Heading>
                        {
                            relatedReading && 
                            relatedReading.map((item) => {
                                return (
                                    <Col
                                        lg={3}
                                        md={6}
                                        className="box-item"
                                        key={item.id}
                                        style={{marginBlockEnd:"20px",marginBlockStart:"20px"}}
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
                {/* </StyledContent> */}
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
