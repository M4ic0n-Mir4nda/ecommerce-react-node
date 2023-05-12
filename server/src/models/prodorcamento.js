const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodorcamento', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ORCAMENTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CODPROD: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    UN: {
      type: DataTypes.STRING(100),
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
    PRCUSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    MARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    pDESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ACRESCIMO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    pACRESCIMO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    OBS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    TABELACOMCOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TABELACOM: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TABELACOMPERC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'prodorcamento',
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
