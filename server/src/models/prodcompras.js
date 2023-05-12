const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodcompras', {
    id: {
      autoIncrement: true,
      type: DataTypes.DOUBLE(11,0),
      allowNull: false,
      primaryKey: true
    },
    Pedido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Produto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UN: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    Quant: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ValorUN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ValorTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ValorIPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Situacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECOVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IDCOTACAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    REF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QtdeEmb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QtdeUnTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PrUN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idProdNota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qQtdeEmb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vunit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vfcp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vicmsst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vMedVdaDia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qEst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vUltCusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pMargCad: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pMargPrat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qDiasEst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pfcp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    picmsst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    picms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rdc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datault: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ultforn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dataultvenda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valorTotalLiq: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    prodcompras: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'prodcompras',
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
    ]
  });
};
