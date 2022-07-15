import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Gradation from "@ui/gradation";
import { HeadingType, ItemType } from "@utils/types";
import {
    SectitonWrap,
    GradationRow,
    SectionTitleWrap,
    StepWrap,
    StyledTitle,
    StyledSubtitle,
} from "./style";

const GradationArea = ({ data }) => {
    return (
        <SectitonWrap>
            <Container>
                <Row>
                    <Col md={6}>
                        <SectionTitleWrap>
                            {data?.headings?.[0] && (
                                <StyledSubtitle as={data.headings[0]?.level}>
                                    {data.headings[0]?.content}
                                </StyledSubtitle>
                            )}
                            {data?.headings?.[1] && (
                                <StyledTitle
                                    as={data.headings[1]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[1]?.content,
                                    }}
                                />
                            )}
                        </SectionTitleWrap>
                    </Col>
                    <Col md={6}>
                        {data?.items && (
                            <StepWrap>
                                <h3>
                                    <mark>{`0${data.items.length}`}</mark>Steps
                                </h3>
                            </StepWrap>
                        )}
                    </Col>
                </Row>
                {data?.items && (
                    <GradationRow>
                        {data.items?.map((gradation, i) => (
                            <Gradation
                                key={gradation.id}
                                number={i + 1}
                                isLast={i === data.items.length - 1}
                                title={gradation.title}
                                description={gradation.description}
                                path={gradation.path}
                            />
                        ))}
                    </GradationRow>
                )}
            </Container>
        </SectitonWrap>
    );
};

GradationArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default GradationArea;
