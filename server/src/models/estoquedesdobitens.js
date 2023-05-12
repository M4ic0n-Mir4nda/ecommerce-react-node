const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquedesdobitens', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codbase: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    c_prod: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    descarte: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    basekg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    basekgp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custop: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    produto: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    custokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoquedesdobitens',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codbase" },
        ]
      },
      {
        name: "codigoproduto",
        using: "BTREE",
        fields: [
          { name: "c_prod" },
        ]
      },
    ]
  });
};
