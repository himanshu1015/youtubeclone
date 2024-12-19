import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    

    const [loading, SetLoading] = useState(false);
    const [searchResults, SetSearchResults] = useState([]);
    const [selectCategories, SetSelectCategories] = useState('New');
    const [mobileMenu, SetMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories])

    const fetchSelectedCategoryData= (query)=>{
        SetLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            SetSearchResults(contents);
            SetLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,
            SetLoading,
            searchResults,
            SetSelectCategories,
            selectCategories,
            mobileMenu,
            SetMobileMenu,

        }}>
            {props.children}
        </Context.Provider>
    )
};
