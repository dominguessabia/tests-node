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
Object.defineProperty(exports, "__esModule", { value: true });
const AffiliateService_1 = require("../app/services/AffiliateService");
describe('Testing SERVICE AFFILIATE', () => {
    test('function findPersonByCpf', () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield AffiliateService_1.checkIsStudentByCpf(12345678909);
        expect(response).toBe(true);
    }));
    test('function registerStudent', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = {
            "cpf": 12345611893311,
            "name": "TESTES",
            "email": "email@teste.com",
            "telefone": 11999999999,
            "como_soube": "SABER EM REDE"
        };
        let response = yield AffiliateService_1.registerStudent(data);
        expect(response).toBe("Registro feito!");
    }));
});
