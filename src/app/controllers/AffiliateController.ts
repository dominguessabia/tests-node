import { Request, Response } from "express";
import { findAllStudents, checkIsStudentByCpf, registerStudent } from "../services/AffiliateService";

class AffiliateController {

    public async index(req: Request, res: Response):Promise<Response> 
    {
        let students = await findAllStudents();
        return res.json(students);
    }

    public async verifyPerson(req: Request, res: Response):Promise<Response> 
    {
        let status = await checkIsStudentByCpf(req.body.cpf);
        return res.json({
            active: status
        });
    }

    public async create(req: Request, res: Response):Promise<Response> 
    {
        let msm = await registerStudent(req.body);
        return res.json({
            message: msm
        });
    }

    public async converted(req: Request, res: Response):Promise<Response> 
    {
        return res.json(0);
    }
}

export default new AffiliateController()
