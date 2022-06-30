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
                {items?.map(({ id, year, images, title, description }, i) => {
                    return (
                        <Item key={id} align={i % 2 === 0 ? "left" : "right"}>
                            <Dots />
                            <TimelineRow>
                                <TimelineFeature>
                                    <TimelineFeatureInner>
                                        {year && <DateWrap>{year}</DateWrap>}
                                        {images?.[0]?.src && (
                                            <Photo>
                                                <Image
                                                    src={images[0].src}
                                                    alt={
                                                        images[0]?.alt ||
                                                        "timeline"
                                                    }
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
                                                    {description}
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
