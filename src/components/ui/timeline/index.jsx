import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import {
    TimelineWrap,
    TimelineList,
    Line,
    Item,
    Dots,
    TimelineRow,
    TimelineFeature,
    TimelineFeatureInner,
    TimelineInfo,
    TimelineInfoInner,
    DateWrap,
    Photo,
    TimelineContent,
    Title,
    Description,
} from "./style";

const Timeline = ({ items }) => {
    return (
        <TimelineWrap>
            <TimelineList>
                <Line />
                {items?.map(({ id, subtitle, image, title, description }, i) => {
                    return (
                        <Item key={id} align={i % 2 === 0 ? "left" : "right"}>
                            <Dots />
                            <TimelineRow>
                                <TimelineFeature>
                                    <TimelineFeatureInner>
                                        {subtitle && <DateWrap>{subtitle}</DateWrap>}
                                        {image && (
                                            <Photo>
                                                <Image
                                                    src={image}
                                                />
                                            </Photo>
                                        )}
                                    </TimelineFeatureInner>
                                </TimelineFeature>
                                <TimelineInfo>
                                    <TimelineInfoInner>
                                        <TimelineContent>
                                            {title && <Title>{title}</Title>}
                                            {description && (
                                                <Description>
                                                    {description.description}
                                                </Description>
                                            )}
                                        </TimelineContent>
                                    </TimelineInfoInner>
                                </TimelineInfo>
                            </TimelineRow>
                        </Item>
                    );
                })}
            </TimelineList>
        </TimelineWrap>
    );
};

Timeline.propTypes = {
    items: PropTypes.array,
};

export default Timeline;
