const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('markup', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    COFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IRPJ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CSLL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SNAC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    LUCRO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'markup',
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
