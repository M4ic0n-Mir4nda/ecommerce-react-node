const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cancelamentos', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CUPOM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PDV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cancelamentos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "pdv",
        using: "BTREE",
        fields: [
          { name: "PDV" },
        ]
      },
      {
        name: "cupom",
        using: "BTREE",
        fields: [
          { name: "CUPOM" },
        ]
      },
    ]
  });
};
