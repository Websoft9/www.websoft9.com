import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import MarkHeading from "@components/mark-heading";
import Heading from "@ui/heading";
import Button from "@ui/button";
import NewsletterForm from "@components/forms/newsletter-form";
import { HeadingType, ButtonType } from "@utils/types";
import { StyledSection, StyledCta, StyledHeading } from "./style";

const CTAArea = ({ data }) => {
    return (
        <StyledSection className="cta-area">
            <Container>
                <Row gutters={{ sm: 20 }}>
                    <Col lg={8}>
                        <StyledCta>
                            <StaticImage
                                src="../../../assets/images/bg/home-reputable-success-section-story-bg.png"
                                alt="Cta"
                                className="bg-shape"
                            />
                            {data?.headings?.[0] && (
                                <MarkHeading
                                    as={data.headings[0]?.level}
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    mr={[null, null, "48px"]}
                                    mb={["20px", null, "0"]}
                                >
                                    {data.headings[0]?.content}
                                </MarkHeading>
                            )}

                            <div className="content">
                                {data?.headings?.[1] && (
                                    <StyledHeading
                                        as={data.headings[1]?.level}
                                        dangerouslySetInnerHTML={{
                                            __html: data.headings[1]?.content,
                                        }}
                                    />
                                )}
                                {data?.buttons?.map(
                                    ({ id, content, path, ...rest }) => (
                                        <Button key={id} path={path} {...rest}>
                                            {content}
                                        </Button>
                                    )
                                )}
                            </div>
                        </StyledCta>
                    </Col>
                    <Col lg={4}>
                        <NewsletterForm mt={["40px", 0]} />
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
