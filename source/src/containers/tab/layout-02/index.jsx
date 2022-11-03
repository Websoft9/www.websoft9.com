import Image from "@ui/image";
import SectionTitle from "@ui/section-title";
import { Tab } from "@ui/tabs";
import { Container } from "@ui/wrapper";
import React from "react";
import { Heading, StyledTab, Text } from "./style";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const TabArea = ({data}) => {
    return (
        <StyledTab>
            <Container>
                <SectionTitle
                    mb={["50px", null, null, "60px"]}
                    title={data.headings}
                    subtitle={data.texts}
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey={data.features[0].id}>
                    <Row>
                        <Col sm={5}>
                            <Tab.Content>
                            {
                                data.features.map((feature,i)=>{
                                    return (
                                        <Tab.Pane key={feature.id+i} eventKey={feature.id}>
                                            <Image src={feature.image} alt=""/>
                                        </Tab.Pane>   
                                    );                                                         
                                })
                            }
                            </Tab.Content>                            
                        </Col>
                        <Col sm={7}>
                            <Nav variant="tabs" className="flex-column">
                            {
                                data.features.map((feature)=>{
                                    return (
                                        <Nav.Item key={feature.id}>
                                            <Nav.Link eventKey={feature.id}>
                                                <Heading>{feature.title}</Heading>
                                                <Text>{feature.subtitle}</Text>
                                            </Nav.Link>
                                        </Nav.Item>
                                    );
                                })   
                            }
                            </Nav>
                        </Col>
                    </Row>
                    </Tab.Container>
            </Container>
        </StyledTab>
    );
};


export default TabArea;
