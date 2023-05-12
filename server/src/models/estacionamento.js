const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estacionamento', {
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
    TERMINAL: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CUPOM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PLACA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SITUACAO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'estacionamento',
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
