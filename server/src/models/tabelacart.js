const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelacart', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FORMAPGTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TAXA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRAZO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BANCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AUTORIZADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tabelacart',
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
        name: "chave",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FORMAPGTO" },
          { name: "AUTORIZADOR" },
        ]
      },
      {
        name: "FORMAPGTO",
        using: "BTREE",
        fields: [
          { name: "FORMAPGTO" },
        ]
      },
      {
        name: "GRUPO",
        using: "BTREE",
        fields: [
          { name: "GRUPO" },
        ]
      },
    ]
  });
};
