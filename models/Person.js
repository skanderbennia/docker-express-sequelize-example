import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Person = sequelize.define("person", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });
  return Person;
}
