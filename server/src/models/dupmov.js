const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupmov', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DOCUMENTO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    HISTORICO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BANCO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    USUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    DATAMOV: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'dupmov',
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
