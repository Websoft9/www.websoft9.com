import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import BoxIcon from "@components/box-icon/layout-03";
import SectionTitle from "@ui/section-title";
import { ItemType, SectionTitleType } from "@utils/types";
import { SectionWrap } from "./style";

const WhatsNewArea = ({ data, space }) => {
    return (
        <SectionWrap $space={space}>
            <Container>
                {data?.section_title && (
                    <SectionTitle mb="20px" {...data.section_title} />
                )}
                <Row>
                    {data?.items?.map((item) => (
                        <Col lg={6} key={item.id}>
                            <BoxIcon
                                icon={item.images?.[0]}
                                title={item.title}
                                desc={item.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    );
};

WhatsNewArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
    space: PropTypes.oneOf([1, 2]),
};

WhatsNewArea.defaultProps = {
    space: 1,
};

export default WhatsNewArea;
