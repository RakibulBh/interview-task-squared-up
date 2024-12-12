import React from "react";

function Row({}) {
    return (
        <div className="flex gap-8">
            <h1 className="font-bold">High:</h1>
            <p>200</p>
        </div>
    );
}

const DashboardDataView = ({ title }: { title: string }) => {
    return (
        <div className="bg-white rounded-lg p-2 space-y-4">
            <h1 className="text-blue-950 font-bold text-2xl">{title}</h1>
            <div className="flex flex-col gap-1">
                <Row />
                <Row />
                <Row />
            </div>
        </div>
    );
};

export default DashboardDataView;
