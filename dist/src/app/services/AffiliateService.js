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
const AffiliateRepository_1 = __importDefault(require("../repositories/AffiliateRepository"));
function findAllStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield AffiliateRepository_1.default.findAll();
    });
}
exports.findAllStudents = findAllStudents;
function checkIsStudentByCpf(cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        let student = yield AffiliateRepository_1.default.findByCpf(cpf);
        if (student.length > 0) {
            return true;
        }
        // @TODO: Criar regra de Aluno Veterano
        return false;
    });
}
exports.checkIsStudentByCpf = checkIsStudentByCpf;
function registerStudent(body) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield AffiliateRepository_1.default.create(body);
    });
}
exports.registerStudent = registerStudent;