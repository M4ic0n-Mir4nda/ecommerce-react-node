const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cupons_vendidos_cancelados', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    SNECF: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    CHAVE: {
      type: DataTypes.STRING(44),
      allowNull: true,
      defaultValue: ""
    },
    CHAVECANC: {
      type: DataTypes.STRING(44),
      allowNull: true,
      defaultValue: "",
      unique: "CHAVECANC"
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    COO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cupons_vendidos_cancelados',
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
        name: "CHAVECANC",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CHAVECANC" },
        ]
      },
      {
        name: "COO",
        using: "BTREE",
        fields: [
          { name: "COO" },
        ]
      },
      {
        name: "SNECF",
        using: "BTREE",
        fields: [
          { name: "SNECF" },
        ]
      },
    ]
  });
};
