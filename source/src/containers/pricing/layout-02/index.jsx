import PricingTable from "@components/pricing-table/layout-01";
import SectionTitle from "@ui/section-title";
import Tabs, { Tab } from "@ui/tabs";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";


const PricingArea = ({ data }) => {
    const keys = Object.keys(data.buttons);
    
    return (
        <SectionWrap>
            <Container>    
                <SectionTitle
                    mb={["30px", null, "50px"]}
                    title = { data.headings }
                    subtitle = { data.texts }
                />
                <Tabs defaultActiveKey={data.buttons[0].id} layout={2}>
                    {data.buttons.map((key,i) => (
                        <Tab
                            key={key.id}
                            eventKey={key.id}
                            title={key.content}
                        >
                            <Row mt="50px">
                                {data.features.map((pricing) =>
                                {
                                    var img = new Object();
                                    img.src = pricing.media;

                                    return (
                                        <Col lg={4} md={6} key={pricing.id}>
                                            <PricingTable
                                                period={pricing.buttons[i].period}
                                                title={pricing.title}
                                                price={pricing.buttons[i].price}
                                                path={pricing.link[0]}
                                                features={pricing.features}
                                                image={img}
                                                isFeatured={pricing.subTitle=="true"?true:false}
                                            />
                                        </Col>
                                    );
                                }
                                )}
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </SectionWrap>
    );
};


export default PricingArea;
