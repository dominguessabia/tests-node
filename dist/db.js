"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

const database = new (0, _sequelize.Sequelize)('pravaler', 'root', 'root', {
    dialect: 'mysql',
    host: '172.17.0.2'
});
  
exports. default = database;

