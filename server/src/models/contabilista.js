const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contabilista', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CPF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LOGRADOURO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MUNICIP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CRC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COMPL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empresa: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contabilista',
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
    ]
  });
};
