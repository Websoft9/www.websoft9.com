import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "@ui/wrapper";
import AwardBox from "@components/box-image/layout-08";
import { ItemType } from "@utils/types";
import { StyledSection } from "./style";

const FeatureArea = ({ data }) => {
    return (
        <StyledSection>
            <Row>
                {data?.items?.map((award) => (
                    <Col key={award.id} lg={6} mt="50px">
                        <AwardBox
                            image={award.images?.[0]}
                            title={award.title}
                            desc={award.description}
                        />
                    </Col>
                ))}
            </Row>
        </StyledSection>
    );
};
FeatureArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};
export default FeatureArea;
