"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var database = new sequelize_1.Sequelize('pravaler', 'root', 'root', {
    dialect: 'mysql',
    host: '172.17.0.2'
});
exports["default"] = database;
