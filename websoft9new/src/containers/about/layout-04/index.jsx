import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import MarkHeading from "@components/mark-heading";
import {
    SectionTitleType,
    ButtonType,
    TextType,
    HeadingType,
} from "@utils/types";
import { SectionWrap,StyledLeftHeading } from "./style";
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const AboutArea = ({ data }) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["47px", null, "60px"]}
                        title={t(data.section_title?.title)}
                        subtitle={t(data.section_title?.subtitle)}
                    />
                )}

                <Row>
                    <Col
                        lg={{ span: 4, offset: 1 }}
                        mb={["10px", null, null, 0]}
                    >
                        {data?.headings?.[0] && (
                            <MarkHeading mr="48px" as={data.headings[0]?.level}>
                                {t(data.headings[0]?.content)}
                            </MarkHeading>
                        )}
                        {data?.headings?.[1] && (
                            <StyledLeftHeading
                                as={data.headings[1]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: t(data.headings[1]?.content),
                                }}
                            />
                        )}
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        {data?.texts?.[0] && (
                            <Text fontSize="18px" mb="20px">
                                {t(data.texts[0]?.content)}
                            </Text>
                        )}
                        
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default AboutArea;
