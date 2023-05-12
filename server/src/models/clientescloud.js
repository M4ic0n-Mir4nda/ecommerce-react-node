const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientescloud', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    SITE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    Nome: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Rua: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    mensalidade: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    Bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bloqueio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    Cidade: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Uf: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TipoPessoa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ie: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LimiteCrediito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OBS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DIAVENC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CADASTRO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    NASC: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    JUROS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DEBITO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FANTASIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DIAFATURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FREEZER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ZONA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CELULAR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FORMAPGTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CONTATO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CARTAO: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    DIAINICIAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientescloud',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "REMOTE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
