import React, { useEffect } from "react";
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
    let filteredData: DataObject[] = [];

    useEffect(() => {
        switch (category) {
            case "priority":
                filteredData = tickets.filter(
                    (ticket) => ticket.priority === name
                );
                break;
            case "type":
                filteredData = tickets.filter((ticket) => ticket.type === name);
                break;
            case "stauts":
                filteredData = tickets.filter(
                    (ticket) => ticket.status === name
                );
                break;
            case "satisfaction":
                filteredData = tickets.filter(
                    (ticket) => ticket.status === name
                );
                break;
        }
    }, []);

    return (
        <div className="w-full flex gap-8 text-gray-400 justify-between items-center">
            <h1 className="font-bold capitalize">{name}:</h1>
            <div className="py-[2px] px-4 rounded-lg bg-gray-100">
                <p>{filteredData ? filteredData.length : "N/A"}</p>
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
