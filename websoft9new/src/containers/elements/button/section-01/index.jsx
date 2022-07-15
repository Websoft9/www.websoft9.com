import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { StyledSection, ButtonGroupWrap, ButtonWrap } from "./style";

const ButtonSection = () => (
    <StyledSection>
        <Container>
            <Heading as="h5" mb="10px">
                Button Sizes
            </Heading>
            <ButtonGroupWrap>
                <ButtonWrap>
                    <Button m="10px" size="xsmall">
                        Extra Small
                    </Button>
                    <Button m="10px" size="small">
                        Small Size
                    </Button>
                    <Button m="10px" size="medium">
                        Standard Size
                    </Button>
                    <Button m="10px" size="large">
                        Large Size
                    </Button>
                </ButtonWrap>
                <ButtonWrap>
                    <Button m="10px" minWidth="280px">
                        Customize Size
                    </Button>
                </ButtonWrap>
                <ButtonWrap>
                    <Button m="10px" fullwidth>
                        Full Wide
                    </Button>
                </ButtonWrap>
            </ButtonGroupWrap>
        </Container>
    </StyledSection>
);

export default ButtonSection;
