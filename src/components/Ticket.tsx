import { DataObject } from "api/types";
import { Info, Star, TriangleAlert } from "lucide-react";

const Ticket = ({ ticket }: { ticket: DataObject }) => {
    return (
        <div className="bg-white rounded-lg px-4 py-3 flex justify-between items-center">
            <div className="flex gap-2">
                <h1 className="text-gray-800">{ticket.id}.</h1>
                <p>{ticket.organization_id}</p>
            </div>
            <div className="flex w-64 items-center gap-2">
                <div className="grid grid-cols-3 gap-2">
                    <div
                        className={`${
                            (ticket.priority === "high" &&
                                "bg-red-200 text-red-700") ||
                            (ticket.priority === "normal" &&
                                "bg-orange-200 text-orange-700") ||
                            (ticket.priority === "low" &&
                                "bg-green-200 text-green-700")
                        } px-3 py-1 rounded-md text-sm flex items-center justify-center gap-2`}
                    >
                        <TriangleAlert size={16} />
                        <p>{ticket.priority}</p>
                    </div>
                    <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center justify-center gap-2 capitalize">
                        <Info size={16} />
                        <p>{ticket.type}</p>
                    </div>
                    <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center justify-center gap-2 capitalize">
                        <Star size={16} />
                        <p>{ticket.satisfaction_rating.score}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
