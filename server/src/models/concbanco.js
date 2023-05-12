const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concbanco', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITULAR: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    BANCO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CONTA: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    GRUPO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOSSONUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMITE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AGENCIA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ULTLOTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ULTLOTEDATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CARTEIRA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CODEMPRESA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INST1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    INST2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DIAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DIGITOAGENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'concbanco',
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
