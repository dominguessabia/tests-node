"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _AffiliateService = require('../services/AffiliateService');

class AffiliateController {

     async index(req, res) 
    {
        let students = await _AffiliateService.findAllStudents.call(void 0, );
        return res.json(students);
    }

     async verifyPerson(req, res) 
    {
        let status = await _AffiliateService.checkIsStudentByCpf.call(void 0, req.body.cpf);
        return res.json({
            active: status
        });
    }

     async create(req, res) 
    {
        let msm = await _AffiliateService.registerStudent.call(void 0, req.body);
        return res.json({
            message: msm
        });
    }

     async converted(req, res) 
    {
        return res.json(0);
    }
}

exports. default = new AffiliateController()
