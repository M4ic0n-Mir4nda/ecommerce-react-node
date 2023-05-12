const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compras', {
    Pedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataEnt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodForn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Forn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Natureza: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Aplicacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Prazos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ValorIPI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ValorTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CONTATO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FONE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IDENTRADA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COMPRADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MARGEM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CHAVE: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    proprietario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    natcod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finalidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    grupocontas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tabela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vendedor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    frete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fcp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    icmsst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vendedorcod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    situacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'compras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Pedido" },
        ]
      },
    ]
  });
};
