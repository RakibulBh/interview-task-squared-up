import axios from "axios";
import { Request, Response } from "express";
import { ServiceDeskData } from "./types";

const DATA_URL =
    "https://sampleapi.squaredup.com/integrations/v1/service-desk?datapoints=500";

export const GET = async (req: Request, res: Response) => {
    // Using try to keep dangerous code in a safety net, this keeps the flow of application and is better for the developers when debugging and users.
    try {
        const { data } = await axios.get<ServiceDeskData>(DATA_URL);
        const count = data.results.length;
        const high = data.results.filter(
            (data) => data.priority.toLowerCase() == "high"
        );
        const normal = data.results.filter(
            (data) => data.priority.toLowerCase() == "normal"
        );
        const low = data.results.filter(
            (data) => data.priority.toLowerCase() == "low"
        );

        res.send({
            highPercentage: Math.round((high.length / count) * 100),
            normalPercentage: Math.round((normal.length / count) * 100),
            lowPercentage: Math.round((low.length / count) * 100),
        });
    } catch (e: unknown) {
        res.status(500);
        res.send(e);
    }
};
