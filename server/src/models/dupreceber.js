const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupreceber', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.STRING(40),
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
    },
    especie: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    parcela: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lotegerado: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    inst1: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    inst2: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    diaspro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    boldigito: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bolcodbarras2: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    bolcarteira: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    bolmulta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    boldiaspro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    boltipoenvio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bolbanco: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bolagencia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bolconta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bolentrada: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bolentradaocor2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    protestar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    desconta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    baixar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vencimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lancamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    falimentar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encargos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nossonumero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lote: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dupreceber',
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
