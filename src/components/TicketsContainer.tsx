import { DataObject } from "api/types";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import SearchBar from "./SearchBar";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { sortAsc, sortDesc } from "utils";

export function TicketsContainer({ tickets }: { tickets: DataObject[] }) {
    const [filteredTickets, setFilteredTickets] =
        useState<DataObject[]>(tickets);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sorted, setSorted] = useState<boolean>(true);

    useEffect(() => {
        const filtered = tickets.filter((ticket) =>
            ticket.organization_id
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredTickets(filtered);
    }, [searchTerm, tickets]);

    const onSort = () => {
        if (sorted) {
            const sortedTickets = filteredTickets?.sort(sortAsc);

            setSorted(!sorted);
            return;
        }

        filteredTickets?.sort(sortDesc);
        setSorted(!sorted);
    };

    return (
        <div className="bg-[#151424] p-4 rounded-md col-span-2 flex flex-col space-y-9">
            <div className="flex justify-between items-center">
                <SectionTitle>Issues</SectionTitle>
                <div className="flex gap-4">
                    <Button onClick={onSort}>Sort by priority</Button>
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
