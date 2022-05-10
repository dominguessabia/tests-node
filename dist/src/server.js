"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AffiliateRoutes_1 = __importDefault(require("./app/routes/AffiliateRoutes"));
class App {
    constructor() {
        this.express = express_1.default();
        this.configInitial();
        this.routes();
    }
    configInitial() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.listen(3000);
    }
    routes() {
        this.express.use("/affiliates", AffiliateRoutes_1.default);
    }
}
exports.default = new App().express;
