const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradaref', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_entrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Tipo: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    Chave: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Modelo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MesAno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entradaref',
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
      {
        name: "Tipo",
        using: "BTREE",
        fields: [
          { name: "Tipo" },
        ]
      },
      {
        name: "Chave",
        using: "BTREE",
        fields: [
          { name: "Chave" },
        ]
      },
      {
        name: "Numero",
        using: "BTREE",
        fields: [
          { name: "Numero" },
        ]
      },
      {
        name: "c_entrada",
        using: "BTREE",
        fields: [
          { name: "c_entrada" },
        ]
      },
    ]
  });
};
