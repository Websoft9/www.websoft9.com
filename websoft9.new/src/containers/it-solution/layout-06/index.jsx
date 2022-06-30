import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Motto from "@components/motto";
import ITSolutionBox from "@components/box-large-image/layout-02";
import { ItemType, MottoType } from "@utils/types";
import { SectionWrap } from "./style";

const ITSolutionArea = ({ data, space }) => {
    return (
        <SectionWrap $space={space}>
            <Container>
                {data?.items && (
                    <Row>
                        {data.items?.map((item) => {
                            return (
                                <Col
                                    key={item.id}
                                    className="box-item"
                                    lg={4}
                                    md={6}
                                >
                                    <ITSolutionBox
                                        title={item.title}
                                        desc={item.excerpt}
                                        image={item.featured_image}
                                        path={`/it-solution/${item.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
                {data?.motto && (
                    <Motto
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        path={data.motto?.link}
                    />
                )}
            </Container>
        </SectionWrap>
    );
};

ITSolutionArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
    space: PropTypes.oneOf([1, 2]),
};

ITSolutionArea.defaultProps = {
    space: 1,
};

export default ITSolutionArea;
