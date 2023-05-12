const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoitens', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PEDIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'pedidoitens',
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
