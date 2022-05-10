"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AffiliateController_1 = __importDefault(require("../controllers/AffiliateController"));
const router = express_1.Router();
// Rotas
router.get('/index', AffiliateController_1.default.index);
router.get('/verify', AffiliateController_1.default.verifyPerson);
router.get('/converted', AffiliateController_1.default.converted);
router.post('/register', AffiliateController_1.default.create);
exports.default = router;
