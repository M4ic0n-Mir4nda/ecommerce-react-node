const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carga', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    filial: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    produtos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pessoas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    carga: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'carga',
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
