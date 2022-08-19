import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import Image from "@ui/image";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import {
    HeroWrapper,
    HeroTextBox,
    ImageBoxWrap,
    ImageBoxOne,
    ImageBoxTwo,
    StyledTitle,
    StyledSubtitle,
    ReadMoreBtn,
} from "./style";
import { Trans,useTranslation } from 'gatsby-plugin-react-i18next';

const HeroArea = ({ data }) => {
    const { t } = useTranslation()
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                    <HeroTextBox>
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    {data.headings}
                                </StyledSubtitle>
                            )}
                            {data?.texts && (
                                <Text>{data.texts}</Text>
                            )}
                            {/* {data?.buttons?.map(
                                ({id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        m="10px"
                                        size="small"
                                        path={path}
                                    >
                                    {content}
                                </Button>
                                )
                            )} */}
                            <ReadMoreBtn>
                                <Button
                                    icon="far fa-long-arrow-right"
                                    path={data.buttons[0].path}
                                    variant="texted"
                                    icondistance="4px"
                                    fontWeight={500}
                                >
                                    {data.buttons[0].content}
                                </Button>
                            </ReadMoreBtn>
                        </HeroTextBox>
                    </Col>
                    <Col md={6}>
                        <ImageBoxWrap>
                            {data?.media && (
                                <ImageBoxTwo>
                                    <Image src={data.media} />
                                </ImageBoxTwo>
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default HeroArea;
