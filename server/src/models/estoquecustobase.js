const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquecustobase', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    forncnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fornplu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    uncompra: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    custobase: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ipi: {
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
    cst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    qtdeemb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idestoque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pluxml: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    forncod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vfcp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vicmsst: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    custonf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoquecustobase',
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
