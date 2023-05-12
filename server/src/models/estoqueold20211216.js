const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoqueold20211216', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    CODVINCULO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTDEVINCULO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ATUALIZACAOINTERNA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    TEMPOREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    etiqueta: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    pesaveis: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    PESOLIQ: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CODFOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NOMEFOR: {
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
    PRECOATACADO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
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
      type: DataTypes.STRING(10),
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
    DESCRICAO_INT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATAPROMOCAO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    PROMOCAO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SUBCAT1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    SUBCAT2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CONTAGEM: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CONTROLE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATAPROMOCAO2: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    VALDIAS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    REAJUSTE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    FLAGMARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    INFO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ETRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EPIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ECOFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ECST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EIPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    EIVA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTDEMB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    COFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DEPTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SECAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    INDEXDEPTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    GRADE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARKUP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CARTAOLOJA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SITUACAO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CSTPIS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CSTCOFINS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ETRIBUTPIS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    STRIBUTPIS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ECSTPIS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NATREC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATAALT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CODIGOINTERNO: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    LABORATORIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLASSE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMISSAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CURVA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PERC_DESC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    COD_PEP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMB_PEP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PSICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENERICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LIBERADO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRECOFABRICA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECONOVO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECONOVO2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRECOMAX: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PERCDESCPROM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PERCCOMISSAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ALCOOLICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QTDEANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ICMSNORMAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ETRIBUTCOFINS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    STRIBUTCOFINS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ECSTCOFINS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_IVA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CSOSN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    VINCULOINTERNO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GRADETEXTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ORIGEMCST: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0"
    },
    PROMOCAO_QTDE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PROMOCAO_ATIVO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CLASSIFICADO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NCMANALISE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NCMOBS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CEST: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ORIGEMMERC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PRECO2AD: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PRECOVENDA3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PLU: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MARGEMTABELA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PROMOCAOLEVE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    PROMOCAOPAGUE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    PROMOCAOTIPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promocaoDataAtivacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    promocaoDataDesativacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unEmb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ultprecomedio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    promocaoDataFidelidade1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    promocaoDataFidelidade2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pmz: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PESOBRUTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PESOLIQUIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    inativo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TIPOMERCADORIA: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "00"
    },
    ORIGEMCAD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    promocaoDataLeve1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    promocaoDataLeve2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GRUPOFISCAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CESTABASICA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRECOVENDA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    EICMSST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FCP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NUTRICIONAL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUTRICIONALCOD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cestabasica2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reccusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    recrend: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reccustoun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESDOBCOD: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoqueold20211216',
    hasTrigger: true,
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
        name: "depto",
        using: "BTREE",
        fields: [
          { name: "DEPTO" },
        ]
      },
      {
        name: "sgrupo",
        using: "BTREE",
        fields: [
          { name: "SUBCAT1" },
        ]
      },
      {
        name: "familia",
        using: "BTREE",
        fields: [
          { name: "SUBCAT2" },
        ]
      },
      {
        name: "grupo",
        using: "BTREE",
        fields: [
          { name: "NBM" },
        ]
      },
      {
        name: "secao",
        using: "BTREE",
        fields: [
          { name: "SECAO" },
        ]
      },
      {
        name: "tribut",
        using: "BTREE",
        fields: [
          { name: "TRIBUT" },
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
        name: "CODIGOINTERNO",
        using: "BTREE",
        fields: [
          { name: "CODIGOINTERNO" },
        ]
      },
    ]
  });
};
