const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conccontas', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITULAR: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    BANCO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CONTA: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    GRUPO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conccontas',
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
