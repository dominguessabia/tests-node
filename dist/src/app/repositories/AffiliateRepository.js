"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db"));
const Affiliate_1 = __importDefault(require("../models/Affiliate"));
class AffiliateRepository {
    constructor() {
        try {
            db_1.default.authenticate();
            console.log('A conexão foi estabelecida!');
        }
        catch (error) {
            console.error('Falha na conexão:', error);
        }
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.sync();
            return yield Affiliate_1.default.findAll();
        });
    }
    findByCpf(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.sync();
            return yield Affiliate_1.default.findAll({
                where: {
                    cpf: value
                }
            });
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.sync();
            return yield Affiliate_1.default.create({
                cpf: body.cpf,
                name: body.name,
                email: body.email,
                telefone: body.telefone,
                como_soube: body.como_soube
            }).then((e) => {
                return "Registro feito!";
            }).catch((e) => {
                return "Houve uma falha, verifique com administrador!";
            });
        });
    }
}
exports.default = new AffiliateRepository;
