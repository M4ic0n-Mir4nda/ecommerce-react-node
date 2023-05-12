const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csticms', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CST: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FLAG1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FLAG: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FLAG2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OBS: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'csticms',
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
        name: "FLAG",
        using: "BTREE",
        fields: [
          { name: "FLAG" },
        ]
      },
      {
        name: "CST",
        using: "BTREE",
        fields: [
          { name: "CST" },
        ]
      },
    ]
  });
};
