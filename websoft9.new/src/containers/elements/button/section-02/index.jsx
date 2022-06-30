import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { StyledSection, ButtonGroupWrap, ButtonWrap } from "./style";

const ButtonSection = () => (
    <StyledSection>
        <Container>
            <Heading as="h5" mb="10px">
                Button Style
            </Heading>
            <ButtonGroupWrap>
                <ButtonWrap>
                    <Button m="10px">Standard Button</Button>
                    <Button m="10px" variant="outlined">
                        Outlined Button
                    </Button>
                    <Button m="10px" shape="square">
                        Rectangle Button
                    </Button>
                    <Button m="10px" shape="ellipse">
                        Bullet Button
                    </Button>
                </ButtonWrap>
            </ButtonGroupWrap>
        </Container>
    </StyledSection>
);

export default ButtonSection;
