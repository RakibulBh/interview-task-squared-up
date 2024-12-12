import { Search } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const SearchBar = ({
    searchTerm,
    setSearchState,
}: {
    searchTerm: string;
    setSearchState: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <div className="rounded-xl bg-gray-100 p-2 gap-2 flex items-center w-64">
            <Search />
            <input
                placeholder="search"
                onChange={(e) => setSearchState(e.target.value)}
                className="bg-transparent focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
