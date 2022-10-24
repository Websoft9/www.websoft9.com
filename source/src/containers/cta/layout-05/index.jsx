import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-large-image/layout-02";
import TestimonialArea from "@containers/elements/testimonials/section-02";
import Button from "@ui/button";
import Line from "@ui/divider/line";
import Heading from "@ui/heading";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { SwiperSlide } from "@ui/swiper";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import cn from "clsx";
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MarkNav from 'markdown-navbar';
import "markdown-navbar/dist/navbar.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { AuthorInfo, AuthorName, AuthorRole, HeroTextBox, ImageBoxOne, ImageBoxTwo, MarkdownStyle, NavContainer, StyledSection, StyledSubtitle, TestimonialAuthor, TestimonialInfo, TestimonialMedia } from "./style";

//用于显示资源详情页
const CTAArea = ({ data,relatedReading,siteData }) => {
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
                                            <React.Fragment key={solution.id}>
                                                <Link key={solution.id} to={`/${solution.type.key}/${solution.slug}`} style={{color:"dodgerblue"}}>{solution.title}</Link>
                                                {'  '}
                                            </React.Fragment>
                                            
                                        );
                                    })}
                                    </nobr>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                <nobr>
                                    {t("Related Applications")}:
                                    {data.products && data.products.map((product,i)=>{
                                        return (
                                            <Link key={product.id+i} to={`/app-center/product/${product.key}`} style={{color:"dodgerblue"}}>{product.trademark}{' '}</Link>
                                        );
                                    })}
                                </nobr>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                <nobr>
                                    {t("Tags")}:
                                    {data.tags && data.tags.map((tag)=>{
                                        return (
                                            <React.Fragment key={tag.id}>
                                                <font key={tag.id} color="dodgerblue">{tag.name}</font>{' '}
                                            </React.Fragment>
                                        );
                                    })}
                                </nobr>
                                </Row>
                            </Col>
                            <Col>
                                <Row>{t("Author")}</Row>
                                <Row id="row-author">
                                    { 
                                        data.author!=null &&                                   
                                        <SwiperSlide style={{paddingLeft:'0px'}}>
                                        <TestimonialInfo>
                                            {data.author[0]?.pictureUrl && (
                                                <TestimonialMedia>
                                                    <Image 
                                                        src={data.author[0].pictureUrl}
                                                        alt=""
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
                                            <Image src={data.customers[0].logo==null?defaultImage:data.customers[0].logo.imageurl} alt="" />
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
                            <Image src={data.image==null?defaultImage:data.image}  alt=""/>
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
                            <Text style={{fontWeight:"bold",paddingLeft:'10px'}}>{t("Content directory")}</Text>
                            <MarkNav source={data.content.content}  ordered={false} />
                            <div style={{textAlign:"center"}}>
                                <Social
                                        tooltip={true}
                                        shape="rounded"
                                        //variant="outlined"
                                        size="small"
                                    >
                                        {siteData.socials.map((social) => (
                                            <SocialLink
                                                key={social.id}
                                                path={social.link}
                                                title={social.title}
                                            >
                                                <i className={cn(social.icon,"social-link-icon")}></i>
                                            </SocialLink>
                                        ))}
                                    </Social>
                                {
                                    data.downloadUrl &&                             
                                    <Button m="10px" size="small" path={data.downloadUrl} style={{marginBlockStart:"20px",height:"40px"}}>
                                        {"下载"}
                                    </Button>
                                }
                            </div>

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
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                                style={{marginBlockEnd:"20px",marginBlockStart:"20px"}}
                            >
                                <BoxImage
                                    key = {item.id}
                                    title={item.title}
                                    image=
                                    {                                         
                                        item.image==null ? {src: defaultImage} : {src: item.image}
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
