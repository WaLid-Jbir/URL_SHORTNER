import { Request, Response } from "express";
import shortUrl from "../models/shortUrl";

export const createUrl = async (req: Request, res: Response) => {
    try {
        const { fullUrl } = req.body;
        const urlFound = await shortUrl.findOne({ fullUrl });
        if (urlFound) {
            res.status(409).send(urlFound);
        }
        else {
            const newUrl = await shortUrl.create({ fullUrl });
            res.status(201).send(newUrl);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};