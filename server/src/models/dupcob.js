const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupcob', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nossonumero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    duplicata: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dtVencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtOcorrencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    valorPago: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    juros1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    juros2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    },
    banco: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    conta: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Arquivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dupreceberid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dupreceberenvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subcodigo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtOperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lancamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    outrasdespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    despesas: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dupcob',
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
        name: "nossoNumero",
        using: "BTREE",
        fields: [
          { name: "nossonumero" },
        ]
      },
      {
        name: "duplicata",
        using: "BTREE",
        fields: [
          { name: "duplicata" },
        ]
      },
    ]
  });
};
