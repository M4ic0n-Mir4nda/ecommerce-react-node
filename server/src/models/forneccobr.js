const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forneccobr', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodPessoa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Logradouro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'forneccobr',
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
        name: "CodPessoa",
        using: "BTREE",
        fields: [
          { name: "CodPessoa" },
        ]
      },
      {
        name: "Cnpj",
        using: "BTREE",
        fields: [
          { name: "CNPJ" },
        ]
      },
    ]
  });
};
