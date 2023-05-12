const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('est_comp', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codVinculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeVinculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TEMPOREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PESOLIQ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SNBAIXA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UN: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    codFor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomeFor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MIN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ULTVEND: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ULTCOMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRECOREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ULTPRECO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECOMEDIO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECOVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECODOLAR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CLFISCAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROCEDENCI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NBM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    descricao_int: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'est_comp',
    timestamps: false
  });
};
