const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresa', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FANTASIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RAZAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    TELEFONE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    OPTANTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TPIS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TCOFINS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIRPJ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TCSLL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TSIMP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TDESP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TLUCRO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COMPL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LICENCANFE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DESPESAS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    LICENCASPED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    espiaonfe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NATUREZACOD: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    PASTAXML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NATOPER: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    GRUPOCONTAS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    logotipo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    CONCTOKEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONCLOJA: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empresa',
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
