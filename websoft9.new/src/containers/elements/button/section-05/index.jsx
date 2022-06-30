import React from "react";
import { Container } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import gplayImg from "@data/images/icons/google-play-btn.jpg";
import { StyledSection, ButtonGroupWrap, ButtonWrap } from "./style";

const ButtonSection = () => (
    <StyledSection>
        <Container>
            <Heading as="h5" mb="10px">
                With Image
            </Heading>
            <ButtonGroupWrap>
                <ButtonWrap>
                    <Button m="10px" imgbutton>
                        <img src={gplayImg} alt="gplay" />
                    </Button>
                    <Button m="10px" imgbutton>
                        <img src={gplayImg} alt="gplay" />
                    </Button>
                </ButtonWrap>
            </ButtonGroupWrap>
        </Container>
    </StyledSection>
);

export default ButtonSection;
