const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotalista', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ID2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FORNEC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    EMBALAGEM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cotalista',
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
