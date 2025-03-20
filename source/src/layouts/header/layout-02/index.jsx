import HeaderForm from "@components/forms/search-form/layout-01";
import Language from "@components/language";
import Logo from "@components/logo";
import { MainMenu, MobileMenu } from "@components/menu";
import { useSticky } from "@hooks";
import BurgerButton from "@ui/burger-button";
import Clickable from "@ui/clickable";
import OffCanvas, { OffCanvasBody, OffCanvasHeader } from "@ui/off-canvas";
import { graphql, StaticQuery } from "gatsby";
import { useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import {
    HeaderBottom, HeaderElement, HeaderLeft, HeaderMain, HeaderMiddle, HeaderNavigation, HeaderRight,
    HeaderRightInner, HeaderWrap, StyledNavitem,
    StyledNavlink
} from "./style";

const Header = () => {
    const { language } = useI18next();

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
        <StaticQuery
            query={graphql`
          {
            zhShortCutMenu: contentfulMenu(
                type: {eq: "RightMenu"}
                node_locale: {eq: "zh-CN"}
            ) {
                submenu {
                ... on ContentfulMenu {
                    id
                    text: title
                    link
                    megamenu: submenu {
                    ... on ContentfulMenu {
                        id
                        text: title
                        submenu {
                        ... on ContentfulMenu {
                            id
                            text: title
                            link
                        }
                        }
                    }
                    }
                }
                }
            }
            enShortCutMenu: contentfulMenu(
                type: {eq: "RightMenu"}
                node_locale: {eq: "en-US"}
            ) {
                submenu {
                ... on ContentfulMenu {
                    id
                    text: title
                    link
                    megamenu: submenu {
                    ... on ContentfulMenu {
                        id
                        text: title
                        submenu {
                        ... on ContentfulMenu {
                            id
                            text: title
                            link
                        }
                        }
                    }
                    }
                }
                }
            }
            #查询顶部主菜单(中文)
            zhMainMenu: allContentfulMenu(
                filter: {node_locale: {eq: "zh-CN"}, type: {eq: "MainMenu"}}
                sort: {fields: sort, order: ASC}
            ) {
                nodes {
                id
                text: title
                link
                megamenu: submenu {
                    ... on ContentfulMenu {
                    id
                    text: title
                    submenu {
                        ... on ContentfulMenu {
                        id
                        text: title
                        link
                        }
                        ... on ContentfulProduct {
                        id
                        text: trademark
                        key
                        os
                        }
                        ... on ContentfulResource {
                        id
                        slug
                        text: title
                        }
                        ... on ContentfulBaseCatalog {
                        id
                        key
                        text:title
                        position
                        }
                        ... on ContentfulBaseBrand {
                        id
                        key
                        storeurl
                        text:name
                        }
                    }
                    }
                    ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    description {
                        description
                    }
                    image
                    buttons:link {
                        key
                        value
                    }
                    }
                }
                }
            }
            #查询顶部主菜单(英文)
            enMainMenu: allContentfulMenu(
                filter: {node_locale: {eq: "en-US"}, type: {eq: "MainMenu"}}
                sort: {fields: sort, order: ASC}
            ) {
                nodes {
                id
                text: title
                link
                megamenu: submenu {
                    ... on ContentfulMenu {
                    id
                    text: title
                    submenu {
                        ... on ContentfulMenu {
                        id
                        text: title
                        link
                        }
                        ... on ContentfulProduct {
                        id
                        text: trademark
                        key
                        os
                        }
                        ... on ContentfulResource {
                        id
                        slug
                        text: title
                        }
                        ... on ContentfulBaseCatalog {
                        id
                        key
                        text:title
                        position
                        }
                        ... on ContentfulBaseBrand {
                        id
                        key
                        storeurl
                        text:name
                        }
                    }
                    }
                    ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    description {
                        description
                    }
                    image
                    buttons:link {
                        key
                        value
                    }
                    }
                }
                }
            }
          }
        `}
            render={data => (
                <Fragment>
                    <HeaderWrap ref={headerRef}>
                        <HeaderBottom ref={fixedRef} isSticky={sticky}>
                            <HeaderMain>
                                <HeaderLeft>
                                    <Logo darkLogo />
                                </HeaderLeft>
                                <HeaderMiddle>
                                    <HeaderNavigation>
                                        <MainMenu menuData={language == "zh-CN" ? data.zhMainMenu.nodes : data.enMainMenu.nodes} color="dark" />
                                    </HeaderNavigation>
                                </HeaderMiddle>
                                <HeaderRight>
                                    <HeaderRightInner isOpen={headerInnerOpen}>
                                        <HeaderElement
                                            borderLeft={[null, null, "1px solid #eee"]}
                                            borderRight={[null, null, "1px solid #eee"]}
                                            mt={["15px", 0]}
                                        >
                                            <HeaderForm />
                                        </HeaderElement>
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
                                <HeaderRight>
                                    <HeaderRightInner>
                                        {
                                            (language == "zh-CN" ? data.zhShortCutMenu.submenu : data.enShortCutMenu.submenu).map((shortcut) => {
                                                return (
                                                    <StyledNavitem
                                                        className="nav-item"
                                                        key={`mainmenu-${shortcut.id}`}
                                                        hasSubmenu={false}
                                                        hasMegamenu={false}
                                                        $space={1}
                                                        $alignment={"center"}
                                                    >
                                                        <StyledNavlink
                                                            className="nav-link"
                                                            path={shortcut.link}
                                                            hassubmenu={false}
                                                            $color={"dark"}
                                                            $vSpace={1}
                                                            $bottomLine={true}
                                                        >
                                                            <span>{shortcut.text}</span>
                                                        </StyledNavlink>
                                                    </StyledNavitem>
                                                );
                                            })
                                        }
                                    </HeaderRightInner>
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
                            <MobileMenu menuData={language == "zh-CN" ? data.zhMainMenu.nodes.concat(data.zhShortCutMenu.submenu) : data.enMainMenu.nodes.concat(data.zhShortCutMenu.submenu)} />
                        </OffCanvasBody>
                    </OffCanvas>
                </Fragment>
            )}
        ></StaticQuery>

    );
};


Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        slogan: PropTypes.string,
    }),
};

export default Header;
