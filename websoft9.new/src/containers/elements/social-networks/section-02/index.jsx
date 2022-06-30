import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { SectionWrap, IconsWrap } from "./style";

const SocialSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <IconsWrap>
                            <Heading as="h5" mb="40px" color="#fff">
                                Basic Icons
                            </Heading>
                            <Social
                                variant="outlined"
                                shape="rounded"
                                color="light"
                            >
                                <SocialLink path="https://facebook.com">
                                    <i className="fab fa-facebook social-link-icon"></i>
                                </SocialLink>
                                <SocialLink path="https://twitter.com">
                                    <i className="fab fa-twitter social-link-icon"></i>
                                </SocialLink>
                                <SocialLink path="https://instagram.com">
                                    <i className="fab fa-instagram social-link-icon"></i>
                                </SocialLink>
                                <SocialLink path="https://dribbble.com">
                                    <i className="fab fa-dribbble social-link-icon"></i>
                                </SocialLink>
                                <SocialLink path="https://pinterest.com">
                                    <i className="fab fa-pinterest social-link-icon"></i>
                                </SocialLink>
                            </Social>
                            <Social
                                variant="underlined"
                                color="light"
                                mt="50px"
                            >
                                <SocialLink
                                    path="https://facebook.com"
                                    title="facebook"
                                />
                                <SocialLink
                                    path="https://twitter.com"
                                    title="twitter"
                                />
                                <SocialLink
                                    path="https://instagram.com"
                                    title="instagram"
                                />
                                <SocialLink
                                    path="https://dribbble.com"
                                    title="dribbble"
                                />
                                <SocialLink
                                    path="https://pinterest.com"
                                    title="pinterest"
                                />
                            </Social>
                        </IconsWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default SocialSection;
