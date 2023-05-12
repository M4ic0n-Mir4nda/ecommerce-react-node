const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cb', {
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
    NSU: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FORMAPGTO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    nomeOperCel: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    CodOperCel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PDV: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    USUARIO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    TIPO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cb',
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
