import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Logo from "@components/logo";
import Clickable from "@ui/clickable";
import { MainMenu, MobileMenu } from "@components/menu";
import Flyout, { FlyoutHeader, FlyoutBody } from "@ui/flyout";
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from "@ui/off-canvas";
import SearchForm from "@components/forms/search-form/layout-03";
import CloseButton from "@ui/close-button";
import BurgerButton from "@ui/burger-button";
import { useSticky } from "@hooks";
import {
    HeaderWrap,
    HeaderTop,
    HeaderBottom,
    FixedHeader,
    FixedHeaderHeight,
    HeaderMain,
    HeaderCol,
    HeaderNavigation,
    HeaderElement,
    HeaderInfoItem,
    StyledTopText,
} from "./style";

const Header = ({ data, transparent }) => {
    const { sticky, headerRef, fixedRef } = useSticky();
    const [flyoutOpen, setFlyoutOpen] = useState(false);
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);

    const flyoutHandler = () => {
        setFlyoutOpen((prevState) => !prevState);
    };
    const offCanvasHandler = () => {
        setOffcanvasOpen((prevState) => !prevState);
    };

    return (
        <Fragment>
            <HeaderWrap
                ref={headerRef}
                isSticky={sticky}
                $transparent={transparent}
            >
                <HeaderTop $transparent={transparent}>
                    <Container>
                        <HeaderMain top>
                            <HeaderCol left>
                                {data?.slogan && (
                                    <StyledTopText
                                        $transparent={transparent}
                                        dangerouslySetInnerHTML={{
                                            __html: data.slogan,
                                        }}
                                    />
                                )}
                            </HeaderCol>
                            <HeaderCol right>
                                {data?.contact?.phone && (
                                    <HeaderInfoItem>
                                        <Anchor
                                            path={`tel:${data.contact.phone}`}
                                        >
                                            <i className="info-icon fa fa-phone"></i>
                                            <strong>
                                                {data.contact.phone}
                                            </strong>
                                        </Anchor>
                                    </HeaderInfoItem>
                                )}
                                {data?.contact?.address && (
                                    <HeaderInfoItem>
                                        <Text>
                                            <i className="info-icon fa fa-map-marker-alt"></i>
                                            <span>{data.contact.address}</span>
                                        </Text>
                                    </HeaderInfoItem>
                                )}
                            </HeaderCol>
                        </HeaderMain>
                    </Container>
                </HeaderTop>
                <HeaderBottom ref={fixedRef} isSticky={sticky}>
                    <Container>
                        <HeaderMain>
                            <HeaderCol left>
                                <Logo
                                    py="14px"
                                    variant={
                                        transparent && !sticky
                                            ? "white"
                                            : "dark"
                                    }
                                />
                            </HeaderCol>
                            <HeaderCol right>
                                {data?.menu && (
                                    <HeaderNavigation>
                                        <MainMenu
                                            color={
                                                transparent && !sticky
                                                    ? "white"
                                                    : "dark"
                                            }
                                            alignment="right"
                                            menuData={data.menu}
                                            space={2}
                                            vSpace={2}
                                            bottomLine={false}
                                        />
                                    </HeaderNavigation>
                                )}
                                <HeaderElement pl="50px">
                                    <Clickable
                                        className="search-btn"
                                        onClick={flyoutHandler}
                                    >
                                        <i className="fa fa-search"></i>
                                    </Clickable>
                                </HeaderElement>
                                <HeaderElement
                                    pl="25px"
                                    display={["flex", null, null, null, "none"]}
                                >
                                    <BurgerButton
                                        className="burger-btn"
                                        onClick={offCanvasHandler}
                                    />
                                </HeaderElement>
                            </HeaderCol>
                        </HeaderMain>
                    </Container>
                </HeaderBottom>
            </HeaderWrap>
            <Flyout isOpen={flyoutOpen}>
                <FlyoutHeader px="15px" textAlign="right">
                    <CloseButton size="large" onClick={flyoutHandler} />
                </FlyoutHeader>
                <FlyoutBody>
                    <SearchForm />
                </FlyoutBody>
            </Flyout>
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
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        slogan: PropTypes.string,
        contact: PropTypes.shape({
            phone: PropTypes.string,
            address: PropTypes.string,
        }),
    }),
    transparent: PropTypes.bool,
};

Header.defaultProps = {
    transparent: false,
};

export default Header;
