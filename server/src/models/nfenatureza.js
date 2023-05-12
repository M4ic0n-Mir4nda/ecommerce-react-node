const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfenatureza', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(4),
      allowNull: true,
      unique: "codigo_UNIQUE"
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabela: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cfop: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cfop2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cfop3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ipicalcula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ipicst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ipienq: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    piscofinscalculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    piscofinscst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    icmscalculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    icmscst: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    icmsconverte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cstconverte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    destino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    grupocontas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    faturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    financeiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nfenatureza',
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
        name: "codigo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
