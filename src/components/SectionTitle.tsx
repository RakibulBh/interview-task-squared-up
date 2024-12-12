import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return <h1 className="text-3xl text-white">{children}</h1>;
};

export default SectionTitle;
