import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Dropdown from "@ui/dropdown";
import DropdownItem from "@ui/dropdown/dropdown-item";
import DropdownItemInner from "@ui/dropdown/dropdown-item-inner";
import DropdownSubMenu from "@ui/dropdown/dropdown-submenu";
import { LanguageWrap } from "./style";
import {useI18next} from 'gatsby-plugin-react-i18next';

const Language = ({ className, ...props }) => {
    const { defaultLanguage,language,changeLanguage } = useI18next();

    const [langs, setLanguage] = useState([
        {
            id: "en-US",
            name: "English",
            isActive: language=="en-US"?true:false,
        },
        {
            id: "zh-CN",
            name: "简体中文",
            isActive: language=="zh-CN"?true:false,
        }
    ]);

    let activeLanguage = langs.filter((el) => {
        return el.isActive;
    });

    let inActiveLanguage = langs.filter((el) => {
        return !el.isActive;
    });

    const onClickHandler = (id) => {
        const copiedState = [...langs];
        const languageArr = copiedState.map((lang) => {
            if(lang.id === id){
                return {
                    ...lang,
                    isActive:true,
                }
            }
            return {
                ...lang,
                isActive: false,
            };
        });
        setLanguage(languageArr);
        changeLanguage(id);
    };

    return (
        <LanguageWrap className={cn(className, "lang-switcher")} {...props}>
            <Dropdown>
                <DropdownItem active>
                    <DropdownItemInner active>
                        <span>{activeLanguage[0].name}</span>
                    </DropdownItemInner>
                    <DropdownSubMenu>
                        {inActiveLanguage.map((lang) => {
                            const { id, name } = lang;
                            return (
                                <DropdownItem
                                    key={id}
                                    onClick={() => onClickHandler(id)}
                                >
                                    <DropdownItemInner>
                                        <span>{name}</span>
                                    </DropdownItemInner>
                                </DropdownItem>
                            );
                        })}
                    </DropdownSubMenu>
                </DropdownItem>
            </Dropdown>
        </LanguageWrap>
    );
};

Language.propTypes = {
    className: PropTypes.string,
};

export default Language;
