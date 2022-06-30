import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import List, { ListItem } from "@ui/list";
import { SectionWrap, ListGroupWrap } from "./style";

const Section = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                Icon List
                            </Heading>
                            <List $layout="icon">
                                <ListItem>
                                    <span className="icon">
                                        <i className="far fa-alarm-clock"></i>
                                    </span>
                                    <span>Item text 01</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon">
                                        <i className="far fa-crown"></i>
                                    </span>
                                    <span>Item text 02</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon">
                                        <i className="far fa-database"></i>
                                    </span>
                                    <span>Item text 03</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon">
                                        <i className="fab fa-rebel"></i>
                                    </span>
                                    <span>Item text 04</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon">
                                        <i className="far fa-cart-plus"></i>
                                    </span>
                                    <span>Item text 05</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon">
                                        <i className="far fa-crosshairs"></i>
                                    </span>
                                    <span>Item text 06</span>
                                </ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                Automatic Numbered List
                            </Heading>
                            <List as="ol" $layout="order-list">
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                Roman Numbered List
                            </Heading>
                            <List
                                as="ol"
                                $liststyle="upper-roman"
                                $layout="order-list"
                            >
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default Section;
