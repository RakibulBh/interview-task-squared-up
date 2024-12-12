import React from "react";

const Button = ({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <button
            onClick={onClick ? onClick : () => null}
            className="bg-[#2A2836] hover:bg-opacity-55 transition-all ease-in-out px-4 py-2 rounded-lg text-white"
        >
            {children}
        </button>
    );
};

export default Button;
