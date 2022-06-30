import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Logo from "@components/logo";
import { MainMenu, MobileMenu } from "@components/menu";
import Language from "@components/language";
import HeaderForm from "@components/forms/search-form/layout-01";
import BurgerButton from "@ui/burger-button";
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from "@ui/off-canvas";
import Clickable from "@ui/clickable";
import { useSticky } from "@hooks";
import {
    HeaderWrap,
    HeaderTop,
    HeaderBottom,
    HeaderMain,
    HeaderLeft,
    HeaderMiddle,
    HeaderRight,
    HeaderRightInner,
    HeaderNavigation,
    HeaderElement,
    StyledTopText,
} from "./style";

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
            <HeaderWrap ref={headerRef}>
                {data?.slogan && (
                    <HeaderTop borderBottom>
                        <StyledTopText
                            dangerouslySetInnerHTML={{ __html: data.slogan }}
                        />
                    </HeaderTop>
                )}

                <HeaderBottom ref={fixedRef} isSticky={sticky}>
                    <HeaderMain>
                        <HeaderLeft>
                            <Logo darkLogo />
                        </HeaderLeft>
                        <HeaderMiddle>
                            <HeaderNavigation>
                                <MainMenu menuData={data.menu} color="dark" />
                            </HeaderNavigation>
                        </HeaderMiddle>
                        <HeaderRight>
                            <HeaderRightInner isOpen={headerInnerOpen}>
                                <HeaderElement
                                    pr={[
                                        "25px",
                                        "10px",
                                        0,
                                        0,
                                        "10px",
                                        null,
                                        "25px",
                                    ]}
                                >
                                    <Language />
                                </HeaderElement>
                                <HeaderElement
                                    borderLeft={[null, null, "1px solid #eee"]}
                                    mt={["15px", 0]}
                                >
                                    <HeaderForm />
                                </HeaderElement>
                            </HeaderRightInner>
                            <HeaderElement
                                pl="20px"
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
                                    color="kimberly"
                                >
                                    <i className="far fa-ellipsis-h-alt"></i>
                                </Clickable>
                            </HeaderElement>
                        </HeaderRight>
                    </HeaderMain>
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
                    <MobileMenu menuData={data.menu} />
                </OffCanvasBody>
            </OffCanvas>
        </Fragment>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        slogan: PropTypes.string,
    }),
};

export default Header;
