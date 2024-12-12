import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
    return (
        <div className="rounded-xl bg-gray-100 p-2 gap-2 flex items-center w-64">
            <Search />
            <input
                placeholder="search"
                className="bg-transparent focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
