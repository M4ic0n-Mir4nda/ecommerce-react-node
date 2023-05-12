const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prod_entrada', {
    C_ENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    C_PROD: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    QUANTIDADE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UNITARIO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    PLU: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TRIBUT_E: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REDBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VLBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_PIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_COFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    COFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ESTOQUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_ICMS_ST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IVA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VALOR_ST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IDCOTACAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BCST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ST_EMBUTIDO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QTDEUNTOT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECOVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    A_ICMSV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    I_ICMSV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTDEEMB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VRPUN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARKUP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CUSTOLIQ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    REDBCST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ETIQUETA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VRDESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BCPIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CSTPIS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BCCOFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CSTCOFINS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ITEM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NATBC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ORIGEM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DATACADASTRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vrOUTRAS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    vrSEGURO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    vrFRETE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRECOVENDA2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CARTAOLOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    CEST: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PRECOVENDA3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRIBUTOS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    pedido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DUN: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    CEGA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CUSTOMEDIO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PMZ: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PEDCLI: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FCPBC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FCP: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FCPVR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FCPBCRET: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FCPRET: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FCPVRRET: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    A_ICMS_INTER: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CODIGOANP: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    DESCRICAOANP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UFANP: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    unemb: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    qtdeemb2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    qtdeUnTot2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    vrpun2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    cidealiq: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    cidevalor: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    gasliq: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    gasnatnac: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    gasnatimp: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    efetICMS_vBCST: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    efetICMS_pICMSST: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    efetICMS_vICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    efetICMS_vICMSSRet: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    prm_qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    prm_ativo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    PRECOVENDA4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    PROLOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PRECOVENDAANT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ULTPRECOANT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FAMILIAATIVA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FAMILIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prod_entrada',
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
        name: "C_PROD",
        using: "BTREE",
        fields: [
          { name: "C_PROD" },
        ]
      },
      {
        name: "C_ENTRADA",
        using: "BTREE",
        fields: [
          { name: "C_ENTRADA" },
        ]
      },
    ]
  });
};
