const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saidas', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DESCRICAO: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    QUANT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    HISTORICO: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    CUSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NATUREZA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NATUREZACOD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESTOQUE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ULTFORNECCOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ULTFORNEC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ULTFORNECDATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ULTFORNECNOTA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'saidas',
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
        name: "NATUREZACOD",
        using: "BTREE",
        fields: [
          { name: "NATUREZACOD" },
        ]
      },
    ]
  });
};
