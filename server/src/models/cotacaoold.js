const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaoold', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: ""
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
    VRUN: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRTOT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    EMBALAGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    SELECIONADO: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    FORNECCOD: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FORNEC: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cotacaoold',
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
          { name: "CODIGO" },
          { name: "loja" },
          { name: "FORNECCOD" },
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
