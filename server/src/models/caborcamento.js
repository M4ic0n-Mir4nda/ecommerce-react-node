const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caborcamento', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    CONDPGTO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    TABELA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VENDEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FORMAPAGTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLIENTE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CONTATO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    RUA: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    TIPO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    P1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    P2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    P3: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    P4: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CADASTRADO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    OBS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CODCLI: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PRAZOENTREGA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUSENTREGA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FONE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ACRESCIMO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SINAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAIXA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FISCAL: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NFE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PEDIDO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PEDCLI: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FRETE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    SUBTOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NATUREZACOD: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    NATUREZA: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    PEDIDOPARCEIRO: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    BANCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VENDEDORCOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    TABELACOMCOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TABELACOM: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TABELACOMPERC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'caborcamento',
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
