import axios from "axios";
import { Request, Response } from "express";
import { ServiceDeskData } from "./types";

const DATA_URL =
    "https://sampleapi.squaredup.com/integrations/v1/service-desk?datapoints=500";

// Sends the average time (in hours) it took to close every high priority request in a sample data of 500
export const GET = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get<ServiceDeskData>(DATA_URL);

        // Filtering only data which is high priority and it is marked as solved, we do not need the rest.
        const highSolvedData = data.results.filter(
            (data) =>
                data.priority.toLowerCase() === "high" &&
                data.status.toLowerCase() === "solved"
        );

        const count = highSolvedData.length;
        console.log(count);
        let total = 0;

        let maxTime: number = Number.NEGATIVE_INFINITY;
        let scoreOfLongestTimeTakenIssue: string = "";

        highSolvedData.map((issue) => {
            // Converting string date string into Javascript Date to calculate the time difference
            const createdInMillis = new Date(issue.created);
            const updatedInMillis = new Date(issue.updated);

            const timeDifferenceInHours =
                (Number(updatedInMillis) - Number(createdInMillis)) /
                (1000 * 60 * 60);

            if (timeDifferenceInHours > maxTime) {
                maxTime = timeDifferenceInHours;
                scoreOfLongestTimeTakenIssue = issue.satisfaction_rating.score;
            }

            total += timeDifferenceInHours;
        });

        // Sends back the average time taken in hours rounded to 2 decimal points.
        res.send({
            averageTime: (total / count).toFixed(2),
            longestTimeTakenIssueRating: scoreOfLongestTimeTakenIssue,
        });
    } catch (e: unknown) {
        res.status(500);
        res.send(e);
    }
};
