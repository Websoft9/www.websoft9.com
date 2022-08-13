import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import Image from "@ui/image";
import { Player,ControlBar } from "video-react";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import { ButtonWrap } from "./style";
import SectionTitle from "@ui/section-title";
import "/node_modules/video-react/dist/video-react.css";
import {
    HeroWrapper,
    HeroTextBox,
    ImageBoxWrap,
    ImageBoxOne,
    ImageBoxTwo,
    StyledTitle,
    StyledSubtitle,
    HeadingWrap,
    Heading
} from "./style";
import { Trans,useTranslation } from 'gatsby-plugin-react-i18next';
import { NoBackpackSharp } from "@mui/icons-material";

const HeroArea = ({ data }) => {
    const { t } = useTranslation()

    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={9}>
                        <HeroTextBox>                            
                            {/* <SectionTitle mb={["20px", null, null,"20px"]}  subtitle={data.subtitle} /> */}
                            <Heading>{data.subtitle}</Heading>
                            {/* <Text>{data.subtitle}</Text> */}
                            <Image src={data.image} /> 
                        </HeroTextBox>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
