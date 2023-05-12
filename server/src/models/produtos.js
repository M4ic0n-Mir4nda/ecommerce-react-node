const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos', {
    CUPOM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    QUANTIDADE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UNITARIO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SUBTOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PDV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codBaixa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeFisica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    promocao: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    nvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    GRUPO: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    SUBGRUPO: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    PRNORMAL: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NCUPOM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TRIBUT: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FAMILIA: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    DEPTO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MARKUP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SECAO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produtos',
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
        name: "chaveunica",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LOJA" },
          { name: "PDV" },
          { name: "NCUPOM" },
          { name: "UN" },
          { name: "CODIGO" },
          { name: "DATA" },
          { name: "SUBTOTAL" },
        ]
      },
      {
        name: "secao",
        using: "BTREE",
        fields: [
          { name: "SECAO" },
        ]
      },
      {
        name: "sgrupo",
        using: "BTREE",
        fields: [
          { name: "GRUPO" },
        ]
      },
      {
        name: "familia",
        using: "BTREE",
        fields: [
          { name: "FAMILIA" },
        ]
      },
      {
        name: "data",
        using: "BTREE",
        fields: [
          { name: "DATA" },
        ]
      },
      {
        name: "tribut",
        using: "BTREE",
        fields: [
          { name: "TRIBUT" },
        ]
      },
      {
        name: "ncupom",
        using: "BTREE",
        fields: [
          { name: "NCUPOM" },
        ]
      },
      {
        name: "grupo",
        using: "BTREE",
        fields: [
          { name: "GRUPO" },
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
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "CODIGO" },
        ]
      },
      {
        name: "depto",
        using: "BTREE",
        fields: [
          { name: "DEPTO" },
        ]
      },
    ]
  });
};
