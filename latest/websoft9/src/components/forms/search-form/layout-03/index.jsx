import React, { useState } from "react";
import { navigate } from "gatsby";
import { SearchFromWrap } from "./style";

const SearchForm = () => {
    const [value, setValue] = useState();
    const handleInput = (e) => setValue(e.target.value);

    const handlSubmit = (e) => {
        e.preventDefault();

        const query = value
            .toLowerCase()
            .trim()
            .replace(/[^\w ]/g, "");
        // .replace(/\&+/g, '-')

        navigate(`/search?query=${query}`, { state: { query } });
    };
    return (
        <SearchFromWrap>
            <form onSubmit={handlSubmit}>
                <input
                    onChange={handleInput}
                    type="text"
                    name="header-search"
                    id="header-search"
                    placeholder="Search"
                />
            </form>
        </SearchFromWrap>
    );
};

export default SearchForm;
