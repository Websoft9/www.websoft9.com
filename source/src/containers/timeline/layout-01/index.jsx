import React from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import Timeline from "@ui/timeline";
import SectionTitle from "@ui/section-title";
import { SectionTitleType, ItemType } from "@utils/types";
import { SectionWrap } from "./style";

const TimelineArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                <Timeline items={data.features} />
            </Container>
        </SectionWrap>
    );
};

TimelineArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TimelineArea;
