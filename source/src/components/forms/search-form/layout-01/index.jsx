import Button from "@ui/button";
import React, { useState } from "react";
import { ButtonWrap, HeaderFormWrap, StyledInput } from "./style";

const HeaderForm = () => {
    const [value, setValue] = useState();
    const handleInput = (e) => setValue(e.target.value);

    const handlSubmit = (e) => {
         e.preventDefault();

        // const query = value
        //     .toLowerCase()
        //     .trim()
        //     .replace(/[^\w ]/g, "");
        // // .replace(/\&+/g, '-')

        // navigate(`/search?query=${query}`, { state: { query } });
    };

    return (
        <HeaderFormWrap>
            <form onSubmit={handlSubmit}>
                <StyledInput
                    onChange={handleInput}
                    type="text"
                    id="header-serarch"
                    name="serach"
                    placeholder="Search..."
                    customStyle="nofocus"
                />
                <ButtonWrap>
                    <Button
                        type="submit"
                        color="dark"
                        disableHover={true}
                        variant="texted"
                        size="large"
                        title="Search"
                    >
                        <i className="fa fa-search"></i>
                    </Button>
                </ButtonWrap>
            </form>
        </HeaderFormWrap>
    );
};

export default HeaderForm;
