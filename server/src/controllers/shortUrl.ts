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
        res.status(500).send({ message: "Server error" });
    }
};

export const getAllUrls = async (req: Request, res: Response) => {
    try {
        const urls = await shortUrl.find();
        if (urls.length === 0) {
            res.status(404).send({ message: "No urls found" });
        }
        res.status(200).send(urls);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
};

export const getUrl = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const url = await shortUrl.findOne({ shortUrl: id });
        if (!url) {
            res.status(404).send({ message: "Url not found" });
        }else{
            url.clicks++;
            await url.save();
            res.redirect(`${url.fullUrl}`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
};