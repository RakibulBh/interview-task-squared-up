import React from "react";
import SectionTitle from "./SectionTitle";
import Chart, { ChartProps } from "./PieChart";

const ChartsContainer = ({ chartData }: { chartData: ChartProps }) => {
    return (
        <div className="bg-[#151424] p-4 rounded-md min-h-0 flex flex-col">
            <SectionTitle>Issues Chart</SectionTitle>
            <div className="flex-1">
                <Chart data={chartData} />
            </div>
        </div>
    );
};

export default ChartsContainer;
