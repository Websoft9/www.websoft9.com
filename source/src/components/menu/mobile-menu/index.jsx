import PropTypes from "prop-types";
import React from "react";
// import NavBar, {
//     NavItem,
//     NavLink,
//     Submenu,
//     Megamenu,
//     ExpandButton,
// } from "@ui/navbar";
// import Heading from "@ui/heading";
import { getClosest, getSiblings } from "@utils";
import {
    StyledButton, StyledMegamenu,
    StyledMegatitle, StyledMobileMenu,
    StyledNavbar,
    StyledNavitem,
    StyledNavlink, StyledSubmenu
} from "./style";

const MobileMenu = ({ menuData }) => {
    const removeClassFromChildren = (parent) => {
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].tagName === "UL") {
                let child = parent.children[i].children;
                for (let j = 0; j < child.length; j++) {
                    child[j].classList.remove("submenu-open");
                }
            }
        }
    };

    const onClickHandler = (e, selector) => {
        const target = e.target;
        const parentEl = target.parentElement;
        if (
            parentEl.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            let element = target.classList.contains("icon") ? parentEl : target;
            const parent = getClosest(element, selector);
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                sibling.classList.remove("submenu-open");
                removeClassFromChildren(sibling);
            });
            removeClassFromChildren(parent);
            parent.classList.toggle("submenu-open");
        }
    };

    return (
        <StyledMobileMenu>
            <StyledNavbar>
                {menuData.map((menu, i) => {
                    const submenu = menu.submenu ? menu.submenu : null;
                    const megamenu = menu.megamenu ? menu.megamenu : null;
                    const menuIndex = i;
                    return (
                        <StyledNavitem
                            key={`mainmenu-${menu.id}`}
                            hasSubmenu={submenu}
                            hasMegamenu={megamenu}
                            className="menu-item"
                            id={`menu-item-${menuIndex}`}
                        >
                            <StyledNavlink path={menu.link}>
                                {menu.text}
                            </StyledNavlink>
                            {(submenu || megamenu) && (
                                <StyledButton
                                    className="menu-expand"
                                    onClick={(e) =>
                                        onClickHandler(
                                            e,
                                            `#menu-item-${menuIndex}`
                                        )
                                    }
                                >
                                    <i className="icon fa fa-angle-down"></i>
                                </StyledButton>
                            )}
                            
                            {megamenu && (
                                <StyledMegamenu className="megamenu">
                                    {megamenu.slice(1).map((megaitem, i) => {
                                        const megaSubmenu = megaitem.submenu;
                                        const megaIndex = i;
                                        return (
                                            <StyledNavitem
                                                key={`megamenu-${menu.id}-${megaIndex}`}
                                                id={`megamenu-${menu.id}-${megaIndex}`}
                                                $inSubmenu={true}
                                            >
                                                <StyledMegatitle>
                                                    <span>
                                                        {megaitem.text}
                                                    </span>
                                                    <StyledButton
                                                        className="menu-expand"
                                                        $inSubmenu={true}
                                                        onClick={(e) =>
                                                            onClickHandler(
                                                                e,
                                                                `#megamenu-${menu.id}-${megaIndex}`
                                                            )
                                                        }
                                                    >
                                                        <i className="icon fa fa-angle-down"></i>
                                                    </StyledButton>
                                                </StyledMegatitle>
                                                {megaSubmenu && (
                                                    <StyledSubmenu className="submenu">
                                                        {megaSubmenu.map(
                                                            (
                                                                megaSubitem,
                                                                i
                                                            ) => {
                                                                var path = "/";                                                                                                                           
                                                                if(megaSubitem.os !== undefined ){
                                                                    path = "/apps/product/"+megaSubitem.key
                                                                }
                                                                else if(megaSubitem.slug !== undefined){
                                                                    path = "/solution/"+megaSubitem.slug;
                                                                }
                                                                else if(megaSubitem.position !== undefined){
                                                                    path = "/services#"+megaSubitem.key;
                                                                }
                                                                else{
                                                                    path = megaSubitem.link;
                                                                }
                                                                return (
                                                                    <StyledNavitem
                                                                        key={`megasubmenu-${megaIndex}-${i}`}
                                                                        $inSubmenu={
                                                                            true
                                                                        }
                                                                    >
                                                                        <StyledNavlink
                                                                            $inSubmenu={
                                                                                true
                                                                            }
                                                                            path={
                                                                                path
                                                                            }
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
                                                    </StyledSubmenu>
                                                )}
                                            </StyledNavitem>
                                        );
                                    })}
                                </StyledMegamenu>
                            )}
                        </StyledNavitem>
                    );
                })}
            </StyledNavbar>
        </StyledMobileMenu>
    );
};

MobileMenu.propTypes = {
    menuData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MobileMenu;
