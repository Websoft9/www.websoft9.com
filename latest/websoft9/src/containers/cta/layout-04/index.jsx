import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import { HeadingType, ButtonType } from "@utils/types";
import { StyledSection, StyledHeading, StyledBG,HeroTextBox,StyledSubtitle } from "./style";
import Text from "@ui/text";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const CTAArea = ({ data }) => {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <StyledBG>
                <StaticImage
                    src="../../../assets/images/bg/cta-bg-2.png"
                    alt="CTA BG"
                />
            </StyledBG>
            <Container>
                <Row
                    alignItems="center"
                    textAlign={["center", null, null, "left"]}
                >
                    <Col xl={8} lg={7}>
                        {/* {data?.headings?.[0] && (
                            <StyledHeading
                                as={data.headings[0]?.level}
                                dangerouslySetInnerHTML={{ 
                                    __html: t(data.headings[0]?.content),
                                }}
                            />
                        )} */}
                        <HeroTextBox>
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    {data.headings}
                                </StyledSubtitle>
                            )}
                            {data?.texts && (
                                <Text>{data.texts}</Text>
                            )}
                        </HeroTextBox>
                    </Col>
                    <Col xl={4} lg={7} className="text-center">
                        {data?.buttons?.map(({ id, content, ...rest }) => (
                            <Button key={id} m="7px" {...rest}>
                                {content}
                            </Button>
                        ))}
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
