import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="bg-[#2A2836] px-4 py-2 rounded-lg text-white">
            {children}
        </button>
    );
};

export default Button;
