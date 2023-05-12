const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    Tipo: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    SubTipo: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    codProd: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    nSerieECF: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    dataIni: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    dataFim: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    mesAno: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    un: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    icms: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    Texto: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sintegra',
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
