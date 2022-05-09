import { DataTypes } from "sequelize";
import database from "../../db";

const Affiliate = database.define('Affiliate', {
    cpf: {
        type: DataTypes.REAL,
        autoIncrement: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefone: {
        type: DataTypes.REAL,
        allowNull: false
    },
    como_soube: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
        timestamps: false
});

console.log(Affiliate === database.models.Affiliate);

export default Affiliate;