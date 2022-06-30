import React from "react";
import { Container } from "@ui/wrapper";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { SectionWrap, IconsWrap } from "./style";

const SocialSection = () => {
    return (
        <SectionWrap>
            <Container>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Basic Icons
                    </Heading>
                    <Social size="small">
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
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Medium Icon Style
                    </Heading>
                    <Social size="medium" space="20px">
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
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Large Icon Style
                    </Heading>
                    <Social size="large" space="25px">
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
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Flat Rounded Icon Style
                    </Heading>
                    <Social variant="flat" shape="rounded">
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
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Solid Rounded Icon Style
                    </Heading>
                    <Social variant="outlined" shape="rounded">
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
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        With Tooltip Icon Style
                    </Heading>
                    <Social variant="outlined" shape="rounded" tooltip={true}>
                        <SocialLink
                            path="https://facebook.com"
                            title="facebook"
                        >
                            <i className="fab fa-facebook social-link-icon"></i>
                        </SocialLink>
                        <SocialLink path="https://twitter.com" title="twitter">
                            <i className="fab fa-twitter social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://instagram.com"
                            title="instagram"
                        >
                            <i className="fab fa-instagram social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://dribbble.com"
                            title="dribbble"
                        >
                            <i className="fab fa-dribbble social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://pinterest.com"
                            title="pinterest"
                        >
                            <i className="fab fa-pinterest social-link-icon"></i>
                        </SocialLink>
                    </Social>
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Black Tooltip Icon Style
                    </Heading>
                    <Social
                        size="medium"
                        tooltip={true}
                        tooltip_bg="dark"
                        tooltip_position="bottom-left"
                    >
                        <SocialLink
                            path="https://facebook.com"
                            title="facebook"
                        >
                            <i className="fab fa-facebook social-link-icon"></i>
                        </SocialLink>
                        <SocialLink path="https://twitter.com" title="twitter">
                            <i className="fab fa-twitter social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://instagram.com"
                            title="instagram"
                        >
                            <i className="fab fa-instagram social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://dribbble.com"
                            title="dribbble"
                        >
                            <i className="fab fa-dribbble social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://pinterest.com"
                            title="pinterest"
                        >
                            <i className="fab fa-pinterest social-link-icon"></i>
                        </SocialLink>
                    </Social>
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Icon &amp; Tilte Style
                    </Heading>
                    <Social>
                        <SocialLink
                            path="https://facebook.com"
                            title="facebook"
                        >
                            <i className="fab fa-facebook social-link-icon"></i>
                        </SocialLink>
                        <SocialLink path="https://twitter.com" title="twitter">
                            <i className="fab fa-twitter social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://instagram.com"
                            title="instagram"
                        >
                            <i className="fab fa-instagram social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://dribbble.com"
                            title="dribbble"
                        >
                            <i className="fab fa-dribbble social-link-icon"></i>
                        </SocialLink>
                        <SocialLink
                            path="https://pinterest.com"
                            title="pinterest"
                        >
                            <i className="fab fa-pinterest social-link-icon"></i>
                        </SocialLink>
                    </Social>
                </IconsWrap>
                <IconsWrap>
                    <Heading as="h5" mb="40px">
                        Title Style
                    </Heading>
                    <Social variant="underlined">
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
            </Container>
        </SectionWrap>
    );
};

export default SocialSection;
