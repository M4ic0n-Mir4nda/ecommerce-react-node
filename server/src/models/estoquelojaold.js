const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquelojaold', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ativo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    codigo: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datapromocao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datapromocao2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ultcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ultpreco: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    precomedio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    precovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    precodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ultprecomedio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    cartaoloja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    precoatacado: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    promocao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    promocaoleve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    promocaopague: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    promocaotipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    promocao_qtde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    promocao_ativo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    precovenda3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    preco2ad: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    margemtabela: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    etiqueta: {
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
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    min: {
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
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pmz: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precovenda4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoquelojaold',
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
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
