import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import Image from "@ui/image";
import { Player,ControlBar } from "video-react";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import { ButtonWrap } from "./style";

import "/node_modules/video-react/dist/video-react.css";
import {
    HeroWrapper,
    HeroTextBox,
    ImageBoxWrap,
    ImageBoxOne,
    ImageBoxTwo,
    StyledTitle,
    StyledSubtitle,
} from "./style";
import { Trans,useTranslation } from 'gatsby-plugin-react-i18next';
import { NoBackpackSharp } from "@mui/icons-material";

const HeroArea = ({ data }) => {
    const { t } = useTranslation()

    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                        <HeroTextBox>
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    <Trans>{data.headings}</Trans>
                                </StyledSubtitle>
                            )}
                            {data?.texts && (
                                <Text><Trans>{data.texts}</Trans></Text>
                            )}
                            {data?.buttons?.map(
                                ({id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        m="10px"
                                        size="small"
                                        path={path}
                                        // {...rest}
                                    >
                                        <Trans>{content}</Trans>
                                </Button>
                                )
                            )}
                        </HeroTextBox>
                    </Col>
                    <Col md={5} >
                        <Player playsInline autoPlay={true} preload="auto" loop={true} >
                            <ControlBar autoHide={true} />
                            <source src={data.media} type="video/mp4" />
                        </Player>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
