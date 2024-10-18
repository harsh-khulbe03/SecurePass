import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
const obj = {
    key: ""
}

export function generateKey(req:Request,res:Response) {
    const key = uuidv4();
    obj.key = key;
    return res.status(201).json({
        message:"Key generated successfully.",
        key,
    });

}

export function accessResource(req:Request,res:Response) {
    let auth = req.headers.authorization;
    let authKey = auth?.split(" ")[1];
    if(auth && authKey) {
        if(obj.key !== authKey) {
            return res.status(400).json({
                message:"Wrong key entered",
            })
        }
        res.status(200).json({
            message: "We are at Homepage"
        })
    } else {
        return res.status(404).json({
            message: "No key found in the authorization header",
        })
    }
}
