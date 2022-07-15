import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import NumberedList, { NumberedListItem } from "@ui/numbered-list";
import { SectionTitleType, ItemType, ButtonType } from "@utils/types";
import { SectionWrap, LeftBox } from "./style";

const AboutArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={5}>
                        <LeftBox>
                            {data?.section_title && (
                                <SectionTitle
                                    textAlign="left"
                                    mb="20px"
                                    title={data.section_title?.title}
                                    subtitle={data.section_title?.subtitle}
                                    description={
                                        data.section_title?.description
                                    }
                                />
                            )}
                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button key={id} path={path} {...rest}>
                                        {content}
                                    </Button>
                                )
                            )}
                        </LeftBox>
                    </Col>
                    <Col lg={7} xl={5} ml="auto">
                        {data?.items && (
                            <NumberedList>
                                {data.items?.map((feature, i) => (
                                    <NumberedListItem
                                        key={`about-feature-${i}`}
                                        path={feature.link}
                                    >
                                        {feature.title}
                                    </NumberedListItem>
                                ))}
                            </NumberedList>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default AboutArea;
