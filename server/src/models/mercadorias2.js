const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadorias2', {
    codun: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    tipocj: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tipoun: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    quantmin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    icmscompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    icmsvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    frete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    encargos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lucroun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lucrocj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ultimaqtd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ultimadata: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    condpag: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    operador: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    centavos3: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mercadorias2',
    timestamps: false
  });
};
