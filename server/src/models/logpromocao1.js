const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logpromocao1', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PRANTIGO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRNOVO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATA1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATA2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HISTORICO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logpromocao1',
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
        name: "DATA",
        using: "BTREE",
        fields: [
          { name: "DATA" },
        ]
      },
      {
        name: "CODIGO",
        using: "BTREE",
        fields: [
          { name: "CODIGO" },
        ]
      },
      {
        name: "DATA1",
        using: "BTREE",
        fields: [
          { name: "DATA1" },
        ]
      },
      {
        name: "data2",
        using: "BTREE",
        fields: [
          { name: "DATA2" },
        ]
      },
    ]
  });
};
