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
const AffiliateService_1 = require("../services/AffiliateService");
class AffiliateController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let students = yield AffiliateService_1.findAllStudents();
            return res.json(students);
        });
    }
    verifyPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield AffiliateService_1.checkIsStudentByCpf(req.body.cpf);
            return res.json({
                active: status
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let msm = yield AffiliateService_1.registerStudent(req.body);
            return res.json({
                message: msm
            });
        });
    }
    converted(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(0);
        });
    }
}
exports.default = new AffiliateController();
