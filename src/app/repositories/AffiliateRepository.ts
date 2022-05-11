import Affiliate from "../models/Affiliate";


class AffiliateRepository {

    public constructor()
    {
        console.log('FILE: AffiliateRepository');
    }

    public async findAll()
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

    public async findByCpf(value: number)
    {
        return [{}];
    }
    
    public async create(body: any)
    {
        return "Registro feito!";
    }
}

export default new AffiliateRepository;
