import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Image from "@ui/image";
import { ImageType, HeadingType, TextType } from "@utils/types";
import {
    StyledSection,
    StyledTestimonial,
    StyledReview,
    StyledAuthorName,
} from "./style";

const TestimonialArea = ({ data }) => {
    return (
        <StyledSection>
            <StaticImage
                src="../../../assets/images/bg/home-reputable-success-about-shape.jpg"
                className="testimonial-shape"
                alt="Testimonidal"
            />
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                        {data?.images?.[0]?.src && (
                            <div className="image text-center">
                                <Image
                                    src={data.images[0].src}
                                    alt={data.images[0]?.alt || "testimonial"}
                                />
                            </div>
                        )}
                    </Col>
                    <Col md={6}>
                        <StyledTestimonial>
                            {data?.texts?.[0] && (
                                <StyledReview>
                                    {data.texts[0]?.content}
                                </StyledReview>
                            )}
                            <div className="author">
                                {data?.headings?.[0] && (
                                    <StyledAuthorName
                                        as={data.headings[0]?.level}
                                    >
                                        {data.headings[0]?.content}
                                    </StyledAuthorName>
                                )}
                                {data?.texts?.[1] && (
                                    <p>/ {data.texts[1]?.content}</p>
                                )}
                            </div>
                        </StyledTestimonial>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default TestimonialArea;
