const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cupons_vendidos', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SNECF: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    MODECF: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    NCAIXA: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    COO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SUBTOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ACRESCIMO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TOTALLIQ: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CPF: {
      type: DataTypes.STRING(14),
      allowNull: true,
      defaultValue: ""
    },
    ORIGEM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CHAVE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CHAVECANC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AUTORIZADO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ARQUIVADO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NCUPOM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    SESSAO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    QRCODE: {
      type: DataTypes.STRING(344),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cupons_vendidos',
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
        name: "CHAVE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CHAVE" },
          { name: "NCUPOM" },
        ]
      },
      {
        name: "COO",
        using: "BTREE",
        fields: [
          { name: "COO" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "STATUS" },
        ]
      },
      {
        name: "SNECF",
        using: "BTREE",
        fields: [
          { name: "SNECF" },
        ]
      },
      {
        name: "DATA",
        using: "BTREE",
        fields: [
          { name: "DATA" },
        ]
      },
    ]
  });
};
