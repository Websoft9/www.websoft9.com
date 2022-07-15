import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Counter from "@components/counter/layout-03";
import MarkHeading from "@components/mark-heading";
import { HeadingType, ItemType } from "@utils/types";
import { SectionWrap, HeaderWrap, StyledHeading } from "./style";

const FunFactArea = ({ data, ...rest }) => {
    return (
        <SectionWrap {...rest}>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <HeaderWrap>
                            {data?.headings?.[0] && (
                                <MarkHeading as={data.headings[0]?.level}>
                                    {data.headings[0].content}
                                </MarkHeading>
                            )}
                            {data?.headings?.[1] && (
                                <StyledHeading
                                    as={data.headings[1]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[1].content,
                                    }}
                                />
                            )}
                        </HeaderWrap>
                    </Col>
                    <Col lg={7} md={8}>
                        <Row>
                            {data?.items?.map((item) => (
                                <Col sm={6} key={item.id}>
                                    <Counter
                                        text={item.title}
                                        countTo={item.count}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

FunFactArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FunFactArea;
