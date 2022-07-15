import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { Container } from "@ui/wrapper";
import { SectionWrap, TypedTextWrap } from "./style";

const TypedText = () => {
    return (
        <SectionWrap>
            <Container>
                <TypedTextWrap>
                    <span className="not-typical">
                        We are a creative studio <br /> focused on{" "}
                    </span>
                    <Typed
                        strings={["graphic", "web", "interactive"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <span className="not-typical">design</span>
                </TypedTextWrap>
            </Container>
        </SectionWrap>
    );
};

export default TypedText;
