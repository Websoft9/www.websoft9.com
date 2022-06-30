import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { Container, Row, Col } from "@ui/wrapper";
import { HeadingType, TextType, ImageType } from "@utils/types";
import { PageHeaderWrap, StyledTitle, StyledDesc, StyledBG } from "./style";

const PageHeader = ({ data }) => {
    return (
        <PageHeaderWrap>
            {data.images?.[0]?.src && (
                <StyledBG>
                    <Image
                        src={data.images?.[0]?.src}
                        alt={data.images[0]?.alt || "Page Header"}
                    />
                </StyledBG>
            )}
            <Container>
                <Row textAlign="center">
                    <Col lg={8} mx="auto">
                        {data?.headings?.[0] && (
                            <StyledTitle as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </StyledTitle>
                        )}
                        {data?.texts?.[0] && (
                            <StyledDesc>{data.texts[0]?.content}</StyledDesc>
                        )}
                    </Col>
                </Row>
            </Container>
        </PageHeaderWrap>
    );
};

PageHeader.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default PageHeader;
