const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cadprod', {
    CODPRO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    PLU: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    NOMPRO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CODREF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    REFFOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMREDUZ: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    CODASSOC: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    VASILHAME: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    UNIDADEC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    UNIDADE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    EMBALAG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    EMBALAGS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPENTR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ORIGEM: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    QUANTEST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUANTESTC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUANTSN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUANTPED: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUANTCOM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ESTOQMIN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DIASSEG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUANTINV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTULTINV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QTULTINV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTULTCON: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AJUSTE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    AJUSTANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FINV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOMED: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTUNIT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOTAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATATAB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSTOREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOREPU: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOREPA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOREF: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTODEV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOFIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOREPC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDA1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDA2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDA3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DOFERTA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DVENDA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDANT1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDANT2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDANT3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDANT4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEM4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ULTMOVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ULTREAJ: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VENDATA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATA1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATA2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATA3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTATA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTATA1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTATA2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTATA3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTATA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATANT1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATANT2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATANT3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDATANT4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEMATA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEMATA1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEMATA2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEMATA3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARGEMATA4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ULTREAJATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPOIPI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CLASIPI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    IPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TRIBUT: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    REDUC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TAXIMP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FISCAL: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CLAFISC: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    SECAO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SGRUPO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    FAMILIA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SETOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    VLG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QPG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORN1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORN2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORN3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRAZO1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRAZO2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRAZO3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CONDPAG1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CONDPAG2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CONDPAG3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESC1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESC2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESC3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    LOCDEP: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LOCVEN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPOE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    LINHA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    POSICAO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPOETQ: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DATAUC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATAUE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QUANTUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NFUE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VALORUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORNUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPOUE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EMBALAGUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATAUE1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QUANTUE1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NFUE1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VALORUE1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORNUE1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPOUE1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EMBALAGUE1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATAUE2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QUANTUE2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NFUE2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VALORUE2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FORNUE2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPOUE2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EMBALAGUE2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATPAG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TAXA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IPV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SAZONAL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DATLIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATFLIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATAEXCL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATALT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALTCAD: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PROMOCAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TECLA: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PLUPDV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    COMIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTDETQ: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    VALREF2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VALREFC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPREFC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    VALREFV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPREFV: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CUSTOMEDR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CTREFANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CTMEDANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTESTANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CTREFANTM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CTMEDANTM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTESTANTM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QENTDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENTDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QSAIDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VSAIDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VDEVDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QAJUDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VAJUDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QENTMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENTMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QSAIMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VSAIMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VDEVMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QAJUMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VAJUMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RENTDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RSAIDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RDEVDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RAJUDIA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RENTMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RSAIMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RDEVMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RAJUMES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODCOMP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTDENT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TOTCUSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CUSTOENT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDAENT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    REMARC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DEMARC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QUEBRA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VENDASUG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MOEDA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PESO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PESOB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VALIDADE: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CLG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VALORUC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OFERTAT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    JORNOFE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CODUSO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODASSGER: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CODDIST: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    VRPIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VRCOFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CLASSE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODNUTRI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    HORAALT: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SQLREG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODPRINC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    QTCAIXA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NATAL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPOPIS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODPRON: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cadprod',
    timestamps: false
  });
};
