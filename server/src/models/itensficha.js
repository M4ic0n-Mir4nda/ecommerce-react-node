const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itensficha', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FICHA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CODIGO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    UN: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRUN: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRTOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FUNC: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ITEM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    STATUS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'itensficha',
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
