import React from "react";
import PropTypes from "prop-types";
import {
    StyledMainMenu,
    StyledNavbar,
    StyledNavitem,
    StyledNavlink,
    StyledSubmenu,
    StyledMegamenu,
    StyledMegaTitle,
} from "./style";

const MainMenu = ({
    menuData,
    color,
    space,
    vSpace,
    bottomLine,
    alignment,
    ...props
}) => {
    return (
        <StyledMainMenu $alignment={alignment} {...props}>
            <StyledNavbar>
                {menuData?.map((menu) => {
                    const submenu = menu.submenu ? menu.submenu : null;
                    const megamenu = menu.megamenu ? menu.megamenu : null;
                    return (
                        <StyledNavitem
                            className="nav-item"
                            key={`mainmenu-${menu.id}`}
                            hasSubmenu={submenu}
                            hasMegamenu={megamenu}
                            $space={space}
                            $alignment={alignment}
                        >
                            <StyledNavlink
                                className="nav-link"
                                path={menu.link}
                                hassubmenu={
                                    submenu || megamenu ? "true" : "false"
                                }
                                $color={color}
                                $vSpace={vSpace}
                                $bottomLine={bottomLine}
                            >
                                <span>{menu.text}</span>
                                {(submenu || megamenu) && (
                                    <i className="icon fa fa-angle-down"></i>
                                )}
                            </StyledNavlink>
                            {submenu && (
                                <StyledSubmenu className="submenu">
                                    {submenu.map((subitem, i) => {
                                        const hasSubmenuLevelTwo =
                                            subitem.isSubmenu;
                                        const submenuLevelTwo = subitem.submenu;
                                        return (
                                            <StyledNavitem
                                                className="nav-item"
                                                key={`submenu-${menu.id}-${i}`}
                                                $subitem
                                            >
                                                <StyledNavlink
                                                    className="nav-link"
                                                    path={subitem.link}
                                                    $bottomLine={bottomLine}
                                                    $sublink
                                                >
                                                    <span>{subitem.text}</span>
                                                    {hasSubmenuLevelTwo && (
                                                        <i className="icon fa fa-angle-down"></i>
                                                    )}
                                                </StyledNavlink>
                                                {submenuLevelTwo && (
                                                    <StyledSubmenu>
                                                        {submenuLevelTwo.map(
                                                            (
                                                                subitemLevelTwo,
                                                                j
                                                            ) => {
                                                                return (
                                                                    <StyledNavitem
                                                                        key={`submenu-${menu.id}-${i}-${j}`}
                                                                        $subitem
                                                                    >
                                                                        <StyledNavlink
                                                                            path={
                                                                                subitemLevelTwo.link
                                                                            }
                                                                            $sublink
                                                                            $bottomLine={
                                                                                bottomLine
                                                                            }
                                                                        >
                                                                            {
                                                                                subitemLevelTwo.text
                                                                            }
                                                                        </StyledNavlink>
                                                                    </StyledNavitem>
                                                                );
                                                            }
                                                        )}
                                                    </StyledSubmenu>
                                                )}
                                            </StyledNavitem>
                                        );
                                    })}
                                </StyledSubmenu>
                            )}
                            {megamenu && (
                                <StyledMegamenu className="megamenu">
                                    {megamenu.map((megaitem, i) => {
                                        const megaSubmenu = megaitem.submenu;
                                        return (
                                            <li
                                                key={`megamenu-${menu.id}-${i}`}
                                            >
                                                <StyledMegaTitle>
                                                    {megaitem.title}
                                                </StyledMegaTitle>
                                                {megaSubmenu && (
                                                    <ul>
                                                        {megaSubmenu.map(
                                                            (
                                                                megaSubitem,
                                                                j
                                                            ) => {
                                                                return (
                                                                    <StyledNavitem
                                                                        key={`megasubmenu-${i}-${j}`}
                                                                        $megitem
                                                                    >
                                                                        <StyledNavlink
                                                                            path={
                                                                                megaSubitem.link
                                                                            }
                                                                            $bottomLine={
                                                                                bottomLine
                                                                            }
                                                                            $sublink
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    megaSubitem.text
                                                                                }
                                                                            </span>
                                                                        </StyledNavlink>
                                                                    </StyledNavitem>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </StyledMegamenu>
                            )}
                        </StyledNavitem>
                    );
                })}
            </StyledNavbar>
        </StyledMainMenu>
    );
};

MainMenu.propTypes = {
    alignment: PropTypes.oneOf(["left", "center", "right"]),
    menuData: PropTypes.arrayOf(PropTypes.shape({})),
    color: PropTypes.oneOf(["light", "white", "dark"]),
    space: PropTypes.oneOf([1, 2]),
    vSpace: PropTypes.oneOf([1, 2]),
    bottomLine: PropTypes.bool,
};

MainMenu.defaultProps = {
    alignment: "center",
    color: "dark",
    space: 1,
    vSpace: 1,
    bottomLine: true,
};

export default MainMenu;
