import { Search } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

// Re useable search bar component
const SearchBar = ({
    searchTerm,
    setSearchState,
}: {
    searchTerm: string;
    setSearchState: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <div className="rounded-xl bg-[#2A2836] p-2 gap-2 flex items-center w-64 text-white">
            <Search />
            <input
                placeholder="search"
                value={searchTerm}
                onChange={(e) => setSearchState(e.target.value)}
                className="bg-transparent focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
