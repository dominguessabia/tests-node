"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
const Affiliate = db_1.default.define('Affiliate', {
    cpf: {
        type: sequelize_1.DataTypes.REAL,
        autoIncrement: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    telefone: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    como_soube: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false
});
console.log(Affiliate === db_1.default.models.Affiliate);
exports.default = Affiliate;
