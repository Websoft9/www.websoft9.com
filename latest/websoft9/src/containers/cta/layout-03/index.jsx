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

const CTAArea = ({ data }) => {
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
                        {/* {data?.buttons?.map(({ id, content, ...rest }) => (
                            <Button key={id} m="7px" {...rest}>
                                {content}
                            </Button>
                        ))} */}
                        <Button  m="7px" >{t("立即安装")}</Button>
                    </Col>                   
                </Row>
                <Line mt="40px" mb="40px" borderWidth="1px" style={{marginLeft:"30px"}} />
                <Row>
                    <Col xl={10}>
                        <FullWideSlider data={data.screenshots}/>
                    </Col>
                    <Col  xl={2}>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("分类")}</Row>
                            {
                                data.type.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item.title}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("系统")}</Row>
                            {
                                data.os.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("开源许可")}</Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("支持语言")}</Row>
                            {
                                data.supportLanguage.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}}>{item}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("场景方案")}</Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("资源")}</Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("适用人员")}</Row>
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px"}}>
                            <Row>{t("沟通反馈")}</Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
