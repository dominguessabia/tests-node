"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


class AffiliateRepository {

     constructor()
    {
        console.log('FILE: AffiliateRepository');
    }

     async findAll()
    {
        let data = [
            {
                "cpf": 1234,
                "name": "Guilherme Alves",
                "email": "guilherme.alves@gmail.com",
                "telefone": 11989482099,
                "como_soube": "Google"
            }
        ];

        return data;
    }

     async findByCpf(value)
    {
        return [{}];
    }
    
     async create(body)
    {
        return "Registro feito!";
    }
}

exports. default = new AffiliateRepository;
