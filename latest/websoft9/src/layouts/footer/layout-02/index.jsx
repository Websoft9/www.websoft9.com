import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import cn from "clsx";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { SocialType } from "@utils/types";
import Line from "@ui/divider/line";
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    FooterWidgetList,
    FooterBottom,
    StyledWidgetTitle,
    TextWidget,
} from "./style";

const Footer = ({ data,siteData,footerMenuData }) => {
    return (
        <FooterWrap>
            <FooterTop>
                <Container>
                    <Row>
                    <Col lg={4} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <LogoWidget>
                                    <StaticImage
                                        src="../../../assets/images/logo/w9.png"
                                        alt="logo"
                                        width={160}
                                        height={48}
                                    />
                                </LogoWidget>
                                <TextWidget>
                                    <Text mb="10px">
                                        {siteData.description}
                                    </Text>
                                </TextWidget>
                                {siteData?.socials && (
                                <Social
                                    space="16px"
                                    tooltip={true}
                                    shape="rounded"
                                    variant="outlined"
                                    style={{marginTop:'20px'}}
                                >
                                    {siteData.socials.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.link}
                                            title={social.title}
                                        >
                                            <i
                                                className={cn(
                                                    social.icon,
                                                    "link-icon"
                                                )}
                                            ></i>
                                        </SocialLink>
                                    ))}
                                </Social>
                            )}
                            </FooterWidget>
                        </Col>
                        {
                            data[0].menus.map((item)=>{
                                return (
                                    <Col key={"col"+item.id} lg={2} md={6} sm={8}>
                                    <FooterWidget>
                                        <StyledWidgetTitle>{item.title}</StyledWidgetTitle>
                                        <Line mt="20px" mb="20px" borderWidth="1px" />
                                        <FooterWidgetList>
                                            {
                                                item.submenu.map((smenu)=>{
                                                    return (
                                                        <li key={smenu.id}>
                                                            <Anchor path={smenu.link} $hover={{ layout: 2 }}>
                                                                {smenu.title}
                                                            </Anchor>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </FooterWidgetList>
                                    </FooterWidget>
                                </Col>
                                );
                            })
                        }                        
                    </Row>
                </Container>
            </FooterTop>

            <FooterBottom>
                <Container>
                    <Row alignItems="center">
                        <Col md={3} textAlign={["center", null, "left"]}>
                            <Text pb={["15px", 0]}>
                                &copy; {new Date().getFullYear()}{" "}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: siteData.copyright,
                                    }}
                                />
                            </Text>
                           
                        </Col>
                        <Col md={9} textAlign={["center", null, "right"]}>
                           {/* 页脚菜单 */}
                           <FooterWidgetList>
                           {
                                footerMenuData[0].submenu.map((item)=>{
                                    return (
                                            <Anchor key={item.id} path={item.link} $hover={{ layout: 2 }}>
                                                {item.title}
                                                <span>|</span>
                                            </Anchor>
                                            
                                    );
                                })
                           }
                           </FooterWidgetList>
                        </Col>
                        {/* <Col md={3} textAlign={["center", null, "right"]}>
                            
                        </Col> */}
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    );
};

export default Footer;
