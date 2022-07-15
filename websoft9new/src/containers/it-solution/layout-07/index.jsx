import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SolutionBox from "@components/box-image/layout-09";
import MessageBox from "@components/message-box";
import { SectionTitleType, ItemType, MottoType } from "@utils/types";
import { SectionWrap, StyledRow } from "./style";

const SolutionArea = ({ data }) => {
    console.log(data);
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                <StyledRow>
                    {data?.items?.map((solution) => (
                        <SolutionBox
                            key={solution.slug}
                            title={solution.title}
                            image={solution.icon?.images?.[0]}
                            desc={solution.excerpt}
                            path={`/it-solution/${solution.slug}`}
                        />
                    ))}
                </StyledRow>
                <Row pt="80px">
                    <Col xl={12}>
                        <MessageBox
                            text={data.motto.text}
                            link={data.motto.link}
                            linkText={data.motto.linkText}
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

SolutionArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
};

export default SolutionArea;
