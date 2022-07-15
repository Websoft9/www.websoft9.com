import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import {
    GradationWrap,
    Line,
    NumberWrap,
    ContentWrap,
    Heading,
    Text,
} from "./style";

const Gradation = ({ number, title, description, path, ...restProps }) => {
    return (
        <GradationWrap {...restProps}>
            <Line />
            <NumberWrap>
                <div className="mask">
                    <div className="wave-pulse wave-pulse-1"></div>
                    <div className="wave-pulse wave-pulse-2"></div>
                    <div className="wave-pulse wave-pulse-3"></div>
                </div>
                {number && <h6 className="number">{number}</h6>}
            </NumberWrap>
            <ContentWrap>
                {title && <Heading>{title}</Heading>}
                {description && <Text>{description}</Text>}
                {path && (
                    <Button
                        variant="texted"
                        color="primary"
                        fontSize="14px"
                        icondistance="5px"
                        icon="far fa-long-arrow-right"
                        path={path}
                    >
                        Look More
                    </Button>
                )}
            </ContentWrap>
        </GradationWrap>
    );
};

Gradation.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
};

export default Gradation;
