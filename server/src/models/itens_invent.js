const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itens_invent', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INVENTARIO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CODIGO: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    QTDEANT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRCUSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONTAGEM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CADASTRADO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'itens_invent',
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
