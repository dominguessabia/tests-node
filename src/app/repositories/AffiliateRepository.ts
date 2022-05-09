import database from "../../db";
import { Request, Response } from "express";
import Affiliate from "../models/Affiliate";


class AffiliateRepository {

    public constructor()
    {
        try {
            database.authenticate();
            console.log('A conexão estabelecida!');
        } catch (error) {
            console.error('Falha na conexão:', error);
        }
    }

    public async getAll()
    {
        await database.sync();

        const affiliates = await Affiliate.findAll();        

        return affiliates;
    }
    
    public async create(req: Request)
    {
        return await Affiliate.create(
            {
                cpf: req.body.cpf,
                name: req.body.name,
                email: req.body.email,
                telefone: req.body.telefone,
                como_soube: req.body.como_soube
            }
        ).then((e) => {
            console.log(e);
            return {
                "message": "Registro feito!"
            };

        }).catch((e) => {
            console.log(e);
            return {
                "message": "Houve uma falha, verifique com administrador!"
            };
        });
    }
}

export default new AffiliateRepository;
