const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tributacaoon', {
    id: {
      type: DataTypes.STRING(16),
      allowNull: true,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    clfiscal: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    tribut: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sbc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    eiva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cstpis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    eicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ebc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecstpis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    epis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dataalt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    icmsnormal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    atualizacaointerna: {
      type: DataTypes.DATE,
      allowNull: true
    },
    etributpis: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    stributpis: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cest: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    natrec: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tributacaoon',
    timestamps: false,
    indexes: [
      {
        name: "CODIGO",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "DESCRICAO",
        using: "BTREE",
        fields: [
          { name: "descricao" },
        ]
      },
    ]
  });
};
