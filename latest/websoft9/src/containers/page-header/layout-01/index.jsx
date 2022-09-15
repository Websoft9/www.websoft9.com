import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { Container, Row, Col } from "@ui/wrapper";
import { HeadingType, TextType, ImageType } from "@utils/types";
import { PageHeaderWrap, StyledTitle, StyledDesc, StyledBG } from "./style";

const PageHeader = ({ data }) => {
    return (
        <PageHeaderWrap>
            {data?.image && (
                <StyledBG>
                    <Image src={data.image} />
                </StyledBG>
            )}
            <Container>
                <Row textAlign="center">
                    <Col lg={8} mx="auto">
                        {data?.headings && (
                            <StyledTitle as="h1">
                                {data.headings}
                            </StyledTitle>
                        )}
                        {data?.texts && (
                            <StyledDesc>{data.texts}</StyledDesc>
                        )}
                    </Col>
                </Row>
            </Container>
        </PageHeaderWrap>
    );
};


export default PageHeader;
