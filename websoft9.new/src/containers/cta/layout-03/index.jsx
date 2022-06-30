import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Anchor from "@ui/anchor";
import Motto from "@components/motto";
import { HeadingType, MottoType } from "@utils/types";
import { SectionWrap, StyledHeading } from "./style";

const CtaArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.headings?.[0] && (
                    <StyledHeading as={data.headings[0]?.level}>
                        {data.headings[0]?.content}
                    </StyledHeading>
                )}
                {data?.motto && (
                    <Motto
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        link={data.motto?.link}
                    />
                )}
            </Container>
        </SectionWrap>
    );
};

CtaArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        motto: PropTypes.shape(MottoType),
    }),
};

export default CtaArea;
