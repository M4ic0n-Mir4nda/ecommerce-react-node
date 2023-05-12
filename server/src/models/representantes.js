const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('representantes', {
    CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLIENTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SENHA: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'representantes',
    timestamps: false
  });
};
