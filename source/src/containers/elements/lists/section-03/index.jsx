import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import { SectionWrap, ListGroupWrap } from "./style";
import { Link,graphql,navigate  }  from  'gatsby';
import BoxImage from "@components/box-large-image/layout-02";
import defaultImage from "@assets/images/default.png";
import Pagination2 from "@components/pagination/layout-02";
import SectionTitle from "@ui/section-title";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

// 用于显示所有资源目录
const Section = ({resourceData,currentPage,numberOfPages,rootPage,location }) => {
    const { t } = useTranslation();

    return (
        <SectionWrap>
            <Container>
                {/* {
                    (location.pathname == "/download" || location.pathname == "/resources" || location.pathname == "/solutions") ? <></> : 
                    <Row>
                        <SectionTitle subtitle={" "} title={resourceData?.[0]?.type?.title} />
                    </Row>
                } */}
                <Row>
                    {
                    resourceData == null ?  <Heading as="h5" mb={["20px", null, "30px"]} textAlign="center">{t("No relevant data found")}</Heading> :
                    resourceData?.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                                style={{marginBlockEnd:"20px",marginBlockStart:"20px"}}
                            >
                                <BoxImage
                                    title={item.title}
                                    image=
                                    {                                         
                                        item.image==null ? {src: defaultImage} : {src: item.image}
                                    }
                                    category={item.type.title}
                                    desc={item.type.key == "blog" || item.type.key == "news" ?item.time:item.subTitle }
                                    path={`/${item.type.key}/${item.slug}`}
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                {   
                    resourceData.length > 0 && rootPage &&
                    <Pagination2
                        mt="40px"
                        rootPage={rootPage}
                        currentPage={currentPage}
                        numberOfPages={numberOfPages}
                    />      
                }
                </Row>             
            </Container>
        </SectionWrap>
    );
};

export default Section;
