import { useEffect, useState } from "react";
import DashboardDataView from "./DashboardDataView";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { DataObject, ServiceDeskData } from "api/types";
import { TicketsContainer } from "./TicketsContainer";

const Content = () => {
    const [tickets, setTickets] = useState<DataObject[] | []>([]);

    // Fetch the tickets on load
    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            const { data: fetchedTicked } = await axios.get<ServiceDeskData>(
                "/api/tickets"
            );

            if (mounted) {
                setTickets(fetchedTicked.data.results);
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="flex-1 p-8 flex flex-col gap-8">
            {/* Main */}
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
            <div className="flex-1">
                <div className="h-full grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-8">
                    <TicketsContainer tickets={tickets} />
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                    <div className="bg-[#151424] p-4 rounded-md min-h-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Content;
