import {Request, Response} from "express";
import path from "path";

export const GET_welcome = (req: Request, res: Response) => {
    res.json({message: "Welcome to my API"})
}

export const POST_uploadImg = (req: Request, res: Response) => {

    if (req.file === undefined) {
        res.json({
            uploaded: false,
            url: "fail uploaded :("
        });
        return
    }

    res.json({
        uploaded: true,
        url: `http://localhost:4000/img/${req.file.filename}`
    })
};

export const GET_image = (req: Request, res: Response) => {
    const file = req.params.file;

    res.sendFile(path.join(__dirname, "../../public/" + file))
}