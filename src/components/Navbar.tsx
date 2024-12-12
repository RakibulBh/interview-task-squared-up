import { useState } from "react";
import SearchBar from "./SearchBar";

// Top navigation bar
const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    return (
        <div className="bg-[#0a091c] h-20 pl-16 pr-8 flex justify-between items-center">
            <div className="flex gap-8 items-center">
                <h1 className="text-white font-bold text-2xl">Dashboard</h1>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchState={setSearchTerm}
                />
            </div>
        </div>
    );
};

export default Navbar;
