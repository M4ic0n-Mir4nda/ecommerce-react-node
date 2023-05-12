const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupconfpag', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pagtos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    intervalo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    parcela1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    compra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'dupconfpag',
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
    ]
  });
};
