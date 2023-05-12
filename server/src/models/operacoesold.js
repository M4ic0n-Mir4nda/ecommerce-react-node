const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operacoesold', {
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
    OPERACAO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    HISTORICO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    USUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    PDV: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'operacoesold',
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
