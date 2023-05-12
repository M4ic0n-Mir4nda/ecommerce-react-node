const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prod_entrada_cega', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    origem: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datacadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    plu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    c_prod: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    un: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    unitario: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    valor_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidade_c: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'prod_entrada_cega',
    hasTrigger: true,
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
        name: "id_entrada",
        using: "BTREE",
        fields: [
          { name: "id_entrada" },
        ]
      },
      {
        name: "plu",
        using: "BTREE",
        fields: [
          { name: "plu" },
        ]
      },
      {
        name: "c_prod",
        using: "BTREE",
        fields: [
          { name: "c_prod" },
        ]
      },
    ]
  });
};
