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
import { StaticQuery, graphql } from "gatsby"
import { Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
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

const Footer = () => {
    const { t, language, languages, changeLanguage } = useI18next();
    return (
        <StaticQuery
            query={graphql`
            {
                zhBottomMenu: allContentfulMenu(
                filter: {node_locale: {eq: "zh-CN"}, type: {eq: "BottomMenu"}}
                sort: {fields: title}
                ) {
                nodes {
                    id
                    menus: submenu {
                    ... on ContentfulMenu {
                        id
                        title
                        link
                        submenu {
                        ... on ContentfulMenu {
                            id
                            title
                            link
                        }
                        }
                    }
                    }
                }
                }
                enBottomMenu: allContentfulMenu(
                filter: {node_locale: {eq: "en-US"}, type: {eq: "BottomMenu"}}
                sort: {fields: title}
                ) {
                nodes {
                    id
                    menus: submenu {
                    ... on ContentfulMenu {
                        id
                        title
                        link
                        submenu {
                        ... on ContentfulMenu {
                            id
                            title
                            link
                        }
                        }
                    }
                    }
                }
                }
                #查询网站基本信息
                site {
                    siteMetadata {
                    copyright
                    description
                    socials {
                        icon
                        id
                        link
                        title
                    }
                    }
                }
                #查询页脚菜单
                zhFooterMenu: allContentfulMenu(
                    filter: {type: {eq: "FooterMenu"}, node_locale: {eq: "zh-CN"}}
                ) {
                    nodes {
                    id
                    title
                    link
                    submenu {
                        ... on ContentfulMenu {
                        id
                        title
                        link
                        }
                    }
                    }
                }
                #查询页脚菜单
                enFooterMenu: allContentfulMenu(
                    filter: {type: {eq: "FooterMenu"}, node_locale: {eq: "en-US"}}
                ) {
                    nodes {
                    id
                    title
                    link
                    submenu {
                        ... on ContentfulMenu {
                        id
                        title
                        link
                        }
                    }
                    }
                }

            }
    `}
            render={data => (
                <FooterWrap>
                    <FooterTop>
                        <Container>
                            <Row>
                                <Col lg={4} sm={6}>
                                    <FooterWidget mb={["31px", null, null, 0]}>
                                        <LogoWidget>
                                            <StaticImage
                                                src="../../../assets/images/logo/w9.svg"
                                                alt="logo"
                                                width={165}
                                                height={42}
                                            />
                                        </LogoWidget>
                                        <TextWidget>
                                            <Text mb="10px">
                                                <Trans>{data.site.siteMetadata.description}</Trans>
                                            </Text>
                                        </TextWidget>
                                        {data.siteMetadata?.socials && (
                                            <Social
                                                space="16px"
                                                tooltip={true}
                                                shape="rounded"
                                                variant="outlined"
                                                style={{ marginTop: '20px' }}
                                            >
                                                {data.site.siteMetadata.socials.map((social) => (
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
                                    (language == "zh-CN" ? data.zhBottomMenu.nodes?.[0].menus : data.enBottomMenu.nodes?.[0].menus).map((item) => {
                                        return (
                                            <Col key={"col" + item.id} lg={2} md={6} sm={8}>
                                                <FooterWidget>
                                                    <StyledWidgetTitle>{item.title}</StyledWidgetTitle>
                                                    <Line mt="10px" mb="10px" borderWidth="1px" />
                                                    <FooterWidgetList>
                                                        {
                                                            item.submenu.map((smenu) => {
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
                                                __html: data.site.siteMetadata.copyright,
                                            }}
                                        />
                                    </Text>

                                </Col>
                                <Col md={9} textAlign={["center", null, "right"]}>
                                    {/* 页脚菜单 */}
                                    <FooterWidgetList>
                                        {
                                            (language == "zh-CN" ? data.zhFooterMenu.nodes?.[0].submenu : data.enFooterMenu.nodes?.[0].submenu).map((item) => {
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
                            </Row>
                        </Container>
                    </FooterBottom>
                </FooterWrap>
            )}
        ></StaticQuery>


    );
};

export default Footer;
