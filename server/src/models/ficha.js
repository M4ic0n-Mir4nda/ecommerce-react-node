const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ficha', {
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
    GRUPO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FUNC: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    STATUS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NUMERO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ficha',
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
