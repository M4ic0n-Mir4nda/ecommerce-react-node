const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cupom', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cupom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    clientedoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    atendente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    operador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    situacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pdv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    statusclube: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cupom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
