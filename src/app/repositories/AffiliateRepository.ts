import database from "../../db";
import Affiliate from "../models/Affiliate";


class AffiliateRepository {

    public constructor()
    {
        try {
            database.authenticate();
            console.log('A conexão foi estabelecida!');
        } catch (error) {
            console.error('Falha na conexão:', error);
        }
    }

    public async findAll()
    {
        await database.sync();

        return await Affiliate.findAll();
    }

    public async findByCpf(value: number)
    {
        await database.sync();

        return await Affiliate.findAll({
            where: {
              cpf: value
            }
        });
    }
    
    public async create(body: any)
    {
        await database.sync();

        return await Affiliate.create(
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

export default new AffiliateRepository;
