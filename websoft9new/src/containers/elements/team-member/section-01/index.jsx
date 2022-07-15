import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import TeamMember from "@components/team-member";
import { data } from "./data";
import { TeamWrapper, SectionTitle, ButtonWrap } from "./style";

const TeamsSection = () => (
    <TeamWrapper>
        <Container>
            <Row>
                <Col lg={4}>
                    <SectionTitle>
                        <Heading as="h3" child={{ color: "primary" }}>
                            Our <span>experience experts</span>
                        </Heading>
                        <Text mt="30px">
                            Mitech specializes in technological and IT-related
                            services such as product engineering, warranty
                            management, building cloud, infrastructure, network,
                            etc.
                        </Text>

                        <ButtonWrap>
                            <Button mr="15px" path="/leadership">
                                Join us now
                            </Button>
                            <Button
                                variant="texted"
                                hoverStyle="two"
                                icondistance="2px"
                                path="/leadership"
                                icon="far fa-long-arrow-right"
                            >
                                View all team
                            </Button>
                        </ButtonWrap>
                    </SectionTitle>
                </Col>
                <Col lg={8}>
                    <Row>
                        {data.map((team, i) => (
                            <Col
                                md={6}
                                key={`team-${i}`}
                                mb={["30px", null, "60px"]}
                            >
                                <TeamMember
                                    image={team.image}
                                    name={team.name}
                                    designation={team.designation}
                                    socials={team.socials}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </TeamWrapper>
);

export default TeamsSection;
