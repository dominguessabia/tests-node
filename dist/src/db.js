"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize('pravaler', 'root', 'root', {
    dialect: 'mysql',
    host: '172.17.0.2'
});
exports.default = database;
