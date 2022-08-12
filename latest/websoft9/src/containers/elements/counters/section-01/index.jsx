import React from "react";
import { Container } from "react-bootstrap";
import Counter from "@components/counter/layout-01";
import SectionTitle from "@ui/section-title";
import { SectionWrap, FunFactGridWrap, FunFactGrid } from "./style";

const Section = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <SectionTitle
                    mb={["50px", null, null, "60px"]}
                    title={data.headings}
                    subtitle={data.texts}
                />
                <FunFactGridWrap>
                    {
                        data.features.map((feature)=>{
                            return (
                                <FunFactGrid key={feature.id}>
                                    <Counter
                                        title={feature.subtitle}
                                        countTo={feature.title}
                                        text={feature.description.description}
                                    />
                                </FunFactGrid>
                            );
                        })
                    }             
                </FunFactGridWrap>
            </Container>
        </SectionWrap>
    );
};

export default Section;
