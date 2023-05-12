const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradaservico', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_entrada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqiss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    irrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqfed: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fed: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    csll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    retidoiss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retidoirrf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retidofed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    spedtipoligacao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    spedgrupotensao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    spedclasseconsumo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    spedtipoassinante: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    spedcsticms: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    spedcfop: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'entradaservico',
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
