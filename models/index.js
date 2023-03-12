import Sequelize from "sequelize";
import choosenConfig from "../config.js";

import Person from "./Person.js";

const config = choosenConfig[process.env.NODE_ENV || "development"];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Person = Person(sequelize);

export default db;
