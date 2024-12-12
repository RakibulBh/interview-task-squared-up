import { useEffect, useState } from "react";
import Button from "./Button";
import DashboardDataView from "./DashboardDataView";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { DataObject, ServiceDeskData } from "api/types";
import Ticket from "./Ticket";
import SearchBar from "./SearchBar";

function TicketsContainer({ tickets }: { tickets: DataObject[] }) {
    const [filteredTickets, setFilteredTickets] = useState<DataObject[]>();
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setFilteredTickets(
            tickets.filter((ticket) =>
                ticket.organization_id.includes(searchTerm)
            )
        );
    }, [searchTerm]);

    return (
        <div className="bg-[#151424] p-4 rounded-md col-span-2 flex flex-col space-y-9">
            <div className="flex justify-between items-center">
                <SectionTitle>Issues</SectionTitle>
                <div className="flex gap-4">
                    <Button>Sort</Button>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchState={setSearchTerm}
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto max-h-80 rounded-md flex flex-col gap-2">
                {filteredTickets &&
                    filteredTickets.map((ticket) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
    );
}

const Content = () => {
    const [tickets, setTickets] = useState<DataObject[] | []>([]);

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
                <div className="justify-end h-28 grid grid-cols-4 gap-4">
                    <DashboardDataView title="Priority" />
                    <DashboardDataView title="Type" />
                    <DashboardDataView title="Status" />
                    <DashboardDataView title="Satisfaction" />
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
