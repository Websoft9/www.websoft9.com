import React from "react";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-04";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";

const BoxSection = ({data,lgSize}) => {
    const svgDir = require.context('@material-design-icons/svg/two-tone/');
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                    </Col>
                </Row>
                <Row>
                    {data?.features?.map((item) => {
                        const svgFile = svgDir("./"+item.icon+".svg").default;
                        return (
                            <Col
                                lg={lgSize}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxImage
                                    title={item.title}
                                    desc={item.subtitle}
                                    image={svgFile}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
