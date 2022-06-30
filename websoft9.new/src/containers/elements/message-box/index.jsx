import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Alert from "@ui/alert";
import { SectionWrap } from "./style";

const MessageBoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Alert variant="info" mb="30px">
                            <i className="icon far fa-info-circle"></i> This is
                            a informational message
                        </Alert>
                        <Alert variant="success" mb="30px">
                            <i className="icon far fa-check-circle"></i> This is
                            a success message
                        </Alert>
                        <Alert variant="danger" mb="30px">
                            <i className="icon far fa-times-circle"></i> This is
                            a danger message
                        </Alert>
                        <Alert variant="warning">
                            <i className="icon far fa-exclamation-circle"></i>{" "}
                            This is a warning message
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default MessageBoxSection;
