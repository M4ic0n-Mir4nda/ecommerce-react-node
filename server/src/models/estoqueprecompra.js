const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoqueprecompra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdvendas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mediadia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    previsao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    necessidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comprar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ultvend: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ultcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    forneccod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fornecnome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ultvenda: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoqueprecompra',
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
    ]
  });
};
