import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Tabs, { Tab } from "@ui/tabs";
import { SectionWrap } from "./style";

const TabsSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Heading mb="40px" textAlign="center">
                    Tab Style 02
                </Heading>
                <Tabs defaultActiveKey="our-mission-tab" layout={2}>
                    <Tab eventKey="our-mission-tab" title="Our Mission">
                        <Heading as="h4" mb="20px" mt="40px">
                            We’ve come a long way in 25 years
                        </Heading>
                        <p>
                            The studio was keen to create an identity that would
                            not interfere with any of the existing brands,
                            settling on a helicoid system that can be easily
                            adapted to “work with any colour system”. The studio
                            consulted with the various brands throughout the
                            process. (Source: https://designweek.co.uk)
                        </p>
                        <p>
                            The studio was keen to create an identity that would
                            not interfere with any of the existing brands,
                            settling on a helicoid system that can be easily
                            adapted to “work with any colour system”. The studio
                            consulted with the various brands throughout the
                            process. (Source: https://designweek.co.uk)
                        </p>
                    </Tab>
                    <Tab eventKey="our-services-tab" title="Our Services">
                        <Heading as="h4" mb="20px" mt="40px">
                            New multiple site connectivity
                        </Heading>
                        <p>
                            Advancements in technology – including
                            machine-to-machine communications between smart
                            sensors, referred to as ‘The Internet of Things’.
                            For example, appliances in the home that can be
                            monitored and controlled wirelessly by the homeowner
                            wherever they are.
                        </p>
                        <p>
                            Advancements in technology – including
                            machine-to-machine communications between smart
                            sensors, referred to as ‘The Internet of Things’.
                            For example, appliances in the home that can be
                            monitored and controlled wirelessly by the homeowner
                            wherever they are.
                        </p>
                    </Tab>
                    <Tab eventKey="partners-tab" title="Technology Partners">
                        <Heading as="h4" mb="20px" mt="40px">
                            IT Security &amp; Software
                        </Heading>
                        <p>
                            Market development – increasing market share in new
                            markets such as servers and networking equipment.
                            ARM’s technology is well placed to provide lower
                            power options to transport, distribute, analyse and
                            store data across the internet.
                        </p>
                        <p>
                            Market development – increasing market share in new
                            markets such as servers and networking equipment.
                            ARM’s technology is well placed to provide lower
                            power options to transport, distribute, analyse and
                            store data across the internet.
                        </p>
                    </Tab>
                    <Tab eventKey="our-awards-tab" title="Our Awards">
                        <Heading as="h4" mb="20px" mt="40px">
                            Weak hosted capability
                        </Heading>
                        <p>
                            This case study will demonstrate how ARM’s
                            strategies contribute to the achievement of its
                            business vision, aims and objectives using an
                            integrated approach focusing on innovation, its
                            people and its network of partners.
                        </p>
                        <p>
                            This case study will demonstrate how ARM’s
                            strategies contribute to the achievement of its
                            business vision, aims and objectives using an
                            integrated approach focusing on innovation, its
                            people and its network of partners.
                        </p>
                    </Tab>
                </Tabs>
            </Container>
        </SectionWrap>
    );
};

export default TabsSection;
