import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import { HeadingType, ButtonType } from "@utils/types";
import { 
    StyledSection, StyledHeading, StyledBG,HeroTextBox,StyledSubtitle,
    TestimonialRating,AuthorInfo,AuthorName,ImageBoxTwo,
    TestimonialInfo,TestimonialMedia,TestimonialAuthor,
    AuthorRole,NavContainer,MarkdownStyle,ImageBoxOne } from "./style";
import Text from "@ui/text";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Image from "@ui/image";
import defaultImage from "@assets/images/default.png";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider";
import Line from "@ui/divider/line";
import SectionFour from "@containers/elements/dividers/section-04";
import { Link }  from  'gatsby';
import FAQArea from "@containers/elements/accordion/section-02";
import BoxImage from "@components/box-image/layout-01";
import Heading from "@ui/heading";
import LegendArea1 from "@containers/legend/layout-01";
import LegendArea2 from "@containers/legend/layout-02";
import LegendArea3 from "@containers/legend/layout-03";
import { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-02";
import ReactMarkdown from "react-markdown";
import MarkNav from 'markdown-navbar';
import Markdown from "markdown-to-jsx";
import "markdown-navbar/dist/navbar.css";
import remarkGfm from 'remark-gfm'
import TestimonialArea from "@containers/elements/testimonials/section-02";

const CTAArea = ({ data,relatedReading }) => {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <Container>
                <Row
                    alignItems="center"
                    textAlign={["center", null, null, "left"]}
                    key="row-1"
                >
                    <Col xl={8}>
                        <Row>
                            <HeroTextBox>                          
                                <StyledSubtitle>
                                    {data.title}
                                </StyledSubtitle>
                            </HeroTextBox>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <nobr>
                                   {t("Solution")}:
                                    {data.solutions && data.solutions.map((solution)=>{
                                        return (
                                            <Link key={solution.id} to={`/app-center/product/${solution.key}`} style={{color:"dodgerblue"}}>{solution.title}{' '}</Link>
                                        );
                                    })}
                                    </nobr>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                <nobr>
                                    {t("Related Applications")}:
                                    {data.products && data.products.map((product)=>{
                                        return (
                                            <Link key={product.id} to={`/app-center/product/${product.key}`} style={{color:"dodgerblue"}}>{product.trademark}{' '}</Link>
                                        );
                                    })}
                                </nobr>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                <nobr>
                                    {t("Tags")}:
                                    {data.tags && data.tags.map((tag)=>{
                                        return (
                                            <><font color="dodgerblue">{tag.name}</font>{' '}</>
                                        );
                                    })}
                                </nobr>
                                </Row>
                            </Col>
                            <Col>
                                <Row>{t("Author")}</Row>
                                <Row>
                                    { 
                                        data.author!=null &&                                   
                                        <SwiperSlide style={{paddingLeft:'0px'}}>
                                        <TestimonialInfo>
                                            {data.author[0]?.pictureUrl && (
                                                <TestimonialMedia>
                                                    <Image
                                                        src={data.author[0].pictureUrl}
                                                    />
                                                </TestimonialMedia>
                                            )}
                                            <TestimonialAuthor>
                                                <AuthorInfo>
                                                    {data.author[0].fullName && <AuthorName>{data.author[0].fullName}</AuthorName>}
                                                    {data.author[0].title && <AuthorRole>{data.author[0].title}</AuthorRole>}
                                                </AuthorInfo>
                                            </TestimonialAuthor>
                                        </TestimonialInfo>
                                        </SwiperSlide>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={2}>
                                {
                                    data.customers != null ? 
                                    <HeroTextBox style={{ width:"100px",height:"100px"}} >
                                        <ImageBoxTwo>
                                            <Image src={data.customers[0].logo==null?defaultImage:data.customers[0].logo.imageurl} />
                                        </ImageBoxTwo>
                                    </HeroTextBox>
                                    :
                                    <Text> {data.time}</Text>
                                }     
                            </Col>       
                            <Col xl={10}>
                                {
                                    data.customers != null ?
                                    <>
                                        <Text>{data.customers[0].name} </Text>
                                        <Text>{t("Official Website")} : 
                                            <Link to={data.customers[0].siteurl} style={{color:"dodgerblue"}}>{data.customers[0].siteurl}</Link>
                                        </Text>  
                                    </>
                                    :
                                    <></>
                                }
                            </Col>              
                        </Row>
                    </Col>
                    <Col xl={4}>
                        <ImageBoxOne >
                            <Image src={data.image==null?defaultImage:data.image}  />
                        </ImageBoxOne>
                    </Col>
                </Row>
                <Line mt="40px" mb="40px" borderWidth="1px" />
                <Row>
                    <Col xl={9}> 
                    <MarkdownStyle>                   
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {data.content.content}
                            </ReactMarkdown>
                    </MarkdownStyle>
                    </Col>
                    <Col xl={3}>
                        <NavContainer>
                            <Text style={{fontWeight:"bold",paddingLeft:'10px'}}>内容目录</Text>
                            <MarkNav source={data.content.content} headingTopOffset={80} ordered="false" />
                        </NavContainer>
                    </Col>
                </Row>
                <Line mt="40px" mb="40px" borderWidth="1px" />
                <Row>
                    {
                        data.persons!=null && 
                        <>
                        <TestimonialArea data={data.persons[0]}  />
                        <Line mt="40px" mb="40px" borderWidth="1px" />
                        </>
                    }                         
                </Row>
                
                <Row>
                {
                    relatedReading.length >0 && 
                    <Heading as="h6" mb="37px" textAlign="left">
                        {t("Related Reading")}
                    </Heading>
                }
                {
                    relatedReading && 
                    relatedReading?.map((item) => {
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
                                        item.image==null ? {src: defaultImage} : {src: item.image}
                                    }
                                    category={item.type.title}
                                    path={`/resource-center/resource/${item.slug}`}
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
