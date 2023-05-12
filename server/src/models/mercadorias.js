const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadorias', {
    codun: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    nomeun: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    vendaun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custoun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estoqueun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    codcj: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    nomecj: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    vendacj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custocj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estoquecj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdporcj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ST: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    compra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    codforn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    depart: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    acesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mercadorias',
    timestamps: false
  });
};
