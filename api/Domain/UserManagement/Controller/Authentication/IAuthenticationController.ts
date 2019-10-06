import { Request, Response } from "express";

export interface IAuthenticationController {
    registerUser(request: Request, response: Response): Promise<Response>;
}

export default IAuthenticationController;
