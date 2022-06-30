import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import ITSolutionBox from "@components/box-image/layout-05";
import Motto from "@components/motto";
import { ItemType, MottoType } from "@utils/types";
import { SectionWrap } from "./style";

const ITSolutionArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {data?.items?.map((item) => (
                        <Col lg={4} md={6} key={item.slug} mt="30px">
                            <ITSolutionBox
                                title={item.title}
                                desc={item.excerpt}
                                image={item.icon?.images?.[1]}
                                path={`/it-solution/${item.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
                {data?.motto && (
                    <Motto
                        mt={["45px", null, "60px"]}
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
};

export default ITSolutionArea;
