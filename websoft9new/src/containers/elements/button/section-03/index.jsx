import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { StyledSection, ButtonGroupWrap, ButtonWrap } from "./style";

const ButtonSection = () => (
    <StyledSection>
        <Container>
            <Heading as="h5" mb="10px">
                Unlimited Skin
            </Heading>
            <ButtonGroupWrap>
                <ButtonWrap>
                    <Button m="10px">Primary Button</Button>
                    <Button m="10px" color="secondary">
                        Secondary Button
                    </Button>
                    <Button m="10px" color="dark">
                        Custom Color
                    </Button>
                    <Button m="10px" color="light" shadow>
                        White Button
                    </Button>
                    <Button m="10px" color="gradient">
                        Gradient Button
                    </Button>
                </ButtonWrap>
            </ButtonGroupWrap>
        </Container>
    </StyledSection>
);

export default ButtonSection;
