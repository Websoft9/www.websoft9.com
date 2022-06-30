import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { HeadingType, TextType } from "@utils/types";
import {
    OverviewArea,
    ClientBox,
    StyledClientName,
    MetaBox,
    StyledIntroHeading,
    StyledMetaTitle,
} from "./style";

const IntroArea = ({ data }) => {
    return (
        <OverviewArea>
            <Container>
                {data?.headings?.[0] && (
                    <Heading as={data.headings[0]?.level} mb="30px">
                        {data.headings[0]?.content}
                    </Heading>
                )}

                <Row>
                    <Col lg={5}>
                        {data?.headings?.[1] && (
                            <StyledIntroHeading as={data.headings[1]?.level}>
                                {data?.headings?.[1]?.content}
                            </StyledIntroHeading>
                        )}
                        {data.client && (
                            <ClientBox>
                                <StyledClientName>
                                    {data.client?.name}
                                </StyledClientName>
                                <p>
                                    <span>/ {data.client?.designation}</span>
                                    <span>- {data.client?.company}</span>
                                </p>
                            </ClientBox>
                        )}
                    </Col>
                    <Col lg={7}>
                        {data?.texts?.[0] && <p>{data.texts[0]?.content}</p>}
                        {data.tags && (
                            <MetaBox>
                                <StyledMetaTitle>Tags</StyledMetaTitle>
                                {data?.tags.map((tag, i) => (
                                    <span key={`tag-${i}`}>{tag}</span>
                                ))}
                            </MetaBox>
                        )}
                        <MetaBox boxtype="share-box">
                            <StyledMetaTitle>Share</StyledMetaTitle>
                            <Social>
                                <SocialLink
                                    path="https://www.twitter.com"
                                    title="twitter"
                                >
                                    <i className="fa fa-twitter"></i>
                                </SocialLink>
                                <SocialLink
                                    path="https://www.facebook.com"
                                    title="facebook"
                                >
                                    <i className="fa fa-facebook"></i>
                                </SocialLink>
                                <SocialLink
                                    path="https://www.linkedin.com"
                                    title="linkedin"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </SocialLink>
                            </Social>
                        </MetaBox>
                    </Col>
                </Row>
            </Container>
        </OverviewArea>
    );
};

IntroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        client: PropTypes.shape({
            name: PropTypes.string,
            designation: PropTypes.string,
            company: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default IntroArea;
