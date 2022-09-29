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
import { StaticQuery, graphql } from "gatsby"
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
    StyledNavitem,
    StyledNavlink,
    bottomLine,
    HeaderCol,
} from "./style";
import { useTranslation,useI18next} from 'gatsby-plugin-react-i18next';

const Header = () => {
    const {language, languages, changeLanguage } = useI18next();

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
            #查询顶部快捷菜单(中文)
            zhShortCutMenu: allContentfulMenu(
              filter: {type: {eq: "TopMenu"}, node_locale: {eq: "zh-CN"}}
            ) {
              nodes {
                id
                title
                link
              }
            }
            #查询顶部快捷菜单(英文)
            enShortCutMenu: allContentfulMenu(
              filter: {type: {eq: "TopMenu"}, node_locale: {eq: "en-US"}}
            ) {
              nodes {
                id
                title
                link
              }
            }
            #查询顶部主菜单(中文)
            zhMainMenu: allContentfulMenu(
                filter: {node_locale: {eq: "zh-CN"}, type: {eq: "MainMenu"}}
                sort: {fields: title}
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
                        logo {
                            imageurl
                        }
                        }
                        ... on ContentfulResource {
                        id
                        slug
                        text: title
                        }
                    }
                    }
                    ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
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
                sort: {fields: title}
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
                        logo {
                            imageurl
                        }
                        }
                        ... on ContentfulResource {
                        id
                        slug
                        text: title
                        }
                    }
                    }
                    ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
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
                                    {
                                        (language == "zh-CN" ? data.zhShortCutMenu.nodes : data.enShortCutMenu.nodes).map((shortcut)=>{
                                        return (
                                            <HeaderElement key={`submenu-${shortcut.id}`}
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
                                                <StyledNavlink  path={shortcut.link} $sublink $bottomLine={bottomLine}>
                                                    { shortcut.title }
                                                </StyledNavlink>
                                            </HeaderElement>
                                        );
                                        })
                                    }
                                
                              
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
                    <MobileMenu menuData={language == "zh-CN" ? data.zhMainMenu.nodes : data.enMainMenu.nodes} />
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
