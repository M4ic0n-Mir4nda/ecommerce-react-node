const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('duppagar', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodFor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Fornecedor: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    NF: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
      allowNull: true,
      defaultValue: 0
    },
    ValorPago: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DtVencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DtEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    JurosAtra: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
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
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Flag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TIPOCOBRANCA: {
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
    STATUSTIT: {
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
    vencimento2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'duppagar',
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
