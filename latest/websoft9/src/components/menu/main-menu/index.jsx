import React from "react";
import PropTypes from "prop-types";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Line from "@ui/divider/line";
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
    const { t } = useTranslation();
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
                                <StyledMegamenu className="megamenu" >
                                    {/* todo : 二级菜单第一列显示Block */}        
                                    <li key={"megamenu-1"} >
                                        <StyledMegaTitle>   
                                            {"OVERVIEW"}
                                        </StyledMegaTitle>
                                        <Line mt="20px" mb="20px" borderWidth="1px" />
                                        <ul>
                                        <StyledNavitem key={"megasubmenu-2"}  $megitem>
                                            <StyledNavlink
                                                path={
                                                    "/"
                                                }
                                                $bottomLine={
                                                    bottomLine
                                                }
                                                $sublink
                                            >
                                                <span className="icon">
                                                    <i className="far" ></i>
                                                </span>
                                                <span > { "websoft9" } </span>
                                            </StyledNavlink>
                                        </StyledNavitem>
                                        </ul>
                                    </li>
                                    {/*  二级菜单显示 */}
                                    {megamenu.map((megaitem, i) => {
                                        const megaSubmenu = megaitem.submenu;
                                        return (
                                            <li
                                                key={`megamenu-${megaitem.id}-${i}`}
                                            >
                                                <StyledMegaTitle>   
                                                    {megaitem.text}
                                                </StyledMegaTitle>
                                                <Line mt="20px" mb="20px" borderWidth="1px" />
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
                                                                            <span className="icon">
                                                                                <i className="far" ></i>
                                                                            </span>
                                                                            <span > { megaSubitem.text }
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
