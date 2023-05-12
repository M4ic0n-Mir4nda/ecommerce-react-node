const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entregas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    Terminal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Cupom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Operador: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'entregas',
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
        name: "Cupom",
        using: "BTREE",
        fields: [
          { name: "Cupom" },
        ]
      },
    ]
  });
};
