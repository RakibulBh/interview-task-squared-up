import React from "react";
import SectionTitle from "./SectionTitle";
import DashboardDataView from "./DashboardDataView";
import { DataObject } from "api/types";

const DataOverview = ({ tickets }: { tickets: DataObject[] }) => {
    return (
        <div className="w-full h-64 p-4 bg-[#141423] rounded-xl flex flex-col space-y-8">
            <SectionTitle>Data Overview</SectionTitle>
            <div className="grid grid-cols-4 gap-4">
                <DashboardDataView
                    tickets={tickets}
                    options={["high", "normal", "low"]}
                    title="Priority"
                />
                <DashboardDataView
                    tickets={tickets}
                    options={["question", "task", "problem"]}
                    title="Type"
                />
                <DashboardDataView
                    tickets={tickets}
                    options={["open", "solved", "pending"]}
                    title="Status"
                />
                <DashboardDataView
                    tickets={tickets}
                    options={["good", "bad"]}
                    title="Satisfaction"
                />
            </div>
        </div>
    );
};

export default DataOverview;
