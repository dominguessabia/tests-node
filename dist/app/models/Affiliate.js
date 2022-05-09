"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _db = require('../../db'); var _db2 = _interopRequireDefault(_db);

const Affiliate = _db2.default.define('Affiliate', {
    cpf: {
        type: _sequelize.DataTypes.REAL,
        autoIncrement: false,
        primaryKey: true
    },
    name: {
        type: _sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: _sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    telefone: {
        type: _sequelize.DataTypes.REAL,
        allowNull: false
    },
    como_soube: {
        type: _sequelize.DataTypes.STRING(20),
        allowNull: false
    }
}, {
        timestamps: false
});

console.log(Affiliate === _db2.default.models.Affiliate);

exports. default = Affiliate;