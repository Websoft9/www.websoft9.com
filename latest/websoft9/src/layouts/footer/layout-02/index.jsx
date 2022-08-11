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
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    FooterWidgetList,
    FooterBottom,
    StyledWidgetTitle,
} from "./style";

const Footer = ({ data }) => {
    return (
        <FooterWrap>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <StyledWidgetTitle>Company</StyledWidgetTitle>
                                {data?.contact && (
                                    <div>
                                        {data.contact?.address && (
                                            <Text mb="10px">
                                                {data.contact.address}
                                            </Text>
                                        )}
                                        {data.contact?.email && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`mailto:${data.contact.email}`}
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.email}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.phone && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`tel:${data.contact.phone}`}
                                                    fontWeight="800"
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.phone}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.website && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={data.contact.website}
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.website}
                                                </Anchor>
                                            </Text>
                                        )}
                                    </div>
                                )}
                                {data?.socials && (
                                    <Social
                                        color="light"
                                        variant="texted"
                                        space="16px"
                                        tooltip={true}
                                        mt="20px"
                                    >
                                        {data.socials.map((social) => (
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
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <StyledWidgetTitle>
                                    IT Services
                                </StyledWidgetTitle>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Managed IT
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            IT Support
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            IT Consultancy
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Cloud Computing
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Cyber Security
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mb={["27px", null, 0]}>
                                <StyledWidgetTitle>
                                    Quick links
                                </StyledWidgetTitle>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Pick up locations
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Terms of Payment
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Privacy Policy
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Where to Find Us
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget>
                                <StyledWidgetTitle>Support</StyledWidgetTitle>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Forum Support
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Help &amp; FAQ
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Contact Us
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Pricing and plans
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor path="/" $hover={{ layout: 2 }}>
                                            Cookies Policy
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mt={["34px", null, "50px"]}>
                                <FooterWidgetList>
                                    <li>
                                        <Button path="/" imgbutton shadow>
                                            <StaticImage
                                                src="../../../assets//images/icons/aeroland-button-google-play.jpg"
                                                alt="Google Play"
                                                width={162}
                                                height={48}
                                            />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button path="/" imgbutton shadow>
                                            <StaticImage
                                                src="../../../assets//images/icons/aeroland-button-app-store.jpg"
                                                alt="App Store"
                                                width={162}
                                                height={48}
                                            />
                                        </Button>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <LogoWidget>
                    <StaticImage
                        src="../../../assets/images/logo/primary-white-logo-160x47.png"
                        alt="logo"
                        width={165}
                        height={48}
                    />
                </LogoWidget>
                {data?.copyright && (
                    <Text pb={["15px", 0]}>
                        &copy; {new Date().getFullYear()}{" "}
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.copyright,
                            }}
                        />
                    </Text>
                )}
            </FooterBottom>
        </FooterWrap>
    );
};

Footer.propTypes = {
    data: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        copyright: PropTypes.string,
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.string,
            website: PropTypes.string,
        }),
    }),
};

export default Footer;
