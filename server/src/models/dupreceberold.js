const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupreceberold', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    COdCli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLiente: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    NF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Pedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Duplicata: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Historico: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ValorPago: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DtVencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DtEmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    JurosAtra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Banco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DtMovimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Flag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Flagimp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TipoCobranca: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    Documento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GRUPOCONTAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PDV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPOCONBRANCA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Multa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CodBarras: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TipoDuplicata: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'dupreceberold',
    timestamps: false
  });
};
