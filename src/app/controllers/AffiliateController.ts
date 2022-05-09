import { Request, Response } from "express";
import AffiliateRepository from "../repositories/AffiliateRepository";

class AffiliateController {

    public async index(req: Request, res: Response):Promise<Response> 
    {
        const affiliates = await AffiliateRepository.getAll();        
        return res.json(affiliates);
    }

    public async create(req: Request, res: Response):Promise<Response> 
    {
        const lead = await AffiliateRepository.create(req);
        return res.json(lead);
    }
}

export default new AffiliateController()
