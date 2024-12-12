import { useEffect, useState } from "react";
import axios from "axios";
import { DataObject, ServiceDeskData } from "api/types";
import { TicketsContainer } from "./TicketsContainer";
import DataOverview from "./DataOverview";
import ChartsContainer from "./ChartsContainer";

const Content = () => {
    const [tickets, setTickets] = useState<DataObject[] | []>([]);
    const [chartData, setChartData] = useState({});

    // Fetch the tickets on load
    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            const { data: fetchedTicked } = await axios.get<ServiceDeskData>(
                "/api/tickets"
            );

            if (mounted) {
                const results = fetchedTicked.data.results;
                setTickets(results);

                // Setting up the data for the chart and categorizzing by priority
                setChartData({
                    high: results.filter(
                        (result: DataObject) => result.priority === "high"
                    ).length,
                    normal: results.filter(
                        (result: DataObject) => result.priority === "normal"
                    ).length,
                    low: results.filter(
                        (result: DataObject) => result.priority === "low"
                    ).length,
                });
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="flex-1 p-8 flex flex-col gap-8">
            <DataOverview tickets={tickets} />
            <div className="flex-1">
                <div className="h-full grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-8">
                    <TicketsContainer tickets={tickets} />
                    <ChartsContainer chartData={chartData} />
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Content;
