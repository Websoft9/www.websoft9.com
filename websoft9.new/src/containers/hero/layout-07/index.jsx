import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Image from "@ui/image";
import ConsultForm from "@components/forms/consult-form-02";
import { Container, Row, Col } from "@ui/wrapper";
import { HeadingType, ImageType } from "@utils/types";
import {
    StyledHero,
    StyledTextBox,
    StyledHeading,
    StyledSubtitle,
    StyledBookBox,
    StyledBookBoxText,
    StyledBookBoxImage,
    StyledForm,
    StyledImage,
} from "./style";

const HeroArea = ({ data }) => {
    return (
        <StyledHero className="modern-it-company-hero">
            <Container>
                <Row alignItems="center">
                    {data?.images?.[0]?.src && (
                        <StyledImage>
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Hero"}
                            />
                        </StyledImage>
                    )}
                    <Col md={10}>
                        <StyledTextBox>
                            {data?.headings?.[0] && (
                                <StyledHeading
                                    as={data.headings[0]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0]?.content,
                                    }}
                                />
                            )}
                            {data?.headings?.[1] && (
                                <StyledSubtitle
                                    as={data.headings[1]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[1]?.content,
                                    }}
                                />
                            )}

                            <StyledBookBox>
                                <StyledBookBoxImage>
                                    <StaticImage
                                        src="../../../assets/images/icons/green-curve-arrow.png"
                                        alt="curve-arrow"
                                    />
                                </StyledBookBoxImage>
                                {data?.headings?.[2] && (
                                    <StyledBookBoxText
                                        as={data.headings[2]?.level}
                                        dangerouslySetInnerHTML={{
                                            __html: data.headings[2]?.content,
                                        }}
                                    />
                                )}
                            </StyledBookBox>
                            <StyledForm>
                                <ConsultForm />
                            </StyledForm>
                        </StyledTextBox>
                    </Col>
                </Row>
            </Container>
        </StyledHero>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default HeroArea;
