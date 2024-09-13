import { Outlet } from "react-router-dom";

import Footer from "../StickyComponents/Footer";
import Navbar from "../StickyComponents/NAvbar";
import { SearchProvider } from "../Hook/SearchContext";


const Root = () => {
    return (
        <SearchProvider>
            <div className="dark:bg-gray-800 ">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
        </SearchProvider>
    );
};

export default Root;