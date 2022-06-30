import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import TeamMember from "@components/team-member";
import { headMembers, executives } from "./data";
import { TeamWrapper, StyledHeading } from "./style";

const TeamArea = () => {
    return (
        <TeamWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <StyledHeading>
                            We pride ourselves on having a team <br /> of{" "}
                            <span>highly-skilled</span> experts
                        </StyledHeading>
                    </Col>
                </Row>
                <Row gutters={{ lg: 60 }} mb={[0, null, null, "26px", "36px"]}>
                    {headMembers &&
                        headMembers.map((headMember, i) => (
                            <Col md={4} key={`head-member-${i}`} mb="30px">
                                <TeamMember
                                    layout={2}
                                    image={headMember.image}
                                    name={headMember.name}
                                    designation={headMember.designation}
                                    socials={headMember.socials}
                                />
                            </Col>
                        ))}
                </Row>
                <Row>
                    {executives &&
                        executives.map((executive, i) => (
                            <Col lg={3} md={6} key={`executive-${i}`} mb="30px">
                                <TeamMember
                                    layout={3}
                                    image={executive.image}
                                    name={executive.name}
                                    designation={executive.designation}
                                    socials={executive.socials}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        </TeamWrapper>
    );
};

export default TeamArea;
