import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@ui/section-title";
import Accordion from "@ui/accordion";
import PopupVideo from "@ui/popup-video/layout-02";
import { Container, Row, Col } from "@ui/wrapper";
import {
    SectionTitleType,
    ItemType,
    VideoButtonType,
    ImageType,
} from "@utils/types";
import { SectionWrap } from "./style";

const FaqArea = ({ data, space }) => {
    return (
        <SectionWrap $space={space}>
            <Container>
                {data?.section_title && (
                    <SectionTitle mb="44px" {...data.section_title} />
                )}

                <Row>
                    <Col lg={6}>
                        {data?.items && (
                            <Accordion
                                disableDefaultActive
                                layout={2}
                                data={data.items}
                            />
                        )}
                    </Col>
                    <Col lg={6} mt={["20px", null, null, 0]}>
                        {data?.images?.[0] && (
                            <PopupVideo
                                image={data.images[0]}
                                video_button={data?.video_button}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

FaqArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        video_button: PropTypes.shape(VideoButtonType),
    }),
    space: PropTypes.oneOf([1, 2]),
};

FaqArea.defaultProps = {
    space: 1,
};

export default FaqArea;
