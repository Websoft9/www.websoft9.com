import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { StyledSection, ButtonGroupWrap, ButtonWrap } from "./style";

const ButtonSection = () => (
    <StyledSection>
        <Container>
            <Heading as="h5" mb="10px">
                With Ton Of Icons
            </Heading>
            <ButtonGroupWrap>
                <ButtonWrap>
                    <Button m="10px" icondistance="6px" icon="far fa-bolt">
                        Standard Size
                    </Button>
                    <Button
                        m="10px"
                        icondistance="6px"
                        icon="far fa-arrow-right"
                    >
                        Standard Size
                    </Button>
                    <Button
                        m="10px"
                        icondistance="6px"
                        icon="far fa-binoculars"
                    >
                        Standard Size
                    </Button>
                    <Button
                        m="10px"
                        icondistance="6px"
                        icon="far fa-code-merge"
                        iconposition="left"
                    >
                        Standard Size
                    </Button>
                </ButtonWrap>
            </ButtonGroupWrap>
        </Container>
    </StyledSection>
);

export default ButtonSection;
