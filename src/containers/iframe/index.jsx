import React from "react";
import { Container} from "@ui/wrapper";
import { SectionWrap } from "./style";

const IframeArea = ({ data, width,height}) => {
    return (
        <SectionWrap>
            <Container>
                <iframe src={data} width={width} height={height}></iframe>
            </Container>
        </SectionWrap>
    );
};

export default IframeArea;
