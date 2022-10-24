import Image from "@ui/image";
import PropTypes from "prop-types";
import React from "react";
import {
    DateWrap, Description, Dots, Item, Line, Photo,
    TimelineContent, TimelineFeature,
    TimelineFeatureInner,
    TimelineInfo,
    TimelineInfoInner, TimelineList, TimelineRow, TimelineWrap, Title
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
                                                    alt=""
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
