const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaoprod', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: ""
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    COTACAO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cotacaoprod',
    timestamps: false
  });
};
