import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Counter from "@components/counter/layout-01";
import { ItemType } from "@utils/types";
import { StyledSection } from "./style";

const FunFactArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    {data?.items?.map((item, i) => (
                        <Col md={3} sm={6} key={`fun-fact-${i}`}>
                            <Counter
                                mb="30px"
                                layout={2}
                                text={item.title}
                                countTo={item.count}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </StyledSection>
    );
};

FunFactArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FunFactArea;
