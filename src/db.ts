import { Sequelize } from "sequelize";

const database = new Sequelize('pravaler', 'root', 'root', {
    dialect: 'mysql',
    host: '172.17.0.2'
});
  
export default database;

