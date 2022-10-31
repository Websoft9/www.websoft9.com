import Image from "@ui/image";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { PageHeaderWrap, StyledBG, StyledDesc, StyledTitle } from "./style";

const PageHeader = ({ data }) => {
    return (
        <PageHeaderWrap>
            {data?.image && (
                <StyledBG>
                    <Image src={data.image} alt="" />
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
