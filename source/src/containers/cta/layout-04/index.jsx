import Button from "@ui/button";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { HeroTextBox, StyledBG, StyledSection, StyledSubtitle } from "./style";

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
