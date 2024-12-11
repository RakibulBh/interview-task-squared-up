import axios from "axios";
import { Request, Response } from "express";
import { ServiceDeskData } from "./types";

const DATA_URL =
    "https://sampleapi.squaredup.com/integrations/v1/service-desk?datapoints=500";

export const GET = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get<ServiceDeskData>(DATA_URL);
        const count = data.results.length;
        const problems = data.results.filter(
            (data) => data.type.toLowerCase() == "problem"
        );
        const questions = data.results.filter(
            (data) => data.type.toLowerCase() == "question"
        );
        const issues = data.results.filter(
            (data) => data.type.toLowerCase() == "task"
        );

        res.send({
            problemsPercentage: Math.round((problems.length / count) * 100),
            questionsPercentage: Math.round((questions.length / count) * 100),
            issuesPercentage: Math.round((issues.length / count) * 100),
        });
    } catch (e: unknown) {
        res.status(500);
        res.send(e);
    }
};
