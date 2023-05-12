const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concbancos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codbanco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomebanco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    digitobanco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    logobanco: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'concbancos',
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
        name: "codbanco",
        using: "BTREE",
        fields: [
          { name: "codbanco" },
        ]
      },
    ]
  });
};
