const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plu', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PLU: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    BARRAS: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    PRCOMPRA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FORNEC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODPLU: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STEMBUTIDO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CFO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QTEMB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plu',
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
      {
        name: "PLU",
        using: "BTREE",
        fields: [
          { name: "PLU" },
        ]
      },
      {
        name: "BARRAS",
        using: "BTREE",
        fields: [
          { name: "BARRAS" },
        ]
      },
      {
        name: "FORNEC",
        using: "BTREE",
        fields: [
          { name: "FORNEC" },
        ]
      },
      {
        name: "CODIGO",
        using: "BTREE",
        fields: [
          { name: "CODIGO" },
        ]
      },
      {
        name: "CODPLU",
        using: "BTREE",
        fields: [
          { name: "CODPLU" },
        ]
      },
    ]
  });
};
