import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Counter from "@components/counter/layout-04";
import { HeadingType, ItemType } from "@utils/types";
import { SectionWrap } from "./style";

const FunFactArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {data?.items?.map((item) => (
                        <Col sm={6} md={4} key={item.id}>
                            <Counter
                                icon={item.iconClass}
                                title={item.title}
                                countTo={item.count}
                            />
                        </Col>
                    ))}
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
