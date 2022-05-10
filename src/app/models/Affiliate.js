"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db_1 = require("../../db");
var Affiliate = db_1["default"].define('Affiliate', {
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
console.log(Affiliate === db_1["default"].models.Affiliate);
exports["default"] = Affiliate;
