import Button from "@ui/button";
import Line from "@ui/divider/line";
import Image from "@ui/image";
import Text from "@ui/text";
import { Col, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";
import React from "react";
import {
    HeroTextBox, MarkdownStyle, StyledMainMenu, StyledMegamenu,
    StyledMegaTitle, StyledNavbar,
    StyledNavitem,
    StyledNavlink, StyledSubtitle
} from "./style";
// import { Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

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
                            
                            {megamenu && (
                                <StyledMegamenu className="megamenu" >
                                    {/* todo : 二级菜单第一列显示Feature */}      
                                    <li key={"megamenu-1"+megamenu[0].id} >
                                        <Row>
                                            <Col>
                                                <Image src={megamenu[0].image} alt=""/>
                                            </Col>
                                            <Col>
                                            <HeroTextBox>
                                                    <StyledSubtitle as="h5">
                                                        {megamenu[0].title}
                                                    </StyledSubtitle>

                                                    <Text>{megamenu[0].subtitle}</Text>

                                                    <MarkdownStyle>
                                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                            {megamenu[0]?.description?.description}
                                                        </ReactMarkdown>
                                                    </MarkdownStyle>

                                                    <Button key={megamenu[0].id}  m="10px 10px 10px 0px" size="small" path={megamenu[0].buttons[0].value}>
                                                        {megamenu[0].buttons[0].key}
                                                    </Button>
                                            </HeroTextBox>
                                            </Col>
                                        </Row>
                                     </li>
                                    {/*  二级菜单显示 */}
                                    {megamenu.slice(1).map((megaitem, i) => {
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
                                                                        key={`megasubmenu-${i}-${j}`}
                                                                        $megitem
                                                                    >
                                                                        <StyledNavlink
                                                                            path={path}
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
