import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { DataObject } from "api/types";

function Row({
    tickets,
    name,
    category,
}: {
    tickets: DataObject[];
    name: string;
    category: string;
}) {
    const [length, setLength] = useState(0);

    // Filters the tickets to get only relevant data
    useEffect(() => {
        let filteredData = [];
        switch (category) {
            case "Priority":
                filteredData = tickets.filter(
                    (ticket) => ticket.priority === name
                );
                break;
            case "Type":
                filteredData = tickets.filter((ticket) => ticket.type === name);
                break;
            case "Status":
                filteredData = tickets.filter(
                    (ticket) => ticket.status === name
                );
                break;
            case "Satisfaction":
                filteredData = tickets.filter(
                    (ticket) => ticket.satisfaction_rating.score === name
                );
                break;
        }
        setLength(filteredData?.length);
    }, [tickets, name, category]);

    return (
        <div className="w-full flex gap-8 text-gray-400 justify-between items-center">
            <h1 className="font-bold capitalize">{name}:</h1>
            <div className="py-[2px] px-4 rounded-lg border-2 border-gray-100">
                <p>{length ? length : "N/A"}</p>
            </div>
        </div>
    );
}

const DashboardDataView = ({
    title,
    options,
    tickets,
}: {
    title: string;
    options: string[];
    tickets: DataObject[];
}) => {
    return (
        <div className="bg-[#2A2836] rounded-lg p-2 space-y-4">
            <SectionTitle className={"text-xl underline underline-offset-4"}>
                {title}
            </SectionTitle>
            <div className="flex flex-col gap-2">
                {options.map((option, i) => (
                    <Row
                        key={i}
                        category={title}
                        name={option}
                        tickets={tickets}
                    />
                ))}
            </div>
        </div>
    );
};

export default DashboardDataView;
