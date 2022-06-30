import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Dropdown from "@ui/dropdown";
import DropdownItem from "@ui/dropdown/dropdown-item";
import DropdownItemInner from "@ui/dropdown/dropdown-item-inner";
import DropdownSubMenu from "@ui/dropdown/dropdown-submenu";
import enFlag from "@assets/images/flags/en.png";
import frFlag from "@assets/images/flags/fr.png";
import deFlag from "@assets/images/flags/de.png";
import { LanguageWrap } from "./style";

const Language = ({ className, ...props }) => {
    const [language, setLanguage] = useState([
        {
            id: 1,
            flag: enFlag,
            name: "English",
            isActive: true,
        },
        {
            id: 2,
            flag: frFlag,
            name: "Français",
            isActive: false,
        },
        {
            id: 3,
            flag: deFlag,
            name: "Deutsch",
            isActive: false,
        },
    ]);

    let activeLanguage = language.filter((el) => {
        return el.isActive;
    });

    let inActiveLanguage = language.filter((el) => {
        return !el.isActive;
    });

    const onClickHandler = (id) => {
        const copiedState = [...language];
        const languageArr = copiedState.map((lang) => {
            if (lang.id !== id) {
                return {
                    ...lang,
                    isActive: false,
                };
            }
            return {
                ...lang,
                isActive: true,
            };
        });
        setLanguage(languageArr);
    };

    return (
        <LanguageWrap className={cn(className, "lang-switcher")} {...props}>
            <Dropdown>
                <DropdownItem active>
                    <DropdownItemInner active>
                        <img
                            src={activeLanguage[0].flag}
                            alt={activeLanguage[0].name}
                        />
                        <span>{activeLanguage[0].name}</span>
                    </DropdownItemInner>
                    <DropdownSubMenu>
                        {inActiveLanguage.map((lang) => {
                            const { id, name, flag } = lang;
                            return (
                                <DropdownItem
                                    key={id}
                                    onClick={() => onClickHandler(id)}
                                >
                                    <DropdownItemInner>
                                        <img src={flag} alt={name} />
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
