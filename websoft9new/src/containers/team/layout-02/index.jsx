import React from "react";
import PropTypes from "prop-types";
import { ItemType, SectionTitleType } from "@utils/types";
import { Container, Row, Col } from "@ui/wrapper";
import TeamMember from "@components/team-member";
import SectionTitle from "@ui/section-title";
import { TeamWrapper } from "./style";

const TeamArea = ({ data }) => {
    return (
        <TeamWrapper>
            <Container px={[null, null, null, "30px"]}>
                {data?.section_title && (
                    <SectionTitle
                        mb={["45px", null, null, "70px"]}
                        {...data.section_title}
                    />
                )}
                <Row gutters={{ lg: 60 }}>
                    {data?.items?.map((member) => (
                        <Col md={4} key={member.id} mb="30px">
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
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
