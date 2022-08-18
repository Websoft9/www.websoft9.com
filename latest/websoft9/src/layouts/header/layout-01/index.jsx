import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { StaticQuery ,graphql } from "gatsby";
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
import Language from "@components/language";
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
    StyledNavitem,
    StyledNavlink,
    bottomLine,
} from "./style";

const Header = ({shortcutMenuData,topMenuData,transparent}) => {
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
                            {/* 顶部快捷菜单 */}
                                <HeaderCol right>
                                {
                                    shortcutMenuData.map((shortcut)=>{
                                    return (
                                        <StyledNavitem key={`submenu-${shortcut.id}`} $subitem >
                                            <StyledNavlink path={shortcut.link} $sublink $bottomLine={bottomLine}>
                                                { shortcut.title }
                                            </StyledNavlink>
                                        </StyledNavitem>
                                    );
                                    })
                                }
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
                            {/* 顶部导航主菜单 */}
                            <HeaderCol right>                              
                                <HeaderNavigation>
                                    <MainMenu
                                        color={
                                            transparent && !sticky
                                                ? "white"
                                                : "dark"
                                        }
                                        alignment="right"
                                        menuData={topMenuData}
                                        space={2}
                                        vSpace={2}
                                        bottomLine={false}
                                    />
                                </HeaderNavigation>
                                 <HeaderElement pl="50px">
                                    <Language />
                                </HeaderElement>
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
                    <MobileMenu menuData={topMenuData} />
                </OffCanvasBody>
            </OffCanvas>
        </Fragment>
    );
};

Header.defaultProps = {
    transparent: false,
};

export default Header;
