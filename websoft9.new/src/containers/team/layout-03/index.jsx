import React from "react";
import PropTypes from "prop-types";
import { ItemType } from "@utils/types";
import { Container, Row, Col } from "@ui/wrapper";
import TeamMember from "@components/team-member";
import { TeamWrapper } from "./style";

const TeamArea = ({ data }) => {
    return (
        <TeamWrapper>
            <Container>
                <Row>
                    {data?.items?.map((member) => (
                        <Col lg={3} md={6} key={member.id} mb="30px">
                            <TeamMember
                                layout={2}
                                image={member.images?.[0]}
                                name={member.name}
                                designation={member.designation}
                                socials={member.socials}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </TeamWrapper>
    );
};

TeamArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
