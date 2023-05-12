const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entrada', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NATUREZA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_DESTINO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FONE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CFO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    C_TRANSP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NOTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMISSAO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ENTREGA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ENDERECO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UF: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    DESTINO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OBS: {
      type: DataTypes.TEXT,
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
    SUB_TOTAL: {
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
    TOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTPEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FANTASIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BCST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VRST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VRSEG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VRFRET: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VROUTROS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CHAVE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VRDESC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SERIE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PENCFINAN: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PFRETE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PSEGURO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    POUTROS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    OBS2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VRISS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(20),
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
    FORMAPGTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMISSOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cNF: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NUMrecibo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PROTOCOLO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NOMEArquivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TRANSMITIDA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AUTORIZADA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CANCELADA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MOTIVOCANCELA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FINALIDADE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESTINO_OPER: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    RegTribut: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CARTA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TRANSPCOD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TRANSPFRETE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 9
    },
    TRANSPQTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRANSPESPECIE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TRANSPMARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRANSPBRUTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRANSPLIQ: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRANSPANTT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TRANSPPLACA: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TRANSPUF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TRIBUTOS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    GRUPOCONTAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FCPBC: {
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
    FCPVRRET: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NATUREZACOD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    tributosest: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    tributosfonte: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CHAVELANC: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'entrada',
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
