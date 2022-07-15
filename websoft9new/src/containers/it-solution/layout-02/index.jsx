import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "@ui/wrapper";
import ITSolutionBox from "@components/box-large-image/layout-03";
import { ItemType } from "@utils/types";
import { StyledSection } from "./style";

const ItSolutionArea = ({ data }) => {
    return (
        <StyledSection>
            <Row>
                {data?.items?.map((solution) => {
                    return (
                        <Col
                            key={solution.id}
                            lg={4}
                            md={6}
                            mb={["42px", null, null, 0]}
                        >
                            <ITSolutionBox
                                title={solution.title}
                                desc={solution.excerpt}
                                image={solution.featured_image}
                                path={`/it-solution/${solution.slug}`}
                            />
                        </Col>
                    );
                })}
            </Row>
        </StyledSection>
    );
};

ItSolutionArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ItSolutionArea;
