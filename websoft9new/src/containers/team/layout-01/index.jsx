import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import TeamMember from "@components/team-member";
import { SectionTitleType, ButtonType, ItemType } from "@utils/types";
import { StyledSection, StyledButtonWrap } from "./style";

const TeamArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col lg={4} mb={["50px", null, null, 0]}>
                        {data?.section_title && (
                            <SectionTitle
                                textAlign="left"
                                title={data.section_title?.title}
                                subtitle={data.section_title?.subtitle}
                                description={data.section_title?.description}
                            />
                        )}
                        {data?.buttons && (
                            <StyledButtonWrap>
                                {data.buttons.map(
                                    ({ id, content, ...rest }) => (
                                        <Button key={id} {...rest}>
                                            {content}
                                        </Button>
                                    )
                                )}
                            </StyledButtonWrap>
                        )}
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {data?.items?.map((team) => (
                                <Col
                                    md={6}
                                    key={team.id}
                                    mb={["30px", null, "60px"]}
                                >
                                    <TeamMember
                                        image={team.images?.[0]}
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
        </StyledSection>
    );
};

TeamArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
