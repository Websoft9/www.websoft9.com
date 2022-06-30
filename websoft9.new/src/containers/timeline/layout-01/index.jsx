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
                {data?.section_title && (
                    <SectionTitle mb={["45px"]} {...data.section_title} />
                )}
                <Timeline items={data.items} />
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
