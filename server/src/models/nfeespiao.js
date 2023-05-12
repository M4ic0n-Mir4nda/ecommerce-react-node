const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfeespiao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NSU: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    chave: {
      type: DataTypes.STRING(44),
      allowNull: true,
      unique: "chave_UNIQUE"
    },
    emitente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    valorNF: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    emissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tpnf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sitnfe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    resposta: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    datalanc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    respostalanc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    statuslanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chavelanc: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    xml: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nfeespiao',
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
        name: "chave_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "chave" },
        ]
      },
      {
        name: "nsu",
        using: "BTREE",
        fields: [
          { name: "NSU" },
        ]
      },
    ]
  });
};
