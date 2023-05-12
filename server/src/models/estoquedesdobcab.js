const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquedesdobcab', {
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
    base: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    c_prod: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    codbase: {
      type: DataTypes.STRING(16),
      allowNull: true,
      unique: "codigo_UNIQUE"
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pesokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custokg: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    idnota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    }
  }, {
    sequelize,
    tableName: 'estoquedesdobcab',
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
        name: "codigo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codbase" },
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
        name: "c_prod",
        using: "BTREE",
        fields: [
          { name: "c_prod" },
        ]
      },
    ]
  });
};
