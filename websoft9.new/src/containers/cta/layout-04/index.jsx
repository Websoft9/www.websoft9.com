import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import { HeadingType, ButtonType } from "@utils/types";
import { StyledSection, StyledHeading, StyledBG } from "./style";

const CTAArea = ({ data }) => {
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
                        {data?.headings?.[0] && (
                            <StyledHeading
                                as={data.headings[0]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[0]?.content,
                                }}
                            />
                        )}
                    </Col>
                    <Col xl={4} lg={5} className="text-center">
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

CTAArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default CTAArea;
