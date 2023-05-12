const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spedconta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    natureza: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nivel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contarfb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spedconta',
    timestamps: false
  });
};
