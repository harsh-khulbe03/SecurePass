import express from "express";
const authRouter = express.Router();
import {generateKey, accessResource} from "../controllers/auth"

//1. Generates the token.
authRouter.get("/auth",generateKey);


//2. Accessing the resources using the token in the request body or headers or in the route definition.
authRouter.get(`/auth/home`, accessResource);

export default authRouter;