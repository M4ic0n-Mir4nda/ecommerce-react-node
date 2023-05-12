const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquetabpreco', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    precovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tabela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    precobase: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    variacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoquetabpreco',
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
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "tabela",
        using: "BTREE",
        fields: [
          { name: "tabela" },
        ]
      },
    ]
  });
};
