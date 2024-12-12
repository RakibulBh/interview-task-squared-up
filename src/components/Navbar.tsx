import { Search } from "lucide-react";
import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <div className="h-20 pl-16 pr-8 flex justify-between items-center">
            <div className="flex gap-8 items-center">
                <h1 className="text-white font-bold text-2xl">Dashboard</h1>
                <SearchBar />
            </div>
        </div>
    );
};

export default Navbar;