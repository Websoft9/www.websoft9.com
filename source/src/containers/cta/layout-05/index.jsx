import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-large-image/layout-02";
import TestimonialArea from "@containers/elements/testimonials/section-02";
import Line from "@ui/divider/line";
import Heading from "@ui/heading";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { SwiperSlide } from "@ui/swiper";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MarkNav from 'markdown-navbar';
import "markdown-navbar/dist/navbar.css";
import QRCode from 'qrcode.react';
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { AuthorInfo, AuthorName, AuthorRole, FloatingSocialBox, HeroTextBox, ImageBoxOne, ImageBoxTwo, MarkdownStyle, NavContainer, StyledSection, StyledSubtitle, TestimonialAuthor, TestimonialInfo, TestimonialMedia } from "./style";

//用于显示资源详情页
const CTAArea = ({ data,relatedReading,siteData }) => {
    const { t } = useTranslation();
    const [socialOpen, setSocialOpen] = React.useState(false);
    const socialHandler = () => {
        setSocialOpen((prev) => !prev);
    };

    return (
        <StyledSection>
            <Container>
                <Row
                    alignItems="center"
                    textAlign={["center", null, null, "left"]}
                >
                    <Col xl={8}>
                        <Row>
                            <HeroTextBox>
                                {data.type && (
                                     <Link to={`/${data.type.key}`} style={{color:"dodgerblue",paddingLeft:"15px"}}>{data.type.title}</Link>
                                    // <Text style={{color:"dodgerblue",paddingLeft:"15px"}}>{data.type.title}</Text>
                                )}                          
                                <StyledSubtitle>
                                    {data.title}
                                </StyledSubtitle>
                            </HeroTextBox> 
                        </Row>
                        <Row>
                                <Text> {data.time}</Text>
                        </Row>
                        <Row textAlign={["left", null, null, "left"]} style={{marginTop:'10px'}}>
                            <Col xl={6}>
                                <Row>
                                    <nobr>
                                   {t("Solution")}:{'  '}
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
                                    {t("Applications")}:{'  '}
                                    {data.products && data.products.map((product,i)=>{
                                        return (
                                            <React.Fragment key={product.id}>
                                                <Link key={product.id+i} to={`/apps/${product.key}`} style={{color:"dodgerblue"}}>{product.trademark}</Link>
                                                {'  '}
                                            </React.Fragment>
                                        );
                                    })}
                                </nobr>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                <nobr>
                                    {t("Tags")}:{'  '}
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
                            <Col xl={6}>
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
                                                    {data.author[0].customer && <AuthorName style={{fontSize:"15px",fontWeight:"normal",color:"#696969"}}>{data.author[0].customer?.name}</AuthorName>}
                                                    {data.author[0].fullName && <AuthorRole style={{fontSize:"15px",color:"#696969"}}>{data.author[0].fullName}</AuthorRole>}  
                                                </AuthorInfo>    
                                                <AuthorInfo>                                              
                                                    {data.author[0].title && <AuthorName style={{fontSize:"15px",fontWeight:"normal",color:"#696969"}}>{data.author[0].title}</AuthorName>}
                                                </AuthorInfo>                        
                                            </TestimonialAuthor>
                                        </TestimonialInfo>
                                        </SwiperSlide>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                {
                                    data.customers != null ? 
                                    <HeroTextBox>
                                        <ImageBoxTwo>
                                            <Image src={data.customers[0].logo==null?defaultImage:data.customers[0].logo.imageurl} alt="" />
                                        </ImageBoxTwo>
                                    </HeroTextBox>
                                    :
                                    <></>
                                }     
                            </Col>       
                            <Col xl={6}>
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
                <Line /*mt="40px" mb="40px"*/ borderWidth="1px" />
                <Row>                   
                    <Social
                        tooltip={true}
                        shape="rounded"
                        variant="outlined"
                        //size="small"
                        space="14px"
                    >
                        <Text as="span" fontWeight="bold" fontSize="20px" marginRight="20px">{t("SHARE")}</Text>
                        <SocialLink
                            title="twitter"
                            path={`https://twitter.com/intent/tweet?status=${data.title}+${
                                siteData.siteUrl + data.slug
                            }`}
                        >
                            <i className="fab fa-twitter"></i>
                        </SocialLink>
                        {/* <SocialLink
                            title="facebook"
                            path={`https://www.facebook.com/share.php?u=${
                                siteData.siteUrl + data.slug
                            }&title=${data.title}`}
                        >
                            <i className="fab fa-facebook"></i>
                        </SocialLink> */}
                        <SocialLink
                            title="linkedin"
                            path={`https://www.linkedin.com/shareArticle?mini=true&url=${
                                siteData.siteUrl + data.slug
                            }&title=${data.title}`}
                        >
                            <i className="fab fa-linkedin"></i>
                        </SocialLink>
                        <SocialLink
                            title="分享到微博"
                            path={`https://service.weibo.com/share/share.php?url=${
                                siteData.siteUrl +"/"+data.type.key+"/"+ data.slug
                            }&pic=${data.image==null?siteData.siteUrl+"/"+defaultImage:data.image}&title=${data.title}`}
                        >
                            <svg t="1666771140962" className="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2215" width="200" height="200"><path d="M914.432 518.144q27.648 21.504 38.912 51.712t9.216 62.976-14.336 65.536-31.744 59.392q-34.816 48.128-78.848 81.92t-91.136 56.32-94.72 35.328-89.6 18.944-75.264 7.68-51.712 1.536-49.152-2.56-68.096-10.24-78.336-21.504-79.872-36.352-74.24-55.296-59.904-78.848q-16.384-29.696-22.016-63.488t-5.632-86.016q0-22.528 7.68-51.2t27.136-63.488 53.248-75.776 86.016-90.112q51.2-48.128 105.984-85.504t117.248-57.856q28.672-10.24 63.488-11.264t57.344 11.264q10.24 11.264 19.456 23.04t12.288 29.184q3.072 14.336 0.512 27.648t-5.632 26.624-5.12 25.6 2.048 22.528q17.408 2.048 33.792-1.536t31.744-9.216 31.232-11.776 33.28-9.216q27.648-5.12 54.784-4.608t49.152 7.68 36.352 22.016 17.408 38.4q2.048 14.336-2.048 26.624t-8.704 23.04-7.168 22.016 1.536 23.552q3.072 7.168 14.848 13.312t27.136 12.288 32.256 13.312 29.184 16.384zM656.384 836.608q26.624-16.384 53.76-45.056t44.032-64 18.944-75.776-20.48-81.408q-19.456-33.792-47.616-57.344t-62.976-37.376-74.24-19.968-80.384-6.144q-78.848 0-139.776 16.384t-105.472 43.008-72.192 60.416-38.912 68.608q-11.264 33.792-6.656 67.072t20.992 62.976 42.496 53.248 57.856 37.888q58.368 25.6 119.296 32.256t116.224 0.512 100.864-21.504 74.24-33.792zM522.24 513.024q20.48 8.192 38.912 18.432t32.768 27.648q10.24 12.288 17.92 30.72t10.752 39.424 1.536 42.496-9.728 38.912q-8.192 18.432-19.968 37.376t-28.672 35.328-40.448 29.184-57.344 18.944q-61.44 11.264-117.76-11.264t-88.064-74.752q-12.288-39.936-13.312-70.656t16.384-66.56q13.312-27.648 40.448-51.712t62.464-38.912 75.264-17.408 78.848 12.8zM359.424 764.928q37.888 3.072 57.856-18.432t21.504-48.128-15.36-47.616-52.736-16.896q-27.648 3.072-43.008 23.552t-17.408 43.52 9.728 42.496 39.424 21.504zM778.24 6.144q74.752 0 139.776 19.968t113.664 57.856 76.288 92.16 27.648 122.88q0 33.792-16.384 50.688t-35.328 17.408-35.328-14.336-16.384-45.568q0-40.96-22.528-77.824t-59.392-64.512-84.48-43.52-96.768-15.872q-31.744 0-47.104-15.36t-14.336-34.304 18.944-34.304 51.712-15.36zM778.24 169.984q95.232 0 144.384 48.64t49.152 146.944q0 30.72-10.24 43.52t-22.528 11.264-22.528-14.848-10.24-35.84q0-60.416-34.816-96.256t-93.184-35.84q-19.456 0-28.672-10.752t-9.216-23.04 9.728-23.04 28.16-10.752z" p-id="2216"></path></svg>
                        </SocialLink>
                        <SocialLink title="分享到微信朋友圈" onClick={socialHandler}>
                            <svg t="1666771459305" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3160" width="200" height="200"><path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" p-id="3161"></path></svg>
                            <FloatingSocialBox isOpen={socialOpen}>
                                <QRCode
                                    value={siteData.siteUrl +"/"+data.type.key+"/"+ data.slug}  //value参数为生成二维码的链接
                                    size={100} //二维码的宽高尺寸
                                    fgColor="#000000"  //二维码的颜色
                                />
                            </FloatingSocialBox>
                        </SocialLink>
                        {
                            data.downloadUrl && 
                            <SocialLink title="下载" path={data.downloadUrl}>
                                <svg t="1667199690022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2596" width="200" height="200"><path d="M1024 748.544q0 25.6-8.704 48.128t-24.064 40.96-36.352 30.208-45.568 15.872l0 2.048-21.504 0-1.024 0-664.576 0q-2.048 0-2.56 0.512t-2.56 0.512-3.072-0.512-3.072-0.512l-6.144 0 0-1.024q-43.008-2.048-80.384-19.456t-65.024-46.592-43.52-67.584-15.872-81.408 15.872-80.896 43.008-66.56 63.488-47.104 78.336-21.504q7.168-66.56 36.864-124.416t76.288-100.864 107.008-67.584 129.024-24.576q72.704 0 137.216 27.648t112.128 75.776 75.264 112.128 27.648 136.704q0 32.768-6.144 64t-17.408 59.904q2.048 0 4.608-0.512t4.608-0.512q28.672 0 53.248 10.752t43.008 29.184 29.184 43.52 10.752 53.76zM687.104 596.992q12.288-20.48 7.168-23.552t-25.6-3.072q-12.288 0-34.304-0.512t-33.28-0.512q-16.384 0-20.992-13.312t-4.608-36.864q0-32.768-0.512-52.736t-0.512-43.52q0-26.624-3.584-38.912t-29.184-12.288q-18.432 0-27.648 0.512t-25.6 0.512q-27.648 0-34.304 15.872t-6.656 31.232l0 32.768q0 13.312 0.512 25.6t0.512 25.6l0 29.696q0 16.384-4.096 25.088t-19.456 8.704q-6.144 1.024-16.896 1.536t-22.016 1.024-21.504 0.512l-16.384 0q-21.504 0-25.6 13.312t13.312 33.792q17.408 21.504 37.376 46.592t39.424 50.688 37.376 49.664 33.28 41.472q27.648 30.72 53.248-1.024 15.36-17.408 35.84-45.056t41.984-57.856 40.96-58.368 31.744-46.592z" p-id="2597"></path></svg>
                            </SocialLink>
                        }
                    </Social>
                    {/* {
                        data.downloadUrl && 
                        <Button m="10px" size="small" path={data.downloadUrl} style={{marginBlockStart:"20px",height:"40px"}}>
                            {"下载"}
                        </Button>
                    } */}
                </Row>
                <Row>
                    <Col xl={8}> 
                    <MarkdownStyle>                   
                            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                                {data.content.content}
                            </ReactMarkdown>
                    </MarkdownStyle>
                    </Col>
                    <Col id="markdowndir" xl={3}>
                        <NavContainer>
                            <Text style={{fontWeight:"bold",paddingLeft:'10px'}}>{t("Content directory")}</Text>
                            <MarkNav source={data.content.content}  ordered={false} />
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
                                    // desc={item.type.key == "blog" || item.type.key == "news" ? item.time : item.subTitle }
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
