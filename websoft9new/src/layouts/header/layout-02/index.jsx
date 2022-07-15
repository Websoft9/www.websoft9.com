import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Logo from "@components/logo";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Social, { SocialLink } from "@ui/social";
import { MainMenu, MobileMenu } from "@components/menu";
import HeaderForm from "@components/forms/search-form/layout-02";
import BurgerButton from "@ui/burger-button";
import Clickable from "@ui/clickable";
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from "@ui/off-canvas";
import { useSticky } from "@hooks";
import { SocialType } from "@utils/types";
import {
    HeaderWrap,
    HeaderTop,
    HeaderMain,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderTopRightInner,
    InfoItem,
    InfoIcon,
    InfoContent,
    HeaderBottom,
    HeaderBottomLeft,
    HeaderNavigation,
    HeaderBottomRight,
    HeaderElement,
    StyledInfoTitle,
    StyledInfoText,
} from "./style";

const slider = {
    slidesPerView: 3,
    loop: true,
    pagination: false,
    spaceBetween: 0,
    autoplay: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const Header = ({ data }) => {
    const { sticky, headerRef, fixedRef } = useSticky();
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);
    const [headerInnerOpen, setHeaderInnerOpen] = useState(false);

    const offCanvasHandler = () => {
        setOffcanvasOpen((prevState) => !prevState);
    };
    const headerInnerHandler = () => {
        setHeaderInnerOpen((prevState) => !prevState);
    };

    return (
        <Fragment>
            <HeaderWrap ref={headerRef} isSticky={sticky}>
                <HeaderTop>
                    <Container>
                        <HeaderMain>
                            <HeaderTopLeft>
                                <Logo variant="dark" />
                            </HeaderTopLeft>
                            <HeaderTopRight className="header-top-right">
                                <HeaderTopRightInner isOpen={headerInnerOpen}>
                                    <HeaderElement
                                        width="100%"
                                        display={["block", null, "none"]}
                                    >
                                        <HeaderForm inputId="header-search" />
                                    </HeaderElement>
                                    {data?.contact_info && (
                                        <HeaderElement className="contact-info">
                                            <SwiperSlider
                                                options={slider}
                                                className="header-top-info-slider-wrap"
                                            >
                                                {data.contact_info?.map(
                                                    (item) => (
                                                        <SwiperSlide
                                                            key={item.id}
                                                        >
                                                            <InfoItem>
                                                                <InfoIcon>
                                                                    <i
                                                                        className={`icon ${item.icon}`}
                                                                    ></i>
                                                                </InfoIcon>
                                                                <InfoContent>
                                                                    <StyledInfoTitle>
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </StyledInfoTitle>
                                                                    <StyledInfoText>
                                                                        {
                                                                            item.text
                                                                        }
                                                                    </StyledInfoText>
                                                                </InfoContent>
                                                            </InfoItem>
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </SwiperSlider>
                                        </HeaderElement>
                                    )}
                                    {data?.socials && (
                                        <HeaderElement
                                            width="100%"
                                            justifyContent={[
                                                null,
                                                null,
                                                "flex-end",
                                            ]}
                                            className="social-elements"
                                        >
                                            <Social
                                                tooltip={true}
                                                tooltip_position="bottom-left"
                                                tooltip_bg="dark"
                                                space="20px"
                                            >
                                                {data.socials?.map((social) => (
                                                    <SocialLink
                                                        key={social.id}
                                                        path={social.link}
                                                        title={social.title}
                                                    >
                                                        <i
                                                            className={
                                                                social.icon
                                                            }
                                                        ></i>
                                                    </SocialLink>
                                                ))}
                                            </Social>
                                        </HeaderElement>
                                    )}
                                </HeaderTopRightInner>
                                <HeaderElement
                                    pl="40px"
                                    display={["flex", null, null, null, "none"]}
                                >
                                    <BurgerButton onClick={offCanvasHandler} />
                                </HeaderElement>
                                <HeaderElement
                                    pl="15px"
                                    display={["flex", null, "none"]}
                                >
                                    <Clickable
                                        onClick={headerInnerHandler}
                                        fontSize="20px"
                                        color="#6D70A6"
                                    >
                                        <i className="far fa-ellipsis-h-alt"></i>
                                    </Clickable>
                                </HeaderElement>
                            </HeaderTopRight>
                        </HeaderMain>
                    </Container>
                </HeaderTop>
                <HeaderBottom ref={fixedRef} isSticky={sticky}>
                    <Container>
                        <HeaderMain>
                            <HeaderBottomLeft>
                                {data?.menu && (
                                    <HeaderNavigation>
                                        <MainMenu
                                            menuData={data.menu}
                                            alignment="left"
                                            color={!sticky ? "light" : "dark"}
                                            space={2}
                                            vSpace={2}
                                        />
                                    </HeaderNavigation>
                                )}
                            </HeaderBottomLeft>
                            <HeaderBottomRight>
                                <HeaderForm
                                    layout={sticky && "white"}
                                    inputId="header-search-2"
                                />
                            </HeaderBottomRight>
                        </HeaderMain>
                    </Container>
                </HeaderBottom>
            </HeaderWrap>
            <OffCanvas
                scrollable={true}
                isOpen={offCanvasOpen}
                onClick={offCanvasHandler}
            >
                <OffCanvasHeader onClick={offCanvasHandler}>
                    <Logo darkLogo align={{ default: "flex-start" }} />
                </OffCanvasHeader>
                <OffCanvasBody>
                    {data?.menu && <MobileMenu menuData={data.menu} />}
                </OffCanvasBody>
            </OffCanvas>
        </Fragment>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        contact_info: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                text: PropTypes.string,
                icon: PropTypes.string,
            })
        ),
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Header;
