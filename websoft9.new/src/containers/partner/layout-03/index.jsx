import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import Image from "@ui/image";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType, ButtonType } from "@utils/types";
import {
    ClientsWrap,
    ClientsSecInner,
    ClientContent,
    ClinetImages,
    StyledHeading,
} from "./style";

const PartnerArea = ({ data }) => {
    return (
        <ClientsWrap>
            <ClientsSecInner>
                <Container className="position-relative">
                    <ClientContent>
                        {data?.section_title && (
                            <SectionTitle
                                mb="16px"
                                {...data.section_title}
                                descProps={{ mt: [0, 0] }}
                            />
                        )}
                        {data?.buttons?.map(
                            ({ id, path, content, ...rest }) => (
                                <Button key={id} path={path} {...rest}>
                                    {content}
                                </Button>
                            )
                        )}
                    </ClientContent>
                    <ClinetImages>
                        {data?.items?.map((client, i) => (
                            <div
                                key={`client-${i}`}
                                className={`redrow-img redrow-${
                                    i + 1
                                } animate wow fadeInLeft`}
                                data-wow-delay={`0.${i + 1}s`}
                            >
                                <Anchor path={client.path}>
                                    <Image
                                        src={client?.images?.[0]?.src}
                                        alt={
                                            client?.images?.[0]?.alt || "Client"
                                        }
                                    />
                                </Anchor>
                            </div>
                        ))}
                    </ClinetImages>
                </Container>
            </ClientsSecInner>
        </ClientsWrap>
    );
};

PartnerArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default PartnerArea;
