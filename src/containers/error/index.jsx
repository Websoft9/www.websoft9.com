import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import { ErrorWrap } from "./style";

const ErroArea = () => {
    return (
        <ErrorWrap>
            <Container>
                <Row>
                    <Col xl={7} lg={8} mx="auto">
                        <h1>404</h1>
                        <h2>OPPS! PAGE NOT BE FOUND</h2>
                        <p>
                            Sorry but the page you are looking for does not
                            exist, have been removed, name changed or is
                            temporarity unavailable.
                        </p>
                        <Button path="/">Back to home page</Button>
                    </Col>
                </Row>
            </Container>
        </ErrorWrap>
    );
};

export default ErroArea;
