import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import { HeadingType, ButtonType } from "@utils/types";
import { StyledSection, StyledHeading, StyledBG,HeroTextBox,StyledSubtitle,ImageBoxTwo,TestimonialRating } from "./style";
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
import TabArea from "@containers/elements/tabs/section-02";

const CTAArea = ({ data,resourceData }) => {
    const { t } = useTranslation();

    const ratingItems = [];
    const disableRating = [];
    for (let i = 1; i <= data.review; i++) {
        ratingItems.push(
            <span key={`rating-${i}`}>
                <i className="rating fa fa-star"></i>
            </span>
        );
    }

    if (data.review < 5) {
        for (let i = 1; i <= 5 - data.review; i++) {
            disableRating.push(
                <span key={`disable-rating-${i}`}>
                    <i className="rating disable fa fa-star"></i>
                </span>
            );
        }
    }

    return (
        <StyledSection>
            <Container>
                <Row
                    alignItems="center"
                    textAlign={["center", null, null, "left"]}
                >
                    <Col xl={3}>
                        <HeroTextBox>                           
                                <ImageBoxTwo>
                                    <Image src={data.image==null?defaultImage:data.image.imageurl} onError={(e)=>{e.target.onerror=null;e.target.src={defaultImage}}} />
                                </ImageBoxTwo>
                        </HeroTextBox>
                    </Col>
                    <Col xl={7}>
                        <HeroTextBox style={ {paddingLeft:'0px',marginLeft:'0px',}}>                          
                            <StyledSubtitle as="h3">
                                {data.trademark}
                            </StyledSubtitle>
                                                    
                            <Text>{data.summary}</Text>

                            <TestimonialRating>
                                {ratingItems}
                                {disableRating}
                                {" "} | {" "} {data.type[0].title}
                            </TestimonialRating>
                        </HeroTextBox>
                    </Col>
                    <Col xl={2}  className="text-center">
                        <Button  m="7px" >{t("Get it Now")}</Button>
                    </Col>                   
                </Row>
                <Line mt="40px" mb="40px" borderWidth="1px" style={{marginLeft:"30px"}} />
                <Row>
                    <Col xl={10}>
                        <FullWideSlider data={ data.screenshots}/>

                        {/* <Row>
                            <TabArea dataOverview={data.overview?.overview} dataHighlights={data.highlights} dataDescription={data.description?.childMarkdownRemark.html}/>
                        </Row> */}

                        <LegendArea1 title={t("Overview")} data={ data.overview?.overview }/>

                        <LegendArea3 title={t("Highlights")} data={ data.highlights }/>

                        <LegendArea2 title={t("Description")} data={ data.description?.childMarkdownRemark.html }/>

                        <Row>
                            <FAQArea  data={ data.faq }/>
                        </Row>
                        <Row style={{paddingLeft:'30px'}}>                           
                            <Heading as="h6" mb="37px" textAlign="left">
                                {data!=null ? t("Related Applications"):null}
                            </Heading>    
                            {
                                data?.type[0]?.product && data.type[0].product.map((item) => {
                                        return (                                   
                                            <Col
                                                lg={4}
                                                md={6}
                                                className="box-item"
                                                key={item.id}
                                            >
                                                <BoxImage
                                                    title={item.trademark}
                                                    image=
                                                    {                                         
                                                        item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                                    }
                                                    // desc={item.summary}
                                                    path={`/app-center/${item.key}`}
                                                />
                                            </Col>   
                                        );
                            })}
                        </Row>
                        <Row style={{paddingLeft:'30px'}}>
                            <Heading as="h6" mb="37px" textAlign="left">
                                {data!=null ? t("Learning Materials"):null}
                            </Heading>   
                            {resourceData && resourceData.map((feature,i) => {
                                var image = new Object();
                                image.src = feature.image;
                                return (
                                    <Col
                                        lg={4}
                                        md={6}
                                        className="box-item"
                                        key={feature.id+i}
                                    >
                                        <BoxImage
                                            image={image}
                                            title={feature.title}
                                            category={feature.type.title}
                                            // desc={feature.subTitle}
                                            path={feature.slug}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>


                    </Col>
                    <Col  xl={2}>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Classification")}</Row>
                            {
                                data?.type && data.type.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>                                           
                                            <Link to={`/app-center/${item.key}`} style={{paddingLeft:'0px',marginLeft:'0px'}}>{item.title} </Link>
                                        </Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Os")}</Row>
                            {
                                 data?.os && data.os.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Open Source License")}</Row>
                            <Row style={{color:"dodgerblue"}}>{ data?.license && data.license.key}</Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Support Language")}</Row>
                            {
                                data?.supportLanguage && data.supportLanguage.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Languages")}</Row>
                            {
                                data?.program && data.program.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item.name}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Solution")}</Row>
                            {
                                data?.solution && data.solution.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item.title}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Resource")}</Row>
                            <Row style={{color:"dodgerblue"}}>                                
                                <Link  to="https://support.websoft9.com/docs/" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("文档")} </Link>
                            </Row>
                            <Row style={{color:"dodgerblue"}}>                               
                                <Link  to="https://github.com/websoft9" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("GitHub")} </Link>
                            </Row>
                            <Row style={{color:"dodgerblue"}}>
                                <Link  to={data.websiteurl} style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("官网")} </Link>
                            </Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Applicable Personnel")}</Row>
                            {
                                data?.userType && data.userType.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item.title}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("沟通反馈")}</Row>
                            <Row style={{color:"dodgerblue"}}>
                                <Link  to="/" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("提交此应用的建议")} </Link>
                            </Row>
                            <Row style={{color:"dodgerblue"}}>
                                <Link  to="/" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("获取专业服务")} </Link> 
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
