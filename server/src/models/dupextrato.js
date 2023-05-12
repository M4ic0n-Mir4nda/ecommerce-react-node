const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupextrato', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lancamento: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    docto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credito: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    debito: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    qtde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: ""
    },
    fluxo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    codigo: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dupextrato',
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
        name: "docto",
        using: "BTREE",
        fields: [
          { name: "docto" },
        ]
      },
      {
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
