import {  createContext, useState } from "react";

 export const SearchContext=createContext()
// eslint-disable-next-line react/prop-types
export const SearchProvider = ({children}) => {
    const [SearchTerm,setSearchTerm]=useState('')
    console.log(SearchTerm);
    return (
        <SearchContext.Provider value={{SearchTerm ,setSearchTerm}}>
            {children}
            
        </SearchContext.Provider>
    );
};

