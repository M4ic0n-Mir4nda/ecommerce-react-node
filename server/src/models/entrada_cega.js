const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entrada_cega', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_interno: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    datacadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chave: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    responsavel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    proprietario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    diferenca: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'entrada_cega',
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
      {
        name: "idinterno",
        using: "BTREE",
        fields: [
          { name: "id_interno" },
        ]
      },
      {
        name: "nota",
        using: "BTREE",
        fields: [
          { name: "nota" },
        ]
      },
      {
        name: "chave",
        using: "BTREE",
        fields: [
          { name: "chave" },
        ]
      },
      {
        name: "cnpj",
        using: "BTREE",
        fields: [
          { name: "cnpj" },
        ]
      },
      {
        name: "proprietario",
        using: "BTREE",
        fields: [
          { name: "proprietario" },
        ]
      },
    ]
  });
};
