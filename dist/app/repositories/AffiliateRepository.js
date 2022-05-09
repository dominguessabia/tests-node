"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db = require('../../db'); var _db2 = _interopRequireDefault(_db);
var _Affiliate = require('../models/Affiliate'); var _Affiliate2 = _interopRequireDefault(_Affiliate);


class AffiliateRepository {

     constructor()
    {
        try {
            _db2.default.authenticate();
            console.log('A conexão foi estabelecida!');
        } catch (error) {
            console.error('Falha na conexão:', error);
        }
    }

     async findAll()
    {
        await _db2.default.sync();

        return await _Affiliate2.default.findAll();
    }

     async findByCpf(value)
    {
        await _db2.default.sync();

        return await _Affiliate2.default.findAll({
            where: {
              cpf: value
            }
        });
    }
    
     async create(body)
    {
        await _db2.default.sync();

        return await _Affiliate2.default.create(
            {
                cpf: body.cpf,
                name: body.name,
                email: body.email,
                telefone: body.telefone,
                como_soube: body.como_soube
            }
        ).then((e) => {
            return "Registro feito!";

        }).catch((e) => {
            return "Houve uma falha, verifique com administrador!";
        });
    }
}

exports. default = new AffiliateRepository;
