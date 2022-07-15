import React from "react";
import PropTypes from "prop-types";
import { normalizedArray } from "@utils";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import { ItemType } from "@utils/types";
import { TeamListWrapper, StyledHeading, StyledBox } from "./style";

const TeamArea = ({ data }) => {
    let content = normalizedArray(data.items, "designation");
    return (
        <TeamListWrapper>
            <Container>
                <Row>
                    {Object.entries(content).map(([key, value]) => (
                        <Col md={3} key={key}>
                            <StyledHeading>{key}</StyledHeading>
                            <StyledBox>
                                {value.map((ar) => (
                                    <Text key={ar.id}>{ar.name}</Text>
                                ))}
                            </StyledBox>
                        </Col>
                    ))}
                </Row>
            </Container>
        </TeamListWrapper>
    );
};

TeamArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
