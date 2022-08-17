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
                            </FooterWidget>
                        </Col>
                        {
                            data[0].menus.map((item)=>{
                                return (
                                    <Col lg={2} md={6} sm={8}>
                                    <FooterWidget>
                                        <StyledWidgetTitle>{item.title}</StyledWidgetTitle>
                                        <Line mt="20px" mb="20px" borderWidth="1px" />
                                        <FooterWidgetList>
                                            {
                                                item.submenu.map((smenu)=>{
                                                    return (
                                                        <li>
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
                        <Col md={6} textAlign={["center", null, "left"]}>
                           {/* 页脚菜单 */}
                           {
                                footerMenuData.map((item)=>{
                                    return (
                                        <StyledNavitem key={`submenu-${item.id}`} $subitem >
                                            <StyledNavlink path={item.link} $sublink $bottomLine={bottomLine}>
                                                { item.title }
                                            </StyledNavlink>
                                        </StyledNavitem>
                                    );
                                })
                           }
                        </Col>
                        <Col md={3} textAlign={["center", null, "right"]}>
                            {siteData?.socials && (
                                <Social
                                    space="16px"
                                    tooltip={true}
                                    shape="rounded"
                                    variant="outlined"
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
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    );
};

export default Footer;
