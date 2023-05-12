const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itens_vendidos', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    IT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    UN: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: ""
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRUN: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRTOTAL: {
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
    COO: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
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
    NCM: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    CFOP: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    CSTICMS: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    ALIQICMS: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    VRICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CSTPI: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    CSTCOFINS: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    ALIQPIS: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    ALIQCOFINS: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    VRPIS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRCOFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ORIGEM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EAN: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    arquivado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CHAVE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'itens_vendidos',
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
          { name: "DATA" },
          { name: "SNECF" },
          { name: "COO" },
          { name: "IT" },
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
        name: "DATA",
        using: "BTREE",
        fields: [
          { name: "DATA" },
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
        name: "SNECF",
        using: "BTREE",
        fields: [
          { name: "SNECF" },
        ]
      },
      {
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "CODIGO" },
        ]
      },
    ]
  });
};
