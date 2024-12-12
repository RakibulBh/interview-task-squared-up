import React from "react";

const SectionTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <h1 className={`text-3xl text-white ${className}`}>{children}</h1>;
};

export default SectionTitle;
