import React, { Children } from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Tabs, { Tab } from "@ui/tabs";
import { SectionTitleType } from "@utils/types";
import { StyledTab,Heading,Text,ImageBoxOne } from "./style";
import Image from "@ui/image";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { width } from "styled-system";
import { FeaturedPlayList } from "@mui/icons-material";

const TabArea = ({data}) => {
    //const childArr = Children.toArray(children);

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
                                data.features.map((feature)=>{
                                    return (
                                        <Tab.Pane eventKey={feature.id}>
                                            <Image src={feature.image}/>
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
                                        <Nav.Item>
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
