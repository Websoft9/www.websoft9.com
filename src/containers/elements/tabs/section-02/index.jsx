import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Tabs, { Tab } from "@ui/tabs";
import { SectionWrap } from "./style";
import LegendArea1 from "@containers/legend/layout-01";
import LegendArea2 from "@containers/legend/layout-02";
import LegendArea3 from "@containers/legend/layout-03";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const TabsSection = ({dataOverview,dataHighlights,dataDescription}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container style={{paddingLeft:'0px'}}>
                <Tabs defaultActiveKey="our-mission-tab" layout={2} >
                    <Tab eventKey="our-mission-tab" title="产品说明" style={{border:"1px solid",marginTop:"10px"}}>
                        <LegendArea1 title={t("概述")} data={ dataOverview }/>

                        <LegendArea3 title={t("亮点")} data={ dataHighlights }/>

                        <LegendArea2 title={t("详情")} data={ dataDescription }/>
                    </Tab>
                    <Tab eventKey="our-services-tab" title="产品安装" style={{border:"1px solid",marginTop:"10px"}}>
                        {/* <Heading as="h4" mb="20px" mt="40px">
                            产品安装
                        </Heading> */}

                    </Tab> 
                </Tabs>
            </Container>
        </SectionWrap>
    );
};

export default TabsSection;
