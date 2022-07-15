import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import BoxIcon from "@components/box-icon/layout-04";
import { HeadingType, ItemType } from "@utils/types";
import {
    SolutionsWrapper,
    SolutionBox,
    SolutionBoxItem,
    StyledHeading,
} from "./style";

const SolutionArea = ({ data }) => {
    return (
        <SolutionsWrapper>
            <Container>
                {data?.headings?.[0] && (
                    <StyledHeading
                        as={data.headings[0]?.level}
                        dangerouslySetInnerHTML={{
                            __html: data.headings[0]?.content,
                        }}
                    />
                )}
                <Row>
                    <Col lg={12}>
                        <SolutionBox>
                            {data?.items?.map((solution) => (
                                <SolutionBoxItem key={solution.id}>
                                    <BoxIcon
                                        icon="fa fa-check"
                                        title={solution.title}
                                        desc={solution.description}
                                        layout={4}
                                    />
                                </SolutionBoxItem>
                            ))}
                        </SolutionBox>
                    </Col>
                </Row>
            </Container>
        </SolutionsWrapper>
    );
};

SolutionArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default SolutionArea;
