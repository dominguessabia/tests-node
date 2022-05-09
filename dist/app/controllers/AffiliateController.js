"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _db = require('../../db'); var _db2 = _interopRequireDefault(_db);
var _Affiliate = require('../models/Affiliate'); var _Affiliate2 = _interopRequireDefault(_Affiliate);

class AffiliateController {

     constructor()
    {
        try {
            _db2.default.authenticate();
            console.log('A conexão estabelecida!');
        } catch (error) {
            console.error('Falha na conexão:', error);
        }
    }

     async index(req, res) 
    {
        // const affiliate = new Affiliate; 
        await _db2.default.sync();
        const affiliates = await _Affiliate2.default.findAll();

        return res.json(affiliates);
    }

     async register(req, res) 
    {
        await _db2.default.sync();

        const newRegister = await _Affiliate2.default.create({
            cpf: req.body.cpf,
            name: req.body.name,
            email: req.body.email,
            telefone: req.body.telefone,
            como_soube: req.body.como_soube
        
        }).then((affiliate) => {
            return res.json("Registro feito!");

        }).catch((e) => {
            console.log(e);
            return res.json("Houve uma falha, verifique com administrador!");
        });
    }
}

exports. default = new AffiliateController()
