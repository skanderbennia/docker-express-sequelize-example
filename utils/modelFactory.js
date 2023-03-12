export default function (sequelize, modelName, modelSchema) {
  console.log(modelSchema);
  const modelNameLowerCase = modelName.toLowerCase();
  console.log(modelNameLowerCase.lastIndexOf("s") > 0 ? modelNameLowerCase : modelNameLowerCase + "s");
  sequelize.define(
    modelNameLowerCase.lastIndexOf("s") > 0 ? modelNameLowerCase : modelNameLowerCase + "s",
    modelSchema
  );
}
