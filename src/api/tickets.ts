import axios from "axios";
import { Request, Response } from "express";
import { ServiceDeskData } from "./types";

const DATA_URL =
    "https://sampleapi.squaredup.com/integrations/v1/service-desk?datapoints=100";

export const GET = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get<ServiceDeskData>(DATA_URL);

        res.send({
            data,
        });
    } catch (e: unknown) {
        res.status(500);
        res.send(e);
    }
};
