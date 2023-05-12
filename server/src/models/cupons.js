const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cupons', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CUPONS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    CANCELADOS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    PDV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cupons',
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
