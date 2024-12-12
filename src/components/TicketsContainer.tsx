import { DataObject } from "api/types";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import SearchBar from "./SearchBar";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { sortAsc, sortDesc } from "utils";
import { SortAsc, SortDesc } from "lucide-react";

export function TicketsContainer({ tickets }: { tickets: DataObject[] }) {
    const [filteredTickets, setFilteredTickets] =
        useState<DataObject[]>(tickets);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sorted, setSorted] = useState<boolean>(true);
    const [filtered, setFiltered] = useState(false);

    // Search feature, filters tickets real time depending on the search term.
    useEffect(() => {
        const filtered = tickets.filter((ticket) =>
            ticket.organization_id
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredTickets(filtered);
    }, [searchTerm, tickets]);

    // Sort function to sort the tickets asc and desc
    const onSort = () => {
        const sortedTickets = [...filteredTickets].sort(
            sorted ? sortAsc : sortDesc
        );
        setFilteredTickets(sortedTickets);
        setSorted(!sorted);
    };

    // Filters only the tickets that are high priority and are open
    const filterOpenAndHigh = () => {
        const newFilteredTickets = !filtered
            ? tickets.filter(
                  (ticket) =>
                      ticket.priority === "high" && ticket.status === "open"
              )
            : tickets;

        setFilteredTickets(newFilteredTickets);
        setFiltered(!filtered);
    };

    return (
        <div className="bg-[#151424] p-4 rounded-md col-span-2 flex flex-col space-y-9">
            <div className="flex justify-between items-center">
                <SectionTitle>Issues</SectionTitle>
                <div className="flex gap-4">
                    <Button onClick={filterOpenAndHigh}>
                        {!filtered ? "Filter" : "Reset filter"}
                    </Button>
                    <Button onClick={onSort}>
                        {sorted ? <SortAsc /> : <SortDesc />}
                        {sorted ? "Low" : "High"}
                    </Button>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchState={setSearchTerm}
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto max-h-80 rounded-md flex flex-col gap-2">
                {filteredTickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}
