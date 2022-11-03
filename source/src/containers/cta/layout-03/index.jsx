import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-image/layout-08";
import BoxImage2 from "@components/box-large-image/layout-02";
import FAQArea from "@containers/elements/accordion/section-02";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider";
import LegendArea1 from "@containers/legend/layout-01";
import LegendArea2 from "@containers/legend/layout-02";
import LegendArea3 from "@containers/legend/layout-03";
import Button from "@ui/button";
import Line from "@ui/divider/line";
import Heading from "@ui/heading";
import Image from "@ui/image";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { Link, navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { HeroTextBox, ImageBoxTwo, StyledAnchor, StyledSection, StyledSubtitle, TestimonialRating } from "./style";

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
        <React.Fragment>
            <div style={{float:"left",paddingLeft:"20px"}}>
                <StyledAnchor onClick={() => navigate(-1)}>
                    {/* <i className="icon far fa-angle-left"></i> */}
                    <svg t="1667186289168" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2811" width="48" height="48"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 832c-212 0-384-172-384-384s172-384 384-384 384 172 384 384-172 384-384 384z m158.4-610.4L444 512l226.4 226.4-44.8 45.6-272-272 272-272 44.8 45.6z" p-id="2812"></path></svg>
                </StyledAnchor>
            </div>
            <StyledSection>
            <Container>
                <Row
                    alignItems="center"
                    textAlign={["center", null, null, "left"]}
                >
                    <Col xl={3}>
                        <HeroTextBox>
                                <ImageBoxTwo>
                                    <Image src={data.image==null?defaultImage:data.image.imageurl} onError={(e)=>{e.target.onerror=null;e.target.src={defaultImage}}} alt=""/>
                                </ImageBoxTwo>
                        </HeroTextBox>
                    </Col>
                    <Col xl={7}>
                        <HeroTextBox style={ {paddingLeft:'0px',marginLeft:'0px',}}>
                            <StyledSubtitle as="h5">
                                {data.trademark}
                            </StyledSubtitle>
                                                    
                            <Text>{data.summary}</Text>

                            <TestimonialRating>
                                {ratingItems}
                                {disableRating}
                                {" "} | {" "} 
                                {/* {
                                    data?.type.map((item)=>{
                                        return (
                                            <React.Fragment key={item.id}>{item.title}{" |"}</React.Fragment>
                                        );
                                    })
                                } */}
                                {data.type?.[0].title}
                            </TestimonialRating>
                        </HeroTextBox>
                    </Col>
                    <Col xl={2}  className="text-center">
                        <Button  m="7px" >{t("Get it Now")}</Button>
                    </Col>
                </Row>
                <Row>
                    <Line mt="40px" mb="40px" borderWidth="1px" style={{marginLeft:"30px"}} />
                </Row>           
                <Row>
                    <Col xl={10}>
                        { data?.screenshots && <FullWideSlider data={ data.screenshots}/> }
                        
                        {/* <Row>
                            <TabArea dataOverview={data.overview?.overview} dataHighlights={data.highlights} dataDescription={data.description?.childMarkdownRemark.html}/>
                        </Row> */}

                        <LegendArea1 title={t("Overview")} data={ data.overview?.overview }/>

                        <LegendArea3 title={t("Highlights")} data={ data.highlights }/>

                        <LegendArea2 title={t("Description")} data={ data.description?.childMarkdownRemark?.html }/>

                        {
                            data?.faq && 
                            <Row >
                                <FAQArea  data={ data.faq }/>
                            </Row>
                        }

                        <Row style={{paddingLeft:'30px'}} key="row-1-2">     
                            {data?.type?.[0]?.product.length >0 && 
                                <Heading as="h6" mb="37px" textAlign="left">
                                    {t("Related Applications")}
                                </Heading>
                            }
                            {
                                data?.type?.[0]?.product && data.type?.[0].product.filter((item)=>item.trademark != data.trademark).slice(0,3).map((item,i) => {
                                        return (
                                            <Col lg={4} key={'col-item-'+i}>
                                                <BoxImage
                                                    title={item.trademark}
                                                    image={{src: item.image.imageurl}}
                                                    desc={item.summary}
                                                    path={`/apps/product/${item.key}`}
                                                />
                                            </Col>
                                            // <Col
                                            //     lg={4}
                                            //     md={6}
                                            //     className="box-item"
                                            //     key={item.id}
                                            // >
                                            //     <BoxImage
                                            //         title={item.trademark}
                                            //         image=
                                            //         {                                         
                                            //             item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                            //         }
                                            //         desc={item.summary}
                                            //         path={`/apps/product/${item.key}`}
                                            //     />
                                            // </Col>   
                                        );
                                })
                            }
                        </Row>
                        <Row style={{paddingLeft:'30px'}} key="row-1-3">
                            {
                                resourceData.length >0 && 
                                <Heading as="h6" mb="37px" textAlign="left">
                                    {t("Learning Materials")}
                                </Heading>   
                            }
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
                                        <BoxImage2
                                            image={image}
                                            title={feature.title}
                                            category={feature.type.title}
                                            // desc={feature.subTitle}
                                            path={`/${feature.type.key}/${feature.slug}`}
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
                                        <Row style={{color:"dodgerblue"}} key={item.id}>                                           
                                            <Link to={`/app-catalog/${item.key}`} style={{paddingLeft:'0px',marginLeft:'0px'}}>{item.title} </Link>
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
                                        <Row style={{color:"dodgerblue"}} key={item} >{item}</Row>
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
                                        <Row style={{color:"dodgerblue"}} key={item}>{item}</Row>
                                    );
                                })
                            }
                        </Row>

                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Languages")}</Row>
                            {
                                data?.program && data.program.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}} key={item}>{item.name}</Row>
                                    );
                                })
                            }
                        </Row>

                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Components")}</Row>
                            {
                                data?.component && data.component.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}} key={item}>
                                            <Link to={`/apps/product/${item.key}`} style={{paddingLeft:'0px',marginLeft:'0px'}}>{item.trademark} </Link>
                                        </Row>
                                    );
                                })
                            }
                        </Row>

                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Solution")}</Row>
                            {
                                data?.solution && data.solution.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}} key={item.id}>
                                            <Link to={`/${item.type.key}/${item.slug}`} style={{paddingLeft:'0px',marginLeft:'0px'}}>{item.title} </Link>
                                        </Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Resource")}</Row>
                            <Row style={{color:"dodgerblue"}}>                                
                                <Link  to={`https://support.websoft9.com/docs/${data.key}`} style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("Documentation")} </Link>
                            </Row>
                            <Row style={{color:"dodgerblue"}}>                               
                                <Link  to="https://github.com/websoft9" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("GitHub")} </Link>
                            </Row>
                            {
                                data?.websiteurl &&                             
                                <Row style={{color:"dodgerblue"}}>
                                    <Link  to={data.websiteurl} style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("Official Website")} </Link>
                                </Row>
                            }

                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Applicable Personnel")}</Row>
                            {
                                data?.userType && data.userType.map((item)=>{
                                    return (
                                        <Row style={{color:"dodgerblue"}} key={item.id}>{item.title}</Row>
                                    );
                                })
                            }
                        </Row>
                        <Row style={{marginInlineStart:'20px',marginBottom:"20px",width:'200px'}}>
                            <Row>{t("Feedback")}</Row>
                            <Row style={{color:"dodgerblue"}}>
                                <Link  to="/" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("Submit A Suggestion")} </Link>
                            </Row>
                            <Row style={{color:"dodgerblue"}}>
                                <Link  to="/services" style={{paddingLeft:'0px',marginLeft:'0px'}}> {t("Get Professional Services")} </Link>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
        </React.Fragment>
    );
};
export default CTAArea;
