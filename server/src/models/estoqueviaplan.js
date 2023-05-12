const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoqueviaplan', {
    idestoque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ncm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    icmscorreto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    alqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    csticms: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    baselegalicms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cest: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    piscofins: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    alqpisentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alqcofinsentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alqpissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alqcofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cstpiscofinsentrada: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cstpiscofinssaida: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    baselegalpiscofins: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    natrec: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cstipisaida: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoqueviaplan',
    timestamps: false,
    indexes: [
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "idestoque" },
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
