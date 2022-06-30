import React from "react";
import { Container } from "react-bootstrap";
import Counter from "@components/counter/layout-01";
import { SectionWrap, FunFactGridWrap, FunFactGrid } from "./style";

const Section = () => {
    return (
        <SectionWrap>
            <Container>
                <FunFactGridWrap>
                    <FunFactGrid>
                        <Counter
                            title="Successfully work with"
                            countTo={1056}
                            text="HAPPY CLIENTS"
                        />
                    </FunFactGrid>
                    <FunFactGrid>
                        <Counter
                            title="Successfully completed"
                            countTo={491}
                            text="FINISHED PROJECTS"
                        />
                    </FunFactGrid>
                    <FunFactGrid>
                        <Counter
                            title="Recruit more than"
                            countTo={245}
                            text="SKILLED EXPERTS"
                        />
                    </FunFactGrid>
                    <FunFactGrid>
                        <Counter
                            title="Blog update"
                            countTo={1090}
                            text="MEDIA POSTS"
                        />
                    </FunFactGrid>
                </FunFactGridWrap>
            </Container>
        </SectionWrap>
    );
};

export default Section;
